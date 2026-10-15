/* Rozšíření kurzu na verzi 1.1: obsah převzatý a přepracovaný z původního Moodle kurzu
   „Hroší kůže pro přechodné pěstouny – Úvod do zdravého zvládání stresu a prevence vyhoření“ (OSPOD Mladá Boleslav, 2021).
   Texty jsou přepsané do stylu tohoto kurzu a doplněné o pěstounské příklady. Načítá se po content-1 až content-3. */
(function () {
  var C = window.COURSE;
  function mod(id) { for (var i = 0; i < C.modules.length; i++) if (C.modules[i].id === id) return C.modules[i]; }
  function after(m, title, steps) {
    var i = -1;
    for (var k = 0; k < m.steps.length; k++) if (m.steps[k].title === title) i = k;
    if (i < 0) throw new Error("content-4: krok nenalezen: " + title);
    Array.prototype.splice.apply(m.steps, [i + 1, 0].concat(steps));
  }
  function yt(id) { return "https://www.youtube.com/watch?v=" + id; }

  C.version = "1.1 (2026)";
  C.storageSuffix = "11"; /* verze 1.1 má vlastní úložiště postupu, aby se nepletla s verzí 1.0 na stejné doméně */
  C.totalMinutes = 480; /* 8 hodin po 60 minutách (astronomické hodiny podle metodiky MPSV) */

  /* ---------- Úvod: video lektora, oprava rozsahu ---------- */
  var m0 = mod("m0"); m0.minutes = 15; var m5 = mod("m5"); m5.minutes = 42; var m6 = mod("m6"); m6.minutes = 35;
  m0.steps.forEach(function (s) {
    if (s.html) s.html = s.html.replace("9 bloků (úvod, 7 lekcí a závěr) v celkovém rozsahu 6 hodin (360 minut)", "10 bloků (úvod, 8 lekcí a závěr) v celkovém rozsahu 8 hodin");
  });
  after(m0, "Než začnete: tři poznámky", [{
    type: "videos", id: "v-m0", title: "Úvodní slovo lektora (video)",
    intro: "Krátké představení lektora a kurzu. Volitelné.",
    items: [{ t: "Úvodní slovo a představení lektora", by: "Mgr. Petr Hroch", own: true, url: yt("Y--hORZ2_aY") }]
  }]);

  /* ---------- Lekce 1: mýty o stresu ---------- */
  var m1 = mod("m1"); m1.minutes = 42;
  after(m1, "Co je stres doopravdy", [{
    type: "text", title: "Tři mýty o stresu",
    html: '<p>Než půjdeme hlouběji, zbavíme se tří rozšířených omylů. Jsou nebezpečné tím, že vedou buď ke zlehčování stresu, nebo k zbytečnému strachu z něj, nebo k „pomoci“, která dětem spíš škodí.</p>' +
      '<h3>Mýtus 1: „Stres je zabiják“</h3>' +
      '<p>Stres je původně <strong>obranná a podpůrná reakce organismu</strong> na zátěž. Pomáhá nám zvládnout ohrožení, výkon i změnu. Škodí až <strong>dlouhodobý stres, který nemá kdy odeznít</strong>. <span class="tag fact">ověřeno</span></p>' +
      '<ul><li><strong>Eustres</strong> prožíváme jako příjemný a aktivující. Motivuje nás a je spíše krátkodobý.</li>' +
      '<li><strong>Distres</strong> prožíváme jako negativní a plný napětí. Má větší setrvačnost, trvá déle a spíš nás brzdí: vede ke stažení se nebo k úniku, ne k řešení.</li></ul>' +
      '<p>Pozor také na opak: kdo se stresu bojí, zvyšuje si zátěž ještě strachem ze zátěže. Stres je signál, ne verdikt.</p>' +
      '<h3>Mýtus 2: „Nejlepší je dětem umetat cestičku“</h3>' +
      '<p>U dětí, které si prošly traumatem, je první potřebou <strong>bezpečí a opora</strong>. Jenže ani ty nejchráněnější děti se nenaučí zvládat těžké věci, když jim je dospělý vždy odstraní z cesty. Odolnost roste ze zkušenosti „zvládl jsem to“, a to <strong>v bezpečí, v dávkách, kterým stačí a s dospělým po boku</strong>. Hesla: <em>být vedle, ne místo</em> a <em>nejdřív zklidnit, potom zvládat</em>.</p>' +
      '<p>Pro pěstouny je pokušení „uchránit dítě od všeho, protože už toho zažilo dost“ velmi pochopitelné. Pomáhá ale dávkování, ne vata.</p>' +
      '<h3>Mýtus 3: „Co je pozitivní, musí být vždy dobré“</h3>' +
      '<p>Zátěž způsobují i <strong>radostné události</strong>: příchod nového dítěte, svatba, stěhování do vysněného domu, velká oslava. Silný pozitivní stres tedy není bez rizika. Tělo na „dobré“ i „špatné“ změny reaguje mobilizací a pak potřebuje odpočinek. <span class="tag fact">ověřeno</span></p>' +
      '<p>V praxi: plánujte klid i po událostech, na které jste se těšili (nástup dítěte do rodiny, Vánoce, prázdniny). A nenechte se zahnat do role věčně vděčného a usměvavého pěstouna. Nepříjemné pocity potlačované „pozitivním myšlením“ zátěž nesnižují, jen ji schovávají.</p>' +
      '<div class="panel soft"><strong>Shrnuto:</strong> Stres není ani nepřítel, ani zabiják. Rozhoduje dávka, délka a to, jestli má kdo pomoci.</div>'
  }, {
    type: "videos", id: "v-m1", title: "Videa k tématu: mýty o stresu",
    intro: "Lektor kurzu rozebírá tři mýty. Volitelné.",
    items: [
      { t: "Mýtus č. 1: Stres je prý zabiják", by: "Mgr. Petr Hroch", own: true, url: yt("FNfAufJ8t1s") },
      { t: "Mýtus č. 2: Nejlepší je prý dětem umetat cestičku", by: "Mgr. Petr Hroch", own: true, url: yt("SU3cLdzKFzU") },
      { t: "Mýtus č. 3: Co je pozitivní, musí být vždy dobré", by: "Mgr. Petr Hroch", own: true, url: yt("1TKckTbU23E") }
    ]
  }]);
  m1.quiz = m1.quiz.slice(0, 3).concat([
    { q: "Jak je zdravé stres vnímat?", o: ["Jako původně obrannou a podpůrnou reakci těla, která nám pomáhá zátěž zvládnout a potřebuje odeznít", "Jako vysoce nebezpečný proces, před kterým se musíme za každou cenu chránit", "Jako nepříjemnost, která vždy beze stopy pomine, takže se jím nemusíme zabývat"], c: 0, why: "Stres je signál. Škodí až dlouhodobý stres bez možnosti odeznít." },
    { q: "Je pravda, že silný pozitivní stres (například příchod dítěte nebo velká oslava) je bez rizika?", o: ["Ne. I radostné změny jsou zátěž a po nich je potřeba odpočinek", "Ano, pozitivní stres nikdy nevyčerpává", "Záleží jen na tom, jestli jsme optimisté"], c: 0, why: "Tělo reaguje mobilizací na dobré i špatné změny. Pomáhá plánovat klid i po radostných událostech." }
  ]);

  /* ---------- Lekce 2: Ruka potřeb, videa ---------- */
  var m2 = mod("m2"); m2.minutes = 46;
  after(m2, "Proč děti s traumatem reagují jinak", [{
    type: "text", title: "Ruka potřeb: co dítě potřebuje, aby mohlo „uchopit život“",
    html: '<p>Tak jako ruka potřebuje prsty, aby mohla něco uchopit, potřebuje dítě <strong>naplněné základní potřeby</strong>, aby mohlo zdravě uchopit svůj život. Každému prstu odpovídá jedna potřeba. Dítěti, kterému jeden „prst“ chybí, stres přibývá. <em>Metaforu Ruka potřeb vytvořili Radka Hrochová Hrubá a Petr Hroch.</em></p>' +
      '<ol>' +
      '<li><strong>Ukazováček: potřeba místa.</strong> Místo ve fyzickém prostoru (vlastní postel, koutek, věci, vlastní tělo), v psychosociálním prostoru (kam patřím v rodině, ve třídě) a <em>v čase</em> (odkud jsem, kde jsem teď, co bude dál). Pěstounské dítě má právě s místem a časem často největší potíže.</li>' +
      '<li><strong>Prsteník: potřeba podpory.</strong> Sdílení (někdo prožívá život se mnou), nasazení (někdo do mě investuje čas a energii) a jedinečnost (jsem vnímán jako já, ne jako „jedno z dětí“).</li>' +
      '<li><strong>Prostředník: potřeba životních zdrojů.</strong> Z čeho žiju (zdroje), čím žiju (motivace), pro co žiju (hodnoty).</li>' +
      '<li><strong>Malíček: potřeba zažít bezpečí.</strong> Je drobný a křehký, ale důležitý. Bezpečí tvoří vhodné místo, účinná ochrana a dostatek zdrojů.</li>' +
      '<li><strong>Palec: hranice.</strong> Palec nám umožnil svět chápat a uchopit. Je metaforou přiměřených hranic: v místě, čase a rolích, v podpoře, ve zdrojích a motivaci i v bezpečí a jistotách. Bez hranic dítě zdravě neroste.</li>' +
      '</ol>' +
      '<p>Když je dítě ve stresu a nevíte proč, projděte prsty: <strong>Který z nich je teď slabý?</strong> Často stačí malý krok (vlastní polička, předvídatelný řád dne, jasné pravidlo), aby se napětí uvolnilo. Stejné prsty platí i pro vás.</p>'
  }, {
    type: "checklist", id: "c2-hand", title: "Cvičení: Ruka potřeb našeho dítěte",
    intro: "Označte, co se vašemu dítěti (nebo vám) daří. Co zůstane neoznačené, je prst, kterému můžete věnovat pozornost. Vyberte aspoň tři položky. Výběr se uloží do deníku.", min: 3,
    groups: [
      ["Ukazováček: místo", ["Dítě má své místo, kam může jít a kde jsou jeho věci", "Ví, kam v rodině a ve třídě patří", "Má jasno o své minulosti a ví, co bude dál (soustavně o tom mluvíme)"]],
      ["Prsteník: podpora", ["Někdo s dítětem sdílí, co prožívá", "Vím, že do dítěte investuji čas a energii a ono to cítí", "Dítě je vnímáno jako jedinečné"]],
      ["Prostředník: zdroje", ["Dítě má zdroje síly (koníček, kamarády, oblíbené místo)", "Ví, čím a pro koho žije (motivace, hodnoty)"]],
      ["Malíček: bezpečí", ["Dítě má bezpečné místo a vím, jak ho chránit", "Doma je předvídatelný řád a dítě se nebojí"]],
      ["Palec: hranice", ["Pravidla jsou jasná, srozumitelná a spravedlivá", "Hranice drží, i když je dítě zkouší"]]
    ]
  }, {
    type: "videos", id: "v-m2", title: "Videa k tématu: stres u dětí, agrese a trauma",
    intro: "Tři videa lektora kurzu a dvě videa odborníků. Volitelné.",
    items: [
      { t: "Dinosaurus v nás", by: "Mgr. Petr Hroch", own: true, url: yt("V1cjASbuIv8") },
      { t: "Nastavenost na stres", by: "Mgr. Petr Hroch", own: true, url: yt("EJCkZZg1Uic") },
      { t: "Jak se rodí agresoři a oběti", by: "Mgr. Petr Hroch", own: true, url: yt("Jlh7N9w6sD4") },
      { t: "Trauma, traumatický stres a jeho dopady", by: "psycholog Radek Ptáček", url: yt("8N2084b2Sps") },
      { t: "Dětská agresivita na vzestupu", by: "psycholog Václav Mertin", url: yt("oKyN7J9Anxs") }
    ]
  }]);

  /* ---------- Lekce 3: relaxace a aktivace ---------- */
  var m3 = mod("m3"); m3.minutes = 42;
  after(m3, "Cvičení: Cyklický povzdech (asi 2 minuty)", [{
    type: "text", title: "Relaxace a aktivace: nejdřív klid, pak energie",
    html: '<p>To, co jste si vybrali, je náročné: potřebujete odpovědnost, vytrvalost a sílu. Zákon zachování energie je neúprosný: <strong>kdo chce dávat, musí také dostávat</strong>. Odkud tedy energii brát a jak jí neplýtvat? Najděte si prostor pro <strong>relaxaci</strong>, čas pro <strong>aktivaci</strong> a místo, kde se můžete <strong>zakotvit</strong>.</p>' +
      '<h3>Relaxace</h3>' +
      '<p>Relaxace je <em>znovu</em>navození klidu a uvolnění. Předpona re- připomíná, že klid je přirozený stav, ze kterého nás podněty vytrhávají a do kterého se máme vracet. Naše civilizace si ale zvykla chápat klid jako protiklad výkonu, a tak žijeme v trvalém napětí. Po napětí ale vždy přijde uvolnění. <strong>Když si klid nedopřejeme vědomě, tělo si ho vezme samo:</strong> mikrospánkem, bolestí zad, onemocněním. Navíc relaxovat se člověk musí naučit. Ne všechno, co vypadá jako odpočinek (rodinná dovolená, svátky klidu), skutečně nabíjí.</p>' +
      '<p>Relaxační techniky se dají rozdělit do tří skupin: <strong>přes tělo</strong> (nejdřív uvolním svaly, mysl následuje), <strong>přes mysl</strong> (nejdřív zklidním představami, tělo následuje) a techniky, které obojí propojují. Vyzkoušíte jednu z každé z prvních dvou skupin.</p>' +
      '<h3>Aktivace</h3>' +
      '<p>Naučit se odpočívat neznamená automaticky lépe zvládat problémy. Honza na peci také neměl potíže s relaxací, a přesto se nehnul. Uvolnění má smysl, když víme, <strong>kam znovu nalezenou energii nasměrujeme</strong>. Platí „ne čím víc, tím lépe“: dobrý skutek bez rozmyslu je jako střílet brokovnicí po komárovi. Aktivovat se dá i na konci relaxace větou „Teplo, které prostupuje tělem, mi dává sílu a chuť něco dělat“, nebo představou úkolu, který před vámi stojí, a „skokem tygra“. Nejlepším zdrojem energie je ale <strong>dobrá nálada</strong>. Zkuste hned ráno všimnout si, že jste vstali, dýcháte a můžete něco dělat. To stačí aspoň na malý úsměv.</p>' +
      '<p class="note">Pokud máte zdravotní potíže (například onemocnění srdce, nízký tlak, bolesti pohybového aparátu nebo duševní onemocnění), poraďte se před cvičením s lékařem. Při bolesti, závrati nebo nevolnosti cvičení ukončete.</p>'
  }, {
    type: "guided", id: "g3-jacobson", title: "Cvičení: Svalová relaxace podle Jacobsona (asi 6 minut)",
    intro: "Postupně napínáte a uvolňujete jednotlivé svalové skupiny. Sedněte si pohodlně, chodidla na zem. Každé napětí zvolna stupňujte a držte, než napočítáte do pěti. Na „pět“ vše úplně uvolněte a vydechněte (klidně se zvukem „huu“). Nikdy nenapínejte do bolesti.",
    steps: [
      "Nohy: přitáhněte špičky nohou co nejvíc nahoru. Jedna, dvě, tři, čtyři, pět, uvolnit (huuu). Pak prsty u nohou co nejvíc skrčte. Jedna až pět, uvolnit.",
      "Nohy: natáhněte je před sebe a napněte. Jedna až pět, uvolnit. Pak je zatlačte do země. Jedna až pět, uvolnit.",
      "Břicho a záda: vystrčte břicho co nejvíc. Jedna až pět, uvolnit. Pak ho zatáhněte. Jedna až pět, uvolnit. Mírně prohněte záda dozadu a natáhněte se. Jedna až pět, uvolnit.",
      "Ruce: zatněte je v pěst. Jedna až pět, uvolnit. Pak prsty co nejvíc roztáhněte. Jedna až pět, uvolnit.",
      "Obličej: zamračte se, jako byste ho chtěli sbalit do papírové koule. Jedna až pět, uvolnit. Pak se co nejvíc usmějte. Jedna až pět, uvolnit.",
      "Zůstaňte v uvolnění. Dopřejte si minutu nicnedělání a jen sledujte, jak se vám klidně dýchá."
    ],
    after: "Zkrácená varianta „tygr“, když není čas: zapřete nohy do země, zatněte břicho, ruce v drápy, obličej jako šelma před skokem. Jedna, dvě, tři, čtyři, pět a skok (uvolnit). Je-li to vhodné, můžete si při uvolnění i zařvat.",
    end: "Hotovo. Všimněte si, v čem je tělo jiné než před cvičením."
  }, {
    type: "guided", id: "g3-autogen", title: "Cvičení: Zjednodušený autogenní trénink (asi 6 minut)",
    intro: "Mysl zklidňujete představami a krátkými větami, tělo se uvolňuje s nimi. Lehněte si nebo se pohodlně opřete. Při každé větě chvíli počkejte, až se pocit skutečně objeví. Nespěchejte. Kdybyste při cvičení usnuli, je to v pořádku.",
    steps: [
      "Zvolte pohodlnou polohu. Nohy se nedotýkají, ruce jsou kousek od těla. Pokud se vám nepohodlně leží, polohu upravte.",
      "V duchu si říkejte: „Klid. Jsem zcela klidný/á.“ Představte si, co pro vás slovo klid znamená.",
      "„Moje pravá ruka je těžká.“ Představujte si, jak ruka těžkne, jako by se pomalu potápěla do příjemně vyhřáté vody. Až pocítíte tíhu, přejděte na druhou ruku a pak na nohy.",
      "„Celé moje tělo je příjemně malátné, těžké a uvolněné.“",
      "„Moje pravá ruka je příjemně teplá.“ Pomozte si představou proudu teplé vody. Až se teplo objeví, přejděte na druhou ruku, pak na nohy.",
      "„Celé moje tělo je příjemně těžké a teplé.“ Zůstaňte v tom stavu chvíli. Vtíravé myšlenky odežeňte a jen sledujte klidný a pravidelný dech.",
      "Na závěr si řekněte: „Teplo, které mi prostupuje tělem, mi dává sílu a chuť něco dělat.“ Pak se několikrát zhluboka nadechněte, protáhněte se a otevřete oči."
    ],
    after: "Až vám to půjde, stačí pak chvíle o samotě, příjemná hudba, pohodlné křeslo a jedna věta: „Celým mým tělem se rozlévá příjemné uvolňující teplo.“",
    end: "Hotovo. Protáhněte se a pomalu se vraťte do dne."
  }]);

  /* ---------- Lekce 4: psychosomatika, vyhoření, odolnost ---------- */
  var m4 = mod("m4"); m4.minutes = 52;
  after(m4, "Stres v mozku a těle", [{
    type: "text", title: "Dlouhodobý stres a zdraví",
    html: '<p>Mozek vyhodnotí zátěž a spustí dvě propojené dráhy. <strong>Nervovou:</strong> aktivuje se sympatikus (část vegetativního nervstva, kterou neovládáme vůlí) a vyplaví se noradrenalin. <strong>Hormonální:</strong> osa hypotalamus – podvěsek mozkový – nadledviny uvolní adrenalin a kortizol. <span class="tag fact">ověřeno</span></p>' +
      '<p>Tělo pak zrychlí srdce, zvýší tlak, uvolní cukr a tuky jako palivo pro svaly a omezí „nepodstatné“ funkce, třeba trávení. To je skvělé na pár minut. Problém je, když <strong>poplach trvá týdny a měsíce</strong>: moderní stres (úřady, hluk, spěch, starosti) tělo vyhodnocuje stejně jako ohrožení, ale nemáme jak se „vyběhat“.</p>' +
      '<p>Dlouhodobý nezvládaný stres je <strong>jedním z rizikových faktorů</strong> mnoha obtíží: trvalého svalového napětí a bolestí zad či hlavy, potíží se žaludkem, kolísání tlaku, poruch spánku a snížené odolnosti vůči nemocem. Podílí se na vzniku nemocí, které souhrnně nazýváme <strong>psychosomatické</strong>: duše (psyché) a tělo (soma) se vzájemně ovlivňují. Vždy ale spolupůsobí i životní styl, dědičnost a další vlivy.</p>' +
      '<p class="note">Nejde o strašení. Je to důvod, proč brát tělesné signály vážně a včas vyhledat lékaře. Zdravotní obtíže nikdy nepřičítejte jen stresu, dokud je lékař nevyloučil.</p>'
  }]);
  after(m4, "Syndrom vyhoření", [{
    type: "text", title: "Kdo je vyhořením ohrožen a proč",
    html: '<p>Vyhoření nevzniká z prosté přemíry práce. Je to <strong>plíživé vyčerpání z dlouhodobého stresu</strong>, nejčastěji u lidí, kteří pracují s druhými lidmi a jsou závislí na jejich hodnocení: u lékařů, sester, učitelů, sociálních pracovníků, psychologů, policistů, ale i u <strong>pěstounů a poručníků</strong>. U pěstounů se přidává život s traumatizovaným dítětem, odpovědnost a kontrola ze strany úřadů a organizací. V pěstounském příběhu se často objeví i konflikty s OSPOD nebo doprovodnou organizací, což je typický projev fáze frustrace.</p>' +
      '<h3>Příčiny v člověku</h3>' +
      '<ul><li>negativní myšlení a ztráta smyslu každodenní práce</li><li>neúčinné strategie zvládání stresu (například práce s časem)</li><li>menší odolnost vůči stresu (povahová, vrozená)</li><li>nezdravý způsob života</li></ul>' +
      '<h3>Příčiny v prostředí</h3>' +
      '<ul><li>náročnější problémy u klientů, v našem případě u svěřených dětí</li><li>důraz na začlenění všech dětí a lidí do společnosti, vyšší nároky na angažovanost</li><li>změna z „expertního“ přístupu na partnerský</li><li>malé společenské ocenění pomáhajících profesí a pěstounů</li></ul>' +
      '<h3>Kdy riskujete</h3>' +
      '<p>Když se vám těžko říká „ne“ dalším úkolům, když jste dlouho pod tlakem, když vám vysoké nároky brání sdílet práci s druhými, když se snažíte dosáhnout příliš mnoha cílů a dlouho poskytujete emoční podporu. <strong>Nejlepší příležitost pro prevenci je fáze stagnace</strong>. Z úplného vyhoření je cesta zpět velmi těžká.</p>' +
      '<h3>Čtyři roviny příznaků</h3>' +
      '<ul><li><strong>Myšlení:</strong> ztráta nadšení, lhostejnost, negativní postoj, potíže se soustředěním.</li><li><strong>Prožívání:</strong> sklíčenost, bezmoc, podrážděnost, pocit nedostatku uznání.</li><li><strong>Tělo:</strong> únava, poruchy spánku a chuti k jídlu, bolesti hlavy, svalové napětí, náchylnost k nemocem.</li><li><strong>Vztahy:</strong> ubývá angažovanosti a kontaktů, přibývá konfliktů, napětí se přelévá do rodiny.</li></ul>' +
      '<p>Většina těchto příznaků sama o sobě vyhoření neznamená. Připomínají i chřipku nebo jiné nemoci. Záleží na tom, jak dlouho trvají a za jakých podmínek.</p>' +
      '<p><span class="tag fact">ověřeno</span> V české klasifikaci nemocí (MKN-10) má vyhoření kód Z73.0 mezi problémy spojenými s obtížemi v uspořádání života, nejde tedy o samostatnou nemoc. Světová zdravotnická organizace v MKN-11 popisuje vyhoření jako syndrom z chronického pracovního stresu, který nebyl úspěšně zvládnut.</p>'
  }]);
  after(m4, "Techniky pro každý den", [{
    type: "text", title: "Psychická odolnost: aktivní přístup k životu",
    html: '<p>Psychická odolnost je schopnost vracet se do rovnováhy. Souvisí se <strong>životním stylem</strong>, s kvalitou vztahů a s prožitkem osobní pohody. Dá se posilovat osmi návyky, které nejsou složité, jen vyžadují pravidelnost:</p>' +
      '<ol><li><strong>Otevřenost:</strong> zajímat se o to, co se kolem děje, a hledat v tom smysl.</li>' +
      '<li><strong>Nebát se změn:</strong> berou se jako běžná věc a příležitost ukázat, co dokážeme.</li>' +
      '<li><strong>Nebýt pasivní:</strong> při stresu aktivně hledat kroky, jak situaci čelit.</li>' +
      '<li><strong>Počítat se stresem:</strong> stresujícím situacím se nevyhneme, a proto je nepřeháníme.</li>' +
      '<li><strong>Umět stres izolovat:</strong> nenechat ho vplout do všech oblastí života.</li>' +
      '<li><strong>Pečovat o vztahy:</strong> podpora blízkých a možnost probrat problémy je nejlepší nárazník.</li>' +
      '<li><strong>Utvářet si prostředí:</strong> řešit včas a s rozvahou to, co můžeme ovlivnit (práce, vztah s partnerem, děti).</li>' +
      '<li><strong>Zdravý životní styl:</strong> spánek, pohyb a vyloučení škodlivých návyků.</li></ol>'
  }, {
    type: "checklist", id: "c4-active", title: "Cvičení: Aktivní přístup k životu: kde jsem",
    intro: "Označte, co vám v poslední době jde. Co zůstane neoznačené, jsou návyky, které můžete posilovat. Vyberte aspoň tři položky. Výběr se uloží do deníku.", min: 3,
    items: [
      "Zajímám se o dění kolem sebe a hledám v něm smysl",
      "Změny beru spíš jako příležitost než jako hrozbu",
      "Při zátěži aktivně hledám kroky, jak situaci čelit",
      "Počítám s tím, že stres bude, a nepřeháním ho",
      "Umím stres odložit, aby se nepřelil do celého života",
      "Mám blízké, se kterými můžu probrat své starosti",
      "Průběžně řeším to, co ovlivnit můžu (partner, děti, práce)",
      "Mám dost spánku a pohybu"
    ]
  }]);

  /* ---------- Lekce 7: krizová období ---------- */
  var m7 = mod("m7"); m7.minutes = 30;
  after(m7, "Desatero pro zvládání stresu pěstounů", [{
    type: "text", title: "Krizová období: pět „bacha“",
    html: '<p>Někdy se zátěž nedotýká jen naší rodiny, ale celé společnosti: epidemie, válka v médiích, hospodářská nejistota, velké ztráty. Rodiny v takových dobách nepotřebují mnoho slov odborníků. Potřebují to, co vždy: <strong>respekt, důvěru a podporu tam, kde si řeknou</strong>. Lektor kurzu to shrnul do pěti „bacha“:</p>' +
      '<ol><li><strong>Bacha na život!</strong> Zastavujte rizika, ne život. Udržujte, jak nejvíc to jde, normální plynutí dnů. Netlumte emoce, potřeby a komunikaci.</li>' +
      '<li><strong>Bacha na řád!</strong> Řiďte se svým řádem a pravidly, zdravými a zvolenými z vlastního rozhodnutí. Chaos a anarchie řešení nejsou.</li>' +
      '<li><strong>Bacha na informace!</strong> Hlídejte informační zahlcení. Negativní informace mají silnější vliv, takže je vyvažujte větším počtem pozitivních zážitků.</li>' +
      '<li><strong>Bacha na komunikaci!</strong> Komunikace není předávání informací, ale sdílení: pocitů, prožitků, života.</li>' +
      '<li><strong>Bacha na sebe!</strong> Děti vydrží jako koně, když mají vedle sebe stabilizovaného dospělého. Myslete i na sebe.</li></ol>' +
      '<p>A mějte všech pět pohromadě.</p>'
  }, {
    type: "videos", id: "v-m7", title: "Video k tématu: krizová období",
    intro: "Volitelné. Video vzniklo ve spolupráci s firmou TOPGAL.",
    items: [{ t: "Na co dát bacha v době covidu", by: "Mgr. Petr Hroch", own: true, url: yt("iSQFZpofzfE") }]
  }]);

  /* ---------- Nová Lekce 8: strategie zvládání stresu (před závěrem) ---------- */
  var m9 = {
    id: "m9", short: "Strategie zvládání stresu", title: "Lekce 8: Strategie zvládání stresu a jak si vybrat ty zdravé", minutes: 41,
    goals: [
      "Rozlišíte příklady strategií zvládání stresu podle dotazníku SVF a jejich tři skupiny.",
      "Poznáte tři nejzdravější strategie (strategie kontroly) a umíte je použít v pěstounské situaci.",
      "Rozpoznáte rizikové strategie a jejich varovné znaky.",
      "Zvolíte jednu strategii, kterou budete posilovat."
    ],
    steps: [
      {
        type: "scene", title: "Scéna: Po schůzce na doprovodné organizaci", slug: "Scéna 8 · Cestou domů · autobusová zastávka",
        intro: "Marek a Jan čekají na zastávce po poradě pěstounů.",
        lines: [
          ["marek", "Honzo, dnes jsem se v hlavě třikrát pohádal s paní z doprovodky a nic jsem neřekl. Doma pak celý večer přemílám, co jsem měl říct."],
          ["jan", "Některé strategie jsou obecně zdravější, třeba když situaci aktivně řešíte. Jiné jsou rizikové, když jich používáte jen pár a pořád dokola, třeba únik nebo vzdávání se."],
          ["marek", "Takže přemílání je špatně?"],
          ["jan", "Není to špatné samo o sobě, ale tak akorát. Přemýšlet o problémech je správné, jen se od nich musíte umět odpoutat. Jinak se z vás stane člověk s tunelovým viděním a vyhoření je blízko."],
          ["marek", "A co mám dělat místo toho?"],
          ["jan", "To si dnes projdeme. Hlavní zpráva: nejde vybrat jednu správnou strategii. Jde o to mít jich víc a poznat, kdy kterou použít."]
        ],
        takeaways: ["Současná psychologie pracuje s různými modely strategií zvládání stresu. Žádná strategie není sama o sobě dobrá nebo špatná.", "Zdravější jsou strategie, kde jste aktivní a působíte na zdroj stresu.", "Rizikové jsou ty, které se stanou jedinou možností."]
      },
      {
        type: "text", title: "Strategie zvládání stresu: příklad dotazníku SVF",
        html: '<p>Když nás něco zatíží, sáhneme po nějaké strategii. Někdy vědomě, častěji automaticky. <strong>Současná psychologie pracuje s různými modely strategií zvládání stresu.</strong> Pro tento kurz nabízíme jako příklad strategie, se kterými pracuje diagnostický nástroj SVF (dotazník Stressverarbeitungsfragebogen, W. Janke a G. Erdmann). Ten jich nabízí třináct. Tady vám slouží jako <strong>mapa pro sebereflexi</strong>. Není to test ani diagnóza.</p>' +
          '<h3>Zdravější, většinou prospěšné (sedm)</h3>' +
          '<ul><li><strong>Podhodnocení:</strong> přisuzovat si menší míru stresu než ostatní.</li><li><strong>Odmítání viny:</strong> zdůraznit, že nejde o mou odpovědnost.</li><li><strong>Odklon:</strong> odvrátit se od zátěže nebo se obrátit k činnostem neslučitelným se stresem.</li><li><strong>Náhradní uspokojení:</strong> obrátit se k příjemným činnostem.</li><li><strong>Kontrola situace:</strong> analyzovat, plánovat a jednat.</li><li><strong>Kontrola reakcí:</strong> udržet kontrolu nad vlastními reakcemi.</li><li><strong>Pozitivní sebeinstrukce:</strong> připisovat si schopnost to zvládnout.</li></ul>' +
          '<h3>Podle situace (dvě)</h3>' +
          '<ul><li><strong>Potřeba sociální opory:</strong> hledat pomoc a podporu.</li><li><strong>Vyhýbání se:</strong> zamezit zátěži nebo se jí vyhnout.</li></ul>' +
          '<h3>Rizikové, když převládnou (čtyři)</h3>' +
          '<ul><li><strong>Úniková tendence:</strong> vyváznout ze situace.</li><li><strong>Perseverace:</strong> dlouho přemílat, nedokázat se odpoutat.</li><li><strong>Rezignace:</strong> vzdát se s pocitem bezmoci.</li><li><strong>Sebeobviňování:</strong> přičítat zátěž vlastnímu chybnému jednání.</li></ul>' +
          '<div class="panel soft"><p><strong>Jak poznat zdravější strategii:</strong> zdravější je, když něco děláte vy sami. Zjišťujete, co se děje, vymýšlíte, co s tím, a řešíte přímo to, co vás stresuje.</p>' +
          '<p><strong>Jak poznat rizikovější strategii:</strong> rizikovější je, když jen čekáte, že to vyřeší někdo jiný nebo že to nějak dopadne. Máte pocit, že nic neovlivníte, a věnujete se spíš vedlejším věcem než skutečné příčině stresu.</p>' +
          '<p><strong>Příklad:</strong> dítě přinese poznámku ze školy. Zdravější je zavolat do školy a domluvit plán. Rizikovější je doufat, že se to samo vyřeší, nebo se tím celý večer jen trápit.</p></div>'
      },
      {
        type: "text", title: "Tři nejzdravější strategie: kontrola",
        html: '<p>Všechny tři patří mezi <strong>strategie kontroly</strong>.</p>' +
          '<h3>Kontrola situace: „Mám to pod kontrolou“</h3>' +
          '<p>Tendence získat kontrolu nad zátěžovou situací. Tvoří ji tři kroky: <strong>analýza</strong> situace a toho, jak vznikla, <strong>plánování</strong> opatření ke zlepšení a <strong>aktivní zásah</strong>. Je založená na rozumu. Zvládá nejen probíhající situaci, ale i <em>předchází</em> dalším. Příklad: před setkáním s biologickou matkou si připravíte plán večera, kdo dítě vyzvedne, co uděláte po návratu a komu zavoláte, kdyby to nešlo.</p>' +
          '<h3>Kontrola reakcí</h3>' +
          '<p>Tendence kontrolovat vlastní reakce: <strong>nedovolit, aby vzniklo vzrušení</strong> (zachovat klid, nenechat se vyvést z míry), a pokud už vzniklo, <strong>nenechat se jím ovlivnit</strong> („vím, že stres přichází, ale nenechám ho řídit“). Příklad: když dítě vybuchne, třikrát se zhluboka nadechnete a mluvíte tišeji než ono. Pozor: kontrola reakcí neznamená potlačování emocí natrvalo. Napětí je třeba později vypustit dechem, pohybem nebo rozhovorem (viz lekce 3 a 4).</p>' +
          '<h3>Pozitivní sebeinstrukce</h3>' +
          '<p>Do jaké míry se dokážete pozitivně motivovat a dávat si odvahu. Zahrnuje <strong>kladné postoje a myšlenky, které zvyšují sebedůvěru</strong>, a snahu vydržet, nevzdat se. Je protipólem rezignace. Důsledkem je účinné jednání. Je to vlastně schopnost „naprogramovat“ se pro zdravý boj se stresem. Příklad: „Tohle už jsem jednou zvládla, zvládnu to i teď.“</p>'
      },
      {
        type: "text", title: "Přehodnocení a odklon: lehčí pohled, aikido a příjemné náhrady",
        html: '<h3>Podhodnocení</h3>' +
          '<p>Tendence hodnotit zátěž jako méně závažnou než ostatní nebo si ji odlehčit, třeba humorem. Člověk se pak stresem skutečně míň zatěžuje. <strong>Riziko:</strong> bagatelizace skutečně rizikové situace a nedostatečné řešení. U dětí proto nikdy nepodceňujte varovné signály (sebepoškozování, šikana, zhoršení spánku).</p>' +
          '<h3>Odmítání viny</h3>' +
          '<p>Snížení vnímání vlastní viny za situaci. Je to <strong>obranná strategie</strong>, která zabrání zablokování přílišnou odpovědností. U pěstounů je užitečná při náročném chování dítěte: dítě se chová náročně kvůli tomu, co zažilo, ne proto, že jste špatný rodič. <strong>Riziko:</strong> alibismus a hledání náhradního viníka. I tak je méně riskantní než zahlcení vinou.</p>' +
          '<h3>Odklon: aikido stresu</h3>' +
          '<p>Strategie, při které se stresu nestavíte čelně, ale <strong>odkloníte ho jinam</strong>. Je blízká aikidu: nejdete proti protivníkovi silou, ale využijete jeho směr a energii, abyste ho přesměrovali a šetřili vlastní síly. Je velmi účinná, ale vyžaduje cvik. Většina lidí reaguje silovou obranou. K aikidu stresu je potřeba změnit postoje a hodnoty. Stojí to ale za to.</p>' +
          '<h3>Náhradní uspokojení</h3>' +
          '<p>Vyrovnat se se stresem tím, že uděláte něco, co vyvolává příjemné pocity nebo ve čem se cítíte úspěšní. Příjemné činnosti aktivují <strong>centrum odměny</strong>, mozek se zaplaví endorfiny, serotoninem a dopaminem. To je vítaná vzpruha, ale má dvě rizika: <strong>závislost</strong> (alkohol, přejídání, hazard, nadměrné cvičení, závislost na skupině) a <strong>„využívání problému“</strong>, kdy se nám problém hodí, protože nám dává omluvu nebo výhodu. Například hádka nám poskytne důvod proč odejít z domu, nebo proč mít navrch. Přesto je důležité, abyste tuto strategii aspoň částečně ovládali. Kdo neumí „přepnout“, často končí v přetížení.</p>'
      },
      {
        type: "sort", id: "s8-strategies", title: "Cvičení: Poznejte strategii",
        intro: "Přiřaďte každou výpověď ke skupině strategií. Při chybné volbě uvidíte vysvětlení a můžete to zkusit znovu.",
        categories: ["Kontrola (zdravější)", "Přehodnocení a odklon", "Opora nebo vyhýbání (podle situace)", "Rizikové strategie"],
        items: [
          { t: "Před kontaktem s biologickou matkou si napíšu plán večera: kdo dítě vyzvedne, co řeknu, kam půjdeme po návratu.", a: 0, why: "Analýza, plán a aktivní zásah: kontrola situace." },
          { t: "Když dítě vybuchne, třikrát se zhluboka nadechnu a mluvím tišeji než ono.", a: 0, why: "Kontrola reakcí: nenechám se vyvést z míry." },
          { t: "Říkám si: tohle už jsem zvládla, zvládnu to i teď.", a: 0, why: "Pozitivní sebeinstrukce posiluje sebedůvěru a vytrvalost." },
          { t: "Po náročném dni si dám koupel a hodinu čtu. Na děti ani úřady nemyslím.", a: 1, why: "Odklon a příjemná náhrada: zdravé, pokud se nestane jediným řešením." },
          { t: "Řeknu si, že se dítě chová náročně kvůli tomu, co zažilo. Není to moje selhání.", a: 1, why: "Odmítání viny: snižuje zahlcení vinou. Odpovědnost za vlastní reakce ale zůstává." },
          { t: "Zavolám klíčové pracovnici a přiznám, že už nevím, jak dál.", a: 2, why: "Potřeba sociální opory je zdravé hledání pomoci." },
          { t: "Na schůzku s učitelkou, kde se budou řešit stížnosti, zatím nepůjdu. Nemám na to sílu a nejsem připravená.", a: 2, why: "Vyhýbání se může být kalkul sil. Pokud se z něj stane návyk, problém roste." },
          { t: "Celou noc přemýšlím, co jsem měl říct jinak, a nemůžu přestat.", a: 3, why: "Perseverace: ulpívavé přemílání bez odpoutání." },
          { t: "Už je mi všechno jedno, stejně se nic nezmění.", a: 3, why: "Rezignace: vzdávání se s pocitem beznaděje." },
          { t: "Je to moje chyba. Měla jsem si toho všimnout dřív a nic by se nestalo.", a: 3, why: "Sebeobviňování: blokuje a ničí sebedůvěru." }
        ]
      },
      {
        type: "text", title: "Podle situace a rizikové strategie",
        html: '<h3>Potřeba sociální opory</h3>' +
          '<p>Vyhledávat lidi je přirozené, nejen při zátěži. Vysoké hodnoty mohou značit závislost nebo nesamostatnost, ale také zdravé vyhledávání pomoci. <strong>Vždy záleží na kontextu.</strong> V pěstounské péči je oporou rodina, doprovodná organizace, klíčový pracovník i skupiny pěstounů (viz lekce 7).</p>' +
          '<h3>Vyhýbání se</h3>' +
          '<p>Může být neplodným odkládáním, nebo dobrým <strong>kalkulem</strong>: umím odhadnout, jestli na situaci mám síly a zkušenosti, a když je riziková, vyhnu se jí. Pozitivem je omezení ztrát. Dlouhodobým negativem je, že se z nás stane mistr vyhýbání, ale ne řešení.</p>' +
          '<h3>Úniková tendence</h3>' +
          '<p>„Kdo uteče, vyhraje“ je přísloví dvojsečné. Únik přináší úlevu, a ta se může stát návykem: vzniká scénář chronického útěkáře, často se sníženým sebevědomím. Vyšší hodnoty bývají u počínajícího vyhoření, odcizení nebo životní krize.</p>' +
          '<h3>Perseverace</h3>' +
          '<p>Ulpívavé a nekontrolovatelné přemítání, neschopnost odpoutat se od problému. Postihuje zejména <strong>odpovědné lidi</strong>: přemýšlet o problémech i je řešit je přece správné. Jenže jen <em>tak akorát</em>. Kdo se nedokáže odpoutat, dostane se do tunelového vidění, přetíží se a urychlí vyhoření a rezignaci.</p>' +
          '<h3>Rezignace</h3>' +
          '<p>Po dlouhém trápení může přinést úlevu, ale zároveň zpečeťuje neúspěch a přichází v období velkých ztrát. Je typickým příznakem vyhoření a často ji provází depresivita.</p>' +
          '<h3>Sebeobviňování</h3>' +
          '<p>Výrazně negativní, blokující strategie. Kdo se cítí vinen, jen čeká na odsouzení nebo odpuštění od někoho jiného. Ztrácí sebedůvěru a motivaci jednat. Často je to chronický stav.</p>' +
          '<p class="note">Pokud se u vás rezignace, beznaděj nebo sebeobviňování drží déle než dva týdny, nebo se objeví myšlenky na sebepoškození, vyhledejte odbornou pomoc. Kontakty najdete v lekci 7 (Kde hledat podporu).</p>'
      },
      {
        type: "checklist", id: "c8-mine", title: "Cvičení: Moje typické strategie",
        intro: "Označte tři až pět strategií, které používáte nejčastěji. Nic se nevyhodnocuje a není to test. Slouží jako podklad pro reflexi. Výběr se uloží do deníku.", min: 3,
        groups: [
          ["Zdravější", ["Ve srovnání s druhými si říkám, že to tak zlé není (podhodnocení)", "Zdůrazňuji, že za to nemůžu (odmítání viny)", "Odvádím pozornost k něčemu jinému (odklon)", "Dopřeji si něco příjemného (náhradní uspokojení)", "Analyzuji, plánuji a jednám (kontrola situace)", "Držím své reakce na uzdě (kontrola reakcí)", "Říkám si, že to zvládnu (pozitivní sebeinstrukce)"]],
          ["Podle situace", ["Hledám podporu a pomoc u druhých (sociální opora)", "Zátěžím se snažím vyhnout (vyhýbání se)"]],
          ["Rizikové, když převládnou", ["Chci z té situace zmizet (úniková tendence)", "Dlouho přemílám, nemůžu se odpoutat (perseverace)", "Vzdávám to s pocitem beznaděje (rezignace)", "Vyčítám si to, obviňuji sebe (sebeobviňování)"]]
        ]
      },
      {
        type: "case", id: "k8", title: "Kazuistika: Dvě pěstounky, jedna zátěž",
        story: '<p>Hana i Jitka dostaly ve čtvrtek telefonát ze školy: jejich svěřenci se porvali a ředitelka žádá o schůzku. Obě jsou vyčerpané. <strong>Která z reakcí je z hlediska zvládání stresu nejzdravější?</strong></p>',
        options: [
          { text: "Hana si večer sedne a sepíše, co se stalo a co dítě potřebuje. Zavolá poradkyni a domluví se s manželem, kdo půjde na schůzku. Na schůzku si připraví tři otázky.", good: true, feedback: "Kontrola situace (analýza, plán, zásah) a sociální opora. Zároveň si Hana hlídá své reakce. Takto zdravě to může vypadat." },
          { text: "Jitka týden nezvedá telefon ze školy a přemýšlí, jestli nebude lepší dítě předat jinam.", good: false, feedback: "Vyhýbání se a perseverace. Krátce uleví, ale problém roste a hrozí rezignace. Pomohl by první malý krok a opora (klíčový pracovník, doprovodná organizace)." },
          { text: "Jitka si řekne: „Vždycky jsem věděla, že to nezvládnu. Je to moje chyba.“", good: false, feedback: "Sebeobviňování a rezignace. Blokují jednání. Pomůže pozitivní sebeinstrukce a rozhovor s někým, komu důvěřujete." }
        ]
      },
      { type: "reflect", id: "r8-mine", title: "Reflexe: Co mi pomáhá a co chci posílit", prompt: "Kterou strategii používáte nejraději a pomáhá vám? Kterou používáte, ale víte, že vám škodí? A kterou byste chtěli v následujících týdnech posílit? Stačí pár vět.", min: 80 },
      { type: "task", id: "t8", title: "Úkol do příštích dní", html: '<p>Vyberte <strong>jednu zdravější strategii</strong>, kterou chcete posílit (například kontrolu situace: připravte si plán na jednu náročnou chvíli týdne, nebo odklon: naplánujte si hodinu jen pro sebe). Zkuste ji použít aspoň třikrát během příštího týdne a všímejte si, co se děje.</p><p class="note">Nejde o dokonalost, ale o to rozšířit repertoár.</p>', commit: "Vyberu si strategii a vyzkouším ji." },
      {
        type: "summary", title: "Shrnutí lekce 8",
        points: [
          "V ukázkovém modelu SVF se strategie dělí do tří skupin: zdravější (sedm), podle situace (dvě) a rizikové (čtyři).",
          "Nejzdravější jsou strategie kontroly: kontrola situace, kontrola reakcí a pozitivní sebeinstrukce.",
          "Podhodnocení, odmítání viny, odklon (aikido) a náhradní uspokojení pomáhají, ale mají svá rizika.",
          "Sociální opora a vyhýbání se jsou podle situace. Únik, perseverace, rezignace a sebeobviňování jsou rizikové, když převládnou.",
          "Nejde vybrat jednu správnou strategii. Důležité je mít jich víc a vědět, kdy kterou použít."
        ],
        sources: [
          "Janke, W., Erdmann, G.: Stressverarbeitungsfragebogen (SVF). Göttingen: Hogrefe.",
          "Křivohlavý, J.: Jak zvládat stres. Praha: Grada/Avicenum."
        ]
      }
    ],
    quiz: [
      { q: "Které tři strategie patří k nejzdravějším (strategie kontroly)?", o: ["Kontrola situace, kontrola reakcí, pozitivní sebeinstrukce", "Únik, vyhýbání se, rezignace", "Podhodnocení, perseverace, sebeobviňování"], c: 0, why: "Jsou aktivní, založené na rozumu a působí na zdroj stresu." },
      { q: "Co je typické pro zdravější strategie zvládání stresu?", o: ["Jsem aktivní, působím na zdroj stresu a mám situaci pod kontrolou", "Spoléhám na osud nebo na jiné a stres raději neřeším", "Soustředím se na to, abych na stres vůbec nemyslel"], c: 0, why: "Rizikové strategie jsou naopak spíš pasivní a míjí jádro problému." },
      { q: "Proč je perseverace (ulpívavé přemílání) zvlášť rizikové pro odpovědné lidi?", o: ["Myslet na problémy je správné, ale když se od nich nedokážu odpoutat, vzniká tunelové vidění a přetížení", "Protože odpovědní lidé nemají vůbec přemýšlet", "Perseverace je naopak vždy zdravá"], c: 0, why: "Jde o „tak akorát“: přemýšlet ano, ale umět se odpoutat." },
      { q: "Vyhýbání se zátěžové situaci je:", o: ["Podle situace: může být dobrý kalkul sil, ale dlouhodobě problém neřeší", "Vždy nejzdravější strategie", "Vždy nejhorší strategie"], c: 0, why: "Vyhnout se riziku je občas rozumné, ale z člověka se nesmí stát jen mistr ve vyhýbání." },
      { q: "Co znamená „odklon“ ve smyslu aikida?", o: ["Nejdu proti stresu silou, využiji jeho směr a přesměruji ho, abych šetřil síly", "Utíkám co nejrychleji pryč", "Postavím se stresu čelem a prosadím svou vůli"], c: 0, why: "Je to velmi účinná strategie, ale vyžaduje cvik a změnu postojů." }
    ]
  };
  var fin = C.modules.pop();
  C.modules.push(m9, fin);

  /* ---------- Závěrečný test: banka otázek; při každém pokusu se vybere 12 rovnoměrně z lekcí ---------- */
  C.finalTest = C.finalTest.concat([
    { q: "Který z těchto výroků o stresu je nejpřesnější?", o: ["Stres je původně obranná a podpůrná reakce. Škodí hlavně dlouhodobý stres bez možnosti odeznít", "Stres je vždy škodlivý a je třeba se mu vyhýbat", "Stres škodí jen lidem, kteří jsou příliš citliví"], c: 0, m: 1, why: "Rozlišujeme eustres (aktivující) a distres (zatěžující). Rozhoduje dávka, délka a opora." },
    { q: "Který prst „Ruky potřeb“ je metaforou hranic?", o: ["Palec", "Malíček", "Ukazováček"], c: 0, m: 2, why: "Palec nám umožnil uchopit svět. Je symbolem přiměřených hranic: v místě, čase, rolích i bezpečí." },
    { q: "Co o relaxaci platí podle lekce 3?", o: ["Naučit se ji je třeba, a po ní je dobré věnovat energii konkrétnímu cíli (aktivace)", "Stačí si lehnout a nic nedělat, energie se vrátí sama", "Je to ztráta času pro člověka, který chce podávat výkon"], c: 0, m: 3, why: "Relaxace znamená znovunavození klidu. Aby měla smysl, potřebuje navázat aktivním jednáním." },
    { q: "Co z následujícího je podle lekce 8 nejzdravější strategie zvládání stresu?", o: ["Kontrola situace: analýza, plán a aktivní zásah", "Vyhýbání se všemu náročnému", "Sebeobviňování, aby se věc už neopakovala"], c: 0, m: 8, why: "Kontrola situace je aktivní, založená na rozumu a zahrnuje i prevenci." },
    { q: "Který znak patří k rizikové strategii perseverace?", o: ["Ulpívavé přemílání problému bez schopnosti odpoutat se", "Žádost o pomoc klíčového pracovníka", "Příprava plánu na náročný večer"], c: 0, m: 8, why: "Perseverace přetěžuje, vede k tunelovému vidění a urychluje vyhoření." }
  ]);
  C.skipUnrecorded = true; /* repliky bez nahrávky se při poslechu přeskočí (místo hlasu prohlížeče) */
  C.finalSize = 12;
  C.finalQuota = { 1: 2, 2: 2, 3: 1, 4: 2, 5: 1, 6: 1, 7: 1, 8: 2 };
})();
