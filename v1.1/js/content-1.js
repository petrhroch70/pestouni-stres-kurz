/* Obsah kurzu – část 1: nastavení, úvod, lekce 1–2.
   Typy kroků: text, scene, breath, sort, case, reflect, checklist, mirror, ladder, barometer,
   phases, grounding, glimmers, crisisplan, mediaplan, task, quiz. */
window.COURSE = {
  id: "pestouni-stres-2026",
  title: "Stres v pěstounské péči",
  subtitle: "E-learning pro pěstouny a osoby pečující",
  author: "Mgr. Petr Hroch",
  version: "1.0 (2026)",
  totalMinutes: 360,
  /* Zvláštní režimy: adresa s #demo (ukázka) nebo #admin (plná verze bez limitů; heslo nastavte příkazem node tools/admin_hash.js) */
  demo: { modules: ["m0", "m1"], testQuestions: 5 },
  adminHash: "",
  /* Údaje provozovatele (OSVČ) pro stránku Informace a soukromí a pro osvědčení. Vyplňte, co se má zobrazit; prázdné se nezobrazí. */
  operator: { name: "Mgr. Petr Hroch", legalForm: "fyzická osoba podnikající (OSVČ)", ico: "", dic: "", address: "", register: "", email: "", phone: "", web: "", accreditation: "" },
  moduleQuizPass: 0.6,
  finalPass: 0.6,
  minActiveShare: 0.5,
  lessonShare: 0.6,
  idleSeconds: 180,
  modules: []
};

window.COURSE.modules.push({
  id: "m0",
  short: "Úvod a vstupní zrcadlo",
  title: "Úvod: proč se stresem pracovat vědomě",
  minutes: 20,
  goals: [
    "Víte, jak kurz funguje a co je potřeba ke splnění.",
    "Máte vstupní obraz své aktuální zátěže (Pěstounské zrcadlo)."
  ],
  steps: [
    {
      type: "text",
      title: "Vítejte v kurzu",
      html: `
<p class="lede">Starat se o dítě, které si prošlo těžkými chvílemi, je práce na plný úvazek pro tělo, emoce i hlavu. Tenhle kurz je o tom, jak v ní vydržet dlouho a zůstat dítěti stabilní oporou.</p>
<p>Děti v náhradní péči často zažily trauma, deprivaci nebo časté změny pečujících. Své zkušenosti pak „vyprávějí“ chováním, které není snadné pochopit ani unést. Vaše péče jim může změnit život. Zároveň je to dlouhodobá zátěž, kterou nikdo nezvládne jen silou vůle.</p>
<h3>Co si z kurzu odnesete</h3>
<ul>
  <li><strong>Porozumění:</strong> co se při stresu děje v těle a mozku u vás i u dítěte, a proč dítě s traumatem reaguje „přehnaně“.</li>
  <li><strong>Nástroje:</strong> dechové a tělesné techniky, zemnění, bezpečné místo, emoční barometr, práci s technologiemi v rodině.</li>
  <li><strong>Prevenci vyhoření:</strong> jak poznat, že se blížíte k hranici, a co s tím udělat dřív, než se něco zlomí.</li>
  <li><strong>Vlastní plán:</strong> krizový plán a plán sebepéče, který si na konci kurzu sestavíte a uložíte.</li>
</ul>
<h3>Jak kurz funguje</h3>
<ul>
  <li>Kurz má <strong>9 bloků (úvod, 7 lekcí a závěr) v celkovém rozsahu 6 hodin (360 minut)</strong>. Lekce i jejich kroky můžete procházet v libovolném pořadí.</li>
  <li>Každá lekce kombinuje <strong>modelovou scénu</strong> (rozhovor pěstouna Marka s psychologem Janem a psycholožkou Klárou), <strong>výklad</strong>, <strong>praktická cvičení</strong>, <strong>kazuistiku</strong>, <strong>reflexi</strong> a <strong>kontrolní test</strong>. Text každé stránky si můžete pustit nahlas a ke každé lekci je podcast.</li>
  <li>V horní liště běží <strong>aktivní čas</strong>. Počítá se jen tehdy, když je kurz otevřený a pracujete s ním nebo posloucháte. Po třech minutách bez jakékoli aktivity se měření pozastaví. Časy u lekcí jsou doporučené, postup neblokují.</li>
  <li>Kapitola se započte, když splníte aspoň 60 % jejích kroků (cvičení, reflexe, test) <em>nebo</em> v ní strávíte aspoň 60 % doporučeného času.</li>
  <li><strong>Pro osvědčení potřebujete:</strong> všechny kapitoly započtené, závěrečný test aspoň na 60 %, aktivní čas v kurzu aspoň 180 minut (polovina rozsahu) a krátké hodnocení kurzu.</li>
  <li>Zbývající část do plného rozsahu 8 výukových hodin doložíte <strong>čestným prohlášením</strong>: stručně popíšete, jak jste ho věnovali tématu (sebereflexe, četba, diskuse, další zdroje). Prohlášení ověřuje váš klíčový pracovník.</li>
</ul>
<p class="note">Postavy Marek, Jan a Klára jsou modelové. Příklady z praxe jsou ilustrativní, složené ze zkušeností z poradenské práce, a jména jsou smyšlená.</p>
`
    },
    {
      type: "text",
      title: "Než začnete: tři poznámky",
      html: `
<h3>1. Tohle není terapie</h3>
<p>Kurz je vzdělávací. Nenahrazuje psychologa, psychoterapii ani lékaře. Pokud se při některé části cítíte výrazně hůř, dejte si pauzu. Když zátěž trvá, obraťte se na svou doprovázející organizaci nebo odborníka. Kontakty najdete v poslední lekci a v deníku.</p>
<h3>2. Dech nemusí sedět každému</h3>
<p>Část technik pracuje s dechem. U lidí v dlouhodobém přetížení se někdy stane, že zastavení a pozornost „dovnitř“ přinese spíš úzkost než úlevu. Tělo si najednou všimne, co dlouho přehlíželo. Pokud se vám to stane, není to chyba. Zkuste variantu s pohybem, s otevřenýma očima nebo s pozorností ven (zvuky, barvy, chodidla).</p>
<h3>3. Rozlišujeme, co víme a co předpokládáme</h3>
<p>U odbornějších tvrzení najdete štítky:</p>
<ul>
  <li><span class="tag fact">ověřeno</span> dobře doložené poznatky,</li>
  <li><span class="tag probable">pravděpodobné</span> rozumně podložené, ale ne definitivní,</li>
  <li><span class="tag hyp">model</span> užitečný pracovní model nebo hypotéza, o které se v odborné komunitě vedou spory.</li>
</ul>
<p>Pro praxi to znamená: modely používejte jako mapu, ne jako dogma.</p>
`
    },
    {
      type: "mirror",
      id: "mirrorPre",
      title: "Pěstounské zrcadlo (vstupní)",
      intro: "Krátký sebereflektivní audit. Odpovídejte za poslední měsíc. Nejde o diagnózu ani standardizovaný test. Je to zrcadlo, do kterého se na konci kurzu podíváte znovu a porovnáte."
    },
    {
      type: "reflect",
      id: "r0-expect",
      title: "S čím do kurzu vstupuji",
      prompt: "Co je pro vás v pěstounství teď nejnáročnější? A co byste si z kurzu chtěli odnést? Stačí pár vět. Uvidíte je jen vy, v deníku kurzu.",
      min: 80
    }
  ],
  quiz: null
});

window.COURSE.modules.push({
  id: "m1",
  short: "Co je stres",
  title: "Lekce 1: Co je stres a jak se projevuje v pěstounské rodině",
  minutes: 45,
  goals: [
    "Vysvětlíte, co je stres a jakou má funkci.",
    "Rozpoznáte tělesné, emoční a behaviorální projevy stresu u sebe.",
    "Zmapujete hlavní zdroje stresu ve své pěstounské situaci.",
    "Vyzkoušíte krabicové dýchání."
  ],
  steps: [
    {
      type: "scene",
      title: "Scéna: „Maraton bez cílové pásky“",
      slug: "Scéna 1 · Psychologická poradna · útulná místnost s křesly",
      intro: "Představte si následující text jako scénu z filmu. Pohodlně se usaďte a „poslouchejte“. Všímejte si, jestli se vás v něčem netýká.",
      lines: [
        ["marek", "Díky, že jste si na mě udělal čas, Honzo. Někdy mám pocit, že pěstounství je jeden velký stres. Nejde o to, že by děti dělaly něco hrozného. Je to ta neustálá nejistota, jejich emoce, a k tomu úřady a škola. Jsem někdy na pokraji vyhoření."],
        ["jan", "Rozumím, Marku. Váš stres je přirozená reakce těla na zátěž. Představte si ho jako alarm. Když se objeví něco náročného, tělo se připraví na boj nebo útěk. Jenže v pěstounství ten „boj“ nikdy úplně nekončí, že?"],
        ["marek", "Přesně. Cítím se, jako bych běžel maraton, ale nikde nevidím cílovou pásku."],
        ["jan", "To je přesné přirovnání. Dlouhodobý stres, u kterého nevidíte konec, je vyčerpávající. Mozek je pořád v pohotovosti, tělo vyplavuje stresové hormony, a když si nedáte pauzu, začne se to projevovat na zdraví i na náladě."],
        ["marek", "Cítím to. Někdy nemůžu spát, jindy mě bolí hlava. A pak mám výčitky, že nejsem dost trpělivý."],
        ["jan", "To je typická reakce na dlouhodobý stres. Tělo vám říká: potřebuju pauzu. Stres není selhání. Je to signál, že je potřeba něco změnit."],
        ["dir", "Marek se zamyslí, pak se usměje."],
        ["marek", "Takže stres je něco jako kontrolka v autě?"],
        ["jan", "Ano. Když se rozsvítí kontrolka oleje, taky ji nepřelepíte páskou. Pod stresem se mění tělo: únava, napjaté svaly, bolesti hlavy. Na to navazují emoce: podrážděnost, úzkost, pocit vyčerpání. A na emoce chování: horší spánek, přejídání nebo nechutenství, výbuchy."],
        ["marek", "To sedí na mě. A asi i na děti. Mám pocit, že jsou ve stresu pořád."],
        ["jan", "Děti s traumatem to mají složitější. Jejich poplašný systém je jako příliš citlivý kouřový hlásič, spouští se i při připáleném toastu. K tomu se dostaneme v příští lekci."],
        ["marek", "Dobře, ale co s tím? Nemůžu si vzít týden volna od pěstounství."],
        ["jan", "Někdy vlastně můžete. Pěstoun má nárok na zajištění péče o dítě, když potřebuje odpočinek, a dobrá doprovázející organizace s tím pomůže. Ale hlavně pomáhá pár minut denně, kdy si vědomě dovolíte zpomalit. Dech, pohyb, krátké pauzy. A humor, ten je výborné koření."],
        ["klara", "Dovolte, abych se přidala. Mnoho pěstounů si myslí, že musí být pořád silní. Sebepéče ale není luxus. Znáte to z letadla: kyslíkovou masku nasadíte nejdřív sobě, pak dítěti. Vyčerpaný člověk se o druhé dlouho starat nedokáže."],
        ["marek", "Takže nejsem špatný pěstoun, když si dám pauzu?"],
        ["klara", "Naopak. Dobrý rodič se o sebe stará, aby mohl být dítěti oporou."]
      ],
      takeaways: [
        "Stres není selhání, ale signál, že je potřeba něco změnit.",
        "Dlouhodobý stres se projeví na těle, v emocích i v chování.",
        "Pomáhají i drobné, ale pravidelné kroky: dech, pohyb, pauzy, humor.",
        "Sebepéče je podmínka dlouhodobé péče o druhé."
      ]
    },
    {
      type: "text",
      title: "Co je stres doopravdy",
      html: `
<p>Stres je <strong>přirozená reakce organismu na zátěž</strong>, tělesnou i psychickou. Mozek vyhodnotí situaci jako potenciálně ohrožující a tělo spustí <strong>poplašný systém</strong>: zrychlí se tep a dech, napnou se svaly, do krve se vyplaví adrenalin a kortizol. Jde o vývojově staré mechanismy, které měly jediný účel: přežít fyzické ohrožení. <span class="tag fact">ověřeno</span></p>
<blockquote>„Stres je jako kontrolka v autě. Neříká, že jste špatný řidič. Upozorňuje, že je potřeba zastavit a doplnit olej.“</blockquote>
<p>Jiný obraz: vaše mysl je jako telefon, ve kterém běží v pozadí příliš mnoho aplikací: obavy o dítě, nedodělané papíry, finance, schůzka na OSPOD. Telefon se začne zahřívat a zpomalovat. To není vada telefonu. Je to přetížení.</p>

<h3>Obecný adaptační syndrom</h3>
<p>Endokrinolog Hans Selye popsal reakci na dlouhodobou zátěž ve třech fázích. <span class="tag fact">ověřeno</span></p>
<ol>
  <li><strong>Poplachová reakce</strong>: tělo se mobilizuje, typicky útok nebo útěk.</li>
  <li><strong>Fáze odolávání</strong>: organismus se zátěži přizpůsobuje a „jede na výkon“. Zvenku to může vypadat, že je vše v pořádku.</li>
  <li><strong>Fáze vyčerpání</strong>: rezervy dojdou. Objevují se nemoci, otupělost, vyhoření, „zamrznutí“.</li>
</ol>
<p>Pěstounská péče je typický příklad <strong>dlouhodobé zátěže</strong>. Staráte se o dítě s traumatickou minulostí, řešíte jeho emoce, kontakty s biologickou rodinou, papírování, školu i vlastní pocity. Snadno se tak ocitnete v druhé fázi na měsíce či roky. Právě tam je největší riziko: člověk má pocit, že to zvládá, dokud to najednou nejde.</p>

<h3>Eustres a distres</h3>
<p>Ne každý stres škodí. <strong>Eustres</strong> je zátěž, která nás aktivuje a po které přijde zotavení (nová výzva, příprava na oslavu, sport). <strong>Distres</strong> je zátěž, která trvá příliš dlouho, je příliš silná nebo nad ní nemáme žádnou kontrolu. Rozhoduje hlavně <em>délka</em>, <em>pocit kontroly</em> a to, zda přichází <em>zotavení</em>.</p>
`
    },
    {
      type: "text",
      title: "Odkud stres přichází: stresory",
      html: `
<p>Stresory můžeme rozdělit do čtyř skupin. Pomáhá to vidět, že stres není jedna věc, ale několik zdrojů, které se sčítají.</p>
<div class="table-wrap"><table>
<thead><tr><th>Skupina</th><th>Co sem patří</th><th>Pěstounská podoba</th></tr></thead>
<tbody>
<tr><td><strong>Fyzikálně-chemické</strong></td><td>nedostatek spánku a pohybu, špatná strava, hluk, návykové látky, přetížení</td><td>noční buzení, chronický hluk v domácnosti, jídlo „ve stoje“</td></tr>
<tr><td><strong>Úkolové</strong></td><td>množství a uspořádání úkolů, časový tlak</td><td>terapie, lékaři, škola, kontakty, výkazy, hlídání termínů</td></tr>
<tr><td><strong>Myšlenkové</strong></td><td>jak hodnotíme sebe, druhé a události</td><td>„musím to zvládnout sám“, „dobrý pěstoun nekřičí“, „zklamu dítě“</td></tr>
<tr><td><strong>Sociální</strong></td><td>vztahy a komunikace s lidmi</td><td>OSPOD, biologická rodina, škola, okolí, které nerozumí, partnerské napětí</td></tr>
</tbody></table></div>

<h3>Specifické stresory pěstounů</h3>
<p>Pěstounství sdílí mnoho rysů s pomáhajícími profesemi, ale má navíc jednu zvláštnost: <strong>nemá konec směny</strong>. Typické zdroje zátěže:</p>
<ul>
  <li>život s traumatizovaným dítětem a jeho náročným chováním,</li>
  <li>pocit odpovědnosti „za všechno“ a nejistota budoucnosti (jak dlouho dítě zůstane, co rozhodne soud),</li>
  <li>kontrola a hodnocení zvenčí (OSPOD, doprovázející organizace, škola),</li>
  <li>kontakty s biologickou rodinou a loajalitní konflikty dítěte,</li>
  <li>promítání do soukromého života a partnerského vztahu,</li>
  <li>malé společenské ocenění a nepochopení okolí („vždyť za to dostáváte peníze“),</li>
  <li>povinné vzdělávání a administrativa navíc k péči.</li>
</ul>
<p>Myšlenkové stresory mají zvláštní postavení: často <strong>zesilují</strong> všechny ostatní. Stejná situace (dítě křičí v obchodě) má jinou váhu, když si říkám „to je jeho trauma, zvládneme to“, než když si říkám „všichni vidí, že to nezvládám“.</p>
`
    },
    {
      type: "checklist",
      id: "c1-stressors",
      title: "Cvičení: Mapa mých stresorů",
      intro: "Označte vše, co vás v posledních třech měsících opakovaně zatěžovalo. Vyberte aspoň tři položky. Výběr se uloží do deníku a vrátíte se k němu v poslední lekci.",
      min: 3,
      items: [
        "Nedostatek spánku / noční buzení",
        "Náročné chování dítěte (vztek, agrese, lhaní, útěky)",
        "Uzavřenost dítěte, nedostupnost, „zeď“",
        "Kontakty s biologickou rodinou",
        "Jednání s OSPOD / soudem / úřady",
        "Škola: stížnosti, úkoly, vyšetření",
        "Lékaři, terapie, dojíždění",
        "Finance",
        "Napětí v partnerském vztahu",
        "Vlastní děti a jejich potřeby",
        "Nepochopení nebo kritika okolí",
        "Pocit, že na všechno jsem sám/sama",
        "Vlastní nároky: „musím být dokonalý pěstoun“",
        "Nejistota, jak dlouho dítě zůstane",
        "Vlastní zdravotní potíže",
        "Péče o stárnoucí rodiče"
      ]
    },
    {
      type: "text",
      title: "Jak stres ovlivňuje tělo, emoce a chování",
      html: `
<p>Stres se projevuje ve třech vrstvách, které na sebe navazují:</p>
<div class="table-wrap"><table>
<thead><tr><th>Tělo</th><th>Emoce a myšlení</th><th>Chování</th></tr></thead>
<tbody><tr>
<td>bolesti hlavy, napětí v šíji a zádech, stažená čelist, zažívací potíže, pocení, bušení srdce, únava, častější nemoci</td>
<td>podrážděnost, úzkost, pocity viny, vyčerpání, strach z budoucnosti, potíže se soustředěním, zapomínání, pocit „nezvládám“</td>
<td>výbuchy vzteku, poruchy spánku, přejídání nebo nechutenství, víc kávy či alkoholu, stahování se od lidí, neschopnost odpočívat</td>
</tr></tbody></table></div>
<p>Dlouhodobý stres se podílí na řadě zdravotních potíží: vysoký krevní tlak, migrény, zažívací a kožní obtíže, oslabení imunity. <span class="tag fact">ověřeno</span> Neznamená to, že každá migréna je ze stresu. Znamená to, že tělo je první, kdo zátěž hlásí, a stojí za to ho poslouchat.</p>

<h3>Příklady z praxe</h3>
<blockquote>Paní Eva, pěstounka tří dětí: „Když má Anička záchvat vzteku, cítím, jak mi tuhne krk a potí se dlaně. Pak se zlobím na sebe, že nejsem dost trpělivá.“</blockquote>
<p>Evino tělo dává jasný signál: tohle je moc. Problém není v tom signálu. Problém je v tom, co následuje: sebeobviňování přidá k vnější zátěži ještě vnitřní.</p>
<blockquote>Manželé Petr a Alena: „Když nás děti třikrát za noc budí, cítíme, jak se nám svírá žaludek. Dřív jsme to brali jako selhání. Teď víme, že je to výzva, abychom si rozdělili noci a domluvili si odpočinek.“</blockquote>

<h3>Pohádka jako mapa</h3>
<p>Jeníček a Mařenka zažívají v perníkové chaloupce obrovský stres. Ale právě strach je drží v pohotovosti a vede je k řešení: drobečky, finta s kůstkou, lopata. Stres je v tomhle smyslu <strong>kompas</strong>. Ukazuje, kde potřebujete změnu nebo podporu.</p>

<h3>Sklenice vody</h3>
<p>Psycholožka Klára používá jednoduchý obraz: vezměte do ruky sklenici vody. Chvíli ji držet není problém. Držet ji hodinu začne bolet. Celý den, a ruka vypoví službu. Váha sklenice se nezměnila. Změnila se <strong>doba</strong>, po kterou ji držíte. Se stresem je to stejné. Klíčem není nedržet nic, ale <strong>umět sklenici občas odložit</strong>.</p>
`
    },
    {
      type: "text",
      title: "Základní nástroje první volby",
      html: `
<p>Než se v dalších lekcích pustíme do hloubky, tady jsou čtyři nástroje, které fungují téměř vždy a téměř všude:</p>
<ul>
  <li><strong>Dech.</strong> Pomalý dech s prodlouženým výdechem patří k nejrychlejším způsobům, jak tělu signalizovat bezpečí. <span class="tag probable">pravděpodobné</span></li>
  <li><strong>Pohyb.</strong> Stresová reakce tělo připravuje na pohyb. Krátká procházka, protažení nebo tanec pomůže energii „vybít“.</li>
  <li><strong>Mikropauzy.</strong> Pět minut s čajem a hudbou. Nejde o délku, jde o pravidelnost.</li>
  <li><strong>Humor.</strong> Smích uvolňuje napětí a vrací nadhled. Komedie, vtipné video, společné blbnutí s dětmi.</li>
</ul>
<p>Pomoct mohou i <strong>smyslové pomůcky</strong>: vůně, kterou máte rádi, hmatový polštářek, teplý hrnek v dlaních. Pro děti s traumatem bývá konkrétní předmět účinnější než abstraktní rada.</p>
<h3>Krabicové dýchání</h3>
<p>Nádech na 4 doby, zadržení na 4, výdech na 4, zadržení na 4. Rovnoměrný rytmus dává mysli pevný bod. Pokud vám zadržování dechu nevyhovuje, zkraťte ho na 2 doby nebo ho vynechte. Na další stránce si techniku vyzkoušíte s vizuálním průvodcem.</p>
`
    },
    {
      type: "breath",
      id: "b1-box",
      title: "Cvičení: Krabicové dýchání (5 cyklů)",
      intro: "Posaďte se, chodidla na zem. Sledujte kruh: když roste, nadechujte se nosem; když stojí, zadržte; když se zmenšuje, vydechujte. Cvičení trvá asi minutu a půl. Klidně ho zopakujte.",
      pattern: [["Nádech", 4, "in"], ["Zadržet", 4, "hold"], ["Výdech", 4, "out"], ["Zadržet", 4, "hold"]],
      cycles: 5
    },
    {
      type: "case",
      id: "k1",
      title: "Kazuistika: Večer u Novotných",
      story: `<p>Je úterý, 19:40. Jana (pěstounka, 44 let) přišla z jednání na OSPOD, kde se řešilo prodloužení kontaktů s biologickou matkou. Desetiletý Tomáš odmítá dělat úkoly, kope do židle a křičí „stejně mě tady nechcete“. Jana cítí, jak jí buší srdce a tuhne čelist. Má chuť zakřičet zpátky.</p><p><strong>Co by Janě v tuto chvíli nejvíc pomohlo?</strong></p>`,
      options: [
        { text: "Zakřičet „Tak dost!“, aby Tomáš pochopil, že takhle to nejde.", good: false, feedback: "Pochopitelný impulz, ale křik zvýší poplach u obou. Tomáš uslyší potvrzení své věty „stejně mě nechcete“." },
        { text: "Všimnout si signálů svého těla, pomalu vydechnout a dát si pár vteřin, než odpoví.", good: true, feedback: "Ano. Jana nejdřív potřebuje „sundat ruku z alarmu“ u sebe. Krátké zpomalení (jeden až tři dlouhé výdechy) jí vrátí přístup k rozvaze. Teprve pak může reagovat na Tomáše, ne na vlastní poplach." },
        { text: "Ignorovat své pocity a soustředit se jen na Tomáše.", good: false, feedback: "Potlačené napětí obvykle „vyteče“ později a silněji. Krátké vědomé zastavení u sebe není sobecké. Je to podmínka toho, aby Jana mohla Tomášovi pomoct." },
        { text: "Odejít a nechat Tomáše, ať se uklidní sám.", good: false, feedback: "Krátké odstoupení je někdy rozumné, ale bez vysvětlení může dítě s traumatem prožít jako odmítnutí. Pokud odcházíte, řekněte: „Potřebuju chvilku, vrátím se za dvě minuty.“" }
      ]
    },
    {
      type: "reflect",
      id: "r1-signals",
      title: "Reflexe: Moje varovné kontrolky",
      prompt: "Jak poznáte, že jste ve stresu? Popište své nejčasnější signály: co se děje v těle, co si říkáte, co začnete dělat. Čím dřív kontrolku zahlédnete, tím snáz zasáhnete.",
      min: 120
    },
    {
      type: "task",
      id: "t1",
      title: "Úkol do příštích dní",
      html: `<p>Vyberte si <strong>jednu chvíli denně</strong> (třeba po odvedení dětí do školy nebo před spaním), kdy uděláte 5 cyklů krabicového dýchání nebo pěti minutovou mikropauzu. Dělejte to aspoň tři dny po sobě a všímejte si, co se děje.</p><p class="note">Pravidelnost je důležitější než dokonalé provedení.</p>`,
      commit: "Naplánuji si to a vyzkouším."
    },
    {
      type: "summary",
      title: "Shrnutí lekce 1",
      points: [
        "Stres je přirozená reakce organismu na zátěž. Je to signál, ne selhání.",
        "Selyeho model: poplach → odolávání → vyčerpání. Pěstouni často žijí dlouho ve fázi odolávání.",
        "Stresory jsou fyzikální, úkolové, myšlenkové a sociální. Myšlenkové často zesilují ostatní.",
        "Stres se projevuje v těle, emocích a chování. Tělo hlásí zátěž jako první.",
        "Nástroje první volby: dech, pohyb, mikropauzy, humor, smyslové pomůcky."
      ],
      sources: [
        "Selye, H.: koncept obecného adaptačního syndromu (původně 1936; česky vyšla např. kniha Stres života).",
        "Křivohlavý, J.: Jak zvládat stres. Praha: Grada/Avicenum.",
        "Maté, G.: Když tělo řekne ne (o vztahu dlouhodobého stresu a zdraví; český překlad existuje, údaje o vydání si ověřte).",
        "McGonigal, K.: How to make stress your friend. TED, 2013. https://www.ted.com/talks/kelly_mcgonigal_how_to_make_stress_your_friend (anglicky, s titulky)."
      ]
    }
  ],
  quiz: [
    { q: "Srdce vám buší, svaly jsou napjaté a dech zrychlený. K čemu to vaše tělo dělá?", o: ["Připravuje vás zvládnout zátěž nebo ohrožení", "Chce vás oslabit, abyste si odpočinuli", "Je to porucha, kterou je třeba hned odstranit"], c: 0, why: "Stresová reakce je pomoc, kterou tělo umí od pradávna. Potíž nastává, až když nemá kdy odeznít." },
    { q: "Máte za sebou měsíce velkého nasazení. Navenek všechno stíháte, jen jste pořád unavení a podráždění. Co se nejspíš děje?", o: ["Tělo jede na rezervy a ty se tiše vyčerpávají, i když to není vidět", "Nic, když to stíháte, je to v pořádku", "Je to jen povaha a nedá se s tím nic dělat"], c: 0, why: "Dlouho to jde „na výkon“. Rezervy ale ubývají, proto se vyplatí zastavit včas, než se to ozve silněji." },
    { q: "Říkáte si: „Dobrý pěstoun nikdy nezvýší hlas.“ Jak to na vás působí?", o: ["Zvyšuje to tlak na mě a stres se tím zesiluje", "Pomáhá mi to být klidnější", "Na stres to nemá žádný vliv"], c: 0, why: "Přísná myšlenka o sobě je také stresor. Pomáhá laskavější věta: „Chci to zvládat, ale jsem člověk.“" },
    { q: "Sklenice vody váží celý den stejně. Proč nás po hodině držení rozbolí ruka?", o: ["Záleží na tom, jak dlouho ji držíme bez odložení", "Voda se postupně zatěžuje", "Ruka je prostě slabá"], c: 0, why: "Se stresem je to podobné: nejde jen o to, jak je zátěž velká, ale jak dlouho ji neseme. Pomáhá ji průběžně odkládat." },
    { q: "Při krabicovém dýchání vám dělá potíže zadržení dechu. Co můžete udělat?", o: ["Zadržení zkrátit nebo vynechat, hlavně aby rytmus byl pomalý a pohodlný", "Vydržet za každou cenu", "Přestat a už to nikdy nezkoušet"], c: 0, why: "Technika se přizpůsobuje vám, ne naopak. Důležitý je pomalý, pravidelný rytmus." }
  ]
});

window.COURSE.modules.push({
  id: "m2",
  short: "Děti s traumatem",
  title: "Lekce 2: Jak stres ovlivňuje děti s traumatem",
  minutes: 50,
  goals: [
    "Vysvětlíte, proč dítě s traumatem reaguje na běžné podněty jako na ohrožení.",
    "Rozlišíte reakce boj, útěk a zamrznutí.",
    "Znáte pojem okno tolerance a pořadí „nejdřív zklidnit, pak vztah, pak rozum“.",
    "Vyzkoušíte dechovou cestu, techniku pro děti."
  ],
  steps: [
    {
      type: "scene",
      title: "Scéna: „Proč se schová pod stůl?“",
      slug: "Scéna 2 · Psychologická poradna · o týden později",
      lines: [
        ["marek", "Honzo, musím se zeptat. Proč některé děti reagují na úplně běžné situace tak silně? Když zvýším hlas, syn se okamžitě stáhne, někdy se schová pod stůl. Jindy po mně hodí, co má zrovna v ruce."],
        ["jan", "To, co popisujete, je u dětí, které zažily trauma, velmi časté. Jejich mozek se vyvíjel v prostředí, kde nebezpečí bylo skutečné. Naučil se proto hledat ho všude."],
        ["marek", "Jakože se lekají snadněji?"],
        ["jan", "Ano. Představte si kouřový hlásič, který se spustí pokaždé, když někdo trochu zvýší hlas. Poplašný systém je přecitlivělý a reaguje na běžné situace, jako by šlo o život."],
        ["marek", "Takže když se syn stáhne, není to tím, že by mě neposlouchal. Jeho tělo si myslí, že mu hrozí nebezpečí?"],
        ["jan", "Přesně. Mozek v tu chvíli nevyhodnocuje logicky, ale instinktivně. Má tři možnosti: boj, útěk, nebo zamrznutí. Boj vypadá jako křik, kopání, ničení věcí. Útěk jako schovávání, utíkání, někdy i „útěk do nemoci“. A zamrznutí, to nejméně nápadné a nejvíc přehlížené: dítě se odpojí od lidí, od reality i od sebe."],
        ["marek", "A když začne být agresivní? Co s tím?"],
        ["jan", "První krok je pochopit, že to není vědomé rozhodnutí, ale automatická obrana. Když na ni odpovíte křikem nebo trestem, poplach jen zesílíte."],
        ["marek", "Dobře, ale co tedy dělat?"],
        ["jan", "Nejdřív pomoct tělu zklidnit se. Bezpečné místo, práce s tělem, rituály a předvídatelný řád. A hry, které nenutí mluvit. Třeba emoční barometr: dítě si vybere barvu podle toho, jak se cítí."],
        ["klara", "Já bych doplnila jednu věc. Děti s traumatem potřebují bezpečí <em>cítit</em> v těle, nestačí ho slyšet. Houpání, těžká deka, klidný hlas. Místo „Uklidni se!“ zkuste „Jsem tady. Jsme v bezpečí.“"],
        ["marek", "Takže nejde jen o to, co říkám, ale jak to říkám?"],
        ["klara", "Tón hlasu, rytmus dechu a vaše stabilní přítomnost jsou pro dítě v tu chvíli důležitější než slova."]
      ],
      takeaways: [
        "Dítě s traumatem v poplachu nereaguje racionálně. Mozek je v režimu přežití.",
        "Reakce boj, útěk i zamrznutí jsou obranné mechanismy, ne zlá vůle.",
        "Pomáhá zklidnění přes tělo, bezpečné místo a předvídatelnost.",
        "V akutní chvíli víc než slova působí klidná přítomnost dospělého."
      ]
    },
    {
      type: "text",
      title: "Proč děti s traumatem reagují jinak",
      html: `
<p>Každý zná ten pocit, když nám někdo nečekaně zatroubí u ucha nebo když ve tmě zaslechneme podivný zvuk. Tělo okamžitě reaguje: tep, napětí, připravenost k útěku. Za pár vteřin zjistíme, že nic nehrozí, a poplach odezní.</p>
<p>U dětí, které prožily týrání, zanedbávání, násilí v rodině nebo opakované ztráty pečujících, se poplašný systém <strong>nevypíná tak snadno</strong>. Vyvíjel se v prostředí, kde nebezpečí bylo skutečné a nepředvídatelné. Mozek se mu přizpůsobil: lepší sto falešných poplachů než jeden přehlédnutý. <span class="tag fact">ověřeno</span></p>
<p>Proto dítě může reagovat silným strachem nebo agresí na podněty, které pro nás nic neznamenají:</p>
<ul>
  <li>zvýšený hlas, prudký pohyb, zavřené dveře, určitý pach (alkohol, cigarety, parfém),</li>
  <li>změna programu, nový člověk, přechody (z hraní k jídlu, ze školy domů),</li>
  <li>blízkost dospělého, dotek, oční kontakt,</li>
  <li>kontakty s biologickou rodinou, výročí, svátky, narozeniny,</li>
  <li>hlad, únava, bolest.</li>
</ul>
<p>Tomu, co reakci spouští, říkáme <strong>spouštěč</strong>. Spouštěč nemusí mít s původní událostí logickou souvislost. Tělo si pamatuje vjemy, ne příběh.</p>

<h3>Příklad z praxe</h3>
<blockquote>Adam (8 let) při každém hlasitějším zvuku ztuhne a dívá se do zdi. Jeho tělo si pamatuje, jak otec křičel na matku. Jeho reakce není „špatná“. Je to mechanismus, který mu kdysi pomohl přežít. Cílem není ho za ni trestat, ale pomoct mu cítit se bezpečně.</blockquote>

<h3>Chování jako zpráva</h3>
<p>Užitečná otázka zní: <strong>Co mi tím chováním dítě sděluje?</strong> Místo „Proč to dělá?“ (s podtónem obvinění). Za vztekem bývá strach, za lží stud nebo strach z trestu, za odmítáním blízkosti zkušenost, že blízkost bolí.</p>
`
    },
    {
      type: "text",
      title: "Boj, útěk, zamrznutí a okno tolerance",
      html: `
<h3>Tři obranné reakce</h3>
<div class="table-wrap"><table>
<thead><tr><th>Reakce</th><th>Jak vypadá</th><th>Co dítě potřebuje</th></tr></thead>
<tbody>
<tr><td class="alert"><strong>Boj</strong></td><td>křik, kopání, kousání, ničení věcí, nadávky, vzdor „na krev“</td><td>bezpečný prostor, málo slov, klidný hlas, ochranu sebe i ostatních</td></tr>
<tr><td class="alert"><strong>Útěk</strong></td><td>schovávání, utíkání, odchod z místnosti, „bolí mě břicho“, únik do telefonu</td><td>nepronásledovat, ale zůstat dostupný; nabídnout bezpečné místo</td></tr>
<tr><td class="freeze"><strong>Zamrznutí</strong></td><td>ztuhnutí, prázdný pohled, „nereaguje“, mluví potichu nebo vůbec, zdánlivá poslušnost</td><td>jemný návrat do těla a do přítomnosti; nevyžadovat odpovědi</td></tr>
</tbody></table></div>
<p><strong>Pozor na zamrznutí.</strong> Dítě, které ztuhne a „poslechne“, nás nezatěžuje, a proto ho snadno přehlédneme. Přitom bývá ve větší tísni než dítě, které křičí.</p>

<h3>Okno tolerance</h3>
<p>Psychiatr Daniel Siegel popsal <strong>okno tolerance</strong>: pásmo vzrušení, ve kterém člověk zvládá emoce, přemýšlí a je ve vztahu. <span class="tag fact">ověřeno</span></p>
<ul>
  <li><strong>Nad oknem</strong> (hyperaktivace): úzkost, vztek, panika, boj a útěk.</li>
  <li><strong>V okně</strong>: lze mluvit, učit se, domlouvat, hrát si.</li>
  <li><strong>Pod oknem</strong> (hypoaktivace): otupělost, odpojení, zamrznutí.</li>
</ul>
<p>Děti s traumatem mají okno <strong>úzké</strong>. Stačí málo a jsou mimo něj. Dobrá zpráva: okno se dá postupně rozšiřovat bezpečnými vztahy a opakovanou zkušeností zklidnění. Platí to i pro dospělé.</p>

<h3>Nejdřív zklidnit, pak vztah, pak rozum</h3>
<p>Dětský psychiatr Bruce Perry shrnuje postup do tří kroků: <strong>regulace → vztah → rozum</strong> (anglicky regulate, relate, reason). <span class="tag fact">ověřeno</span></p>
<ol>
  <li><strong>Zklidnit</strong> (tělo): snížit poplach rytmem, pohybem, dechem, klidným hlasem.</li>
  <li><strong>Navázat</strong> (vztah): „Vidím tě. Jsem tady.“ Naladit se, uznat emoci.</li>
  <li><strong>Přemýšlet</strong> (rozum): teprve teď je prostor mluvit o tom, co se stalo, o pravidlech a o tom, co příště.</li>
</ol>
<p>Nejčastější chyba je začít třetím krokem: vysvětlovat, moralizovat a vyjednávat s dítětem, které je „mimo okno“. V tu chvíli nás neslyší. Ne proto, že nechce, ale proto, že nemůže.</p>
<p class="note">Totéž platí pro vás. Když jste sami mimo okno, rozumné vysvětlování nefunguje ani u vás. Proto lekce 1 začala u vašeho dechu.</p>
`
    },
    {
      type: "sort",
      id: "s2-reactions",
      title: "Cvičení: Rozpoznejte reakci",
      intro: "Přiřaďte každé situaci typ obranné reakce. Při chybné volbě uvidíte vysvětlení a můžete to zkusit znovu.",
      categories: ["Boj", "Útěk", "Zamrznutí"],
      items: [
        { t: "Klára (6) po telefonátu s matkou hází hračkami a křičí „nenávidím tě“.", a: 0, why: "Vztek a útok na věci a lidi je typická reakce boje." },
        { t: "Ondra (11) při hádce sourozenců odejde, zamkne se v koupelně a nereaguje na volání.", a: 1, why: "Vzdálení se ze situace je útěk. Zamčení a nereagování může přecházet i do zamrznutí." },
        { t: "Lucka (9) při zvýšeném hlase učitelky ztuhne, dívá se do lavice a neodpovídá.", a: 2, why: "Ztuhnutí, odpojení a ztráta řeči jsou známky zamrznutí." },
        { t: "Patrik (14) se před kontaktem s otcem každý týden „rozstůně“: bolí ho břicho a hlava.", a: 1, why: "Útěk do tělesných potíží je častá podoba útěku, zvlášť když jiný únik není možný." },
        { t: "Ema (4) při přebalování přestane plakat, zírá do stropu a je „hodná“.", a: 2, why: "Náhlá „hodnost“ s prázdným pohledem je varovný signál zamrznutí. Nezaměňujte ji za zklidnění." },
        { t: "David (12) na napomenutí odpoví nadávkou a kopne do dveří.", a: 0, why: "Útočná reakce na pocit ohrožení je boj." }
      ]
    },
    {
      type: "text",
      title: "Jak dítěti pomoci",
      html: `
<ul>
  <li><strong>Bezpečné místo.</strong> Klidný koutek s dekou, polštáři a oblíbeným předmětem. Není to místo trestu. Dítě tam smí kdykoli a vy jste nablízku.</li>
  <li><strong>Tělesné techniky.</strong> Houpání, pevné objetí (pokud ho dítě přijímá), těžká deka, masáž dlaní, balanční hry, dupání, tleskání.</li>
  <li><strong>Rituály a struktura.</strong> Jasný a předvídatelný denní řád. Ohlašování změn předem. Obrázkový rozvrh u menších dětí.</li>
  <li><strong>Klidná komunikace.</strong> Místo „Přestaň řvát!“ zkuste „Vidím, že jsi hodně naštvaný. Jsem tady. Chceš si sednout do klidného koutku?“ Málo slov, nízký hlas, pomalé tempo.</li>
</ul>
<p>Častá chyba je přílišné soustředění na dokonalé provedení technik. <strong>Pravidelnost je důležitější než přesnost.</strong> Technika, kterou s dítětem děláte každý večer „nějak“, pomůže víc než ta, kterou děláte dokonale jednou za měsíc.</p>

<h3>Hra „Země a moře“</h3>
<p>Připravte dva prostory: „zemi“ (koberec) a „moře“ (modrý ubrus nebo deka). Na zemi se dupe, na moři se tleská. Skáčete společně tam a zpět, můžete přidat zvuky: na zemi řveme jako lvi, na moři šumíme jako vlny. Dítě se učí ovládat své tělo v bezpečném a hravém rámci.</p>

<h3>Film jako inspirace</h3>
<p>Ve filmu <em>Room</em> (2015) malý Jack vyrůstá v izolaci. Díky matčině lásce, hře a pohybu se postupně učí důvěřovat světu. I vy můžete být pro dítě takovým bezpečným prostorem. <span class="note">(Film obsahuje náročná témata. Doporučujeme ho pro dospělé, ne ke sledování s dětmi.)</span></p>
`
    },
    {
      type: "breath",
      id: "b2-journey",
      title: "Cvičení: Dechová cesta (technika pro děti)",
      intro: "Tuto techniku si nejdřív vyzkoušejte sami, pak ji můžete hrát s dítětem. Spojuje dech s příběhem: „Jsme na lodi uprostřed oceánu. Vítr fouká, ale my jsme v bezpečí.“ Nádech nosem (vítr plní plachty), krátké zadržení (delfíni skáčou kolem lodi), dlouhý výdech ústy (vítr odfoukne starosti do moře). Pět cyklů.",
      pattern: [["Nádech · vítr plní plachty", 4, "in"], ["Zadržet · delfíni skáčou", 2, "hold"], ["Výdech · starosti odplouvají", 6, "out"]],
      cycles: 5,
      after: "Na konci se dítěte zeptejte: „Kam odpluly naše starosti?“ Příběh zaměstná fantazii, takže pozornost se vzdálí od stresu, a dlouhý výdech podporuje zklidnění těla."
    },
    {
      type: "case",
      id: "k2",
      title: "Kazuistika: Hrnek letí vzduchem",
      story: `<p>Pěstoun Marek u večeře řekne sedmiletému Kubovi, že po jídle bude koupání. Kuba zbledne, vyskočí, hodí hrnek na zem a křičí „Ne! Nesahej na mě!“. Marek ví, že Kuba v minulosti zažil násilí.</p><p><strong>Jaký je nejlepší první krok?</strong></p>`,
      options: [
        { text: "Rázně říct: „Hrnky se neházejí. Hned to ukliď, pak si promluvíme.“", good: false, feedback: "Pravidlo platí, ale teď je Kuba mimo okno tolerance. Nejdřív zklidnění, rozum až potom. Úklid můžete udělat spolu později." },
        { text: "Zůstat klidně stát, snížit hlas a tělo (třeba si dřepnout v bezpečné vzdálenosti) a říct: „Jsi v bezpečí. Nikdo na tebe nesáhne.“", good: true, feedback: "Ano. Snížit výšku a tempo, mluvit málo a pomalu, nabídnout bezpečí, nic nevyžadovat. Až Kuba vydechne, přijde vztah („Vyděsilo tě to“) a nakonec rozum (jak jinak udělat koupání, úklid hrnku)." },
        { text: "Vysvětlit Kubovi, proč je koupání důležité pro hygienu.", good: false, feedback: "Vysvětlování je krok „rozum“. Kuba ho teď nemůže přijmout. Navíc slovo „koupání“ je pravděpodobně spouštěč." },
        { text: "Chytit Kubu za ruce, aby nic dalšího nerozbil.", good: false, feedback: "Fyzické držení může dítě s takovou zkušeností prožít jako napadení a poplach výrazně zesílí. Zasáhněte fyzicky jen tehdy, když hrozí bezprostřední zranění, a pak co nejjemněji." }
      ]
    },
    {
      type: "reflect",
      id: "r2-triggers",
      title: "Reflexe: Spouštěče u našeho dítěte",
      prompt: "Na co vaše dítě (nebo jedno z dětí) reaguje nejsilněji? Jakou podobu má jeho reakce: boj, útěk, nebo zamrznutí? A co jste zatím vypozorovali, že mu pomáhá? Pište konkrétně.",
      min: 150
    },
    {
      type: "summary",
      title: "Shrnutí lekce 2",
      points: [
        "Poplašný systém dítěte s traumatem je přecitlivělý. Reaguje na běžné podněty jako na ohrožení.",
        "Obranné reakce: boj, útěk, zamrznutí. Zamrznutí je nejméně nápadné a snadno se přehlédne.",
        "Okno tolerance je u dětí s traumatem úzké, ale dá se rozšiřovat.",
        "Postup: zklidnit → navázat → přemýšlet. Ne obráceně.",
        "Pomáhá bezpečné místo, práce s tělem, rituály a klidná komunikace. Pravidelnost je důležitější než dokonalost."
      ],
      sources: [
        "van der Kolk, B.: Tělo sčítá rány. Praha: Jan Melvil Publishing (český překlad The Body Keeps the Score).",
        "Perry, B. D., Szalavitz, M.: Chlapec, kterého chovali jako psa (český překlad The Boy Who Was Raised as a Dog).",
        "Siegel, D. J.: koncept okna tolerance (The Developing Mind, 1999).",
        "Matějček, Z.: Náhradní rodinná péče. Praha: Portál."
      ]
    }
  ],
  quiz: [
    { q: "Zvýšíte hlas a dítě se schová nebo se rozzlobí. Proč to může být?", o: ["Jeho poplašný systém se naučil v nebezpečí a zvýšený hlas bere jako hrozbu", "Dítě si vybírá, že vás bude zlobit", "Dítě nerozumí, co mu říkáte"], c: 0, why: "Dítě s traumatem je v pohotovosti. Nejde o zlou vůli, ale o to, že se jeho tělo brání." },
    { q: "Po napomenutí dítě ztuhne, kouká do země a neodpovídá. Co se nejspíš děje?", o: ["Je v obraně „zamrznutí“ a cítí se ohrožené", "Je drzé a vzdoruje", "Přemýšlí, co mu řeknete dál"], c: 0, why: "Zamrznutí je jedna z obran, vedle boje a útěku. Dítě potřebuje cítit bezpečí, ne další tlak." },
    { q: "Dítě je ve vzteku. V jakém pořadí je dobré postupovat?", o: ["Nejdřív zklidnit, potom vztah, až nakonec domluvit a vysvětlovat", "Nejdřív vysvětlit, pak se usmířit, pak zklidnit", "Nejdřív potrestat, pak si promluvit"], c: 0, why: "Rozum se v rozrušení „vypíná“. Až když se tělo zklidní a vztah drží, dá se domluvit." },
    { q: "Dítě je rozrušené: křičí, panikaří a nic nevnímá. Co mu teď nejvíc pomůže?", o: ["Zůstat klidný, být nablízku a pomoci mu zklidnit tělo", "Dlouze mu vysvětlit, proč se to nedělá", "Poslat ho samotné do pokoje"], c: 0, why: "V tuhle chvíli dítě neposlouchá argumenty. Pomáhá váš klid a bezpečná přítomnost." },
    { q: "Která věta vám v akutní chvíli nejspíš nejvíc pomůže?", o: ["„Jsem tady. Jsi v bezpečí.“", "„Okamžitě se přestaň tak chovat.“", "„Proč to děláš pořád?“"], c: 0, why: "Krátká klidná věta dává dítěti signál bezpečí. Otázky „proč“ ho většinou ještě víc rozruší." }
  ]
});
