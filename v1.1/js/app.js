/* Stres v pěstounské péči – e-learningová aplikace (bez závislostí).
   Stav se ukládá do localStorage tohoto prohlížeče. Pro doložení studia slouží osvědčení a export záznamu. */
(function () {
  "use strict";

  var C = window.COURSE;
  var EMBEDDED = (function () { try { return window.self !== window.top; } catch (e) { return true; } })();
  /* Režimy podle adresy: #demo (ukázka), #admin (plná verze bez limitů), #nahled (technický náhled); jinak běžné studium.
     Každý režim má vlastní úložiště, takže nikdy nemění postup skutečného účastníka. */
  var MODE = /admin/.test(location.hash) ? "admin" : /demo/.test(location.hash) ? "demo" : /nahled/.test(location.hash) ? "preview" : "normal";
  function modeFromHash() { return /admin/.test(location.hash) ? "admin" : /demo/.test(location.hash) ? "demo" : /nahled/.test(location.hash) ? "preview" : "normal"; }
  window.addEventListener("hashchange", function () { if (modeFromHash() !== MODE) location.reload(); });
  var PREVIEW = MODE !== "normal", DEMO = MODE === "demo", ADMIN = MODE === "admin", SPECIAL = DEMO || ADMIN;
  var KEY = "pestouni-stres-v" + ((window.COURSE && window.COURSE.storageSuffix) || "1") + (MODE === "normal" ? "" : "-" + MODE);
  var DEMO_MODULES = (C.demo && C.demo.modules) || ["m0", "m1"];
  var DEMO_TEST_Q = (C.demo && C.demo.testQuestions) || 5;
  function demoAllowed(id) { return !DEMO || id === "m8" || DEMO_MODULES.indexOf(id) >= 0; }
  function modeName() { return DEMO ? "DEMO" : ADMIN ? "ADMIN" : "NÁHLED"; }
  function wmText() { return DEMO ? "DEMO · UKÁZKA · NEPLATNÉ" : ADMIN ? "ADMIN · BEZ OVĚŘENÍ · NEPLATNÉ" : "NÁHLED · NEPLATNÉ"; }
  /* SHA-256 (synchronně, kvůli heslu administrátorského režimu; hash se tvoří příkazem node tools/admin_hash.js) */
  function sha256(msg) {
    function rr(n, x) { return (x >>> n) | (x << (32 - n)); }
    var K = [], P = [], i, j, c = 0, isP = {};
    for (var cand = 2; c < 64; cand++) { if (!isP[cand]) { for (i = 0; i < 313; i += cand) isP[i] = cand; K[c] = (Math.pow(cand, .5) * 4294967296) | 0; P[c++] = (Math.pow(cand, 1 / 3) * 4294967296) | 0; } }
    var Hh = K.slice(0, 8), bytes = unescape(encodeURIComponent(msg)), w = [], l = bytes.length * 8;
    bytes += "\x80"; while (bytes.length % 64 - 56) bytes += "\x00";
    for (i = 0; i < bytes.length; i++) { j = bytes.charCodeAt(i); w[i >> 2] |= j << ((3 - i % 4) * 8); }
    w[w.length] = (l / 4294967296) | 0; w[w.length] = l;
    for (j = 0; j < w.length;) {
      var wv = w.slice(j, j += 16), old = Hh.slice(0), a, b, e;
      for (i = 0; i < 64; i++) {
        var w15 = wv[i - 15], w2 = wv[i - 2];
        a = Hh[0]; e = Hh[4];
        var t1 = Hh[7] + (rr(6, e) ^ rr(11, e) ^ rr(25, e)) + ((e & Hh[5]) ^ (~e & Hh[6])) + P[i] + (wv[i] = i < 16 ? wv[i] : (wv[i - 16] + (rr(7, w15) ^ rr(18, w15) ^ (w15 >>> 3)) + wv[i - 7] + (rr(17, w2) ^ rr(19, w2) ^ (w2 >>> 10))) | 0);
        var t2 = (rr(2, a) ^ rr(13, a) ^ rr(22, a)) + ((a & Hh[1]) ^ (a & Hh[2]) ^ (Hh[1] & Hh[2]));
        Hh = [(t1 + t2) | 0].concat(Hh); Hh[4] = (Hh[4] + t1) | 0; Hh.pop();
      }
      for (i = 0; i < 8; i++) Hh[i] = (Hh[i] + old[i]) | 0;
    }
    var out = ""; for (i = 0; i < 8; i++) for (j = 3; j + 1; j--) { var bt = (Hh[i] >> (j * 8)) & 255; out += (bt < 16 ? "0" : "") + bt.toString(16); }
    return out;
  }
  var ADMIN_DENIED = false;
  if (ADMIN && C.adminHash) {
    var okd = false; try { okd = sessionStorage.getItem("pestouni-admin-ok") === C.adminHash; } catch (e) { /* */ }
    if (!okd) {
      var pw = window.prompt("Administrátorský režim. Zadejte heslo:");
      if (pw && sha256(pw) === C.adminHash) { try { sessionStorage.setItem("pestouni-admin-ok", C.adminHash); } catch (e) { /* */ } }
      else ADMIN_DENIED = true;
    }
  }
  if (ADMIN_DENIED) { location.hash = ""; location.reload(); return; }

  /* ---------- stav ---------- */
  function blank() {
    return { v: 1, learner: { name: "", org: "", email: "", role: "", kwName: "", kwEmail: "", enrolledAt: null, consentAt: null }, created: null, modules: {}, inputs: {}, final: { best: 0, passed: false, attempts: 0, at: null }, evaluation: {}, cert: null, preview: false };
  }
  var S = load();
  S.preview = PREVIEW;
  C.modules.forEach(function (m) {
    if (!S.modules[m.id]) S.modules[m.id] = { time: 0, done: {}, quiz: { best: 0, passed: false, attempts: 0 }, completedAt: null };
  });

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) { var o = JSON.parse(raw); if (o && o.v === 1) return o; }
    } catch (e) { /* úložiště nedostupné – pokračujeme bez něj */ }
    return blank();
  }
  var saveTimer = null;
  function save(now) {
    if (now) { doSave(); return; }
    clearTimeout(saveTimer);
    saveTimer = setTimeout(doSave, 400);
  }
  var NOSAVE = false; /* po smazání postupu se nesmí nic ukládat (jinak by uložení při opuštění stránky smazaná data vrátilo) */
  function doSave() { if (NOSAVE) return; try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } }
  /* když postup smaže jiná záložka téhož webu, tato záložka přestane ukládat a znovu se načte (jinak by smazaná data vrátila) */
  window.addEventListener("storage", function (e) {
    if (e.key === KEY && e.newValue === null && !NOSAVE) { NOSAVE = true; clearTimeout(saveTimer); location.reload(); }
  });
  function wipeProgress() { NOSAVE = true; clearTimeout(saveTimer); try { localStorage.removeItem(KEY); } catch (e) { /* */ } location.reload(); }

  /* ---------- pomocné ---------- */
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function fmt(sec) {
    sec = Math.max(0, Math.floor(sec));
    var h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    return (h ? h + ":" + String(m).padStart(2, "0") : m) + ":" + String(s).padStart(2, "0");
  }
  function fmtMin(sec) { return Math.floor(sec / 60); }
  function hoursNum() { var h = C.totalMinutes / 60; return (h % 1 ? String(Math.round(h * 10) / 10).replace(".", ",") : String(h)); }
  function hoursText() { var n = C.totalMinutes / 45, s = (n % 1 ? String(Math.round(n * 10) / 10).replace(".", ",") : String(n)); return s + (n === 1 ? " výuková hodina" : (n > 1 && n < 5 ? " výukové hodiny" : " výukových hodin")) + " po 45 minutách (" + C.totalMinutes + " minut)"; }
  function hm(sec) { var h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60); return h + " h " + m + " min"; }
  function dateCz(iso) { if (!iso) return "–"; var d = new Date(iso); return d.getDate() + ". " + (d.getMonth() + 1) + ". " + d.getFullYear(); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function inp(id) { return S.inputs[id]; }
  function setInp(id, val) { S.inputs[id] = val; save(); }
  function mod(id) { return C.modules.filter(function (m) { return m.id === id; })[0]; }
  function mstate(id) { return S.modules[id]; }
  function minSec(m) { return m.minutes * 60; }
  function totalTime() { return C.modules.reduce(function (a, m) { return a + (S.modules[m.id].time || 0); }, 0); }
  function fnv(str) { var h = 0x811c9dc5; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; } return h >>> 0; }
  function code(str) {
    var A = "0123456789ABCDEFGHJKMNPQRSTVWXYZ", a = fnv(str), b = fnv(str + "|" + a), out = "";
    for (var i = 0; i < 5; i++) { out += A[a & 31]; a >>>= 5; }
    for (i = 0; i < 5; i++) { out += A[b & 31]; b >>>= 5; }
    return out.slice(0, 5) + "-" + out.slice(5);
  }

  /* ---------- logika postupu ---------- */
  function stepCount(m) { return m.steps.length + (m.quiz ? 1 : 0); }
  function stepDone(m, i) {
    if (m.quiz && i === m.steps.length) return mstate(m.id).quiz.passed;
    return !!mstate(m.id).done[i];
  }
  function contentDone(m) {
    for (var i = 0; i < stepCount(m); i++) if (!stepDone(m, i)) return false;
    return true;
  }
  function contentShare(m) {
    var n = stepCount(m), d = 0;
    for (var i = 0; i < n; i++) if (stepDone(m, i)) d++;
    return n ? d / n : 1;
  }
  function timeShare(m) { return mstate(m.id).time / minSec(m); }
  function moduleDone(m) {
    if (m.final) return !!S.cert;
    checkComplete(m);
    return !!mstate(m.id).completedAt;
  }
  function unlocked(idx) {
    if (S.preview) return true;
    return !!S.learner.name;
  }
  function checkComplete(m) {
    if (m.final) return;
    var st = mstate(m.id);
    if (!st.completedAt && (contentShare(m) >= C.lessonShare || timeShare(m) >= C.lessonShare)) {
      st.completedAt = new Date().toISOString();
      save(true);
      return true;
    }
    return false;
  }
  function markStep(m, i) {
    var st = mstate(m.id);
    if (!st.done[i]) { st.done[i] = true; save(); }
    updatePager();
    if (checkComplete(m)) renderSidebar();
  }
  function allLessonsDone() { return C.modules.filter(function (m) { return !m.final; }).every(moduleDone); }
  function lessonsDoneCount() { return C.modules.filter(function (m) { return !m.final && moduleDone(m); }).length; }
  function fullSec() { return C.totalMinutes * 60; }
  function minActiveSec() { return Math.round(C.totalMinutes * C.minActiveShare) * 60; }
  function remainingMin() { return Math.max(0, Math.ceil((fullSec() - totalTime()) / 60)); }
  function req() {
    if (SPECIAL) return { test: true, active: true, needDecl: false, decl: true, evaluation: true, lessons: true, ready: true };
    var t = totalTime();
    var r = { test: S.final.passed, active: S.preview || t >= minActiveSec(), needDecl: t < fullSec(), decl: !!(S.declaration && S.declaration.ok), evaluation: evalDone() };
    r.lessons = S.preview || allLessonsDone();
    r.ready = r.lessons && r.test && r.active && (!r.needDecl || r.decl) && r.evaluation;
    return r;
  }

  /* ---------- měření aktivního času ---------- */
  var lastAct = Date.now(), exerciseRunning = 0, tickHandle = null;
  ["pointermove", "pointerdown", "keydown", "scroll", "touchstart", "wheel", "input"].forEach(function (ev) {
    window.addEventListener(ev, function () { lastAct = Date.now(); }, { passive: true, capture: true });
  });
  function active() {
    if (document.hidden) return false;
    if (exerciseRunning > 0) return true;
    if (window.Speaker && Speaker.isPlaying()) return true;
    return Date.now() - lastAct < C.idleSeconds * 1000;
  }
  function tick() {
    var view = R.view;
    var running = false, m = null;
    if (view === "module" && R.mod) m = mod(R.mod);
    else if (view === "podcast" && window.Speaker) {
      var ps = Speaker.state();
      if (ps.playing && ps.meta && ps.meta.mod && unlocked(C.modules.indexOf(mod(ps.meta.mod)))) m = mod(ps.meta.mod);
    }
    if (m) {
      if (active()) {
        mstate(m.id).time += 1; running = true;
        if (!S.created) S.created = new Date().toISOString();
        if (mstate(m.id).time % 10 === 0) save();
        if (checkComplete(m)) { renderSidebar(); updatePager(); }
        else if (mstate(m.id).time % 30 === 0) updatePager();
        else if (!S.preview && mstate(m.id).time === minSec(m)) updatePager();
      }
      updateClock(m, running);
    }
  }

  /* ---------- router ---------- */
  var R = { view: "home", mod: null, step: 0 };
  var cleanup = [];
  function go(view, modId, step) {
    cleanup.forEach(function (f) { try { f(); } catch (e) { /* */ } });
    cleanup = [];
    exerciseRunning = 0;
    R.view = view; R.mod = modId || null; R.step = step || 0;
    render();
    window.scrollTo(0, 0);
    var h = $(".content h1, .content h2");
    if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
  }

  /* ---------- layout ---------- */
  var app = document.getElementById("app");
  function render() {
    app.innerHTML =
      '<aside class="sidebar" id="sidebar" aria-label="Obsah kurzu"></aside>' +
      '<div class="scrim" data-act="closenav"></div>' +
      '<div class="main">' +
      '<header class="topbar"><div class="row"><button class="btn ghost small menu-btn" data-act="opennav" aria-label="Otevřít obsah kurzu">☰ Obsah</button><button class="btn ghost small home-btn" data-act="home" aria-label="Domů, úvodní strana kurzu">🏠 Domů</button><div class="crumbs" id="crumbs"></div></div><div id="clockwrap"></div></header>' +
      '<main class="content" id="content"></main></div>';
    renderSidebar();
    var c = $("#content");
    if (R.view === "home") c.innerHTML = viewHome();
    else if (R.view === "journal") c.innerHTML = viewJournal();
    else if (R.view === "podcast") c.innerHTML = viewPodcast();
    else if (R.view === "downloads") c.innerHTML = viewDownloads();
    else if (R.view === "account") c.innerHTML = viewAccount();
    else if (R.view === "info") c.innerHTML = viewInfo();
    else if (R.view === "module") renderModule(c);
    $("#crumbs").textContent = R.view === "module" ? mod(R.mod).short : (R.view === "journal" ? "Můj deník" : R.view === "podcast" ? "Podcast" : R.view === "downloads" ? "Ke stažení" : R.view === "account" ? "Můj účet" : R.view === "info" ? "Informace a soukromí" : C.title);
    highlight();
    if (R.view === "module") updateClock(mod(R.mod), active());
    mountAvatars();
  }

  function modeBanner(short) {
    if (!PREVIEW) return "";
    var t = DEMO ? "Demo režim: ukázka části kurzu (" + DEMO_MODULES.length + " bloky), krátkého testu a ukázkového osvědčení. Postup se neukládá do běžného studia."
      : ADMIN ? "Administrátorský režim: plná verze bez povinných limitů (čas, kapitoly, testy, prohlášení). Osvědčení je označené jako vydané bez ověření." + (C.adminHash ? "" : " Režim zatím není chráněn heslem.")
      : "Režim náhledu: čas se nevyžaduje, osvědčení je neplatné.";
    return '<div class="banner warn no-print"><strong>' + modeName() + '</strong>' + (short ? '' : ' · ' + t) + ' <button class="btn ghost small" type="button" data-act="exitmode">Ukončit režim</button>' + (SPECIAL ? ' <button class="btn ghost small" type="button" data-act="resetmode">Vymazat data tohoto režimu</button>' : '') + '</div>';
  }
  function renderSidebar() {
    var sb = $("#sidebar"); if (!sb) return;
    var doneCount = C.modules.filter(moduleDone).length;
    var pct = Math.min(100, Math.round(totalTime() / (C.totalMinutes * 60) * 100));
    var html = '<button class="brand brand-btn" data-act="home" title="Úvodní strana kurzu"><span class="brand-title">' + esc(C.title) + '</span><span class="brand-sub">' + esc(C.subtitle) + '</span></button>';
    html += '<button class="side-home' + (R.view === "home" ? " active" : "") + '" data-act="home"' + (R.view === "home" ? ' aria-current="page"' : '') + '>🏠 Domů · úvodní strana</button>';
    html += '<div class="overall"><span>Aktivní čas: <b>' + hm(totalTime()) + '</b> z ' + hoursNum() + ' h (minimum ' + Math.round(C.totalMinutes * C.minActiveShare / 60 * 10) / 10 + ' h)</span><div class="bar bar-min" style="--min:' + Math.round(C.minActiveShare * 100) + '%"><span style="width:' + pct + '%"></span></div><span>Splněno bloků: ' + doneCount + ' / ' + C.modules.length + '</span></div>';
    html += '<ol class="nav">';
    C.modules.forEach(function (m, i) {
      var ok = unlocked(i), done = moduleDone(m), cur = R.view === "module" && R.mod === m.id, lockedDemo = !demoAllowed(m.id);
      html += '<li><button class="nav-item' + (done ? " done" : "") + (cur ? " active" : "") + '" data-act="open" data-mod="' + m.id + '"' + (ok ? "" : " disabled") + (cur ? ' aria-current="true"' : "") + '>' +
        '<span class="nav-num">' + (done ? "✓" : lockedDemo ? "🔒" : i) + '</span><span class="nav-label">' + esc(m.short) + '</span>' +
        '<span class="nav-min">' + (lockedDemo ? "plná verze" : fmtMin(mstate(m.id).time) + '/' + m.minutes) + '</span></button></li>';
    });
    html += '</ol><div class="side-links"><button data-act="home">Přehled kurzu</button><button data-act="account">Můj účet</button><button data-act="journal">Můj deník</button>' + (window.PODCAST ? '<button data-act="podcast">Podcast</button>' : '') + (window.DOWNLOADS && !DEMO ? '<button data-act="downloads">Ke stažení</button>' : '') + '<button data-act="info">Informace a soukromí</button></div>';
    html += '<div class="side-backup" aria-label="Záloha postupu"><div class="sb-title">Záloha postupu</div>' +
      '<button data-act="exportprog" title="Stáhnout zálohu postupu (soubor JSON)">⬇ Stáhnout zálohu</button>' +
      '<button data-act="mailprog" title="Poslat zálohu e-mailem (v mobilu sdílením do pošty)">✉ Poslat e-mailem</button>' +
      '<label for="impprog-side" title="Načíst zálohu postupu ze souboru">⬆ Načíst zálohu<input type="file" id="impprog-side" class="impprog" accept="application/json,.json" style="display:none"></label></div>';
    sb.innerHTML = html;
  }

  function updateClock(m, running) {
    var w = $("#clockwrap"); if (!w) return;
    var t = mstate(m.id).time, need = minSec(m), met = t >= need;
    var label = S.preview ? modeName().toLowerCase() : (running ? "měří se" : "pozastaveno");
    w.innerHTML = '<span class="clock' + (running ? " running" : "") + (met ? " met" : "") + '" title="Aktivní čas v lekci / doporučený čas · celkem v kurzu"><span class="dot"></span>' + fmt(t) + ' / ' + fmt(need) + ' · celkem ' + hm(totalTime()) + ' · ' + label + '</span>';
    var sbMin = $('.nav-item[data-mod="' + m.id + '"] .nav-min');
    if (sbMin) sbMin.textContent = fmtMin(t) + "/" + m.minutes;
  }

  /* ---------- přehled ---------- */
  function backupBox(compact) {
    var last = S.lastBackup ? dateCz(S.lastBackup) : null;
    return '<section class="panel backup-box" id="backup"><h2>' + (compact ? 'Záloha a přenos postupu' : 'Přerušíte kurz a budete pokračovat jinde?') + '</h2>' +
      '<p>Váš postup se ukládá <strong>jen v tomto prohlížeči na tomto zařízení</strong>. Do jiného telefonu, počítače nebo prohlížeče se sám nepřenese. Kurz tak můžete kdykoli přerušit a pokračovat, ale ve <strong>stejném prohlížeči</strong>. Chcete-li pokračovat jinde, nebo se chcete jistit proti smazání dat prohlížeče, stáhněte si <strong>zálohu postupu (soubor JSON)</strong> a v novém zařízení ji načtěte.</p>' +
      '<div class="row"><button class="btn" data-act="exportprog">Stáhnout zálohu</button><button class="btn ghost" data-act="mailprog">Poslat zálohu e-mailem</button>' +
      '<label class="btn ghost" for="impprog' + (compact ? '2' : '') + '" style="cursor:pointer">Načíst zálohu<input type="file" id="impprog' + (compact ? '2' : '') + '" class="impprog" accept="application/json,.json" style="display:none"></label></div>' +
      '<p class="note" id="impst">' + (last ? 'Poslední záloha: ' + last + '. ' : 'Zálohu zatím nemáte. ') + 'Soubor obsahuje vaše údaje a odpovědi v cvičeních, uložte ho bezpečně. Odeslání e-mailem: v mobilu se nabídne sdílení do pošty, v počítači se soubor stáhne a otevře se e-mail, ke kterému soubor přiložíte.</p></section>';
  }
  function viewHome() {
    var D = window.DOWNLOADS || {}, nEp = D.podcast ? D.podcast.episodes.length : 0, podMin = D.podcast && D.podcast.full ? Math.round(D.podcast.full.min) : 0;
    var lessons = C.modules.filter(function (m) { return !m.final && m.id !== "m0"; }).length;
    var firstUndone = C.modules.filter(function (m) { return !moduleDone(m); })[0] || C.modules[0];
    var started = totalTime() > 0 || S.learner.name;
    var h = modeBanner();
    h += '<section class="hero"><div class="hero-bg" aria-hidden="true"></div><div class="hero-in"><div class="hero-txt">' +
      '<span class="eyebrow">' + esc(C.subtitle) + '</span>' +
      '<h1>' + esc(C.title) + '</h1>' +
      '<p class="hero-lead">Stres není váš nepřítel. <strong>Je to kontrolka.</strong> Naučte se jí rozumět dřív, než zhasne celý panel.</p>' +
      '<div class="row hero-cta">' +
      (S.learner.name ? '<button class="btn" data-act="open" data-mod="' + firstUndone.id + '">' + (started ? 'Pokračovat v kurzu' : 'Začít kurz') + '</button>' : '<button class="btn" data-act="scrollenroll">Začít kurz</button>') +
      (DEMO || ADMIN ? '' : '<a class="btn ghost" href="#demo">Vyzkoušet ukázku</a>') + '</div></div>' +
      '<div class="hero-orb" aria-hidden="true"><span class="ring r1"></span><span class="ring r2"></span><span class="ring r3"></span><span class="core">nádech<br>výdech</span></div></div></section>';

    h += '<section class="intro"><h2>Pěstounství je maraton bez cílové pásky</h2>' +
      '<p class="intro-lead">Tělo i hlava jedou na výkon týdny a měsíce. To je zátěž, kterou nikdo nezvládne silou vůle. Dobrá zpráva: stres není selhání, je to <strong>původně obranná reakce</strong>, která vás má chránit. Škodí až tehdy, když nemá kdy odeznít.</p>' +
      '<div class="cards3">' +
      '<div class="card3"><span class="ic">🚨</span><h3>Signál, ne selhání</h3><p>Zrychlený tep, napjaté svaly a podrážděnost nejsou vada. Tělo hlásí, že je zátěž. Naučíte se tomu rozumět a včas zareagovat.</p></div>' +
      '<div class="card3"><span class="ic">🧒</span><h3>Dítě žije v poplachu</h3><p>Dítě po traumatu vidí nebezpečí i tam, kde není. Jeho „výbuchy“ nejsou zlomyslnost. Ukážeme, jak mu pomoci vrátit se do klidu.</p></div>' +
      '<div class="card3"><span class="ic">🔋</span><h3>Nejdřív vy</h3><p>Kdo nabíjí, může dávat dál. Dostanete nástroje pro sebe (dech, tělo, hranice, plán) i pro dítě, a poznáte, kdy se blíží vyhoření.</p></div></div></section>';

    h += '<section class="facts" aria-label="O kurzu">' +
      '<div class="fact"><b>' + esc(hoursText().replace(/ po 45 minutách.*/, "")) + '</b><span>včetně závěrečného testu</span></div>' +
      '<div class="fact"><b>' + lessons + ' lekcí</b><span>úvod a závěr navíc</span></div>' +
      (nEp ? '<div class="fact"><b>' + nEp + ' dílů podcastu</b><span>asi ' + podMin + ' minut</span></div>' : '') +
      '<div class="fact"><b>Čtení i poslech</b><span>každou stranu přečte hlas</span></div>' +
      (D.pdf ? '<div class="fact"><b>Příručka PDF</b><span>' + D.pdf.pages + ' stran ke stažení</span></div>' : '') +
      '<div class="fact"><b>Osvědčení</b><span>po splnění podmínek</span></div></section>';

    h += '<section class="how"><h2>Jak kurz absolvovat</h2><ol class="how-steps">' +
      '<li><span class="hn">1</span><div><strong>Zapište se</strong><p>Jméno stačí. E-mail a klíčového pracovníka vyplníte, jen když chcete.</p></div></li>' +
      '<li><span class="hn">2</span><div><strong>Procházejte lekce</strong><p>V libovolném pořadí. Každou stranu si můžete přečíst nebo poslechnout, součástí jsou cvičení a kazuistiky.</p></div></li>' +
      '<li><span class="hn">3</span><div><strong>Ověřte si znalosti</strong><p>Krátké kvízy po lekcích a závěrečný test (' + (C.finalSize || C.finalTest.length) + ' otázek, stačí ' + Math.round(C.finalPass * 100) + ' %).</p></div></li>' +
      '<li><span class="hn">4</span><div><strong>Doložte rozsah</strong><p>Aktivní čas v kurzu aspoň ' + Math.round(C.totalMinutes * C.minActiveShare) + ' minut. Zbytek do ' + C.totalMinutes + ' minut doložíte čestným prohlášením.</p></div></li>' +
      '<li><span class="hn">5</span><div><strong>Vystavte osvědčení</strong><p>Vytisknete ho a klíčový pracovník ověří podpisem.</p></div></li></ol></section>';

    h += backupBox(false);

    h += '<div class="stat-row"><div class="stat"><b>' + hm(totalTime()) + '</b><span>aktivní čas (minimum ' + Math.round(C.totalMinutes * C.minActiveShare) + ' min)</span></div>' +
      '<div class="stat"><b>' + C.modules.filter(moduleDone).length + ' / ' + C.modules.length + '</b><span>splněné bloky</span></div>' +
      '<div class="stat"><b>' + (S.final.passed ? Math.round(S.final.best * 100) + " %" : "–") + '</b><span>závěrečný test</span></div></div>';

    if (!S.learner.name) {
      h += '<div id="enroll">' + enrollForm() + '</div>';
    }

    h += '<div class="mods">';
    C.modules.forEach(function (m, i) {
      var ok = unlocked(i), done = moduleDone(m), st = mstate(m.id);
      var status = done ? "Splněno" : (!ok ? "Zamčeno" : (st.time > 0 ? "Rozpracováno" : "Připraveno"));
      h += '<div class="mod-row' + (done ? " done" : "") + '"><span class="n">' + (done ? "✓" : String(i)) + '</span>' +
        '<div><h3>' + esc(m.title) + '</h3><p>' + m.minutes + ' min · ' + status + ' · odpracováno ' + fmtMin(st.time) + ' min</p></div>' +
        '<button class="btn small' + (done ? " ghost" : "") + '" data-act="open" data-mod="' + m.id + '"' + (ok ? "" : " disabled") + '>' + (done ? "Otevřít" : (st.time > 0 ? "Pokračovat" : "Začít")) + '</button></div>';
    });
    h += '</div>';
    h += '<div class="panel soft"><h3>Jak se počítá čas a splnění</h3><ul class="prose" style="padding-left:1.2em">' +
      '<li>Aktivní čas se měří jen v otevřeném bloku, když s kurzem pracujete. Po ' + Math.round(C.idleSeconds / 60) + ' minutách bez aktivity se měření pozastaví. Během dechových cvičení a zemnění běží dál.</li>' +
      '<li>Kapitoly i jejich kroky můžete procházet v libovolném pořadí. Časy u kapitol jsou doporučené, postup neblokují.</li>' +
      '<li>Kapitola se započte, když splníte aspoň ' + Math.round(C.lessonShare * 100) + ' % jejích kroků (cvičení, reflexe, test) <em>nebo</em> v ní strávíte aspoň ' + Math.round(C.lessonShare * 100) + ' % doporučeného času.</li>' +
      '<li>Pro osvědčení potřebujete: všechny kapitoly započtené, závěrečný test aspoň na ' + Math.round(C.finalPass * 100) + ' %, aktivní čas v kurzu aspoň ' + Math.round(C.totalMinutes * C.minActiveShare) + ' minut (polovina z ' + C.totalMinutes + ') a hodnocení kurzu.</li>' +
      '<li>Zbývající čas do ' + C.totalMinutes + ' minut doložíte <strong>čestným prohlášením</strong>: stručně popíšete, jak jste ho věnovali tématu (sebereflexe, četba, diskuse, další zdroje). Prohlášení ověřuje klíčový pracovník.</li></ul>' +
      '<div class="row"><button class="btn ghost small" data-act="reset-ask">Smazat postup a začít znovu</button><span id="resetbox"></span></div></div>';
    h += '<p class="note" style="color:var(--muted);font-size:.85rem">Autor kurzu: ' + esc(C.author) + ' · verze ' + esc(C.version) + '</p>';
    return h;
  }

  /* ---------- modul ---------- */
  function renderModule(c) {
    var m = mod(R.mod);
    if (!demoAllowed(m.id)) {
      c.innerHTML = modeBanner() + '<div class="step-head"><span class="eyebrow">' + esc(m.short) + '</span><h1>' + esc(m.title) + '</h1></div><div class="panel soft"><h2>Součást plné verze</h2><p>Tento blok je dostupný v plné verzi kurzu. Ukázka obsahuje: ' + DEMO_MODULES.map(function (id) { return esc(mod(id).short); }).join(", ") + ', krátký test a ukázkové osvědčení.</p><div class="row"><button class="btn" data-act="open" data-mod="m8">Přejít na závěr a ukázkové osvědčení</button></div></div>';
      return;
    }
    if (m.final) { c.innerHTML = viewFinal(m); mountFinal(); return; }
    var n = stepCount(m);
    if (R.step >= n) R.step = n - 1;
    var i = R.step, isQuiz = m.quiz && i === m.steps.length;
    var step = isQuiz ? { type: "quiz", title: "Ověřte si, co víte" } : m.steps[i];
    var h = '';
    h += modeBanner(true);
    h += '<div class="step-head"><span class="eyebrow">' + esc(m.short) + ' · krok ' + (i + 1) + ' z ' + n + '</span>';
    if (i === 0) h += '<h1>' + esc(m.title) + '</h1>';
    h += listenBar(m);
    h += '<div class="steps" role="list">';
    for (var k = 0; k < n; k++) {
      var reach = true;
      h += '<button role="listitem" class="step-dot' + (stepDone(m, k) ? " done" : "") + (k === i ? " current" : "") + '" data-act="step" data-i="' + k + '"' + (reach ? "" : " disabled") + ' title="' + esc(k === m.steps.length ? "Ověřte si, co víte" : m.steps[k].title) + '">' + (k === m.steps.length ? "?" : k + 1) + '</button>';
    }
    h += '</div><span class="lesson-prog" id="lprog"></span></div>';
    if (i === 0 && m.goals) h += '<div class="panel soft"><strong>Cíle bloku</strong><ul class="prose" style="padding-left:1.2em">' + m.goals.map(function (g) { return '<li>' + esc(g) + '</li>'; }).join("") + '</ul><span style="font-size:.9rem;color:var(--muted)">Doporučený čas: ' + m.minutes + ' minut. Kroky můžete procházet v libovolném pořadí.</span></div>';
    h += '<section id="stepbody" class="prose" aria-live="polite" data-src="page-' + m.id + '-' + i + '"></section>';
    h += '<nav class="pager" id="pager"></nav>';
    c.innerHTML = h;
    var body = $("#stepbody");
    var fn = isQuiz ? stepQuiz : (STEPS[step.type] || STEPS.text);
    fn(body, step, m, i);
    mountAvatars();
    if (["text", "scene", "summary", "videos"].indexOf(step.type) >= 0) markStep(m, i);
    updatePager();
  }

  function updatePager() {
    var p = $("#pager"); if (!p || R.view !== "module") return;
    var m = mod(R.mod); if (m.final) return;
    var n = stepCount(m), i = R.step, done = stepDone(m, i), last = i === n - 1;
    var hint = "";
    if (!done) hint = (m.quiz && i === m.steps.length) ? "Stačí " + Math.round(C.moduleQuizPass * 100) + " % správných odpovědí a můžete to zkusit, kolikrát chcete." : "Úkol na této stránce zatím není hotový. Můžete pokračovat a vrátit se k němu později.";
    var nextBtn;
    if (!last) nextBtn = '<button class="btn" data-act="next">Další krok →</button>';
    else {
      var st = mstate(m.id);
      var idx = C.modules.indexOf(m), nx = C.modules[idx + 1];
      if (st.completedAt) hint = "Kapitola je započtená.";
      nextBtn = nx ? '<button class="btn" data-act="open" data-mod="' + nx.id + '">Pokračovat: ' + esc(nx.short) + ' →</button>' : '';
    }
    var html = '<button class="btn ghost" data-act="prev"' + (i === 0 ? " disabled" : "") + '>← Zpět</button><span class="hint">' + esc(hint) + '</span>' + nextBtn;
    if (p._html !== html) { p.innerHTML = html; p._html = html; }
    var lp = $("#lprog");
    if (lp) lp.textContent = moduleDone(m) ? "✓ Kapitola je započtená." : "Kapitola: obsah " + Math.round(contentShare(m) * 100) + " %, čas " + Math.min(100, Math.round(timeShare(m) * 100)) + " %. Započte se, až jedno z toho dosáhne " + Math.round(C.lessonShare * 100) + " %.";
    $all(".step-dot").forEach(function (b, k) {
      b.classList.toggle("done", stepDone(m, k));
      b.disabled = false;
    });
  }

  /* ---------- typy kroků ---------- */
  var WHO = { marek: "Marek · pěstoun", jan: "Jan · psycholog", klara: "Klára · rodinná psycholožka" };
  var STEPS = {};

  STEPS.text = function (el, s) { el.innerHTML = '<h2>' + esc(s.title) + '</h2>' + s.html; };

  STEPS.scene = function (el, s) {
    var h = '<h2>' + esc(s.title) + '</h2>';
    if (s.intro) h += '<p class="lede">' + esc(s.intro) + '</p>';
    var roles = []; s.lines.forEach(function (l) { if (l[0] !== "dir" && roles.indexOf(l[0]) < 0) roles.push(l[0]); });
    h += '<div class="av-slot" data-roles="' + roles.join(",") + '"></div>';
    h += '<div class="panel scene"><div class="slug">' + esc(s.slug) + '</div>';
    s.lines.forEach(function (l) {
      if (l[0] === "dir") h += '<div class="line"><span></span><p class="direction">' + l[1] + '</p></div>';
      else h += '<div class="line"><span class="who ' + l[0] + '">' + esc(WHO[l[0]] || l[0]) + '</span><p class="said">' + l[1] + '</p></div>';
    });
    h += '</div>';
    if (s.takeaways) h += '<div class="panel soft"><strong>Co si ze scény odnést</strong><ul>' + s.takeaways.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join("") + '</ul></div>';
    el.innerHTML = h;
  };

  STEPS.summary = function (el, s) {
    var h = '<h2>' + esc(s.title) + '</h2><div class="panel soft"><ul>' + s.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join("") + '</ul></div>';
    if (s.sources) h += '<h3>Zdroje a doporučené čtení</h3><ul class="note">' + s.sources.map(function (p) { return '<li>' + linkify(esc(p)) + '</li>'; }).join("") + '</ul><p class="note">U knih bez úplných údajů ověřte aktuální české vydání v knihovně nebo katalogu (např. Národní knihovna ČR).</p>';
    el.innerHTML = h;
  };
  function linkify(s) { return s.replace(/(https?:\/\/[^\s)]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>'); }

  STEPS.reflect = function (el, s, m, i) {
    var v = inp(s.id) || "";
    el.innerHTML = '<h2>' + esc(s.title) + '</h2><p>' + esc(s.prompt) + '</p>' +
      '<label class="field" for="ta-' + s.id + '">Vaše odpověď<textarea id="ta-' + s.id + '" rows="7">' + esc(v) + '</textarea></label>' +
      '<span class="counter" id="cnt-' + s.id + '"></span><p class="note">Zápis se ukládá automaticky do vašeho deníku. Minimální délka: ' + s.min + ' znaků.</p>';
    var ta = $("#ta-" + s.id), cnt = $("#cnt-" + s.id);
    function upd() {
      var len = ta.value.trim().length;
      cnt.textContent = len + " / " + s.min + " znaků";
      cnt.classList.toggle("ok", len >= s.min);
      if (len >= s.min) markStep(m, i);
    }
    ta.addEventListener("input", function () { setInp(s.id, ta.value); upd(); });
    upd();
  };

  STEPS.checklist = function (el, s, m, i) {
    var sel = inp(s.id) || [];
    var groups = s.groups || [["", s.items]];
    var h = '<h2>' + esc(s.title) + '</h2><p>' + esc(s.intro) + '</p>';
    groups.forEach(function (g, gi) {
      h += '<div class="panel">' + (g[0] ? '<strong>' + esc(g[0]) + '</strong>' : '') + '<div class="checks">';
      g[1].forEach(function (it, k) {
        var id = s.id + "-" + gi + "-" + k;
        h += '<label class="check" for="' + id + '"><input type="checkbox" id="' + id + '" data-val="' + esc(it) + '"' + (sel.indexOf(it) >= 0 ? " checked" : "") + '><span>' + esc(it) + '</span></label>';
      });
      h += '</div></div>';
    });
    h += '<label class="field" for="' + s.id + '-other">Něco dalšího (nepovinné)<input type="text" id="' + s.id + '-other" value="' + esc(inp(s.id + "-other") || "") + '"></label><span class="counter" id="cnt-' + s.id + '"></span>';
    el.innerHTML = h;
    function upd() {
      var vals = $all('input[type="checkbox"]', el).filter(function (c) { return c.checked; }).map(function (c) { return c.getAttribute("data-val"); });
      setInp(s.id, vals);
      var c = $("#cnt-" + s.id); c.textContent = "Vybráno: " + vals.length + " (minimum " + s.min + ")"; c.classList.toggle("ok", vals.length >= s.min);
      if (vals.length >= s.min) markStep(m, i);
    }
    el.addEventListener("change", upd);
    $("#" + s.id + "-other").addEventListener("input", function (e) { setInp(s.id + "-other", e.target.value); });
    upd();
  };

  STEPS.task = function (el, s, m, i) {
    var v = inp(s.id) || {};
    el.innerHTML = '<h2>' + esc(s.title) + '</h2>' + s.html +
      '<div class="panel"><label class="check" for="cm-' + s.id + '"><input type="checkbox" id="cm-' + s.id + '"' + (v.commit ? " checked" : "") + '><span>' + esc(s.commit) + '</span></label>' +
      '<label class="field" for="dt-' + s.id + '">Kdy začnu (nepovinné)<input type="date" id="dt-' + s.id + '" value="' + esc(v.date || "") + '"></label></div>';
    function upd() {
      var o = { commit: $("#cm-" + s.id).checked, date: $("#dt-" + s.id).value };
      setInp(s.id, o);
      if (o.commit) markStep(m, i);
    }
    el.addEventListener("change", upd);
    if (v.commit) markStep(m, i);
  };

  STEPS.case = function (el, s, m, i) {
    var picked = (inp(s.id) || {}).picked || [];
    var h = '<h2>' + esc(s.title) + '</h2><div class="panel">' + s.story + '<div class="opts">';
    s.options.forEach(function (o, k) {
      var cls = picked.indexOf(k) >= 0 ? (o.good ? " right" : " wrong") : "";
      h += '<button class="opt' + cls + '" data-k="' + k + '">' + esc(o.text) + '</button>';
    });
    h += '</div><div id="fb-' + s.id + '"></div></div>';
    el.innerHTML = h;
    function show(k) {
      var o = s.options[k];
      $("#fb-" + s.id).innerHTML = '<p class="feedback ' + (o.good ? "good" : "bad") + '">' + (o.good ? "<strong>Dobrá volba.</strong> " : "<strong>Zkuste to promyslet znovu.</strong> ") + esc(o.feedback) + '</p>';
    }
    $all(".opt", el).forEach(function (b) {
      b.addEventListener("click", function () {
        var k = +b.getAttribute("data-k");
        if (picked.indexOf(k) < 0) picked.push(k);
        setInp(s.id, { picked: picked });
        b.classList.add(s.options[k].good ? "right" : "wrong");
        show(k);
        if (s.options[k].good) markStep(m, i);
      });
    });
    if (picked.length) show(picked[picked.length - 1]);
  };

  STEPS.sort = function (el, s, m, i) {
    var st = inp(s.id) || {};
    var h = '<h2>' + esc(s.title) + '</h2><p>' + esc(s.intro) + '</p><div class="panel">';
    s.items.forEach(function (it, k) {
      h += '<div class="sort-item"><span>' + esc(it.t) + '</span><div class="chips">';
      s.categories.forEach(function (c, ci) {
        var cls = st[k] === ci ? (ci === it.a ? " right" : " wrong") : "";
        h += '<button class="chip' + cls + '" data-k="' + k + '" data-c="' + ci + '">' + esc(c) + '</button>';
      });
      h += '</div><div class="fbx" id="sfb-' + k + '">' + (st[k] != null ? fb(it, st[k]) : "") + '</div></div>';
    });
    h += '</div><span class="counter" id="cnt-' + s.id + '"></span>';
    el.innerHTML = h;
    function fb(it, c) { return '<p class="feedback ' + (c === it.a ? "good" : "bad") + '">' + (c === it.a ? "Správně. " : "Ještě jednou. ") + esc(c === it.a ? it.why : "Zkuste jinou možnost.") + '</p>'; }
    function upd() {
      var ok = s.items.filter(function (it, k) { return st[k] === it.a; }).length;
      var c = $("#cnt-" + s.id); c.textContent = "Správně zařazeno: " + ok + " / " + s.items.length; c.classList.toggle("ok", ok === s.items.length);
      if (ok === s.items.length) markStep(m, i);
    }
    $all(".chip", el).forEach(function (b) {
      b.addEventListener("click", function () {
        var k = +b.getAttribute("data-k"), ci = +b.getAttribute("data-c"), it = s.items[k];
        if (st[k] === it.a) return;
        st[k] = ci; setInp(s.id, st);
        $all('.chip[data-k="' + k + '"]', el).forEach(function (x) { x.classList.remove("right", "wrong"); });
        b.classList.add(ci === it.a ? "right" : "wrong");
        $("#sfb-" + k).innerHTML = fb(it, ci);
        upd();
      });
    });
    upd();
  };

  STEPS.videos = function (el, s) {
    var h = '<h2>' + esc(s.title) + '</h2>' + (s.intro ? '<p>' + esc(s.intro) + '</p>' : '');
    s.items.forEach(function (v) {
      h += '<div class="panel video-card"><strong>' + esc(v.t) + '</strong><div class="note" style="margin:.2rem 0 .6rem">' + (v.own ? 'Video lektora kurzu' : 'Video odborníka (třetí strana)') + (v.by ? ' · ' + esc(v.by) : '') + '</div>' +
        '<a class="btn ghost" href="' + esc(v.url) + '" target="_blank" rel="noopener noreferrer">Otevřít na YouTube (nové okno)</a></div>';
    });
    h += '<p class="note">Videa jsou volitelná. Odkazy vedou na službu YouTube (třetí strana, mohou se jí ukládat cookies). Pokud video nelze přehrát, kurz můžete bez něj absolvovat.</p>';
    el.innerHTML = h;
  };

  STEPS.guided = function (el, s, m, i) {
    var k = 0, items = s.steps;
    el.innerHTML = '<h2>' + esc(s.title) + '</h2><p>' + esc(s.intro) + '</p><div class="panel pacer guided"><div class="cycle" id="g-n"></div><div class="phase" id="g-t" style="font-size:1.25rem;line-height:1.5;min-height:6rem"></div>' +
      '<div class="row"><button class="btn ghost" id="g-prev">← Zpět</button><button class="btn" id="g-next">Další</button></div></div>' +
      (s.after ? '<p>' + esc(s.after) + '</p>' : '') + '<p class="note" id="g-done">' + (mstate(m.id).done[i] ? "Cvičení máte splněné. Můžete ho kdykoli zopakovat." : "Cvičení se počítá jako splněné po dojití na poslední krok.") + '</p>';
    function show() {
      $("#g-n").textContent = "Krok " + (k + 1) + " z " + items.length;
      $("#g-t").textContent = items[k];
      $("#g-prev").disabled = k === 0;
      $("#g-next").textContent = k === items.length - 1 ? "Hotovo" : "Další";
    }
    $("#g-prev").addEventListener("click", function () { if (k > 0) { k--; show(); } });
    $("#g-next").addEventListener("click", function () {
      lastAct = Date.now();
      if (k < items.length - 1) { k++; show(); }
      else { markStep(m, i); $("#g-done").textContent = (s.end || "Hotovo.") + " Cvičení máte splněné a můžete ho kdykoli zopakovat."; k = 0; show(); }
    });
    show();
  };

  STEPS.breath = function (el, s, m, i) {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var total = s.pattern.reduce(function (a, p) { return a + p[1]; }, 0) * s.cycles;
    el.innerHTML = '<h2>' + esc(s.title) + '</h2><p>' + esc(s.intro) + '</p>' +
      '<div class="panel pacer"><div class="orb-wrap"><div class="orb" id="orb"></div></div><div class="phase" id="phase">Připraveno</div><div class="cycle" id="cyc">' + s.cycles + ' cyklů · asi ' + Math.round(total / 6) / 10 + ' min</div>' +
      '<div class="row"><button class="btn" id="bstart">Začít</button><button class="btn ghost" id="bstop" disabled>Zastavit</button></div></div>' +
      (s.after ? '<p>' + esc(s.after) + '</p>' : '') + '<p class="note" id="bdone">' + (mstate(m.id).done[i] ? "Cvičení máte splněné. Můžete ho kdykoli zopakovat." : "Cvičení se počítá jako splněné po dokončení všech cyklů.") + '</p>';
    var orb = $("#orb"), ph = $("#phase"), cy = $("#cyc"), timer = null, countdown = null, running = false;
    function size(kind) { return kind === "in" ? 200 : kind === "in2" ? 216 : kind === "out" ? 80 : null; }
    function stop(finished) {
      clearTimeout(timer); clearInterval(countdown);
      if (running) { running = false; exerciseRunning = Math.max(0, exerciseRunning - 1); }
      $("#bstart").disabled = false; $("#bstop").disabled = true;
      if (finished) { ph.textContent = "Hotovo. Jak se teď cítíte?"; orb.textContent = ""; markStep(m, i); $("#bdone").textContent = "Cvičení máte splněné. Můžete ho kdykoli zopakovat."; }
    }
    function run(c, p) {
      if (c >= s.cycles) { stop(true); return; }
      var cur = s.pattern[p], sec = cur[1], left = sec;
      ph.textContent = cur[0];
      orb.className = "orb ph-" + (cur[2] || "hold"); ph.className = "phase ph-" + (cur[2] || "hold");
      cy.textContent = "Cyklus " + (c + 1) + " z " + s.cycles;
      var sz = size(cur[2]);
      orb.style.transitionDuration = reduce ? "0s" : sec + "s";
      if (sz) { orb.style.width = sz + "px"; orb.style.height = sz + "px"; }
      orb.textContent = left;
      clearInterval(countdown);
      countdown = setInterval(function () { left -= 1; if (left > 0) orb.textContent = left; }, 1000);
      timer = setTimeout(function () {
        var np = p + 1, nc = c;
        if (np >= s.pattern.length) { np = 0; nc = c + 1; }
        run(nc, np);
      }, sec * 1000);
    }
    $("#bstart").addEventListener("click", function () {
      if (running) return;
      running = true; exerciseRunning += 1; lastAct = Date.now();
      $("#bstart").disabled = true; $("#bstop").disabled = false;
      orb.style.width = "80px"; orb.style.height = "80px";
      run(0, 0);
    });
    $("#bstop").addEventListener("click", function () { stop(false); ph.textContent = "Zastaveno"; orb.textContent = ""; });
    cleanup.push(function () { stop(false); });
  };

  STEPS.grounding = function (el, s, m, i) {
    var h = '<h2>' + esc(s.title) + '</h2><p>' + esc(s.intro) + '</p><div class="panel"><ol class="gsteps">';
    s.steps.forEach(function (g, k) { h += '<li id="gs-' + k + '"><strong>' + esc(g[0]) + '</strong> <span class="counter">(' + g[2] + ' s)</span><br>' + esc(g[1]) + '</li>'; });
    h += '</ol><div class="row"><button class="btn" id="gstart">Začít s průvodcem</button><span class="clock" id="gclock" hidden></span></div></div>';
    h += '<div class="panel soft">' + esc(s.child) + '</div><p class="note" id="gdone">' + (mstate(m.id).done[i] ? "Cvičení máte splněné." : "Průvodce vás provede všemi kroky (asi 4 minuty).") + '</p>';
    el.innerHTML = h;
    var t = null, running = false;
    function stop() { clearInterval(t); if (running) { running = false; exerciseRunning = Math.max(0, exerciseRunning - 1); } }
    $("#gstart").addEventListener("click", function () {
      if (running) return;
      running = true; exerciseRunning += 1;
      var k = 0, left = s.steps[0][2], clk = $("#gclock");
      clk.hidden = false; $("#gstart").disabled = true;
      function hl() { $all(".gsteps li", el).forEach(function (li, j) { li.style.opacity = j === k ? "1" : ".45"; }); }
      hl(); clk.textContent = s.steps[k][0] + " · " + left + " s";
      t = setInterval(function () {
        left -= 1;
        if (left <= 0) {
          k += 1;
          if (k >= s.steps.length) {
            stop(); clk.textContent = "Hotovo"; $("#gstart").disabled = false; $("#gstart").textContent = "Zopakovat";
            $all(".gsteps li", el).forEach(function (li) { li.style.opacity = "1"; });
            markStep(m, i); $("#gdone").textContent = "Cvičení máte splněné."; return;
          }
          left = s.steps[k][2]; hl();
        }
        clk.textContent = s.steps[k][0] + " · " + left + " s";
      }, 1000);
    });
    cleanup.push(stop);
  };

  STEPS.grounding54321 = function (el, s, m, i) {
    var G = [[5, "věcí, které vidíte"], [4, "zvuky, které slyšíte"], [3, "věci, kterých se dotýkáte (nebo cítíte na kůži)"], [2, "vůně, které cítíte"], [1, "chuť, kterou vnímáte"]];
    var v = inp(s.id) || {};
    var h = '<h2>' + esc(s.title) + '</h2><p>' + esc(s.intro) + '</p>';
    G.forEach(function (g, gi) {
      h += '<div class="panel"><strong>' + g[0] + ' ' + esc(g[1]) + '</strong><div class="row">';
      for (var k = 0; k < g[0]; k++) { var id = s.id + "-" + gi + "-" + k; h += '<input type="text" id="' + id + '" data-g="' + gi + '" data-k="' + k + '" aria-label="' + g[1] + ' ' + (k + 1) + '" style="flex:1 1 140px;width:auto" value="' + esc((v[gi] || [])[k] || "") + '">'; }
      h += '</div></div>';
    });
    h += '<p class="note">Vůni nebo chuť nemusíte zrovna cítit. Klidně napište „žádná“ nebo si přivoňte k čaji, ruce či svetru. Jde o to, kam posíláte pozornost.</p><span class="counter" id="cnt-' + s.id + '"></span>';
    el.innerHTML = h;
    function upd() {
      var filled = 0;
      $all("input[data-g]", el).forEach(function (x) { var g = +x.dataset.g, k = +x.dataset.k; v[g] = v[g] || []; v[g][k] = x.value; if (x.value.trim()) filled++; });
      setInp(s.id, v);
      var c = $("#cnt-" + s.id); c.textContent = "Vyplněno " + filled + " / 15"; c.classList.toggle("ok", filled >= 15);
      if (filled >= 15) markStep(m, i);
    }
    el.addEventListener("input", upd); upd();
  };

  var MIRROR_L = [
    "Cítím se emočně vyčerpaný/á z nároků pěstounské péče.",
    "Ráno cítím únavu už při pomyšlení, co mě s dětmi čeká.",
    "K dětem přistupuji už jen mechanicky, bez hlubších emocí.",
    "Pochybuji o smyslu své role a o tom, zda jsem dobrý pěstoun.",
    "Jsem podrážděnější a ztrácím trpělivost rychleji než dříve."
  ];
  var MIRROR_S = [
    "Tělesné napětí: bolesti hlavy, zad, stažená čelist, sevřený žaludek, bušení srdce",
    "Kognitivní únava: potíže se soustředěním, zapomínání, nerozhodnost",
    "Poruchy spánku: myšlenkový kolotoč při usínání nebo brzké buzení",
    "Sociální stažení: chuť izolovat se i od přátel, kteří mě dřív těšili",
    "Vnitřní tlak: pocit, že se nesmím zastavit, jinak se vše sesype"
  ];
  function mirrorScore(v) { return (v.l || []).reduce(function (a, x) { return a + (+x || 0); }, 0); }
  function mirrorBand(sc) {
    if (sc <= 11) return ["calm", "Nižší míra vyčerpání. Chraňte si to, co vás drží."];
    if (sc <= 18) return ["alert", "Zvýšená míra vyčerpání. Stojí za to věnovat pozornost odpočinku a podpoře."];
    return ["freeze", "Vysoká míra vyčerpání. Zvažte rozhovor s klíčovou pracovnicí nebo psychologem a domluvte si odlehčení."];
  }
  STEPS.mirror = function (el, s, m, i) {
    var v = inp(s.id) || { l: [], s: [], bat: null, one: "" };
    var h = '<h2>' + esc(s.title) + '</h2><p>' + esc(s.intro) + '</p>';
    h += '<div class="panel"><strong>I. Emoční kapacita</strong><p class="note">1 = téměř nikdy, 5 = velmi často / denně</p><div class="likert"><span></span>';
    for (var n = 1; n <= 5; n++) h += '<span class="lh">' + n + '</span>';
    MIRROR_L.forEach(function (t, k) {
      h += '<span class="stmt" id="' + s.id + '-q' + k + '">' + esc(t) + '</span>';
      for (var n2 = 1; n2 <= 5; n2++) h += '<input type="radio" name="' + s.id + '-l' + k + '" value="' + n2 + '" aria-labelledby="' + s.id + '-q' + k + '" aria-label="' + n2 + '"' + (+v.l[k] === n2 ? " checked" : "") + '>';
    });
    h += '</div></div>';
    h += '<div class="panel"><strong>II. Signály těla a mysli</strong><p class="note">Zaškrtněte, co na sobě v poslední době pozorujete.</p><div class="checks">';
    MIRROR_S.forEach(function (t, k) { h += '<label class="check" for="' + s.id + '-s' + k + '"><input type="checkbox" id="' + s.id + '-s' + k + '" data-s="' + k + '"' + ((v.s || []).indexOf(k) >= 0 ? " checked" : "") + '><span>' + esc(t) + '</span></label>'; });
    h += '</div></div>';
    h += '<div class="panel"><label class="field" for="' + s.id + '-bat">III. Moje vnitřní baterie je teď nabitá na: <output id="' + s.id + '-batv">' + (v.bat == null ? "—" : v.bat + " %") + '</output><input type="range" min="0" max="100" step="5" id="' + s.id + '-bat" value="' + (v.bat == null ? 50 : v.bat) + '"></label>' +
      '<label class="field" for="' + s.id + '-one">Jedna malá věc, kterou pro sebe udělám v příštích 48 hodinách<input type="text" id="' + s.id + '-one" value="' + esc(v.one || "") + '"></label></div>';
    h += '<div id="' + s.id + '-res"></div>';
    el.innerHTML = h;
    function result() {
      var box = $("#" + s.id + "-res");
      var complete = MIRROR_L.every(function (_, k) { return +v.l[k] > 0; }) && v.bat != null && (v.one || "").trim().length > 2;
      if (!complete) { box.innerHTML = '<p class="note">Vyplňte všech pět tvrzení, nastavte baterii a napište jednu malou věc.</p>'; return; }
      var sc = mirrorScore(v), b = mirrorBand(sc);
      var html = '<div class="panel soft"><strong>Výsledek: <span class="' + b[0] + '">' + sc + ' z 25 bodů</span></strong><p>' + esc(b[1]) + '</p><p>Signály těla a mysli: ' + (v.s || []).length + ' z 5 · Baterie: ' + v.bat + ' %</p>';
      if (s.id === "mirrorPost" && inp("mirrorPre")) {
        var pre = inp("mirrorPre"), d = sc - mirrorScore(pre);
        html += '<p><strong>Porovnání se vstupem:</strong> vyčerpání ' + mirrorScore(pre) + ' → ' + sc + ' bodů (' + (d > 0 ? "+" : "") + d + '), baterie ' + pre.bat + ' % → ' + v.bat + ' %, signály ' + (pre.s || []).length + ' → ' + (v.s || []).length + '.</p>';
      }
      html += '<p class="note">Zrcadlo je orientační sebereflexe, ne standardizovaný test ani diagnóza.</p></div>';
      box.innerHTML = html;
      markStep(m, i);
    }
    el.addEventListener("change", function (e) {
      var t = e.target;
      if (t.type === "radio") { var k = +t.name.split("-l")[1]; v.l[k] = +t.value; }
      if (t.dataset.s != null) { v.s = $all("input[data-s]", el).filter(function (c) { return c.checked; }).map(function (c) { return +c.dataset.s; }); }
      setInp(s.id, v); result();
    });
    el.addEventListener("input", function (e) {
      var t = e.target;
      if (t.id === s.id + "-bat") { v.bat = +t.value; $("#" + s.id + "-batv").textContent = v.bat + " %"; }
      if (t.id === s.id + "-one") v.one = t.value;
      setInp(s.id, v); result();
    });
    result();
  };

  var RUNG = {
    v: ["Bezpečí a spojení", "Skvělé. Všimněte si, co vám tu pomáhá být, a dělejte toho víc. Tohle je zdroj."],
    s: ["Poplach (boj / útěk)", "Pomáhá vybít energii a prodloužit výdech: pohyb, dupání, studená voda, dlouhé výdechy, krátké odstoupení. Před takovým dnem si naplánujte pauzu a po něm něco příjemného."],
    d: ["Zamrznutí / vypnutí", "Nejdřív trochu energie: pohyb, chlad, hudba, kontakt s bezpečným člověkem. Teprve pak klid. Buďte k sobě laskaví. Pokud tu trávíte hodně času, řekněte si o podporu."]
  };
  STEPS.ladder = function (el, s, m, i) {
    var v = inp(s.id) || {};
    var h = '<h2>' + esc(s.title) + '</h2><p>' + esc(s.intro) + '</p>';
    s.situations.forEach(function (sit, k) {
      h += '<div class="panel"><strong>' + esc(sit) + '</strong><div class="ladder">';
      ["v", "s", "d"].forEach(function (r) { h += '<button class="rung ' + r + (v[k] === r ? " picked" : "") + '" data-k="' + k + '" data-r="' + r + '"><strong>' + RUNG[r][0] + '</strong></button>'; });
      h += '</div><div id="ltip-' + k + '">' + (v[k] ? '<p class="feedback">' + esc(RUNG[v[k]][1]) + '</p>' : "") + '</div></div>';
    });
    el.innerHTML = h;
    $all(".rung", el).forEach(function (b) {
      b.addEventListener("click", function () {
        var k = +b.dataset.k, r = b.dataset.r; v[k] = r; setInp(s.id, v);
        $all('.rung[data-k="' + k + '"]', el).forEach(function (x) { x.classList.toggle("picked", x === b); });
        $("#ltip-" + k).innerHTML = '<p class="feedback">' + esc(RUNG[r][1]) + '</p>';
        if (s.situations.every(function (_, j) { return v[j]; })) markStep(m, i);
      });
    });
    if (s.situations.every(function (_, j) { return v[j]; })) markStep(m, i);
  };

  STEPS.barometer = function (el, s, m, i) {
    var v = inp(s.id) || { lvl: null, help: "", c3: "", c6: "", c9: "" };
    var labels = ["klid", "pohoda", "lehké napětí", "neklid", "štve mě to", "zlobím se", "hodně se zlobím", "křičím uvnitř", "výbuch blízko", "výbuch"];
    var h = '<h2>' + esc(s.title) + '</h2><p>' + esc(s.intro) + '</p><div class="panel"><strong>Kde jsem teď já?</strong><div class="baro">';
    for (var k = 1; k <= 10; k++) {
      var hue = 140 - (k - 1) * 15;
      h += '<button data-l="' + k + '" style="background:hsl(' + hue + ' 60% 62%)"' + (v.lvl === k ? ' class="picked"' : "") + ' aria-label="' + k + ': ' + labels[k - 1] + '">' + k + '</button>';
    }
    h += '</div><p id="blabel" class="note">' + (v.lvl ? v.lvl + " = " + labels[v.lvl - 1] : "Vyberte stupeň 1 až 10.") + '</p>' +
      '<label class="field" for="b-help">Co mi teď pomůže posunout se o stupeň níž?<input type="text" id="b-help" value="' + esc(v.help) + '"></label></div>';
    h += '<div class="panel"><strong>Karta pro dítě: co pomáhá na jakém stupni</strong><p class="note">Vyplňte podle toho, co znáte u svého dítěte. Kartu najdete v deníku a můžete ji přepsat nebo nakreslit s dítětem.</p>' +
      '<label class="field" for="b-c3">Na stupni 3 (neklid) pomáhá…<input type="text" id="b-c3" value="' + esc(v.c3) + '" placeholder="např. napít se vody, pomazlit psa"></label>' +
      '<label class="field" for="b-c6">Na stupni 6 (hodně se zlobím) pomáhá…<input type="text" id="b-c6" value="' + esc(v.c6) + '" placeholder="např. dupat, mačkat polštář, jít do koutku"></label>' +
      '<label class="field" for="b-c9">Na stupni 9 (výbuch blízko) pomáhá…<input type="text" id="b-c9" value="' + esc(v.c9) + '" placeholder="např. dospělý je blízko a mlčí, těžká deka"></label></div>';
    el.innerHTML = h;
    function check() { if (v.lvl && (v.help || "").trim().length >= 3 && ((v.c3 + v.c6 + v.c9).trim().length >= 3)) markStep(m, i); }
    $all(".baro button", el).forEach(function (b) {
      b.addEventListener("click", function () {
        v.lvl = +b.dataset.l; setInp(s.id, v);
        $all(".baro button", el).forEach(function (x) { x.classList.toggle("picked", x === b); });
        $("#blabel").textContent = v.lvl + " = " + labels[v.lvl - 1]; check();
      });
    });
    el.addEventListener("input", function (e) { var id = e.target.id.replace("b-", ""); if (id in v) { v[id] = e.target.value; setInp(s.id, v); check(); } });
    check();
  };

  STEPS.phases = function (el, s, m, i) {
    var v = inp(s.id);
    var h = '<h2>' + esc(s.title) + '</h2><p>' + esc(s.intro) + '</p><div class="opts">';
    s.phases.forEach(function (p, k) { h += '<button class="opt' + (v === k ? " picked" : "") + '" data-k="' + k + '"><strong>' + (k + 1) + '. ' + esc(p[0]) + '</strong><br><span style="color:var(--muted)">' + esc(p[1]) + '</span></button>'; });
    h += '</div><div id="ph-fb"></div>';
    el.innerHTML = h;
    function show(k) { $("#ph-fb").innerHTML = '<div class="panel soft"><strong>' + esc(s.phases[k][0]) + ': co teď pomáhá</strong><p>' + esc(s.phases[k][2]) + '</p></div>'; }
    $all(".opt", el).forEach(function (b) {
      b.addEventListener("click", function () {
        var k = +b.dataset.k; setInp(s.id, k);
        $all(".opt", el).forEach(function (x) { x.classList.toggle("picked", x === b); });
        show(k); markStep(m, i);
      });
    });
    if (v != null) { show(v); markStep(m, i); }
  };

  STEPS.glimmers = function (el, s, m, i) {
    var v = inp(s.id) || [{}, {}, {}];
    var h = '<h2>' + esc(s.title) + '</h2><p>' + esc(s.intro) + '</p>';
    for (var k = 0; k < 3; k++) {
      h += '<div class="panel"><strong>Záblesk ' + (k + 1) + '</strong>' +
        '<label class="field" for="gw-' + k + '">Co to bylo<input type="text" id="gw-' + k + '" data-k="' + k + '" data-f="what" value="' + esc(v[k].what || "") + '" placeholder="např. teplý hrnek v dlaních ráno"></label>' +
        '<label class="field" for="gb-' + k + '">Co udělalo tělo<input type="text" id="gb-' + k + '" data-k="' + k + '" data-f="body" value="' + esc(v[k].body || "") + '" placeholder="např. povolila ramena, dech šel do břicha"></label></div>';
    }
    el.innerHTML = h;
    function check() { if (v.every(function (g) { return (g.what || "").trim().length >= 3 && (g.body || "").trim().length >= 3; })) markStep(m, i); }
    el.addEventListener("input", function (e) { var k = +e.target.dataset.k, f = e.target.dataset.f; if (f) { v[k][f] = e.target.value; setInp(s.id, v); check(); } });
    check();
  };

  STEPS.crisisplan = function (el, s, m, i) {
    var v = inp(s.id) || { signs: "", lifeline: "", acts: [{}, {}], mantra: "", tell: "" };
    var h = '<h2>' + esc(s.title) + '</h2><p>' + esc(s.intro) + '</p>';
    h += '<div class="panel"><strong>1. První pomoc (hned teď)</strong><p>Když cítím, že přetékám:</p><ol><li><strong>Zastavím se</strong> a pojmenuji emoci („Teď cítím obrovský vztek“).</li><li><strong>Tělo:</strong> tři dlouhé výdechy nebo napočítám do deseti.</li><li><strong>Voda:</strong> napiju se studené vody nebo si opláchnu obličej.</li><li><strong>Prostor:</strong> pokud je to bezpečné, na chvíli odejdu („Vrátím se za dvě minuty“).</li><li><strong>Záchranné lano:</strong> zavolám nebo napíšu tomu, koho uvedu níže.</li></ol>' +
      '<label class="field" for="cp-lifeline">Moje záchranné lano (jméno, telefon)<input type="text" id="cp-lifeline" data-f="lifeline" value="' + esc(v.lifeline) + '"></label>' +
      '<label class="field" for="cp-signs">Moje první varovné signály (podle čeho poznám, že přetékám)<input type="text" id="cp-signs" data-f="signs" value="' + esc(v.signs) + '"></label>' +
      '<label class="field" for="cp-tell">Komu v rodině řeknu, že potřebuju chvilku vystřídat<input type="text" id="cp-tell" data-f="tell" value="' + esc(v.tell) + '"></label></div>';
    h += '<div class="panel"><strong>2. Doplňování nádoby (dlouhodobě)</strong><p class="note">Konkrétní termín v příštím měsíci. Ne „pokud zbude čas“.</p>';
    for (var k = 0; k < 2; k++) {
      var a = v.acts[k] || {};
      h += '<div class="row"><input type="text" aria-label="Aktivita ' + (k + 1) + '" placeholder="Co mi dělá dobře" data-a="' + k + '" data-f="what" value="' + esc(a.what || "") + '" style="flex:2 1 180px;width:auto">' +
        '<input type="text" aria-label="Kdy ' + (k + 1) + '" placeholder="Kdy (den, čas)" data-a="' + k + '" data-f="when" value="' + esc(a.when || "") + '" style="flex:1 1 120px;width:auto">' +
        '<input type="text" aria-label="Kdo pohlídá děti ' + (k + 1) + '" placeholder="Kdo pohlídá děti" data-a="' + k + '" data-f="who" value="' + esc(a.who || "") + '" style="flex:1 1 120px;width:auto"></div>';
    }
    h += '</div><div class="panel"><strong>3. Moje mantra pro těžké dny</strong><label class="field" for="cp-mantra">Krátká věta pro chvíle, kdy mám pocit selhání<input type="text" id="cp-mantra" data-f="mantra" value="' + esc(v.mantra) + '" placeholder="např. Dělám to nejlepší, co umím. I tohle přejde."></label></div>';
    h += '<p class="note" id="cp-st"></p>';
    el.innerHTML = h;
    function check() {
      var ok = v.lifeline.trim().length >= 3 && v.mantra.trim().length >= 3 && (v.acts[0].what || "").trim().length >= 3;
      $("#cp-st").textContent = ok ? "Krizový plán je uložený v deníku." : "Vyplňte aspoň záchranné lano, jednu aktivitu a mantru.";
      if (ok) markStep(m, i);
    }
    el.addEventListener("input", function (e) {
      var t = e.target, f = t.dataset.f;
      if (t.dataset.a != null) { v.acts[+t.dataset.a] = v.acts[+t.dataset.a] || {}; v.acts[+t.dataset.a][f] = t.value; }
      else if (f) v[f] = t.value;
      setInp(s.id, v); check();
    });
    check();
  };

  var MEDIA = {
    "Předškoláci (do 6 let)": ["Do 2 let žádné pasivní sledování obrazovek (videohovory s blízkými jsou v pořádku)", "Od 2 let nejvýš 1 hodina denně, méně je lépe", "Díváme se spolu a povídáme si o tom, co jsme viděli", "Pořady vybíráme předem, žádné náhodné přehrávání", "U jídla bez obrazovek", "Hodinu před spaním bez obrazovek"],
    "Školáci (7–12 let)": ["U jídla bez mobilů, pro všechny", "Mobil se nabíjí přes noc mimo ložnici", "Hodinu před spaním bez obrazovek", "Nejdřív povinnosti a pohyb, pak obrazovka", "Čas u obrazovky vyvážíme aspoň stejně dlouhým pohybem venku", "Hry a aplikace vybíráme spolu", "Denně čteme z papírové knihy nebo časopisu"],
    "Dospívající (13–18 let)": ["Jeden den nebo půlden v týdnu bez sociálních sítí", "Mobil se nabíjí přes noc mimo ložnici", "U jídla bez mobilů, pro všechny", "Pravidelně mluvíme o sítích, srovnávání a kyberšikaně", "Víme, na koho se obrátit, když se online stane něco nepříjemného", "Pravidla platí i pro dospělé", "Po měsíci pravidla společně vyhodnotíme"]
  };
  STEPS.mediaplan = function (el, s, m, i) {
    var v = inp(s.id) || { age: "", rules: [], own: "" };
    var h = '<h2>' + esc(s.title) + '</h2><p>' + esc(s.intro) + '</p><div class="panel"><label class="field" for="mp-age">Pro koho dohodu chystáme<select id="mp-age"><option value="">Vyberte věkovou skupinu</option>';
    Object.keys(MEDIA).forEach(function (a) { h += '<option' + (v.age === a ? " selected" : "") + '>' + esc(a) + '</option>'; });
    h += '</select></label><div class="checks" id="mp-rules"></div><label class="field" for="mp-own">Vlastní pravidlo (nepovinné)<input type="text" id="mp-own" value="' + esc(v.own) + '"></label></div><div id="mp-out"></div>';
    el.innerHTML = h;
    function rules() {
      var box = $("#mp-rules");
      if (!v.age) { box.innerHTML = ""; return; }
      box.innerHTML = MEDIA[v.age].map(function (r, k) { return '<label class="check" for="mpr-' + k + '"><input type="checkbox" id="mpr-' + k + '" data-r="' + esc(r) + '"' + (v.rules.indexOf(r) >= 0 ? " checked" : "") + '><span>' + esc(r) + '</span></label>'; }).join("");
    }
    function out() {
      var list = v.rules.concat(v.own.trim() ? [v.own.trim()] : []);
      $("#mp-out").innerHTML = v.age && list.length ? '<div class="panel soft"><strong>Návrh: Naše rodinná digitální dohoda</strong><ol>' + list.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join("") + '</ol><p class="note">Probereme ji s dětmi, upravíme a podepíšeme všichni.</p></div>' : "";
      if (v.age && v.rules.length >= 3) markStep(m, i);
    }
    $("#mp-age").addEventListener("change", function (e) { v.age = e.target.value; v.rules = []; setInp(s.id, v); rules(); out(); });
    el.addEventListener("change", function (e) { if (e.target.dataset.r != null) { v.rules = $all("input[data-r]", el).filter(function (c) { return c.checked; }).map(function (c) { return c.dataset.r; }); setInp(s.id, v); out(); } });
    $("#mp-own").addEventListener("input", function (e) { v.own = e.target.value; setInp(s.id, v); out(); });
    rules(); out();
  };

  /* ---------- testy ---------- */
  function quizHtml(qs, prefix) {
    return qs.map(function (q, k) {
      return '<fieldset class="panel" style="border:1px solid var(--line)"><legend style="font-weight:700;padding:0 6px">' + (k + 1) + '. ' + esc(q.q) + '</legend><div class="checks">' +
        q.order.map(function (oi) { return '<label class="check" for="' + prefix + k + '-' + oi + '"><input type="radio" name="' + prefix + k + '" id="' + prefix + k + '-' + oi + '" value="' + oi + '"><span>' + esc(q.o[oi]) + '</span></label>'; }).join("") +
        '</div><div class="qfb" id="' + prefix + 'fb' + k + '"></div></fieldset>';
    }).join("");
  }
  function prepQuiz(list) { return list.map(function (q) { return { q: q.q, o: q.o, c: q.c, why: q.why, order: shuffle(q.o.map(function (_, i) { return i; })) }; }); }
  function gradeQuiz(el, qs, prefix) {
    var ok = 0, all = true;
    qs.forEach(function (q, k) {
      var sel = $('input[name="' + prefix + k + '"]:checked', el);
      if (!sel) { all = false; return; }
      var right = +sel.value === q.c; if (right) ok++;
      $("#" + prefix + "fb" + k).innerHTML = '<p class="feedback ' + (right ? "good" : "bad") + '">' + (right ? "Přesně tak." : "Hodí se vědět: " + esc(q.o[q.c]) + ".") + (q.why ? " " + esc(q.why) : "") + '</p>';
    });
    return all ? ok / qs.length : null;
  }

  function stepQuiz(el, _s, m, i) {
    var st = mstate(m.id).quiz;
    var qs = prepQuiz(m.quiz);
    el.innerHTML = '<h2>Ověřte si, co víte</h2><p>' + m.quiz.length + ' krátkých otázek ze života. Nejde o zkoušku, jen o ověření, co už umíte. Stačí aspoň ' + Math.round(C.moduleQuizPass * 100) + ' % a můžete to zkusit, kolikrát chcete. Spěchat nemusíte.</p>' +
      (st.passed ? '<p class="feedback good">Máte splněno, skvělé (nejlepší výsledek ' + Math.round(st.best * 100) + ' %).</p>' : '') +
      '<form id="qform">' + quizHtml(qs, "q") + '<div class="row"><button class="btn" type="submit">Ukázat výsledek</button><span id="qres"></span></div></form>';
    $("#qform").addEventListener("submit", function (e) {
      e.preventDefault();
      var r = gradeQuiz(el, qs, "q");
      if (r == null) { $("#qres").textContent = "Ještě zbývají otázky bez odpovědi. Doplňte je a zkuste to znovu."; return; }
      st.attempts += 1; st.best = Math.max(st.best, r);
      var pass = r >= C.moduleQuizPass;
      if (pass) st.passed = true;
      save(true);
      $("#qres").innerHTML = '<strong class="' + (pass ? "calm" : "alert") + '">Zvládli jste ' + Math.round(r * qs.length) + ' z ' + qs.length + (pass ? '. Máte splněno, dobrá práce.' : '. Skoro. Přečtěte si vysvětlení u odpovědí a zkuste to znovu, nic se neděje.') + '</strong>' + (pass ? "" : ' <button class="btn ghost small" type="button" data-act="retry">Zkusit znovu</button>');
      if (pass) { markStep(m, i); checkComplete(m); renderSidebar(); updatePager(); }
    });
  }

  /* ---------- závěr ---------- */
  /* závěrečný test: z banky otázek se při každém pokusu vybere C.finalSize otázek rovnoměrně z lekcí (C.finalQuota) */
  function drawFinal() {
    var pool = C.finalTest.slice(), size = C.finalSize || pool.length;
    if (size >= pool.length) return shuffle(pool);
    var quota = C.finalQuota || {}, picked = [];
    Object.keys(quota).forEach(function (k) {
      picked = picked.concat(shuffle(pool.filter(function (q) { return String(q.m) === k; })).slice(0, quota[k]));
    });
    if (picked.length < size) picked = picked.concat(shuffle(pool.filter(function (q) { return picked.indexOf(q) < 0; })).slice(0, size - picked.length));
    return shuffle(picked.slice(0, size));
  }
  var finalQs = null;
  function viewFinal(m) {
    var h = '';
    h += modeBanner();
    h += '<div class="step-head"><span class="eyebrow">' + esc(m.short) + '</span><h1>' + esc(m.title) + '</h1></div>';
    h += reqPanel();
    h += '<section class="panel"><h2>1. Závěrečný test: situace z praxe</h2>';
    if (!allLessonsDone()) h += '<p class="note">Otázky vycházejí z celého kurzu. Doporučujeme ho dělat až po projití kapitol, ale není to povinné.</p>';
    if (S.final.passed) h += '<p class="feedback good">Závěrečný test máte splněný, gratulujeme: ' + Math.round(S.final.best * 100) + ' %.</p>';
    else {
      finalQs = prepQuiz(drawFinal()); if (DEMO) finalQs = finalQs.slice(0, DEMO_TEST_Q);
      h += '<p>' + finalQs.length + ' otázek ze situací, které znáte z domova. Nejde o zkoušku ani o známku, jen o to, aby se ukázalo, co si z kurzu odnesete do praxe. Stačí aspoň ' + Math.round(C.finalPass * 100) + ' %, nespěchejte a zkusit to můžete znovu.</p><form id="fform">' + quizHtml(finalQs, "f") + '<div class="row"><button class="btn" type="submit">Ukázat výsledek</button><span id="fres"></span></div></form>';
    }
    h += '</section>';
    h += '<section class="panel" id="declsec"><h2>2. Čestné prohlášení o samostudiu</h2>' + declHtml() + '</section>';
    h += '<section class="panel" id="evalsec"><h2>3. Hodnocení kurzu</h2>' + evalHtml() + '</section>';
    h += '<section id="certsec">' + certHtml() + '</section>';
    if (window.DOWNLOADS && !DEMO) h += '<section class="panel soft"><h2>Ke stažení</h2><p>Příručka (PDF) a podcast (MP3) zůstávají k dispozici i po dokončení kurzu.</p><div class="row"><button class="btn ghost small" data-act="downloads">Otevřít stránku ke stažení</button></div></section>';
    return h;
  }
  function evalHtml() {
    if (SPECIAL) return '<p class="note">V tomto režimu se hodnocení kurzu nevyžaduje.</p>';
    if (!S.final.passed) return '<p class="note">Hodnocení se zpřístupní po splnění závěrečného testu.</p>';
    var h = '<form id="eform" class="prose">';
    C.evaluation.forEach(function (q) {
      var v = S.evaluation[q.id] || "";
      if (q.type === "scale") {
        h += '<fieldset style="border:0;padding:0"><legend style="font-weight:700">' + esc(q.q) + '</legend><div class="row">';
        for (var n = 1; n <= 5; n++) h += '<label class="check" style="grid-template-columns:22px auto" for="' + q.id + n + '"><input type="radio" name="' + q.id + '" id="' + q.id + n + '" value="' + n + '"' + (+v === n ? " checked" : "") + '><span>' + n + '</span></label>';
        h += '<span class="note">(1 = vůbec, 5 = velmi)</span></div></fieldset>';
      } else h += '<label class="field" for="ev-' + q.id + '">' + esc(q.q) + '<textarea id="ev-' + q.id + '" data-e="' + q.id + '" rows="3">' + esc(v) + '</textarea></label>';
    });
    return h + '<div class="row"><button class="btn" type="submit">Uložit hodnocení</button><span id="eres">' + (evalDone() ? "Uloženo. Děkujeme." : "") + '</span></div></form>';
  }
  function reqPanel() {
    if (SPECIAL) return '<div class="panel soft"><strong>Podmínky pro osvědčení</strong><p>' + (DEMO ? 'V demo režimu se podmínky nevyžadují. Osvědčení je jen ukázka a nemá platnost.' : 'V administrátorském režimu se podmínky nevyžadují (čas, kapitoly, test, čestné prohlášení, hodnocení). Osvědčení bude označeno jako vydané bez ověření podmínek.') + '</p></div>';
    var r = req(), t = totalTime();
    function row(ok, text) { return '<li class="req ' + (ok ? "ok" : "") + '"><span class="req-ic" aria-hidden="true">' + (ok ? "✓" : "○") + '</span><span>' + text + '</span></li>'; }
    return '<div class="panel soft"><strong>Podmínky pro osvědčení</strong><ul class="reqs">' +
      row(r.lessons, "Všechny kapitoly splněné aspoň na " + Math.round(C.lessonShare * 100) + " % obsahu nebo času (splněno " + lessonsDoneCount() + " z " + (C.modules.length - 1) + ")" + (r.lessons ? "" : lessonsMissing())) +
      row(r.test, "Závěrečný test aspoň na " + Math.round(C.finalPass * 100) + " %" + (S.final.attempts ? " (nejlepší výsledek " + Math.round(S.final.best * 100) + " %)" : "")) +
      row(r.active, "Aktivní čas v kurzu aspoň " + Math.round(minActiveSec() / 60) + " min (teď " + Math.floor(t / 60) + " min" + (r.active ? "" : ", zbývá " + Math.ceil((minActiveSec() - t) / 60) + " min") + ")") +
      row(!r.needDecl || r.decl, r.needDecl ? "Čestné prohlášení o zbývajících " + remainingMin() + " min do " + C.totalMinutes + " minut" : "Plný rozsah " + C.totalMinutes + " minut odpracován v aplikaci, prohlášení není potřeba") +
      row(r.evaluation, "Hodnocení kurzu") +
      '</ul></div>';
  }
  function lessonsMissing() {
    var miss = C.modules.filter(function (m) { return !m.final && !moduleDone(m); });
    return '<br><span class="note">Chybí: ' + miss.map(function (m) { return esc(m.short) + ' (obsah ' + Math.round(contentShare(m) * 100) + ' %, čas ' + Math.min(100, Math.round(timeShare(m) * 100)) + ' %)'; }).join(", ") + '</span>';
  }
  var DECL_ACTS = [
    "Rozvaha a sebereflexe (deník, krizový plán, plánování sebepéče)",
    "Četba doporučené literatury nebo článků k tématu",
    "Diskuse s partnerem, dalšími pěstouny nebo klíčovým pracovníkem",
    "Sledování dalších zdrojů (přednášky, videa, podcasty)",
    "Nácvik technik v běžném dni (dechová cvičení, barometr s dítětem)",
    "Jiné (popíšu níže)"
  ];
  function declHtml() {
    if (SPECIAL) return '<p class="note">V tomto režimu se čestné prohlášení nevyžaduje.</p>';
    var r = req(), d = S.declaration;
    if (!r.needDecl && !d) return '<p>Odpracovali jste v aplikaci plný rozsah ' + C.totalMinutes + ' minut. Čestné prohlášení není potřeba.</p>';
    if (!r.active) return '<p class="note">Prohlášení se zpřístupní po dosažení aktivního času ' + Math.round(minActiveSec() / 60) + ' minut. Teď máte ' + Math.floor(totalTime() / 60) + ' minut.</p>';
    if (d && d.ok) return '<p class="feedback good">Prohlášení je uložené (' + d.minutes + ' min samostudia, ' + dateCz(d.at) + ').</p><p class="note">Činnosti: ' + esc(d.acts.join("; ")) + '</p><p class="note">Popis: ' + esc(d.text) + '</p>' + (S.cert ? '' : '<button class="btn ghost small" data-act="decl-edit">Upravit prohlášení</button>');
    var v = d || { acts: [], text: "" };
    var h = '<p>Do požadovaného rozsahu ' + C.totalMinutes + ' minut vám v aplikaci zbývá <strong>' + remainingMin() + ' minut</strong>. Tuto dobu můžete doložit činnostmi souvisejícími s tématem kurzu. Prohlášení ověří váš klíčový pracovník.</p>' +
      '<form id="dform" class="prose"><fieldset style="border:0;padding:0"><legend style="font-weight:700">Čemu jsem tuto dobu věnoval/a</legend><div class="checks">';
    DECL_ACTS.forEach(function (a, k) { h += '<label class="check" for="da-' + k + '"><input type="checkbox" id="da-' + k + '" data-a="' + esc(a) + '"' + (v.acts.indexOf(a) >= 0 ? " checked" : "") + '><span>' + esc(a) + '</span></label>'; });
    h += '</div></fieldset><label class="field" for="d-text">Stručně popište, jak jste dobu využili (co, kdy, s kým, přibližně kolik času)<textarea id="d-text" rows="4">' + esc(v.text) + '</textarea></label><span class="counter" id="d-cnt"></span>' +
      '<label class="check" for="d-ok"><input type="checkbox" id="d-ok"><span>Čestně prohlašuji, že jsem zbývajících ' + remainingMin() + ' minut do rozsahu ' + C.totalMinutes + ' minut věnoval/a činnostem souvisejícím s tématem kurzu, jak je popsáno výše.</span></label>' +
      '<div class="row"><button class="btn" type="submit">Potvrdit prohlášení</button><span id="d-res"></span></div></form>';
    return h;
  }
  function evalDone() { if (SPECIAL) return true; return C.evaluation.filter(function (q) { return q.type === "scale"; }).every(function (q) { return S.evaluation[q.id]; }); }
  function learnerDates() {
    var starts = C.modules.map(function (m) { return S.created; }).filter(Boolean);
    var ends = C.modules.map(function (m) { return mstate(m.id).completedAt; }).filter(Boolean).sort();
    return { from: starts[0] || null, to: (S.cert && S.cert.issuedAt) || ends[ends.length - 1] || null };
  }
  function certHtml() {
    if (!S.cert && !req().ready) return '<div class="panel"><h2>4. Osvědčení</h2><p class="note">Osvědčení vystavíte, až budou splněné všechny podmínky v přehledu nahoře.</p><button class="btn ghost small" data-act="refresh">Zkontrolovat znovu</button></div>';
    if (!S.cert) {
      return '<div class="panel"><h2>4. Osvědčení</h2><p>Zkontrolujte jméno, které bude na osvědčení.</p><form id="cform"><label class="field" for="c-name">Jméno a příjmení<input type="text" id="c-name" value="' + esc(S.learner.name) + '" required></label><label class="field" for="c-org">Doprovázející organizace<input type="text" id="c-org" value="' + esc(S.learner.org) + '"></label><div class="row"><button class="btn" type="submit">Vystavit osvědčení</button></div></form></div>';
    }
    var d = learnerDates();
    var h = '<h2 class="no-print">4. Osvědčení</h2><article class="cert" id="cert">' + (S.preview ? '<div class="wm">' + wmText() + '</div>' : '') +
      '<span class="eyebrow">Osvědčení o absolvování vzdělávacího kurzu</span><h1>' + esc(C.title) + '</h1><p>' + esc(C.subtitle) + '</p>' +
      '<p>Potvrzujeme, že</p><div><span class="name">' + esc(S.learner.name) + '</span></div>' +
      (S.learner.org ? '<p>' + esc(S.learner.org) + '</p>' : '') +
      '<p>absolvoval/a e-learningový kurz v rozsahu <strong>' + hoursText().replace(/ po 45 minutách.*/, "") + '</strong> včetně úspěšného absolvování závěrečného testu.</p>' +
      '<dl><dt>Datum vydání</dt><dd>' + dateCz(S.cert.issuedAt || d.to) + '</dd>' +
      '<dt>Obsah</dt><dd>Stres a jeho projevy; děti s traumatem; tělo a regulace; vlastní stres a vyhoření; techniky pro děti; společné aktivity a technostres; dlouhodobý a krizový plán</dd>' +
      '<dt>Autor kurzu a odborný garant</dt><dd>' + esc(C.author) + ', psycholog</dd><dt>Kontrolní kód</dt><dd class="code">' + esc(S.cert.code) + '</dd></dl>' +
      (DEMO ? '<p class="cert-mode"><strong>Ukázkové osvědčení.</strong> Slouží jen k předvedení vzhledu a nemá žádnou platnost.</p>' : ADMIN ? '<p class="cert-mode"><strong>Vydáno v administrátorském režimu bez ověření podmínek kurzu.</strong> Nelze použít k doložení absolvování.</p>' : '') +
      '<p class="note" style="font-size:.8rem;color:var(--muted)">Vzdělávání osob pečujících podle § 47a zákona č. 359/1999 Sb. Osvědčení je platné po ověření klíčovým pracovníkem doprovázející organizace, který posoudí i čestné prohlášení. O započtení do povinných 24 hodin rozhoduje doprovázející organizace. Kontrolní kód slouží k porovnání se záznamem o studiu, nejde o elektronický podpis.</p>' +
      '<div class="cert-sign"><div><span class="sl"></span>Ověřil/a klíčový pracovník' + (S.learner.kwName ? ': ' + esc(S.learner.kwName) : '') + ' (jméno, datum, podpis)</div></div></article>';
    h += '<div class="row no-print">' + (EMBEDDED ? '' : '<button class="btn" data-act="print">Vytisknout / uložit jako PDF</button><button class="btn ghost" data-act="export">Stáhnout záznam o studiu (JSON)</button>') +
      '<button class="btn ghost" data-act="copyrec">Zkopírovat potvrzení</button><span id="copyst"></span></div>';
    if (EMBEDDED) h += '<p class="note no-print">V náhledovém okně nelze tisknout ani stahovat. Pro tisk osvědčení otevřete kurz jako samostatnou stránku. Záznam o studiu můžete zkopírovat a vložit do e-mailu doprovázející organizaci.</p>';
    return h;
  }
  function record() {
    var d = learnerDates();
    return {
      kurz: C.title, verze: C.version, autor: C.author, rozsah_minut: C.totalMinutes,
      ucastnik: S.learner.name, organizace: S.learner.org, role: S.learner.role, email: S.learner.email, klicovy_pracovnik: S.learner.kwName, klicovy_pracovnik_email: S.learner.kwEmail,
      od: d.from, do: d.to, aktivni_cas_minut: Math.round(totalTime() / 60),
      bloky: C.modules.map(function (m) { var st = mstate(m.id); return { blok: m.short, minimum_minut: m.minutes, cas_minut: Math.round(st.time / 60), test: m.quiz ? Math.round(st.quiz.best * 100) + " %" : null, splneno: st.completedAt }; }),
      zaverecny_test: Math.round(S.final.best * 100) + " %", pokusu: S.final.attempts,
      splneno_lekci: lessonsDoneCount() + " / " + (C.modules.length - 1),
      samostudium_minut: S.cert ? (S.cert.selfMin || 0) : (S.declaration && S.declaration.ok ? S.declaration.minutes : 0),
      cestne_prohlaseni: S.declaration && S.declaration.ok ? { datum: S.declaration.at, cinnosti: S.declaration.acts, popis: S.declaration.text } : null,
      hodnoceni: S.evaluation, kontrolni_kod: S.cert && S.cert.code, nahled: !!S.preview, rezim: MODE
    };
  }
  function recordText() {
    var r = record(), done = !!S.cert || (req().ready && !PREVIEW);
    return "Potvrzení o absolvování kurzu – " + r.kurz + "\nÚčastník: " + r.ucastnik + (r.organizace ? " (" + r.organizace + ")" : "") +
      "\nVýsledek: " + (done ? "kurz SPLNIL/A" : "kurz zatím NESPLNIL/A") +
      (S.cert ? "\nDatum vydání osvědčení: " + dateCz(S.cert.issuedAt) + "\nKontrolní kód osvědčení: " + r.kontrolni_kod : "") +
      (r.nahled ? "\nPOZOR: vytvořeno v režimu " + modeName() + ", neplatné pro doložení." : "") +
      "\nPodrobnosti o plnění (čas, procenta, testy) se záměrně neposílají. Ověření probíhá na vytištěném osvědčení.";
  }
  function mountFinal() {
    var f = $("#fform");
    if (f) f.addEventListener("submit", function (e) {
      e.preventDefault();
      var r = gradeQuiz(f, finalQs, "f");
      if (r == null) { $("#fres").textContent = "Ještě zbývají otázky bez odpovědi. Doplňte je a zkuste to znovu."; return; }
      S.final.attempts += 1; S.final.best = Math.max(S.final.best, r);
      var pass = r >= C.finalPass;
      if (pass) { S.final.passed = true; S.final.at = new Date().toISOString(); }
      save(true);
      $("#fres").innerHTML = '<strong class="' + (pass ? "calm" : "alert") + '">Zvládli jste ' + Math.round(r * finalQs.length) + ' z ' + finalQs.length + (pass ? '. Máte splněno, gratulujeme!' : '. Skoro. Přečtěte si vysvětlení u odpovědí a zkuste to znovu, nic se neděje.') + '</strong> ' + (pass ? '<button class="btn small" type="button" data-act="refresh">Pokračovat k hodnocení</button>' : '<button class="btn ghost small" type="button" data-act="refresh">Zkusit znovu</button>');
    });
    var ef = $("#eform");
    if (ef) ef.addEventListener("submit", function (e) {
      e.preventDefault();
      C.evaluation.forEach(function (q) {
        if (q.type === "scale") { var sel = $('input[name="' + q.id + '"]:checked', ef); if (sel) S.evaluation[q.id] = +sel.value; }
        else S.evaluation[q.id] = $("#ev-" + q.id).value;
      });
      save(true);
      if (!evalDone()) { $("#eres").textContent = "Ohodnoťte prosím všechny tři škály."; return; }
      go("module", "m8");
    });
    var df = $("#dform");
    if (df) {
      var updD = function () { var n = $("#d-text").value.trim().length, c = $("#d-cnt"); c.textContent = n + " / 80 znaků"; c.classList.toggle("ok", n >= 80); };
      df.addEventListener("input", updD); updD();
      df.addEventListener("submit", function (e) {
        e.preventDefault();
        var acts = $all("input[data-a]", df).filter(function (x) { return x.checked; }).map(function (x) { return x.getAttribute("data-a"); });
        var text = $("#d-text").value.trim();
        var msg = !acts.length ? "Vyberte aspoň jednu činnost." : text.length < 80 ? "Popište prosím využití času aspoň 80 znaky." : !$("#d-ok").checked ? "Potvrďte prosím prohlášení zaškrtnutím." : "";
        if (msg) { $("#d-res").textContent = msg; return; }
        S.declaration = { ok: true, at: new Date().toISOString(), minutes: remainingMin(), acts: acts, text: text };
        save(true); go("module", "m8");
      });
    }
    var cf = $("#cform");
    if (cf) cf.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = $("#c-name").value.trim(); if (!name) return;
      S.learner.name = name; S.learner.org = $("#c-org").value.trim();
      var issued = new Date().toISOString(), activeMin = Math.floor(totalTime() / 60);
      var selfMin = S.declaration && S.declaration.ok ? Math.min(S.declaration.minutes, Math.max(0, C.totalMinutes - activeMin)) : 0;
      S.cert = { issuedAt: issued, activeMin: activeMin, selfMin: selfMin, mode: MODE, code: (DEMO ? "D" : ADMIN ? "A" : "") + (DEMO ? "" : "") + code([C.id, MODE, name, S.created, issued, activeMin, selfMin, Math.round(S.final.best * 100)].join("|")) };
      S.modules.m8.completedAt = issued;
      save(true); go("module", "m8");
    });
  }

  /* ---------- mluvené slovo a podcast ---------- */
  var EPISODES = ((window.PODCAST && window.PODCAST.episodes) || []).filter(function (e) { return demoAllowed(e.mod); });
  var SPK = (window.PODCAST && window.PODCAST.speakers) || {};
  var autoNext = true;
  function epMinutes(e) {
    var words = e.lines.reduce(function (a, l) { return a + l[1].split(/\s+/).length; }, 0);
    return Math.max(1, Math.round(words / 125));
  }
  /* výslovnost zkratek pro syntézu řeči (text na obrazovce se nemění) */
  var TTS_LEX = { OSPOD: "Ospod", SPOD: "Spod", WHO: "Světová zdravotnická organizace", PACE: "pejs", "MKN-11": "em ká en jedenáct",
    TED: "ted", "ČR": "Čé er", EMDR: "í em dý ár", FAS: "ef á es", QD85: "kvé dé osmdesát pět", DDP: "dé dé pé", NRP: "en er pé", ADHD: "á dé há dé" };
  function ttsClean(t) {
    return String(t)
      .replace(/https?:\/\/\S+/g, "")
      .replace(/§\s*/g, "paragraf ")
      .replace(/(\d)\s*%/g, "$1 procent")
      .replace(/\bnapř\./g, "například").replace(/\btzv\./g, "takzvaně").replace(/\bč\.\s*/g, "číslo ")
      .replace(/→/g, ", potom ").replace(/\s[–-]\s/g, ", ")
      .replace(/(\d+)\/(\d{4}) Sb\./g, "$1 z roku $2 Sbírky")
      .replace(/5-4-3-2-1/g, "pět, čtyři, tři, dva, jedna").replace(/\s\/\s/g, " nebo ")
      .replace(/(\d+)\s*[–-]\s*(\d+)/g, "$1 až $2")
      .replace(/(\d)\s*=\s*/g, "$1 znamená ")
      .replace(/(\d{1,2}):(\d{2})/g, "$1 hodin $2")
      .replace(/\b[A-ZČŘ][A-ZČŘ0-9-]+\b/g, function (w) { return TTS_LEX[w] || w; })
      .replace(/\s+/g, " ").trim();
  }
  function transcriptUrl(e) {
    var D = window.DOWNLOADS, f = null;
    if (D && D.podcast) D.podcast.episodes.forEach(function (x) { if (x.id === e.id) f = x.file; });
    return f ? f.replace(/^podcast\//, "download/prepis/").replace(/\.mp3$/, ".pdf") : null;
  }
  function listenBar(m) {
    if (!window.Speaker) return "";
    var eps = EPISODES.filter(function (e) { return e.mod === m.id; });
    var h = '<div class="listen no-print"><button class="btn ghost small" data-act="listen-page" title="Předčíst text zobrazené části kapitoly">🎧 Poslechnout tuto kapitolu</button>';
    if (eps.length) {
      h += '<span class="listen-label">Podcast k lekci:</span>' + eps.map(function (e, k) {
        var tu = transcriptUrl(e);
        return '<span class="ep-group"><button class="btn ghost small" data-act="play-ep" data-ep="' + e.id + '" title="' + epMinutes(e) + ' min">▶ ' + (k + 1) + '. ' + esc(e.title) + '</button>' +
          (tu ? '<a class="btn ghost small" href="' + esc(tu) + '" target="_blank" rel="noopener" title="Textový přepis podcastu (PDF), otevře se v novém okně, lze stáhnout">Přepis (PDF)</a>' : '') + '</span>';
      }).join("");
    }
    return h + '</div>';
  }
  function pageItems() {
    var body = $("#stepbody"); if (!body) return [];
    var SEL = "h2, h3, p, li, blockquote, tr, .line, legend, .check > span, .sort-item > span, .opt, .likert .stmt, .rung, .slug";
    var nodes = $all(SEL, body).filter(function (el) {
      if (el.closest(".pacer, .baro, .feedback, .counter, .nota-odb")) return false;
      var par = el.parentElement;
      while (par && par !== body) { if (par.matches(SEL)) return false; par = par.parentElement; }
      return true;
    });
    $all("[data-line]", body).forEach(function (el) { el.removeAttribute("data-line"); });
    var items = [];
    nodes.forEach(function (el) {
      var who = "nar", text;
      if (el.classList.contains("line")) {
        var w = el.querySelector(".who");
        if (w) who = ["jan", "klara", "marek"].filter(function (r) { return w.classList.contains(r); })[0] || "nar";
        var said = el.querySelector(".said, .direction"); text = said ? said.textContent : "";
      } else {
        var cl = el.cloneNode(true);
        $all(".tag, input, textarea, select, .counter", cl).forEach(function (x) { x.remove(); });
        if (el.tagName === "TR") text = $all("th, td", cl).map(function (c) { return c.textContent.trim(); }).filter(Boolean).join(". ");
        else text = cl.textContent;
      }
      text = ttsClean(text);
      if (!text) return;
      el.setAttribute("data-line", items.length);
      items.push({ who: who, text: text });
    });
    return items;
  }
  function listenPage() {
    var body = $("#stepbody"); if (!body) return;
    var m = mod(R.mod), items = pageItems();
    var stepTitle = (m.quiz && R.step === m.steps.length) ? "Ověřte si, co víte" : m.steps[R.step].title;
    Speaker.play(items, { id: body.getAttribute("data-src"), title: m.short + " · " + stepTitle, mod: m.id, kind: "page" });
  }
  function playEpisode(id) {
    var e = EPISODES.filter(function (x) { return x.id === id; })[0]; if (!e) return;
    var items = e.lines.map(function (l) { return { who: l[0], text: ttsClean(l[1]) }; });
    var n = EPISODES.filter(function (x) { return x.mod === e.mod; }).indexOf(e) + 1;
    Speaker.play(items, { id: "ep-" + e.id, ep: e.id, title: "Podcast · " + mod(e.mod).short + " · díl " + n + ": " + e.title, mod: e.mod, kind: "ep" });
  }
  /* pro generátor nahrávek: všechny promluvy kurzu tak, jak je přehrávač posílá (tools/extract_tts.js) */
  window.__ttsAll = function () {
    var out = [];
    EPISODES.forEach(function (e) { e.lines.forEach(function (l) { out.push({ src: "ep-" + e.id, who: l[0], text: ttsClean(l[1]) }); }); });
    C.modules.forEach(function (m) {
      if (m.final) return;
      for (var i = 0; i < stepCount(m); i++) {
        go("module", m.id, i);
        pageItems().forEach(function (it) { out.push({ src: "page-" + m.id + "-" + i, who: it.who, text: it.text }); });
      }
    });
    go("home");
    return out;
  };
  function loadAudioIndex() {
    var base = (window.PODCAST && window.PODCAST.audioBase) || "";
    if (!base || !window.Speaker || !window.fetch) return;
    if (base.charAt(base.length - 1) !== "/") base += "/";
    fetch(base + "index.json", { cache: "no-cache" }).then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) { if (j && j.keys) Speaker.setFiles(base, j.keys, j.jingle, j.version); })
      .catch(function () { /* bez nahrávek: čte syntéza prohlížeče */ });
  }
  loadAudioIndex();
  function mountAvatars() {
    if (!window.Avatars) return;
    $all(".av-slot").forEach(function (slot) {
      if (slot.firstChild) return;
      slot.appendChild(Avatars.studio(slot.getAttribute("data-roles").split(",")));
    });
    if (window.Speaker) { var s = Speaker.state(); Avatars.speaker(s.playing ? s.who : null); }
  }
  function highlight() {
    if (!window.Speaker) return;
    var s = Speaker.state();
    $all(".speaking").forEach(function (el) { el.classList.remove("speaking"); });
    $all("[data-ep].is-on").forEach(function (el) { el.classList.remove("is-on"); });
    if (!s.meta) return;
    if (s.meta.ep) $all('[data-ep="' + s.meta.ep + '"]').forEach(function (el) { el.classList.add("is-on"); });
    if (s.line < 0 || !s.meta.id) return;
    var root = document.querySelector('[data-src="' + s.meta.id + '"]'); if (!root) return;
    var el = root.querySelector('[data-line="' + s.line + '"]'); if (!el) return;
    el.classList.add("speaking");
    if (s.playing && el.getBoundingClientRect && (!el.closest("details") || el.closest("details").open)) {
      var r = el.getBoundingClientRect();
      if (r.top < 80 || r.bottom > window.innerHeight - 120) el.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }
  if (window.Speaker) {
    Speaker.onChange(function (s) {
      highlight();
      if (autoNext && s.meta && s.meta.kind === "ep" && s.meta.finished && !s.meta.advanced && R.view === "podcast") {
        s.meta.advanced = true;
        var k = EPISODES.findIndex(function (e) { return e.id === s.meta.ep; });
        if (k >= 0 && k + 1 < EPISODES.length) setTimeout(function () { playEpisode(EPISODES[k + 1].id); }, 1200);
      }
    });
  }
  function viewPodcast() {
    var P = window.PODCAST;
    var total = EPISODES.reduce(function (a, e) { return a + epMinutes(e); }, 0);
    var h = '<div class="step-head"><span class="eyebrow">Mluvené slovo</span><h1>Podcast ' + esc(P.title) + '</h1>' +
      '<p class="lede">' + esc(P.subtitle) + '. ' + EPISODES.length + ' dílů, zhruba ' + total + ' minut poslechu. Rozhovor vede rodinná psycholožka Klára s psychologem Janem, k některým dílům se přidává pěstoun Marek.</p></div>';
    h += '<div class="panel soft"><p>Díly navazují na lekce a hrají jeden po druhém. Poslech se započítá do aktivního času příslušné lekce, pokud je lekce odemčená a stránka je otevřená. Tempo přehrávání nastavíte v přehrávači dole.</p>' +
      (DEMO ? '<p class="note">V demo režimu jsou dostupné jen díly k ukázkovým blokům.</p>' : '') + '<p class="note">' + (window.Speaker && Speaker.fileCount() ? 'Díly hrají z předgenerovaných nahrávek. Kde nahrávka chybí, dočte text syntéza řeči prohlížeče.' : 'Díly zatím čte syntéza řeči vašeho prohlížeče, takže kvalita hlasu závisí na zařízení. Nejpřirozeněji zní české hlasy „Online (Natural)“ v Microsoft Edge.') + ' Přepis každého dílu najdete pod jeho názvem.</p>' +
      (window.Speaker && !Speaker.supported ? '<p class="feedback bad">Tento prohlížeč neumí předčítat text. Použijte přepisy nebo jiný prohlížeč.</p>' : '') +
      '<div class="row"><button class="btn" data-act="play-ep" data-ep="' + (EPISODES[0] ? EPISODES[0].id : "") + '">▶ Přehrát od začátku</button></div></div>' +
      '<div class="av-slot" data-roles="klara,jan,marek"></div>';
    C.modules.forEach(function (m, mi) {
      var eps = EPISODES.filter(function (e) { return e.mod === m.id; });
      if (!eps.length) return;
      if (!demoAllowed(m.id)) { h += '<section class="panel"><h3>' + esc(m.title) + '</h3><p class="note">Díly k tomuto bloku jsou součástí plné verze.</p></section>'; return; }
      var ok = unlocked(mi);
      h += '<section class="panel"><h3>' + esc(m.title) + '</h3>' + (ok ? '' : '<p class="note">Po zadání jména na úvodní stránce se poslech začne započítávat do aktivního času.</p>');
      eps.forEach(function (e, k) {
        h += '<div class="ep"><div class="row"><button class="btn small" data-act="play-ep" data-ep="' + e.id + '" aria-label="Přehrát díl ' + esc(e.title) + '">▶</button><strong>' + (k + 1) + '. ' + esc(e.title) + '</strong><span class="note">' + epMinutes(e) + ' min</span></div>' +
          '<details><summary>Přepis</summary><div class="transcript" data-src="ep-' + e.id + '">' +
          e.lines.map(function (l, li) { return '<p class="tline" data-line="' + li + '"><b class="who ' + l[0] + '">' + esc(SPK[l[0]] || l[0]) + ':</b> ' + esc(l[1]) + '</p>'; }).join("") +
          '</div></details></div>';
      });
      h += '</section>';
    });
    return h;
  }

  /* ---------- zápis účastníka ---------- */
  var ROLES_L = ["pěstoun / pěstounka", "osoba pečující", "osoba v evidenci", "pracovník doprovázející organizace", "jiné"];
  function enrollForm() {
    var L = S.learner;
    return '<form class="panel" id="regform"><h3>Zápis do kurzu</h3><p>Zapište se, abyste mohli začít. Údaje se ukládají jen ve vašem prohlížeči (viz <button class="linkbtn" type="button" data-act="info">Informace a soukromí</button>) a objeví se na osvědčení a v záznamu o studiu.</p>' +
      '<label class="field" for="lname">Jméno a příjmení *<input type="text" id="lname" autocomplete="name" required value="' + esc(L.name) + '"></label>' +
      '<label class="field" for="lrole">Kdo jste<select id="lrole"><option value="">– vyberte –</option>' + ROLES_L.map(function (r) { return '<option' + (L.role === r ? " selected" : "") + '>' + esc(r) + '</option>'; }).join("") + '</select></label>' +
      '<label class="field" for="lemail">E-mail (nepovinný; hodí se pro odeslání záznamu o studiu)<input type="email" id="lemail" autocomplete="email" value="' + esc(L.email) + '"></label>' +
      '<label class="field" for="lorg">Doprovázející organizace (nepovinné)<input type="text" id="lorg" autocomplete="organization" value="' + esc(L.org) + '"></label>' +
      '<fieldset class="subset"><legend>Váš klíčový pracovník (nepovinné)</legend><label class="field" for="lkwn">Jméno klíčového pracovníka<input type="text" id="lkwn" value="' + esc(L.kwName) + '"></label>' +
      '<label class="field" for="lkwe">E-mail klíčového pracovníka<input type="email" id="lkwe" value="' + esc(L.kwEmail) + '"></label>' +
      '<p class="note">Klíčový pracovník ověřuje čestné prohlášení a osvědčení. Stručné potvrzení o splnění mu pošlete sami tlačítkem v části Můj účet.</p></fieldset>' +
      '<label class="check" for="lc1"><input type="checkbox" id="lc1" required' + (L.consentAt ? " checked" : "") + '><span>Přečetl/a jsem <button class="linkbtn" type="button" data-act="info">informace o provozovateli a zpracování údajů</button> a souhlasím s uložením svých údajů v tomto prohlížeči.</span></label>' +
      '<label class="check" for="lc2"><input type="checkbox" id="lc2" required' + (L.consentAt ? " checked" : "") + '><span>Beru na vědomí, že kurz je vzdělávací a není terapií ani náhradou odborné pomoci.</span></label>' +
      '<div class="row"><button class="btn" type="submit">' + (S.learner.name ? 'Uložit údaje' : 'Zapsat se a začít kurz') + '</button></div></form>';
  }
  function saveEnroll() {
    var n = $("#lname").value.trim(); if (!n) return false;
    var L = S.learner;
    L.name = n; L.role = $("#lrole").value; L.email = $("#lemail").value.trim(); L.org = $("#lorg").value.trim();
    L.kwName = $("#lkwn").value.trim(); L.kwEmail = $("#lkwe").value.trim();
    var now = new Date().toISOString();
    if (!L.enrolledAt) L.enrolledAt = now; L.consentAt = now;
    if (!S.created) S.created = now;
    save(true); return true;
  }
  function viewAccount() {
    var L = S.learner, r = req(), t = totalTime();
    var h = modeBanner() + '<div class="step-head"><span class="eyebrow">Účastnický účet</span><h1>Můj účet</h1><p class="lede">Váš profil a postup v kurzu. Vše je uložené jen v tomto prohlížeči, proto si postup občas zálohujte.</p></div>';
    if (!L.name) return h + enrollForm();
    h += '<section class="panel"><h2>Profil</h2><dl class="kv"><dt>Jméno</dt><dd>' + esc(L.name) + '</dd>' +
      (L.role ? '<dt>Kdo jste</dt><dd>' + esc(L.role) + '</dd>' : '') + (L.email ? '<dt>E-mail</dt><dd>' + esc(L.email) + '</dd>' : '') +
      (L.org ? '<dt>Doprovázející organizace</dt><dd>' + esc(L.org) + '</dd>' : '') +
      (L.kwName || L.kwEmail ? '<dt>Klíčový pracovník</dt><dd>' + esc(L.kwName) + (L.kwEmail ? ' (' + esc(L.kwEmail) + ')' : '') + '</dd>' : '') +
      '<dt>Zapsán/a</dt><dd>' + (L.enrolledAt ? dateCz(L.enrolledAt) : "–") + '</dd></dl>' +
      '<details><summary>Upravit údaje</summary>' + enrollForm() + '</details></section>';
    h += '<section class="panel"><h2>Postup v kurzu</h2><div class="progress-table"><div class="pt-row pt-head"><span>Blok</span><span>Čas</span><span>Kroky</span><span>Test</span><span>Stav</span></div>';
    C.modules.forEach(function (m) {
      var st = mstate(m.id), done = moduleDone(m), n = m.steps ? m.steps.length : 0, dn = m.steps ? m.steps.filter(function (_, i) { return st.done[i]; }).length : 0;
      h += '<div class="pt-row"><span>' + esc(m.short) + '</span><span>' + fmtMin(st.time) + '/' + m.minutes + ' min</span><span>' + (m.final ? "–" : dn + "/" + n) + '</span><span>' +
        (m.quiz ? (st.quiz.attempts ? Math.round(st.quiz.best * 100) + " %" : "–") : (m.final ? (S.final.attempts ? Math.round(S.final.best * 100) + " %" : "–") : "")) + '</span><span>' + (done ? "✓ splněno" : (st.time > 0 ? "rozpracováno" : "nezačato")) + '</span></div>';
    });
    h += '</div><p class="note">Aktivní čas celkem: <strong>' + hm(t) + '</strong> z ' + hoursNum() + ' h (minimum ' + Math.round(C.totalMinutes * C.minActiveShare / 60 * 10) / 10 + ' h). Hodnocení kurzu: ' + (evalDone() && S.final.passed ? "vyplněno" : "zatím ne") + '. Osvědčení: ' + (S.cert ? "vystaveno " + dateCz(S.cert.issuedAt) + " (kód " + esc(S.cert.code) + ")" : (r.ready ? "lze vystavit" : "zatím ne")) + '.</p></section>';
    h += backupBox(true);
    h += '<section class="panel"><h2>Pro klíčového pracovníka</h2><p>Klíčovému pracovníkovi můžete poslat jen <strong>stručné potvrzení, zda jste kurz splnili</strong>. Procenta, časy ani výsledky kvízů se neposílají. Nic se neodesílá automaticky. E-mail si před odesláním zkontrolujete.</p><div class="row">' +
      (L.kwEmail ? '<a class="btn" id="mailkw" href="' + mailtoRecord() + '">Napsat klíčovému pracovníkovi (potvrzení)</a>' : '') +
      '<button class="btn ghost" data-act="copyrec">Zkopírovat potvrzení</button><span id="copyst"></span></div>' + (L.kwEmail ? '' : '<p class="note">Doplňte e-mail klíčového pracovníka v profilu, ať se vám nabídne rovnou e-mail.</p>') + '</section>';
    h += '<section class="panel"><h2>Moje údaje</h2><p>Údaje jsou jen ve vašem prohlížeči. Kdykoli je můžete smazat (zmizí postup i osvědčení v tomto zařízení).</p><div class="row"><button class="btn ghost small" data-act="reset-ask">Smazat všechna moje data</button><span id="resetbox"></span></div></section>';
    return h;
  }
  function mailtoRecord() {
    var L = S.learner, body = recordText();
    if (body.length > 1500) body = body.slice(0, 1500) + "\n…(celý záznam zkopírujte tlačítkem v kurzu)";
    return "mailto:" + (L.kwEmail || "").replace(/[^A-Za-z0-9@._+-]/g, "") + "?subject=" + encodeURIComponent("Potvrzení o absolvování: " + C.title + " (" + L.name + ")") + "&body=" + encodeURIComponent(body);
  }
  function opLine(label, v) { return v ? '<dt>' + label + '</dt><dd>' + esc(v) + '</dd>' : ""; }
  function missingOperator() {
    var o = C.operator || {}, miss = []; ["ico", "address", "email"].forEach(function (k) { if (!o[k]) miss.push({ ico: "IČO", address: "sídlo", email: "e-mail" }[k]); }); return miss;
  }
  function viewInfo() {
    var o = C.operator || {}, miss = missingOperator();
    var h = modeBanner() + '<div class="step-head"><span class="eyebrow">Informace</span><h1>Informace a soukromí</h1><p class="lede">Kdo kurz provozuje, co kurz je a není, jak nakládáme s údaji a co ukládá váš prohlížeč.</p></div>';
    if (ADMIN && miss.length) h += '<div class="banner warn">Pozor (vidíte jen v admin režimu): v <code>COURSE.operator</code> chybí ' + miss.join(", ") + '. Vyplňte je v js/content-1.js.</div>';
    h += '<section class="panel"><h2>Provozovatel kurzu</h2><dl class="kv"><dt>Provozovatel</dt><dd>' + esc(o.name || C.author) + (o.legalForm ? ', ' + esc(o.legalForm) : '') + '</dd>' +
      opLine("IČO", o.ico) + opLine("DIČ", o.dic) + opLine("Sídlo / místo podnikání", o.address) + opLine("Zápis v rejstříku", o.register) + opLine("E-mail", o.email) + opLine("Telefon", o.phone) + opLine("Web", o.web) + opLine("Akreditace", o.accreditation) + '</dl>' +
      '<p>Kurz provozuje fyzická osoba podnikající, nikoli škola ani vzdělávací instituce se zvláštním postavením. Autorem obsahu je ' + esc(C.author) + '.</p></section>';
    h += '<section class="panel"><h2>Co kurz je a co není</h2><ul><li>Kurz je <strong>vzdělávací</strong>: přináší informace a praktické techniky pro zvládání stresu u pěstounů a osob pečujících.</li>' +
      '<li>Není to <strong>terapie, zdravotní služba ani individuální poradenství</strong> a nenahrazuje odbornou pomoc.</li>' +
      '<li>Příklady a postavy v kurzu jsou modelové. Podobnost se skutečnými osobami je náhodná.</li>' +
      '<li>Informace jsou obecné. Při rozhodování v konkrétním případě se poraďte s odborníkem. Za rozhodnutí učiněná na základě kurzu provozovatel nenese odpovědnost.</li>' +
      '<li>Když vás přemáhá tíseň, můžete zavolat na <strong>Linku první psychické pomoci 116 123</strong>. V ohrožení života volejte <strong>112</strong>.</li></ul></section>';
    h += '<section class="panel"><h2>Osvědčení a započtení vzdělávání</h2><ul><li>Osvědčení o absolvování vydává provozovatel po splnění podmínek kurzu (viz přehled kurzu). Čestné prohlášení a osvědčení ověřuje váš klíčový pracovník.</li>' +
      '<li>O započtení do povinného vzdělávání osob pečujících (§ 47a zákona č. 359/1999 Sb.) rozhoduje <strong>doprovázející organizace</strong>. Před zahájením se s ní proto domluvte, zda kurz uzná.</li>' +
      '<li>Kontrolní kód na osvědčení slouží k porovnání se záznamem o studiu. Nejde o elektronický podpis.</li></ul></section>';
    h += '<section class="panel"><h2>Umělá inteligence v kurzu</h2><p>Hlasy v podcastu a v předčítání textu jsou <strong>syntetické (vytvořené umělou inteligencí)</strong>. Odborný obsah kurzu napsal a zodpovídá za něj autor.</p></section>';
    h += '<section class="panel"><h2>Cookies a ukládání v prohlížeči</h2><ul><li>Kurz <strong>nepoužívá cookies</strong>, neobsahuje analytické ani reklamní nástroje a nenačítá písma ani skripty z cizích serverů.</li>' +
      '<li>Váš postup, jméno a odpovědi ukládá do <strong>úložiště vašeho prohlížeče</strong> (localStorage). Je technicky nezbytné pro fungování kurzu, proto k němu nepotřebujeme souhlas formou lišty. Zůstává jen ve vašem zařízení.</li>' +
      '<li>Údaje smažete v části Můj účet nebo smazáním dat webu v prohlížeči.</li></ul></section>';
    h += '<section class="panel"><h2>Ochrana osobních údajů</h2><dl class="kv"><dt>Správce</dt><dd>' + esc(o.name || C.author) + (o.email ? ', ' + esc(o.email) : '') + '</dd>' +
      '<dt>Jaké údaje</dt><dd>Jméno, volitelně e-mail, role, doprovázející organizace a klíčový pracovník, postup v kurzu a odpovědi v cvičeních a testech.</dd>' +
      '<dt>Účel</dt><dd>Vedení vašeho studia, vystavení osvědčení a doložení absolvování klíčovému pracovníkovi.</dd>' +
      '<dt>Kde jsou uloženy</dt><dd>Jen ve vašem prohlížeči. Provozovatel k nim nemá přístup a automaticky je nikam neodesílá. Dál se dostanou jen tehdy, když je sami pošlete (e-mailem klíčovému pracovníkovi, vytištěním osvědčení).</dd>' +
      '<dt>Právní základ</dt><dd>Váš souhlas daný při zápisu. Můžete ho kdykoli odvolat smazáním údajů v části Můj účet.</dd>' +
      '<dt>Hosting</dt><dd>Stránky jsou na službě GitHub Pages. Poskytovatel může při zobrazení stránky zpracovávat technické údaje (například IP adresu) podle svých zásad.</dd>' +
      '<dt>Vaše práva</dt><dd>Přístup, oprava, výmaz, omezení zpracování, přenositelnost a stížnost u Úřadu pro ochranu osobních údajů (www.uoou.cz).</dd></dl></section>';
    h += '<section class="panel"><h2>Autorská práva</h2><p>Obsah kurzu a příručky je autorským dílem (' + esc(C.author) + '). Pro vlastní studium ho můžete používat a tisknout. Další šíření nebo úpravy vyžadují souhlas autora.</p></section>';
    h += '<p class="note">Verze kurzu ' + esc(C.version) + '. Znění těchto informací může být aktualizováno spolu s kurzem.</p>';
    return h;
  }

  /* ---------- ke stažení ---------- */
  function dlQ() { return (window.DOWNLOADS && window.DOWNLOADS.podcast && window.DOWNLOADS.podcast.version) ? '?v=' + window.DOWNLOADS.podcast.version : ''; }
  function dlBase() { return (window.PODCAST && window.PODCAST.audioBase) || ""; }
  function viewDownloads() {
    var D = window.DOWNLOADS || {}, h = '<div class="step-head"><span class="eyebrow">Materiály</span><h1>Ke stažení</h1><p class="lede">Příručku i podcast si můžete uložit do telefonu nebo počítače a vracet se k nim i bez internetu.</p></div>';
    if (D.pdf) {
      h += '<section class="panel"><h2>Příručka (PDF)</h2><p>Celý obsah kurzu v jednom dokumentu: výklad, scény, cvičení k vyplnění, shrnutí lekcí, zdroje a přepisy podcastu. Hodí se i k vytištění.</p>' +
        '<div class="row"><a class="btn" href="' + esc(D.pdf.file) + '" download>Stáhnout příručku (PDF, ' + D.pdf.pages + ' stran, ' + D.pdf.mb + ' MB)</a></div></section>';
    }
    if (D.podcast) {
      var pc = D.podcast;
      h += '<section class="panel"><h2>Podcast (MP3)</h2><p>Rozhovory k lekcím jako samostatné soubory, ke každému dílu i textový přepis (PDF). Poslouchat je můžete v autě, na procházce nebo v jakékoli aplikaci na podcasty či přehrávači.</p>' +
        '<div class="row"><a class="btn" href="' + esc(dlBase() + pc.full.file + dlQ()) + '" download>Stáhnout celý podcast (MP3, ' + Math.round(pc.full.min) + ' min, ' + pc.full.mb + ' MB)</a></div>' +
        '<h3>Jednotlivé díly</h3><ul class="dl-list">' + pc.episodes.map(function (e, k) {
          return '<li><a href="' + esc(dlBase() + e.file + dlQ()) + '" download>Díl ' + (k + 1) + ': ' + esc(e.title) + '</a> <span class="note">' + e.min.toString().replace(".", ",") + ' min, ' + e.mb + ' MB</span> · <a href="' + esc(e.file.replace(/^podcast\//, "download/prepis/").replace(/\.mp3$/, ".pdf")) + '" target="_blank" rel="noopener">přepis (PDF)</a></li>';
        }).join('') + '</ul></section>';
    }
    if (D.materials && D.materials.length) {
      h += '<section class="panel"><h2>Prezentace k lekcím (PDF)</h2><p>Prezentace lektorů ke stažení a k prohlédnutí.</p><ul class="dl-list">' +
        D.materials.map(function (t) { return '<li><a href="' + esc(t.file) + '" download>' + esc(t.title) + '</a> <span class="note">' + t.pages + ' stran, ' + t.mb + ' MB' + (t.note ? ' · ' + esc(t.note) : '') + '</span></li>'; }).join('') + '</ul></section>';
    }
    if (D.templates && D.templates.length) {
      h += '<section class="panel"><h2>Pro doprovázející organizace a klíčové pracovníky</h2><p>Šablona osvědčení o absolvování kurzu s vyplnitelnými údaji a pokyny. Osvědčení se standardně vystavuje v aplikaci, šablona se hodí pro organizace, které si ho vedou vlastním způsobem.</p><ul class="dl-list">' +
        D.templates.map(function (t) { return '<li><a href="' + esc(t.file) + '" download>' + esc(t.title) + '</a> <span class="note">' + t.kb + ' kB</span></li>'; }).join('') + '</ul></section>';
    }
    h += '<p class="note">Hlasy v podcastu i v předčítání jsou syntetické (generované umělou inteligencí). Obsah kurzu i příručky je autorský (Mgr. Petr Hroch).</p>';
    return h;
  }

  /* ---------- deník ---------- */
  function viewJournal() {
    var h = '<div class="step-head"><span class="eyebrow">Jen pro vás</span><h1>Můj deník</h1><p class="lede">Vaše reflexe, plány a výstupy z cvičení na jednom místě.</p></div>';
    h += '<div class="row no-print"><button class="btn ghost small" data-act="copyjournal">Zkopírovat celý deník</button>' + (EMBEDDED ? "" : '<button class="btn ghost small" data-act="print">Vytisknout</button>') + '<span id="copyst"></span></div>';
    var any = false;
    C.modules.forEach(function (m) {
      var items = journalItems(m);
      if (!items.length) return;
      any = true;
      h += '<section class="panel"><h3>' + esc(m.title) + '</h3>' + items.map(function (it) { return '<div class="journal-entry"><span class="q">' + esc(it[0]) + '</span><span class="a">' + esc(it[1]) + '</span></div>'; }).join("") + '</section>';
    });
    if (!any) h += '<div class="panel"><p>Deník je zatím prázdný. Naplní se reflexemi a výstupy z cvičení, jak budete kurzem procházet. Například v bloku 0 zapíšete, s čím do kurzu vstupujete, a v lekci 1 si zmapujete své stresory.</p></div>';
    if (S.declaration && S.declaration.ok) h += '<section class="panel"><h3>Čestné prohlášení o samostudiu</h3><div class="journal-entry"><span class="q">' + S.declaration.minutes + ' min · ' + esc(S.declaration.acts.join("; ")) + '</span><span class="a">' + esc(S.declaration.text) + '</span></div></section>';
    h += '<section class="panel soft"><h3>Kontakty pro těžké chvíle</h3><p>Linka první psychické pomoci <strong>116 123</strong> · Rodičovská linka <strong>606 021 021</strong> · Linka bezpečí (děti) <strong>116 111</strong> · Ohrožení života <strong>155 / 112</strong></p></section>';
    return h;
  }
  function journalItems(m) {
    var out = [];
    m.steps.forEach(function (s) {
      var v = inp(s.id); if (v == null || v === "") return;
      switch (s.type) {
        case "reflect": if (String(v).trim()) out.push([s.title, v]); break;
        case "checklist": if (v.length) out.push([s.title, v.join("\n") + (inp(s.id + "-other") ? "\n" + inp(s.id + "-other") : "")]); break;
        case "task": if (v.commit) out.push([s.title, "Závazek: " + s.commit + (v.date ? " Začátek: " + dateCz(v.date) : "")]); break;
        case "mirror": if (v.l && v.l.length) { var sc = mirrorScore(v); out.push([s.title, "Vyčerpání: " + sc + "/25 · signály: " + (v.s || []).length + "/5 · baterie: " + (v.bat == null ? "–" : v.bat + " %") + (v.one ? "\nMalá věc pro sebe: " + v.one : "")]); } break;
        case "ladder": out.push([s.title, s.situations.map(function (x, k) { return x + ": " + (v[k] ? RUNG[v[k]][0] : "–"); }).join("\n")]); break;
        case "barometer": out.push([s.title, "Můj stupeň: " + (v.lvl || "–") + (v.help ? " · pomůže mi: " + v.help : "") + "\nKarta pro dítě – 3: " + (v.c3 || "–") + " · 6: " + (v.c6 || "–") + " · 9: " + (v.c9 || "–")]); break;
        case "phases": out.push([s.title, "Fáze: " + s.phases[v][0]]); break;
        case "grounding54321": out.push([s.title, (v || []).map(function (g) { return (g || []).filter(Boolean).join(", "); }).filter(Boolean).join("\n")]); break;
        case "glimmers": out.push([s.title, v.filter(function (g) { return g.what; }).map(function (g) { return g.what + " → " + (g.body || ""); }).join("\n")]); break;
        case "crisisplan": out.push([s.title, "Varovné signály: " + (v.signs || "–") + "\nZáchranné lano: " + (v.lifeline || "–") + "\nVystřídá mě: " + (v.tell || "–") + "\nDoplňování nádoby: " + v.acts.filter(function (a) { return a && a.what; }).map(function (a) { return a.what + " (" + (a.when || "?") + ", hlídá: " + (a.who || "?") + ")"; }).join("; ") + "\nMantra: " + (v.mantra || "–")]); break;
        case "mediaplan": if (v.age) out.push([s.title, v.age + "\n" + v.rules.concat(v.own ? [v.own] : []).map(function (r, k) { return (k + 1) + ". " + r; }).join("\n")]); break;
        case "case": break;
      }
    });
    return out;
  }
  function journalText() {
    var t = "Můj deník – " + C.title + "\n\n";
    C.modules.forEach(function (m) { var it = journalItems(m); if (it.length) { t += "== " + m.title + " ==\n"; it.forEach(function (x) { t += "• " + x[0] + "\n" + x[1] + "\n\n"; }); } });
    return t;
  }

  /* ---------- akce ---------- */
  function copy(text) {
    var st = $("#copyst");
    function fallback() {
      var ta = document.createElement("textarea"); ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      var ok = false; try { ok = document.execCommand("copy"); } catch (e) { /* */ }
      document.body.removeChild(ta);
      if (st) st.textContent = ok ? "Zkopírováno." : "Kopírování se nepodařilo. Označte text ručně.";
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { if (st) st.textContent = "Zkopírováno."; }, fallback);
    else fallback();
  }

  app.addEventListener("click", function (e) {
    var b = e.target.closest("[data-act]"); if (!b || b.disabled) return;
    var a = b.getAttribute("data-act");
    if (a === "opennav") { app.classList.add("nav-open"); return; }
    if (a === "closenav") { app.classList.remove("nav-open"); return; }
    app.classList.remove("nav-open");
    if (a === "open") {
      var id = b.getAttribute("data-mod"), m = mod(id);
      var first = 0; if (!m.final) { for (var k = 0; k < stepCount(m); k++) { if (!stepDone(m, k)) { first = k; break; } first = k; } if (mstate(id).completedAt) first = 0; }
      go("module", id, first);
    }
    else if (a === "home") go("home");
    else if (a === "journal") go("journal");
    else if (a === "podcast") go("podcast");
    else if (a === "downloads") go("downloads");
    else if (a === "account") go("account");
    else if (a === "info") go("info");
    else if (a === "exportprog") exportProgress();
    else if (a === "mailprog") emailBackup();
    else if (a === "scrollenroll") { var en = $("#enroll"); if (en) en.scrollIntoView({ behavior: "smooth", block: "start" }); var fi = en && en.querySelector("input"); if (fi) setTimeout(function () { fi.focus(); }, 400); }
    else if (a === "exitmode") { location.hash = ""; location.reload(); }
    else if (a === "resetmode") wipeProgress();
    else if (a === "listen-page") listenPage();
    else if (a === "play-ep") playEpisode(b.getAttribute("data-ep"));
    else if (a === "step") { R.step = +b.getAttribute("data-i"); go("module", R.mod, R.step); }
    else if (a === "next") go("module", R.mod, R.step + 1);
    else if (a === "prev") go("module", R.mod, Math.max(0, R.step - 1));
    else if (a === "retry" || a === "refresh") go("module", R.mod, R.step);
    else if (a === "decl-edit") { S.declaration.ok = false; save(true); go("module", "m8"); }
    else if (a === "print") printCert();
    else if (a === "export") {
      try {
        var blob = new Blob([JSON.stringify(record(), null, 2)], { type: "application/json" });
        var url = URL.createObjectURL(blob), link = document.createElement("a");
        link.href = url; link.download = "zaznam-studia-stres-pestouni.json"; document.body.appendChild(link); link.click(); link.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
      } catch (err) { /* */ }
    }
    else if (a === "copyrec") copy(recordText());
    else if (a === "copyjournal") copy(journalText());
    else if (a === "reset-ask") { $("#resetbox").innerHTML = 'Opravdu smazat veškerý postup? <button class="btn small" data-act="reset-yes" style="background:var(--danger);border-color:var(--danger)">Ano, smazat</button> <button class="btn ghost small" data-act="reset-no">Ne</button>'; }
    else if (a === "reset-no") { $("#resetbox").innerHTML = ""; }
    else if (a === "reset-yes") wipeProgress();
  });
  app.addEventListener("submit", function (e) {
    if (e.target.id === "regform") {
      e.preventDefault();
      var wasNew = !S.learner.enrolledAt;
      if (!saveEnroll()) return;
      renderSidebar();
      if (R.view === "account") go("account"); else go("module", "m0", 0);
    }
  });
  /* Tisk jen samotného osvědčení: do stránky se vloží kopie osvědčení a při tisku se vše ostatní skryje. */
  function printCert() {
    var c = $("#cert"); if (!c) { try { window.print(); } catch (e) { /* */ } return; }
    var root = document.createElement("div"); root.id = "printroot"; root.innerHTML = c.outerHTML;
    document.body.appendChild(root); document.body.classList.add("print-cert");
    var finished = false;
    function done() { if (finished) return; finished = true; document.body.classList.remove("print-cert"); root.remove(); window.removeEventListener("afterprint", done); }
    window.addEventListener("afterprint", done);
    try { window.print(); } catch (e) { done(); }
  }
  function backupName() { return "postup-kurz-stres-" + (S.learner.name || "ucastnik").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^A-Za-z0-9]+/g, "-").replace(/^-|-$/g, "").toLowerCase() + ".json"; }
  function backupJson() { return JSON.stringify({ kurz: C.id, verze: C.version, exportovano: new Date().toISOString(), stav: S }, null, 1); }
  function markBackup() { S.lastBackup = new Date().toISOString(); save(true); var n = $("#impst"); if (n) n.textContent = "Záloha vytvořena " + dateCz(S.lastBackup) + ". Uložte ji bezpečně."; }
  function exportProgress() {
    try {
      var blob = new Blob([backupJson()], { type: "application/json" });
      var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = backupName();
      document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
      markBackup();
    } catch (e) { alert("Zálohu se nepodařilo vytvořit. Použijte tlačítko Zkopírovat potvrzení nebo zkuste jiný prohlížeč."); }
  }
  function emailBackup() {
    var L = S.learner, name = backupName(), file = null;
    try { file = new File([backupJson()], name, { type: "application/json" }); } catch (e) { file = null; }
    if (file && navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share) {
      navigator.share({ files: [file], title: "Záloha postupu v kurzu", text: "Záloha mého postupu v kurzu „" + C.title + "“. Uložte soubor bezpečně." }).then(markBackup).catch(function () { /* zrušeno */ });
      return;
    }
    exportProgress();
    location.href = "mailto:" + (L.email || "").replace(/[^A-Za-z0-9@._+-]/g, "") + "?subject=" + encodeURIComponent("Záloha postupu v kurzu: " + C.title) +
      "&body=" + encodeURIComponent("Přiložte k tomuto e-mailu stažený soubor " + name + " (záloha postupu v kurzu). Soubor obsahuje vaše údaje a odpovědi v cvičeních, posílejte ho jen sami sobě.");
  }
  document.addEventListener("change", function (e) {
    if (!e.target.classList.contains("impprog") || !e.target.files || !e.target.files[0]) return;
    var fr = new FileReader();
    fr.onload = function () {
      var st = $("#impst");
      try {
        var o = JSON.parse(fr.result), n = o && o.stav;
        if (!n || n.v !== 1 || !n.modules || !n.learner) throw new Error("tvar");
        if (!confirm("Načtením zálohy se přepíše postup v tomto prohlížeči (" + (n.learner.name || "bez jména") + "). Pokračovat?")) return;
        S = n; S.preview = PREVIEW; save(true); location.reload();
      } catch (err) { if (st) st.textContent = "Soubor se nepodařilo načíst. Je to záloha z tohoto kurzu?"; }
    };
    fr.readAsText(e.target.files[0]);
  });
  document.addEventListener("visibilitychange", function () { if (document.hidden) doSave(); });
  window.addEventListener("pagehide", doSave);

  /* upozornění na ukládání dat (bez cookies, jen jednorázové informování) */
  (function noticeInit() {
    try { if (localStorage.getItem("pestouni-notice-v1")) return; } catch (e) { /* bez úložiště upozornění ukážeme vždy */ }
    var d = document.createElement("div"); d.className = "cookie-notice no-print"; d.setAttribute("role", "region"); d.setAttribute("aria-label", "Informace o ukládání dat");
    d.innerHTML = '<p>Tento kurz nepoužívá cookies ani sledování. Váš postup ukládá jen do vašeho prohlížeče. <button class="linkbtn" type="button" id="noticemore">Více informací</button></p><button class="btn small" type="button" id="noticeok">Rozumím</button>';
    document.body.appendChild(d);
    $("#noticeok").addEventListener("click", function () { try { localStorage.setItem("pestouni-notice-v1", "1"); } catch (e) { /* */ } d.remove(); });
    $("#noticemore").addEventListener("click", function () { go("info"); });
  })();

  render();
  tickHandle = setInterval(tick, 1000);
})();
