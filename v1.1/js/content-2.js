/* Obsah kurzu – část 2: lekce 3 (tělo) a lekce 4 (vlastní stres a vyhoření). */
window.COURSE.modules.push({
  id: "m3",
  short: "Tělo jako nástroj",
  title: "Lekce 3: Tělo jako nástroj pro zvládání stresu",
  minutes: 45,
  goals: [
    "Víte, proč je tělo nejrychlejší cestou ke zklidnění.",
    "Umíte použít „žebřík nervového systému“ jako mapu svých stavů.",
    "Vyzkoušíte zemnění, motýlí objetí a cyklický povzdech.",
    "Máte techniky pro sebe i variantu pro dítě."
  ],
  steps: [
    {
      type: "text",
      title: "Proč začínat tělem",
      html: `
<blockquote>„Naše tělo je jako hudební nástroj. Když je naladěné, hraje melodii. Když je rozladěné, vydává nepříjemné zvuky. Stres tělo rozlaďuje: svaly se napínají, dech zrychluje, srdce buší. Dobrá zpráva je, že tělo můžeme znovu naladit, i u dětí, které prožily trauma.“</blockquote>
<p>Stresová reakce začíná v hlubokých, vývojově starých částech mozku. Ty nerozumí argumentům, ale rozumí <strong>signálům z těla</strong>: rytmu dechu, svalovému napětí, doteku, pohybu, tónu hlasu. Proto „uklidni se“ nefunguje, kdežto pomalý výdech nebo houpání často ano. <span class="tag probable">pravděpodobné</span></p>
<blockquote>Pěstounka Petra: „Když měl syn záchvat vzteku, snažila jsem se ho uklidnit slovy. Nefungovalo to. Jednou jsem začala dupat do rytmu s ním. Zasmál se: ‚Mami, to je legrace!‘ A bylo po bouřce.“</blockquote>
<p>Pohyb tady udělal dvě věci: dal energii poplachu kam odtéct a přepnul situaci z ohrožení do hry. U dětí bývá tělo často otevřenější změně než mysl.</p>
<p>Ve filmu <em>V hlavě</em> (Inside Out, Pixar 2015) je dobře vidět, že emoce nejsou nepřátelé. Smutek nakonec Riley pomůže víc než nucená radost. I to je dobrá lekce: cílem není emoce vypnout, ale pomoct tělu je unést.</p>
`
    },
    {
      type: "text",
      title: "Žebřík nervového systému",
      html: `
<p>Pro orientaci ve vlastních stavech se v praxi osvědčuje obraz <strong>žebříku</strong> se třemi příčkami. Vychází z polyvagální teorie Stephena Porgese, kterou pro praxi zpřístupnila terapeutka Deb Dana. <span class="tag hyp">model</span></p>
<p class="note">Neurofyziologické detaily polyvagální teorie jsou mezi odborníky sporné. Jako <em>mapa prožívání</em> je ale žebřík velmi užitečný a v tomto smyslu ho používáme.</p>
<div class="ladder" aria-hidden="true">
  <div class="rung v"><strong>Nahoře: bezpečí a spojení</strong>Dech je klidný, jsem zvědavý, mám humor, slyším dítě, můžu přemýšlet.</div>
  <div class="rung s"><strong>Uprostřed: poplach (boj / útěk)</strong>Napětí, vztek, úzkost, nemůžu sedět, uklízím jak o život, křičím nebo utíkám.</div>
  <div class="rung d"><strong>Dole: zamrznutí a vypnutí</strong>Otupělost, prázdnota, „je mi to jedno“, únava, která nejde vyspat, beznaděj.</div>
</div>
<p>Dvě důležité myšlenky:</p>
<ul>
  <li><strong>Po žebříku se pohybuje každý.</strong> Cílem není nikdy nespadnout, to je biologicky nemožné. Cílem je umět se <em>vracet nahoru</em> rychleji a s menší námahou.</li>
  <li><strong>Z dolní příčky se nejde rovnou nahoru.</strong> Člověk ve vypnutí obvykle nejdřív potřebuje trochu energie (pohyb, chlad, rytmus, hudba), teprve pak klid. Radit někomu ve vypnutí „mysli pozitivně“ nepomáhá.</li>
</ul>
<p>Z toho plyne úleva od viny: vaše vyčerpání ani reakce dítěte nejsou vadou charakteru nebo selháním lásky. Jsou to předvídatelné reakce nervového systému na zátěž.</p>
`
    },
    {
      type: "ladder",
      id: "l3",
      title: "Cvičení: Kde na žebříku trávím čas",
      intro: "U každé situace vyberte příčku, na které se obvykle ocitáte. Uvidíte tip, co pomáhá právě z této příčky.",
      situations: [
        "Den, kdy má dítě kontakt s biologickou rodinou",
        "Neděle večer před školním týdnem",
        "Jednání na OSPOD nebo u soudu",
        "Chvíle, kdy jsou děti konečně v posteli"
      ]
    },
    {
      type: "grounding",
      id: "g3",
      title: "Cvičení: Zemnění (5 minut)",
      intro: "Zemnění vrací pozornost do přítomného okamžiku. Je to kotva, která drží, i když se zvedají vlny stresu. Projděte kroky v klidu, každý má doporučenou délku.",
      steps: [
        ["Postavte se", "Pokud můžete, bosýma nohama na zem. Jinak se posaďte a položte chodidla celou plochou na podlahu.", 30],
        ["Chodidla", "Vnímejte tlak pod nohama. Je podlaha teplá, nebo studená? Kde cítíte nejvíc váhy: na patách, nebo na špičkách?", 45],
        ["Dech", "Nádech nosem (4 doby), krátké zadržení (2), výdech ústy (6). Opakujte v klidném tempu.", 60],
        ["Představa", "S každým výdechem si představte, jak napětí odtéká z ramen přes nohy do země.", 60],
        ["Okolí", "Otevřete oči (pokud byly zavřené). Pojmenujte potichu tři věci, které vidíte, a jeden zvuk, který slyšíte.", 45]
      ],
      child: "Pro děti: „Představ si, že jsi strom a z chodidel ti rostou kořeny hluboko do země. Vítr může foukat, ale ty stojíš pevně.“ Můžete se spolu „kývat ve větru“ a pak zase zpevnit."
    },
    {
      type: "text",
      title: "Další tělesné techniky do kapsy",
      html: `
<h3>Cyklický povzdech</h3>
<p>Dva nádechy nosem za sebou (druhý krátký, „dobírající“), pak dlouhý pomalý výdech ústy. Opakujte 1 až 5 minut. Studie Stanfordské univerzity (Balban a kol., 2023) zjistila, že pět minut denně tohoto dýchání zlepšovalo náladu a snižovalo dechovou frekvenci v klidu o něco víc než krátká meditace všímavosti. <span class="tag probable">pravděpodobné</span> (jedna studie, menší vzorek)</p>

<h3>Motýlí objetí</h3>
<p>Zkřižte ruce na hrudi tak, aby dlaně ležely pod klíčními kostmi. Střídavě lehce poklepávejte levou a pravou dlaní, pomalu, asi jednou za sekundu, minutu či dvě. Technika vznikla v Mexiku (Lucina Artigas) při práci s dětmi po přírodní katastrofě. Dá se dělat nenápadně i na toaletě po vyhroceném telefonátu a dobře ji zvládnou i děti. <span class="tag fact">ověřeno</span> (původ techniky)</p>

<h3>Samozklidňující dotek</h3>
<p>Pomalé hlazení paží od ramen k loktům, jako byste ze sebe stírali prach. Nebo pevné stisknutí vlastních dlaní. Rytmický, předvídatelný dotek patří k nejstarším zklidňujícím signálům, jaké tělo zná.</p>

<h3>Progresivní svalová relaxace (zkrácená)</h3>
<p>Postupně na 5 sekund napněte a pak uvolněte: chodidla, lýtka, stehna, břicho, pěsti, ramena (k uším), obličej. Po každém uvolnění se zastavte a všimněte si rozdílu. Jde o zkrácenou verzi Jacobsonovy metody. <span class="tag fact">ověřeno</span></p>

<h3>Když dech nepomáhá</h3>
<p>Pokud vás zaměření na dech znervózňuje, zkuste:</p>
<ul>
  <li>studenou vodu na zápěstí nebo obličej,</li>
  <li>rychlou chůzi, schody, deset dřepů,</li>
  <li>broukání nebo zpívání (vibrace a prodloužený výdech přirozeně),</li>
  <li>pozornost ven: pojmenovat pět modrých věcí v místnosti.</li>
</ul>
`
    },
    {
      type: "breath",
      id: "b3-sigh",
      title: "Cvičení: Cyklický povzdech (asi 2 minuty)",
      intro: "Dva nádechy nosem (dlouhý a krátký „dobírající“), pak dlouhý pomalý výdech ústy. Osm cyklů. Pokud se vám zatočí hlava, zpomalte nebo přestaňte.",
      pattern: [["Nádech nosem", 3, "in"], ["Ještě trochu (dobrat)", 1, "in2"], ["Dlouhý výdech ústy", 7, "out"], ["Pauza", 2, "hold"]],
      cycles: 8
    },
    {
      type: "text",
      title: "Hry s tělem pro děti",
      html: `
<p>U dětí je tělo nejpřímější cestou ke zklidnění. Hry mají ještě jednu výhodu: učí dítě, že tělo může být zdrojem radosti, nejen strachu.</p>
<ul>
  <li><strong>Země a moře</strong> (z lekce 2): dupání a tleskání, přeskakování mezi kobercem a „mořem“.</li>
  <li><strong>Na zvířátka:</strong> skákat jako žába, plazit se jako had, být těžký jako medvěd, lehký jako motýl. Střídáme rychlé a pomalé.</li>
  <li><strong>Semafor:</strong> na zelenou běháme, na oranžovou chodíme po špičkách, na červenou jsme socha. Učí to přepínat mezi aktivitou a klidem.</li>
  <li><strong>Balónek na břiše:</strong> dítě leží, na břiše má plyšáka a „uspává ho“ pomalým dechem nahoru a dolů.</li>
  <li><strong>Těžká deka a „sendvič“:</strong> dítě je šunka mezi dvěma polštáři, vy jemně tlačíte (jen pokud dítě chce a baví ho to).</li>
</ul>
<blockquote>Pěstoun Tomáš hrál „Zemi a moře“ se synem s hyperaktivitou několik týdnů. Jednou syn řekl: „Tati, už vím, kdy mám dupat a kdy tleskat.“ Tomáš si všiml, že syn se lépe zastaví i v jiných situacích.</blockquote>
<p class="note">Respektujte hranice dítěte. Dotek a fyzická blízkost musí být nabídka, ne povinnost. U dětí se zkušeností zneužívání buďte zvlášť citliví a ptejte se.</p>
`
    },
    {
      type: "reflect",
      id: "r3-body",
      title: "Reflexe: Co mému tělu pomáhá",
      prompt: "Které z technik této lekce vám sedly a které ne? Kde v běžném dni byste mohli jednu použít (konkrétní situace, místo, čas)? A kterou hru zkusíte s dítětem?",
      min: 120
    },
    {
      type: "summary",
      title: "Shrnutí lekce 3",
      points: [
        "Tělo je nejrychlejší cesta ke zklidnění, protože stresová reakce začíná v částech mozku, které rozumí tělu, ne argumentům.",
        "Žebřík nervového systému (bezpečí, poplach, vypnutí) je užitečná mapa. Cílem je umět se vracet nahoru, ne nikdy nespadnout.",
        "Zemnění, cyklický povzdech, motýlí objetí, samozklidňující dotek a svalová relaxace patří do základní výbavy.",
        "Když dech nepomáhá, použijte pohyb, chlad, zvuk nebo pozornost ven.",
        "Hry s tělem pomáhají dětem zažít tělo jako bezpečné a radostné."
      ],
      sources: [
        "Dana, D.: The Polyvagal Theory in Therapy. New York: Norton, 2018 (anglicky).",
        "Levine, P. A.: Probouzení tygra (český překlad Waking the Tiger; údaje o vydání ověřte).",
        "Balban, M. Y. a kol.: Brief structured respiration practices enhance mood and reduce physiological arousal. Cell Reports Medicine, 2023.",
        "Artigas, L., Jarero, I.: The Butterfly Hug (popis techniky, EMDR)."
      ]
    }
  ],
  quiz: [
    { q: "Kamarád je ve stresu a vy mu řeknete „uklidni se“. Proč to obvykle nezabere?", o: ["Stresová reakce reaguje spíš na signály těla než na argumenty", "Protože to nebylo řečeno dost hlasitě", "Protože stres se zklidnit nedá"], c: 0, why: "Při silném stresu dobře funguje tělo: dech, pohyb, dotek, chlad. Slova až potom." },
    { q: "Cítíte se „dole“ a v hlavě máte prázdno. Jaký je realistický cíl?", o: ["Umět se po pádu zase postupně vrátit nahoru", "Už nikdy nespadnout", "Nezabývat se tím"], c: 0, why: "Každému se stane, že spadne. Dovednost je vracet se a z „vypnutí“ jít přes jemné rozhýbání." },
    { q: "Kdy se hodí zemnění (chodidla na zem, pojmenovat pět věcí kolem sebe)?", o: ["Když potřebuji vrátit pozornost do přítomnosti a do těla", "Když chci vyřešit složitý úkol", "Jen večer před spaním"], c: 0, why: "Zemnění pomáhá, když se mysl rozběhne nebo uteče pryč. Stačí chvilka." },
    { q: "Zaměření na dech vás znervózňuje. Co můžete zkusit?", o: ["Pohyb, chlad, zvuk nebo pozornost nasměrovat ven", "Vydržet to za každou cenu", "Dýchat rychleji"], c: 0, why: "Co funguje, je individuální. Když je dech nepříjemný, existují jiné cesty." },
    { q: "Jak vypadá motýlí objetí?", o: ["Zkřížené ruce na hrudi, střídavé pomalé poklepávání", "Silné stisknutí obou rukou", "Rychlé tleskání"], c: 0, why: "Je to jemná technika, kterou si můžete dát sami, a hodí se i pro děti." }
  ]
});

window.COURSE.modules.push({
  id: "m4",
  short: "Vlastní stres a vyhoření",
  title: "Lekce 4: Vlastní stres pěstouna a prevence vyhoření",
  minutes: 55,
  goals: [
    "Popíšete, co se děje v mozku při chronickém stresu.",
    "Poznáte fáze a příznaky syndromu vyhoření a únavy ze soucitu.",
    "Rozlišíte své zdroje a brzdy.",
    "Vyzkoušíte techniku 5-4-3-2-1."
  ],
  steps: [
    {
      type: "scene",
      title: "Scéna: Lavička na horách",
      slug: "Scéna 3 · Vzdělávací víkend na horách · lavička u hřiště",
      intro: "Marek a Jan sedí na lavičce a pozorují děti, které si hrají na hřišti.",
      lines: [
        ["marek", "Honzo, minule jsme mluvili o dětech. Ale co my, pěstouni? Na vlastní stres zapomínám. A pak mě to prostě složí."],
        ["jan", "To je časté. Pěstouni kladou potřeby dítěte nad své vlastní. Krátkodobě je to v pořádku, dlouhodobě to udržitelné není."],
        ["marek", "Takže se mi to vymstí?"],
        ["jan", "Představte si auto, které jede pořád na rezervu. Jednou zastaví, a obvykle v nejhorší chvíli. Sebepéče je pravidelné tankování. Nejlépe i s aditivy."],
        ["marek", "Není to sobecké?"],
        ["jan", "Naopak. Je to podmínka toho, abyste fungoval pro druhé. Vím, kyslíkovou masku jsme už použili, ale opakování posiluje paměť."],
        ["marek", "Co se vlastně děje v hlavě, když jsem ve stresu?"],
        ["jan", "Zjednodušeně: amygdala, náš poplašný systém, spustí alarm. Prefrontální kůra, která má na starost rozvahu a sebekontrolu, se při silném stresu „ztlumí“. Proto jsme pod tlakem impulzivnější. A hipokampus, který pomáhá zařadit zážitky do souvislostí a tlumit stresovou odpověď, je dlouhodobým stresem zatěžován."],
        ["marek", "Takže když jsem pod tlakem, opravdu nemůžu jasně myslet."],
        ["jan", "Přesně. Proto je dobré mít techniky natrénované předem, aby fungovaly i bez přemýšlení."],
        ["klara", "Pěstouni si často myslí, že si „nemůžou dovolit“ myslet na sebe. Realita je opačná: čím víc se staráte o své duševní zdraví, tím lepší jste rodič. Dítě pozná, jestli jste v pohodě."],
        ["marek", "Takže když si dám pauzu, pomůžu i dětem?"],
        ["klara", "Ano. Děti se učí z toho, co vidí. Když vidí, že umíte nastavit hranice a postarat se o sebe, učí se to taky. Chcete-li být pro děti studánkou, musíte mít vodu. A ta voda by měla být čistá."]
      ],
      takeaways: [
        "Stres neodstraníme, ale můžeme se ho naučit regulovat.",
        "Při silném stresu se ztlumí rozvaha, proto techniky trénujeme předem.",
        "Sebepéče je podmínka péče o druhé, ne luxus.",
        "Děti se učí zvládat stres z našeho příkladu."
      ]
    },
    {
      type: "text",
      title: "Stres v mozku a těle",
      html: `
<p>Při stresu se aktivuje <strong>sympatický nervový systém</strong>: srdce bije rychleji, stoupá krevní tlak, svaly se napínají. Nadledviny vyplavují adrenalin a kortizol. Je to jako auto, které jede na plný plyn. Krátkodobě užitečné, dlouhodobě se motor přehřívá. <span class="tag fact">ověřeno</span></p>
<ul>
  <li><strong>Amygdala</strong> vyhodnocuje nebezpečí. Při chronickém stresu bývá citlivější. <span class="tag probable">pravděpodobné</span></li>
  <li><strong>Prefrontální kůra</strong> odpovídá za plánování, rozvahu a sebekontrolu. Při akutním stresu její vliv slábne. <span class="tag fact">ověřeno</span></li>
  <li><strong>Hipokampus</strong> se podílí na paměti a na tlumení stresové odpovědi. Dlouhodobě vysoký kortizol ho zatěžuje. <span class="tag probable">pravděpodobné</span></li>
</ul>
<p>Protiváhou je <strong>parasympatikus</strong>, systém „odpočinku a trávení“. Říká tělu: poplach skončil. Aktivujeme ho pomalým dechem s dlouhým výdechem, bezpečným kontaktem s lidmi, odpočinkem, spánkem.</p>
<p>Mozek je navíc <strong>plastický</strong>: mění se tím, co opakovaně děláme. Pravidelný trénink zklidnění postupně usnadňuje návrat do klidu. Neznamená to, že pět minut dýchání „přeprogramuje mozek“ za týden. Znamená to, že opakování má smysl. <span class="tag probable">pravděpodobné</span></p>
<blockquote>Pěstounka Martina: „Když jsem začala pravidelně cvičit dechové techniky, všimla jsem si, že moje reakce na stres jsou méně prudké. Pořád se rozčílím, ale rychleji se vrátím.“</blockquote>
`
    },
    {
      type: "text",
      title: "Syndrom vyhoření",
      html: `
<blockquote>„Pokud zapálíte svíčku z obou konců, získáte víc světla. Svíčka však rychleji vyhoří.“ <span class="note">(Myron D. Rush)</span></blockquote>
<p><strong>Syndrom vyhoření</strong> je stav emočního, kognitivního a často i tělesného vyčerpání, který vzniká z dlouhodobého stresu, typicky v práci s lidmi. Christina Maslachová popsala tři hlavní složky: <span class="tag fact">ověřeno</span></p>
<ol>
  <li><strong>emoční vyčerpání</strong> („už nemám co dát“),</li>
  <li><strong>odosobnění a cynismus</strong> (odstup od lidí, o které pečuji, „je mi to jedno“),</li>
  <li><strong>snížený pocit vlastní účinnosti</strong> („stejně to nemá smysl, nic nezvládám“).</li>
</ol>
<p>Mezinárodní klasifikace nemocí MKN-11 (WHO) vede vyhoření jako fenomén spojený s prací, ne jako samostatnou nemoc. <span class="tag fact">ověřeno</span> Pěstouni a poručníci patří mezi ohrožené skupiny vedle zdravotníků, učitelů, sociálních pracovníků nebo psychologů. Navíc u nich zátěž nekončí odchodem z práce.</p>

<h3>Únava ze soucitu</h3>
<p>Kdo dlouhodobě pečuje o lidi s traumatem, může sám nést část jejich tíhy. Charles Figley pro to použil pojem <strong>únava ze soucitu</strong> (compassion fatigue), někdy se mluví o <strong>sekundární traumatizaci</strong>: dotěrné obrazy z příběhu dítěte, podrážděnost, pocit ohrožení, vyhýbání se. <span class="tag fact">ověřeno</span> Není to slabost, je to cena za empatii. A dá se s ní pracovat.</p>

<h3>Příčiny v jedinci i v systému</h3>
<div class="table-wrap"><table>
<thead><tr><th>V jedinci</th><th>V systému a společnosti</th></tr></thead>
<tbody><tr>
<td>vysoké nároky na sebe, perfekcionismus; neumím říct ne; ztráta smyslu; neúčinné strategie zvládání; nezdravý životní styl; nedostatek odpočinku</td>
<td>rostoucí náročnost problémů svěřených dětí; kontrola zvenčí; malé společenské ocenění; nejasné kompetence; nedostatek odlehčovací péče; administrativa</td>
</tr></tbody></table></div>
<p>Je dobré to rozlišovat. Vyhoření <strong>není jen osobní selhání</strong>. Část příčin je v podmínkách. Pak je na místě o podporu žádat, ne se snažit víc.</p>
`
    },
    {
      type: "phases",
      id: "p4",
      title: "Cvičení: Pět fází vyhoření",
      intro: "Edelwich a Brodsky popsali vyhoření jako proces v pěti fázích. Přečtěte si je a vyberte tu, která vás teď nejlépe popisuje. Výběr je jen pro vás a slouží k orientaci, ne k diagnóze.",
      phases: [
        ["Nadšení", "Velké ideály a nasazení. Pěstounství je hlavní náplní života, volný čas a vlastní potřeby jdou stranou.", "Nadšení je dar. Chraňte ho: už teď si plánujte odpočinek a koníčky, i když se vám zdá, že je nepotřebujete."],
        ["Stagnace", "Výsledky neodpovídají představám. Přichází zklamání, nasazení polevuje, víc se ohlížíte po vlastním životě.", "Zdravá korekce. Upravte očekávání, sdílejte zklamání s někým, kdo rozumí, a hledejte malé pokroky."],
        ["Frustrace", "Negativní myšlení, zklamání, problémy se spánkem a soustředěním, víc konfliktů (s dítětem, OSPOD, doprovázející organizací, partnerem).", "Kritický bod, kdy ještě jde hodně změnit. Řekněte si o odlehčení a mluvte o tom s klíčovým pracovníkem nebo psychologem."],
        ["Apatie", "Děláte jen to nutné, k ostatním jste odměření až nepřátelští, děti vás spíš obtěžují.", "Tady už samotná vůle nestačí. Vyhledejte odbornou pomoc a zajistěte si respitní péči. Není to selhání, je to nutnost."],
        ["Vyhoření", "Úplné vyčerpání, ztráta smyslu, cynismus, odcizení, často i tělesné potíže.", "Prosím, obraťte se co nejdřív na lékaře nebo psychologa a na doprovázející organizaci. Pokud máte myšlenky na sebepoškození, volejte Linku první psychické pomoci 116 123, v ohrožení 155 nebo 112."]
      ]
    },
    {
      type: "text",
      title: "Jak poznat, že se blížím k hranici",
      html: `
<div class="table-wrap"><table>
<thead><tr><th>Rovina</th><th>Příznaky</th></tr></thead>
<tbody>
<tr><td><strong>Duševní</strong></td><td>negativní obraz vlastních schopností, ztráta zájmu, potíže se soustředěním, zapomínání, cynismus</td></tr>
<tr><td><strong>Citová</strong></td><td>sklíčenost, bezmoc, sebelítost, popudlivost až agresivita, pocit nedostatku uznání</td></tr>
<tr><td><strong>Tělesná</strong></td><td>rychlá unavitelnost, častější nemoci, bolesti hlavy, napětí, poruchy spánku, vysoký tlak, přejídání či nechutenství</td></tr>
<tr><td><strong>Sociální</strong></td><td>omezování kontaktů, víc konfliktů doma, vyhýbání se dětem a jejich blízkým, ubývá snahy</td></tr>
</tbody></table></div>
<p>Zrádný vnější znak: <strong>aktivita roste, ale výsledky ne</strong>. Člověk dělá víc a víc a cítí se hůř a hůř.</p>

<h3>Prevence: desatero odbourávání stresu</h3>
<ol>
  <li>Mluvte o potížích. Na situaci se pak podíváte objektivněji.</li>
  <li>Dělejte si radost, aspoň jednou denně.</li>
  <li>Uvolněte se smíchem.</li>
  <li>Hýbejte se. Spalte energii, kterou stres vytvořil.</li>
  <li>Řekněte ne. Učte se asertivitě.</li>
  <li>Buďte tvořiví. Najděte si zájem, který nesouvisí s péčí.</li>
  <li>Buďte realističtí. Přijměte se a poučte se z chyb.</li>
  <li>Plánujte a stanovte si priority. Neberte si toho příliš.</li>
  <li>Dělejte, co vás opravdu těší.</li>
  <li>Buďte k sobě laskaví. Dopřejte si tělesnou i emoční pomoc.</li>
</ol>

<h3>Inspirace z Japonska: přijmout pocit a jednat</h3>
<p>Japonská <strong>Moritova terapie</strong> (Šóma Morita, začátek 20. století) pracuje s postojem <em>arugamama</em>, „přijmout věci, jak jsou“. Úzkost, vztek ani únavu se nesnažíme vypnout. Necháme je být a přesto uděláme to, co je teď potřeba. <span class="tag fact">ověřeno</span> (původ přístupu) Pro pěstouny to může být úleva: <em>nemusím se cítit klidně, abych mohl jednat klidně.</em></p>
`
    },
    {
      type: "grounding54321",
      id: "g4-54321",
      title: "Cvičení: Technika 5-4-3-2-1",
      intro: "Když cítíte, že vás zaplavuje úzkost nebo vztek, přesuňte pozornost do smyslů. Vyplňte, co teď kolem sebe vnímáte. Stačí krátká slova."
    },
    {
      type: "checklist",
      id: "c4-resources",
      title: "Cvičení: Moje zdroje a brzdy",
      intro: "Co vaši „nádobu“ doplňuje a co ji vypouští? Označte, co teď ve svém životě reálně máte. Vyberte aspoň čtyři položky.",
      min: 4,
      groups: [
        ["Zdroje (co mě drží)", [
          "Mikro-odpočinek během dne (10 minut klidu, káva)",
          "Sdílení: mám někoho, komu můžu říct všechno",
          "Hranice: dokážu říct ne dalším nárokům",
          "Radost: aktivita, která nesouvisí s dětmi",
          "Pohyb aspoň třikrát týdně",
          "Spánek, který mě aspoň trochu obnoví",
          "Podpora od doprovázející organizace, se kterou se dá mluvit",
          "Víra, smysl, hodnoty, které mě nesou"
        ]],
        ["Brzdy (co mě vyčerpává)", [
          "Vytěsňování: ignoruji únavu a jedu dál",
          "Perfekcionismus: všechno musí být na 100 %",
          "Sebekritika: nadávám si za každou chybu",
          "Zanedbávání těla: špatné jídlo, žádný pohyb",
          "Izolace: na nikoho se neobracím",
          "Telefon a sociální sítě místo odpočinku",
          "Víc kávy, alkoholu nebo cigaret než dřív"
        ]]
      ]
    },
    {
      type: "text",
      title: "Techniky pro každý den",
      html: `
<ul>
  <li><strong>Ranní rituál:</strong> 2 až 5 minut, než začne provoz. Dech, protažení, sklenice vody, jedna věta pro sebe („Dneska stačí, když budu dost dobrý/á.“).</li>
  <li><strong>Mikropauzy:</strong> každou hodinu či dvě 1 až 2 minuty. Tři dlouhé výdechy, protáhnout se, podívat se z okna do dálky.</li>
  <li><strong>Deník vděčnosti:</strong> večer tři věci, které se povedly nebo vás potěšily. Mozek má sklon pamatovat si hlavně hrozby. Tohle je protiváha. <span class="tag probable">pravděpodobné</span></li>
  <li><strong>Rituál vypnutí dne:</strong> zapsat si, co zůstalo otevřené, a vědomě to na noc odložit („řeším zítra v 9:00“).</li>
  <li><strong>Hranice:</strong> jedna věc týdně, které řeknete ne nebo „teď ne“.</li>
</ul>
<blockquote>Pěstoun Pavel: „Uvědomil jsem si, že slyším zpěv ptáků, a najednou jsem byl klidnější. Vůbec jsem nevěděl, že jsem byl předtím tak napjatý.“</blockquote>
<p>Nemusíte dělat všechno. Vyberte si dvě věci, které jsou realistické. Lepší pět minut denně než hodina jednou za měsíc.</p>
`
    },
    {
      type: "case",
      id: "k4",
      title: "Kazuistika: Ivana „to zvládá“",
      story: `<p>Ivana (52) má v pěstounské péči tři děti, nejmladší s FAS (fetálním alkoholovým syndromem). Poslední půlrok spí pět hodin, přestala chodit na sbor, kde zpívala dvacet let, a k dětem je „spíš úřední“. Na otázku klíčové pracovnice odpoví: „Dobrý, zvládám to, nic nepotřebuju.“</p><p><strong>Co by bylo pro Ivanu nejrozumnějším dalším krokem?</strong></p>`,
      options: [
        { text: "Zatnout zuby a vydržet do prázdnin, pak si odpočine.", good: false, feedback: "Odkládání odpočinku „na potom“ je jeden z typických mechanismů vedoucích k vyhoření. Známky (spánek, ztráta radosti, odosobnění) ukazují, že Ivana už je ve frustraci až apatii." },
        { text: "Přiznat klíčové pracovnici, jak na tom je, a domluvit respitní péči a podporu (psycholog, skupina pěstounů).", good: true, feedback: "Ano. Ivana vykazuje známky pokročilejší fáze vyhoření. Pomoc zvenčí (odlehčení, odborník) je teď nutnost. Bonusový krok: vrátit se ke sboru jako ke zdroji." },
        { text: "Začít každé ráno meditovat 30 minut.", good: false, feedback: "Samotná technika, navíc časově náročná, nevyřeší systémové přetížení. Sebepéče je důležitá, ale v této fázi nestačí bez vnější podpory." },
        { text: "Přeřadit nejnáročnější dítě jinam, aby měla klid.", good: false, feedback: "Takové rozhodnutí má zásadní dopad na dítě a nemělo by se dělat z vyčerpání. Nejdřív podpora a odlehčení, pak případně odborné posouzení." }
      ]
    },
    {
      type: "reflect",
      id: "r4-self",
      title: "Reflexe: Kde jsem a co potřebuji",
      prompt: "Ve které fázi se teď nacházíte a podle čeho to poznáváte? Co je váš největší zdroj a co největší brzda? Napište jednu konkrétní věc, kterou pro sebe uděláte v příštích 48 hodinách.",
      min: 150
    },
    {
      type: "summary",
      title: "Shrnutí lekce 4",
      points: [
        "Při chronickém stresu je amygdala citlivější a rozvaha (prefrontální kůra) slabší. Techniky je proto dobré mít natrénované předem.",
        "Vyhoření má tři složky: vyčerpání, cynismus či odosobnění a pocit neúčinnosti. Probíhá ve fázích od nadšení po vyhoření.",
        "Únava ze soucitu a sekundární traumatizace jsou cenou za empatii, ne slabostí.",
        "Příčiny jsou v jedinci i v systému. Na systémové je správná odpověď žádat podporu.",
        "Pomáhají drobné každodenní rituály, hranice a přijetí pocitů bez boje s nimi (arugamama)."
      ],
      sources: [
        "Maslach, C., Leiter, M. P.: práce o syndromu vyhoření (Maslach Burnout Inventory).",
        "Edelwich, J., Brodsky, A.: Burn-out: Stages of Disillusionment in the Helping Professions, 1980.",
        "Kopřiva, K.: Lidský vztah jako součást profese. Praha: Portál.",
        "Kabat-Zinn, J.: Život samá pohroma. Praha: Jan Melvil Publishing (český překlad Full Catastrophe Living).",
        "WHO: MKN-11, kód QD85 Syndrom vyhoření."
      ]
    }
  ],
  quiz: [
    { q: "Proč je dobré techniky na zklidnění trénovat předem, v klidu?", o: ["Při silném stresu hůř přemýšlíme a naučený postup pak funguje skoro sám", "V klidu se nic nenaučíte", "Není to potřeba, stačí to zkusit v krizi"], c: 0, why: "Jako s hasicím přístrojem: lepší vědět, kde je a jak se používá, dřív než začne hořet." },
    { q: "Co patří mezi typické znaky vyhoření?", o: ["Vyčerpání, odstup nebo cynismus a pocit, že nic nemá smysl", "Jen bolest hlavy", "Dobrá nálada a velké nadšení"], c: 0, why: "Vyhoření bývá spojení vyčerpání, odstupu od lidí a pocitu, že se nic nezlepší. Není to selhání." },
    { q: "Děláte jen to nejnutnější a děti vás spíš obtěžují. Co to může být?", o: ["Varovný signál, že je čas říct si o podporu", "Normální pěstounská rutina, nic se neděje", "Důkaz, že jste špatný pěstoun"], c: 0, why: "Takové pocity mají i zkušení pěstouni. Důležité je včas se někomu svěřit." },
    { q: "Cítíte úzkost, ale děti potřebují snídani. Co radí japonský postoj arugamama?", o: ["Pocit přijmout, jak je, a přesto udělat, co je potřeba", "Počkat, až úzkost zmizí", "Pocit potlačit a tvářit se, že není"], c: 0, why: "Nemusíte čekat, až se budete cítit dobře. Pocit tu může být a vy přitom můžete jednat." },
    { q: "K čemu je technika 5-4-3-2-1 (pět věcí vidím, čtyři slyším…)?", o: ["Převede pozornost ze strachu do smyslů a do přítomnosti", "Zrychlí dech", "Pomůže zjistit, kolik je hodin"], c: 0, why: "Jednoduchý trik, který funguje kdekoli, třeba v obchodě nebo v autě." }
  ]
});
