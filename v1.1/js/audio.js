/* Přehrávač mluveného slova: syntéza řeči prohlížeče (Web Speech API) s hlasy podle mluvčích,
   nebo namluvený soubor, pokud ho díl podcastu má ("audio"). Lišta přehrávače žije mimo #app,
   takže hraje dál i při přechodu mezi stránkami kurzu. */
(function () {
  "use strict";

  var VKEY = "pestouni-stres-voices";
  var synth = window.speechSynthesis || null;
  var ROLES = { klara: "Klára", jan: "Jan", marek: "Marek", nar: "Radka" };
  var PITCH_ONE_VOICE = { jan: 0.85, marek: 1.08, klara: 1.25, nar: 1 };
  var FEMALE = /zuzana|vlasta|iveta|ivana|eliška|eliska|female|žena|google/i;
  var MALE = /jakub|antonin|antonín|male|muž/i;

  var settings = loadSettings();
  var voices = [];
  var st = { meta: null, chunks: [], idx: 0, playing: false, token: 0 };
  var files = { base: "", q: "", keys: {}, alias: {}, jingle: null };
  var el = null; /* jeden přehrávací prvek, odemčený prvním kliknutím (kvůli iOS) */
  function mediaEl() { if (!el) { el = new Audio(); el.preload = "auto"; el.addEventListener("timeupdate", function () { updateBar(); }); } return el; }

  /* klíč nahrávky: stejný výpočet má generátor (tools/generate_audio.py) */
  function fnv(str) { var h = 0x811c9dc5; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; } return h >>> 0; }
  function hex(n) { return ("0000000" + n.toString(16)).slice(-8); }
  function key(who, text) { var s = who + "|" + text, a = fnv(s); return hex(a) + hex(fnv(s + "|" + a)); }
  var listeners = [];

  function loadSettings() {
    try { var o = JSON.parse(localStorage.getItem(VKEY)); if (o) return o; } catch (e) { /* */ }
    return { rate: 1, voices: {} };
  }
  function saveSettings() { try { localStorage.setItem(VKEY, JSON.stringify(settings)); } catch (e) { /* */ } }

  function loadVoices() {
    if (!synth) return;
    var all = synth.getVoices() || [];
    var cs = all.filter(function (v) { return /^cs/i.test(v.lang); });
    voices = cs.length ? cs : [];
  }
  if (synth) {
    loadVoices();
    if (typeof synth.addEventListener === "function") synth.addEventListener("voiceschanged", loadVoices);
    else synth.onvoiceschanged = loadVoices;
  }

  function voiceFor(role) {
    var name = settings.voices[role];
    var v = voices.filter(function (x) { return x.name === name; })[0];
    if (v) return v;
    if (!voices.length) return null;
    var fem = voices.filter(function (x) { return FEMALE.test(x.name); });
    var mal = voices.filter(function (x) { return MALE.test(x.name) && !FEMALE.test(x.name); });
    var natural = function (list) { return list.filter(function (x) { return /natural|online/i.test(x.name); })[0] || list[0]; };
    if (role === "klara") return natural(fem) || voices[0];
    if (role === "jan") return natural(mal) || voices[0];
    if (role === "marek") return (mal.length > 1 ? mal[mal.length - 1] : natural(mal)) || voices[0];
    return natural(fem) || voices[0];
  }
  function pitchFor(role) {
    if (role === "nar") return 1;
    var v = voiceFor(role);
    var sameAsOthers = ["klara", "jan", "marek"].filter(function (r) { return r !== role && voiceFor(r) === v; }).length > 0;
    return sameAsOthers ? (PITCH_ONE_VOICE[role] || 1) : 1;
  }

  /* rozdělení na věty – Chrome utíná dlouhé promluvy */
  function split(text) {
    var parts = String(text).replace(/\s+/g, " ").trim().match(/[^.!?…]+[.!?…]*["“”„]?\s*/g) || [text];
    var out = [], buf = "";
    parts.forEach(function (p) {
      if ((buf + p).length > 220 && buf) { out.push(buf.trim()); buf = ""; }
      buf += p;
    });
    if (buf.trim()) out.push(buf.trim());
    return out;
  }

  function emit() { listeners.forEach(function (f) { try { f(api.state()); } catch (e) { /* */ } }); updateBar(); avatarState(); }

  /* ---------- avatary a pohyb úst ---------- */
  var lipCache = {}, lipRaf = null, lastWho = null;
  function lipFor(k) {
    if (!k || lipCache[k] !== undefined) return lipCache[k];
    lipCache[k] = null;
    if (window.fetch) fetch(files.base + k + ".lip.json" + files.q).then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) { lipCache[k] = j && j.c ? j.c : false; }).catch(function () { lipCache[k] = false; });
    return null;
  }
  var PSEUDO = ["B", "C", "B", "E", "A", "C", "D", "B", "F", "C", "X", "B"];
  function lipTick() {
    lipRaf = null;
    if (!window.Avatars) return;
    var c = st.chunks[st.idx];
    if (!st.playing || !c || c.who === "jingle") { Avatars.mouth(null, "X"); if (st.playing) lipRaf = requestAnimationFrame(lipTick); return; }
    var v = "X";
    if (c.file && el && !el.paused) {
      var cues = lipFor(c.key), t = el.currentTime;
      if (cues) { for (var i = cues.length - 1; i >= 0; i--) { if (cues[i][0] <= t) { v = cues[i][1]; break; } } }
      else v = PSEUDO[Math.floor(performance.now() / 110) % PSEUDO.length];
    } else if (!c.file && synth && synth.speaking) {
      v = PSEUDO[Math.floor(performance.now() / 115) % PSEUDO.length];
    }
    Avatars.mouth(c.who, v);
    lipRaf = requestAnimationFrame(lipTick);
  }
  function avatarState() {
    if (!window.Avatars) return;
    var c = st.chunks[st.idx], who = st.playing && c && c.who !== "jingle" ? c.who : null;
    Avatars.speaker(who);
    if (bar) {
      var cast = []; st.chunks.forEach(function (x) { if (x.who !== "jingle" && cast.indexOf(x.who) < 0) cast.push(x.who); });
      var sig = cast.join(",");
      if (sig !== lastWho) {
        var slot = bar.querySelector(".pl-av");
        if (slot) { slot.innerHTML = ""; cast.forEach(function (r) { slot.appendChild(Avatars.create(r, "sm")); }); }
        lastWho = sig;
        Avatars.speaker(who);
      }
    }
    if (st.playing && !lipRaf) lipRaf = requestAnimationFrame(lipTick);
    if (c && c.file) lipFor(c.key);
  }

  function playFileChunk(c, tok) {
    var a = mediaEl();
    a.onended = function () { if (tok !== st.token) return; st.idx += 1; emit(); speakCurrent(); };
    a.onerror = function () {
      if (tok !== st.token) return;
      /* nahrávka chybí nebo nejde načíst: repliku dočte syntéza */
      var tts = split(c.text).map(function (t) { return { who: c.who, text: t, line: c.line }; });
      st.chunks.splice.apply(st.chunks, [st.idx, 1].concat(tts));
      speakCurrent();
    };
    a.src = c.file;
    if (st.seekFrac) {
      var sf = st.seekFrac; st.seekFrac = 0;
      a.addEventListener("loadedmetadata", function onm() { a.removeEventListener("loadedmetadata", onm); if (isFinite(a.duration)) a.currentTime = a.duration * sf; });
    }
    a.playbackRate = settings.rate || 1;
    var p = a.play();
    if (p && p.catch) p.catch(function () { if (tok === st.token) { st.playing = false; emit(); } });
  }
  function speakCurrent() {
    var tok = ++st.token;
    if (st.idx >= st.chunks.length) { finish(); return; }
    var c = st.chunks[st.idx];
    if (c.file) { playFileChunk(c, tok); return; }
    if (!synth) { st.idx += 1; speakCurrent(); return; }
    var u = new SpeechSynthesisUtterance(c.text);
    u.lang = "cs-CZ";
    var v = voiceFor(c.who); if (v) u.voice = v;
    u.rate = settings.rate || 1;
    u.pitch = pitchFor(c.who);
    u.onend = function () { if (tok !== st.token) return; st.idx += 1; emit(); speakCurrent(); };
    u.onerror = function (e) { if (tok !== st.token) return; if (e && (e.error === "interrupted" || e.error === "canceled")) return; st.idx += 1; speakCurrent(); };
    synth.speak(u);
  }
  function finish() { st.playing = false; st.token++; if (st.meta) st.meta.finished = true; emit(); }

  var api = {
    supported: !!synth,
    hasCzechVoice: function () { return voices.length > 0; },
    key: key,
    setFiles: function (base, keys, jingle, ver, alias) { files.alias = alias || {}; files.base = base; files.q = ver ? "?v=" + encodeURIComponent(ver) : ""; files.keys = {}; files.jingle = jingle ? base + jingle + files.q : null; (keys || []).forEach(function (k) { files.keys[k] = true; }); },
    fileCount: function () { return Object.keys(files.keys).length; },
    onChange: function (f) { listeners.push(f); },
    state: function () {
      var c = st.chunks[st.idx] || st.chunks[st.chunks.length - 1];
      var frac = 0, cur = st.chunks[st.idx];
      if (cur && cur.file && el && isFinite(el.duration) && el.duration > 0 && el.src.indexOf(cur.file.split("/").pop()) >= 0) frac = Math.min(1, el.currentTime / el.duration);
      return { meta: st.meta, playing: st.playing, line: c ? c.line : -1, who: c ? c.who : null, progress: st.chunks.length ? Math.min(1, (st.idx + frac) / st.chunks.length) : 0, count: st.chunks.length, idx: st.idx };
    },
    isPlaying: function () { return st.playing; },
    play: function (items, meta) {
      api.stop(true);
      st.meta = meta || { title: "" };
      st.chunks = [];
      var missing = 0;
      items.forEach(function (it, line) {
        var who = it.who || "nar", k = key(who, it.text);
        var fk = files.keys[k] ? k : (files.alias[k] && files.keys[files.alias[k]] ? files.alias[k] : null); /* alias: nahrávka stejného znění, které se liší jen velikostí písmen */
        if (fk) st.chunks.push({ who: who, text: it.text, line: line, file: files.base + fk + ".mp3" + files.q, key: fk });
        else if (window.COURSE && window.COURSE.skipUnrecorded && Object.keys(files.keys).length > 50) { /* nahrávka chybí: při poslechu se přeskočí (text zůstává na stránce), hlas prohlížeče se nepoužije */ }
        else { missing++; split(it.text).forEach(function (t) { st.chunks.push({ who: who, text: t, line: line }); }); }
      });
      if (meta && meta.kind === "ep" && files.jingle) st.chunks.unshift({ who: "jingle", text: "", line: -1, file: files.jingle });
      mediaEl(); /* odemknout přehrávání v rámci kliknutí */
      st.idx = 0; st.playing = true;
      showBar(); emit();
      if (missing && !synth) updateBar("Váš prohlížeč neumí předčítat text a část nemá nahrávku. Čtěte prosím přepis.");
      if (synth) synth.cancel();
      setTimeout(speakCurrent, 60);
    },
    toggle: function () {
      if (!st.chunks.length) return;
      var c = st.chunks[st.idx];
      if (st.playing) {
        st.playing = false;
        if (c && c.file) el.pause(); else { st.token++; if (synth) synth.cancel(); }
        emit();
      } else {
        if (st.idx >= st.chunks.length) st.idx = 0;
        st.playing = true; emit();
        c = st.chunks[st.idx];
        if (c && c.file && el && el.currentTime > 0 && !el.ended && el.src.indexOf(c.file.split("/").pop()) >= 0) el.play();
        else speakCurrent();
      }
    },
    seek: function (p) {
      if (!st.chunks.length) return;
      p = Math.max(0, Math.min(0.9999, p));
      var t = p * st.chunks.length, k = Math.floor(t);
      st.idx = k; st.seekFrac = t - k;
      st.token++; if (synth) synth.cancel(); if (el) el.pause();
      if (st.playing) speakCurrent();
      emit();
    },
    jump: function (dir) {
      if (!st.chunks.length) return;
      var line = (st.chunks[st.idx] || st.chunks[st.chunks.length - 1]).line + dir;
      var k = st.chunks.findIndex(function (c) { return c.line === line; });
      if (k < 0) k = dir < 0 ? 0 : st.chunks.length;
      st.idx = k;
      st.token++; if (synth) synth.cancel(); if (el) el.pause();
      if (st.playing) speakCurrent();
      emit();
    },
    stop: function (silent) {
      st.token++;
      if (synth) synth.cancel();
      if (el) el.pause();
      st.playing = false; st.chunks = []; st.idx = 0;
      if (!silent) { st.meta = null; hideBar(); emit(); }
    }
  };

  /* ---------- lišta přehrávače ---------- */
  var bar = null;
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function ensureBar() {
    if (bar) return bar;
    bar = document.createElement("div");
    bar.className = "player no-print";
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", "Přehrávač mluveného slova");
    bar.hidden = true;
    bar.innerHTML =
      '<div class="pl-main">' +
      '<button class="pl-btn" data-p="prev" aria-label="Předchozí replika">⏮</button>' +
      '<button class="pl-btn pl-play" data-p="toggle" aria-label="Přehrát nebo pozastavit">▶</button>' +
      '<button class="pl-btn" data-p="next" aria-label="Další replika">⏭</button>' +
      '<div class="pl-av" aria-hidden="true"></div><div class="pl-info"><span class="pl-title"></span><span class="pl-line"></span><input type="range" class="pl-seek" min="0" max="1000" step="1" value="0" aria-label="Posun v přehrávání: posunutím lišty přeskočíte na jiné místo"></div>' +
      '<label class="pl-rate" for="pl-rate"><span class="pl-rate-l">Tempo</span> <select id="pl-rate"><option value="0.8">0,8×</option><option value="0.9">0,9×</option><option value="1">1×</option><option value="1.1">1,1×</option><option value="1.25">1,25×</option><option value="1.5">1,5×</option></select></label>' +
      '<button class="pl-btn" data-p="stop" aria-label="Zavřít přehrávač">✕</button>' +
      '</div>';
    document.body.appendChild(bar);
    bar.querySelector("#pl-rate").value = String(settings.rate || 1);
    bar.addEventListener("click", function (e) {
      var b = e.target.closest("[data-p]"); if (!b) return;
      var a = b.getAttribute("data-p");
      if (a === "toggle") api.toggle();
      else if (a === "prev") api.jump(-1);
      else if (a === "next") api.jump(1);
      else if (a === "stop") api.stop();
    });
    bar.addEventListener("input", function (e) { if (e.target.classList.contains("pl-seek")) st.seeking = true; });
    bar.addEventListener("change", function (e) {
      if (e.target.classList.contains("pl-seek")) { st.seeking = false; api.seek(+e.target.value / 1000); return; }
      if (e.target.id === "pl-rate") {
        settings.rate = +e.target.value; saveSettings();
        if (el) el.playbackRate = settings.rate;
        var cc = st.chunks[st.idx];
        if (st.playing && cc && !cc.file) { synth.cancel(); speakCurrent(); }
      }
    });
    return bar;
  }
  function showBar() { ensureBar().hidden = false; document.documentElement.classList.add("has-player"); }
  function hideBar() { if (bar) bar.hidden = true; document.documentElement.classList.remove("has-player"); }
  function updateBar(msg) {
    if (!bar || bar.hidden) return;
    var s = api.state();
    bar.querySelector(".pl-play").textContent = s.playing ? "❚❚" : "▶";
    bar.querySelector(".pl-title").textContent = st.meta ? st.meta.title : "";
    var c = st.chunks[st.idx];
    bar.querySelector(".pl-line").textContent = msg || (c && c.who === "jingle" ? "♪ Znělka" : c ? (ROLES[c.who] ? ROLES[c.who] + ": " : "") + c.text : (st.meta && st.meta.finished ? "Dohráno" : ""));
    var sk = bar.querySelector(".pl-seek");
    if (sk && !st.seeking) { sk.value = Math.round(s.progress * 1000); sk.title = s.count ? "Replika " + Math.min(s.count, s.idx + 1) + " z " + s.count : ""; }
  }

  window.addEventListener("pagehide", function () { if (synth) synth.cancel(); });
  window.Speaker = api;
})();
