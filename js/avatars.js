/* Avatary mluvčích (SVG, vlastní ilustrace) s pohybem úst podle vizémů Rhubarb Lip Sync.
   Vizémy: A (zavřená ústa: m, b, p), B (mírně otevřená), C (otevřená), D (dokořán), E (zaokrouhlená),
   F (našpulená: u, v), G (f, v: zuby na rtu), H (l), X (klid). */
(function () {
  "use strict";

  var MOUTH = {
    X: { d: "M89 151 Q100 155 111 151", open: false },
    A: { d: "M88 151 Q100 152 112 151", open: false },
    B: { d: "M89 149 Q100 157 111 149 Q100 152 89 149Z", open: true },
    C: { d: "M88 148 Q100 161 112 148 Q100 151 88 148Z", open: true },
    D: { d: "M87 146 Q100 167 113 146 Q100 150 87 146Z", open: true },
    E: { d: "M92 147 Q100 161 108 147 Q100 143 92 147Z", open: true },
    F: { d: "M95.5 150 a4.5 4.5 0 1 0 9 0 a4.5 4.5 0 1 0 -9 0Z", open: true },
    G: { d: "M89 149 Q100 154 111 149 Q100 150.5 89 149Z", open: true, teeth: true },
    H: { d: "M89 148 Q100 159 111 148 Q100 151 89 148Z", open: true, tongue: true }
  };

  /* postavy: barvy a tvary vlasů, doplňky */
  var PEOPLE = {
    klara: {
      name: "Klára", role: "rodinná psycholožka", bg: "#d9ece8", skin: "#f0c7a8", skinShade: "#e3b08f", cloth: "#1d6a62", cloth2: "#2b8a7f",
      hairBack: '<path d="M52 108 C48 60 76 34 104 34 C136 34 158 62 152 112 C150 132 146 150 140 160 L60 160 C54 148 52 128 52 108Z" fill="#8a4a2b"/>',
      hairFront: '<path d="M58 104 C58 66 82 46 106 46 C126 46 146 60 148 96 C134 78 112 70 92 74 C78 78 66 88 58 104Z" fill="#9b5634"/><path d="M60 100 C62 120 60 140 56 156 C64 150 68 136 68 118Z" fill="#8a4a2b"/><path d="M144 98 C146 120 146 140 150 156 C140 150 136 134 136 116Z" fill="#8a4a2b"/>',
      brows: '<path d="M78 103 Q86 99 94 102" stroke="#6b3a22" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M106 102 Q114 99 122 103" stroke="#6b3a22" stroke-width="2.6" fill="none" stroke-linecap="round"/>',
      extra: '<circle cx="64" cy="128" r="3.2" fill="#e6c36a"/><circle cx="136" cy="128" r="3.2" fill="#e6c36a"/>',
      lip: "#b5545a"
    },
    jan: {
      name: "Jan", role: "psycholog", bg: "#e4e3ef", skin: "#e9bf9b", skinShade: "#d9a883", cloth: "#2f3e5c", cloth2: "#45577d",
      hairBack: '<path d="M60 96 C60 66 80 48 104 48 C130 48 146 66 144 98 L140 92 C136 74 122 64 104 64 C86 64 70 74 66 94Z" fill="#9aa0a6"/>',
      hairFront: '<path d="M66 92 C64 82 66 72 72 66 C70 76 72 84 76 90Z" fill="#b4b9be"/><path d="M138 92 C140 82 138 72 132 66 C134 76 132 84 128 90Z" fill="#b4b9be"/>',
      brows: '<path d="M78 101 Q86 97 95 100" stroke="#7d8287" stroke-width="3.2" fill="none" stroke-linecap="round"/><path d="M105 100 Q114 97 122 101" stroke="#7d8287" stroke-width="3.2" fill="none" stroke-linecap="round"/>',
      extra: '<path d="M70 132 C72 160 88 176 100 176 C112 176 128 160 130 132 C124 146 116 156 100 156 C84 156 76 146 70 132Z" fill="#a9aeb3"/>' +
        '<g fill="none" stroke="#3b3f45" stroke-width="2.4"><circle cx="86" cy="112" r="11"/><circle cx="114" cy="112" r="11"/><path d="M97 111 Q100 108 103 111"/><path d="M75 110 L66 106"/><path d="M125 110 L134 106"/></g>',
      lip: "#a65a52"
    },
    marek: {
      name: "Marek", role: "pěstoun", bg: "#f3e6cf", skin: "#f2c9a0", skinShade: "#e2b386", cloth: "#b7791f", cloth2: "#d39633",
      hairBack: '<path d="M60 100 C56 64 80 42 106 42 C132 42 150 62 146 100 C140 80 128 70 104 70 C82 70 68 80 60 100Z" fill="#4a3426"/>',
      hairFront: '<path d="M66 86 C76 60 112 50 136 66 C130 64 118 66 108 72 C96 64 80 70 66 86Z" fill="#5a4030"/>',
      brows: '<path d="M77 102 Q86 97 95 101" stroke="#3d2a1e" stroke-width="3.4" fill="none" stroke-linecap="round"/><path d="M105 101 Q114 97 123 102" stroke="#3d2a1e" stroke-width="3.4" fill="none" stroke-linecap="round"/>',
      extra: '<path d="M72 138 C76 158 90 170 100 170 C110 170 124 158 128 138 C122 152 112 160 100 160 C88 160 78 152 72 138Z" fill="#5a4030" opacity=".28"/>',
      lip: "#b0614f"
    },
    nar: {
      name: "Radka", role: "průvodkyně kurzem", bg: "#e6eceb", skin: "#eec4a4", skinShade: "#ddae8b", cloth: "#5f5893", cloth2: "#7a73ad",
      hairBack: '<path d="M58 110 C54 62 80 38 104 38 C130 38 152 62 146 110 C152 96 150 76 144 66 C150 90 140 104 132 112 L72 112 C64 104 56 92 62 68 C56 80 54 96 58 110Z" fill="#2e2a2a"/><circle cx="104" cy="36" r="14" fill="#2e2a2a"/>',
      hairFront: '<path d="M62 100 C62 68 84 50 106 50 C128 50 144 66 144 98 C128 74 98 66 62 100Z" fill="#3a3434"/>',
      brows: '<path d="M78 103 Q86 99 94 102" stroke="#2e2a2a" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M106 102 Q114 99 122 103" stroke="#2e2a2a" stroke-width="2.6" fill="none" stroke-linecap="round"/>',
      extra: "",
      lip: "#a8505e"
    }
  };

  function svg(id) {
    var p = PEOPLE[id];
    return '<svg viewBox="0 0 200 220" class="av-svg" role="img" aria-label="' + p.name + ', ' + p.role + '">' +
      '<circle cx="100" cy="110" r="100" fill="' + p.bg + '"/>' +
      '<g class="av-body">' +
      '<path d="M30 220 C34 182 60 168 100 168 C140 168 166 182 170 220Z" fill="' + p.cloth + '"/>' +
      '<path d="M84 168 L100 190 L116 168Z" fill="' + p.cloth2 + '"/>' +
      '<rect x="88" y="150" width="24" height="26" rx="8" fill="' + p.skinShade + '"/>' +
      '</g><g class="av-head">' + p.hairBack +
      '<ellipse cx="100" cy="118" rx="40" ry="48" fill="' + p.skin + '"/>' +
      '<ellipse cx="61" cy="120" rx="6" ry="9" fill="' + p.skinShade + '"/><ellipse cx="139" cy="120" rx="6" ry="9" fill="' + p.skinShade + '"/>' +
      p.hairFront + p.brows +
      '<g class="av-eyes"><ellipse cx="86" cy="113" rx="4" ry="4.6" fill="#2a2522"/><ellipse cx="114" cy="113" rx="4" ry="4.6" fill="#2a2522"/>' +
      '<circle cx="87.4" cy="111.4" r="1.2" fill="#fff"/><circle cx="115.4" cy="111.4" r="1.2" fill="#fff"/></g>' +
      '<path d="M100 118 Q97 130 100 134 Q103 135 105 133" fill="none" stroke="' + p.skinShade + '" stroke-width="2.2" stroke-linecap="round"/>' +
      '<ellipse cx="76" cy="134" rx="7" ry="4" fill="#e88f7f" opacity=".25"/><ellipse cx="124" cy="134" rx="7" ry="4" fill="#e88f7f" opacity=".25"/>' +
      p.extra +
      '<g class="av-mouth"><path class="av-m" d="' + MOUTH.X.d + '" fill="none" stroke="' + p.lip + '" stroke-width="3" stroke-linecap="round"/>' +
      '<rect class="av-teeth" x="93" y="148" width="14" height="3.5" rx="1.5" fill="#fff" opacity="0"/>' +
      '<ellipse class="av-tongue" cx="100" cy="154" rx="5" ry="2.5" fill="#d8737a" opacity="0"/></g>' +
      '</g></svg>';
  }

  var nodes = {}; /* role -> [element,...] */
  var current = { who: null, v: "X" };

  function setMouth(el, who, v) {
    var m = MOUTH[v] || MOUTH.X, p = PEOPLE[who] || PEOPLE.nar;
    var path = el.querySelector(".av-m");
    if (!path) return;
    path.setAttribute("d", m.d);
    path.setAttribute("fill", m.open ? "#5a2a2e" : "none");
    path.setAttribute("stroke", p.lip);
    path.setAttribute("stroke-width", m.open ? "2" : "3");
    el.querySelector(".av-teeth").setAttribute("opacity", m.teeth || v === "C" || v === "D" ? "1" : "0");
    el.querySelector(".av-tongue").setAttribute("opacity", m.tongue ? "1" : "0");
  }

  function create(who, size) {
    var d = document.createElement("div");
    d.className = "avatar av-" + who + (size ? " av-" + size : "");
    d.setAttribute("data-who", who);
    d.innerHTML = svg(who) + (size === "lg" ? '<span class="av-name">' + PEOPLE[who].name + '<small>' + PEOPLE[who].role + '</small></span>' : "");
    (nodes[who] = nodes[who] || []).push(d);
    return d;
  }

  function prune() {
    Object.keys(nodes).forEach(function (k) { nodes[k] = nodes[k].filter(function (n) { return document.body.contains(n); }); });
  }

  /* mrkání: náhodně, každá postava zvlášť */
  function blinkLoop() {
    prune();
    Object.keys(nodes).forEach(function (who) {
      if (Math.random() < 0.28) nodes[who].forEach(function (n) {
        var e = n.querySelector(".av-eyes"); if (!e) return;
        e.classList.add("blink"); setTimeout(function () { e.classList.remove("blink"); }, 140);
      });
    });
    setTimeout(blinkLoop, 900 + Math.random() * 1400);
  }

  var api = {
    people: PEOPLE,
    create: create,
    /* studio se všemi postavami dílu */
    studio: function (roles) {
      var w = document.createElement("div");
      w.className = "av-studio";
      roles.forEach(function (r) { if (PEOPLE[r]) w.appendChild(create(r, "lg")); });
      return w;
    },
    speaker: function (who) {
      prune();
      current.who = who;
      Object.keys(nodes).forEach(function (k) { nodes[k].forEach(function (n) { n.classList.toggle("talking", k === who); }); });
      if (!who) api.mouth(null, "X");
    },
    mouth: function (who, v) {
      prune();
      current.v = v;
      Object.keys(nodes).forEach(function (k) { nodes[k].forEach(function (n) { setMouth(n, k, k === who ? v : "X"); }); });
    }
  };
  window.Avatars = api;
  setTimeout(blinkLoop, 1200);
})();
