/* Obsah kurzu – část 3: lekce 5–7, závěr, závěrečný test a hodnocení. */
window.COURSE.modules.push({
  id: "m5",
  short: "Techniky pro děti",
  title: "Lekce 5: Techniky pro děti: Jak jim pomoci zvládat stres",
  minutes: 50,
  goals: [
    "Umíte s dítětem vytvořit bezpečné místo, vnější i vnitřní.",
    "Umíte hrát emoční barometr a připravit kartu pro dítě.",
    "Znáte postoj PACE a validaci emocí.",
    "Víte, jak pracovat s rituály a předvídatelností."
  ],
  steps: [
    {
      type: "scene",
      title: "Scéna: „Říkat ‚uklidni se‘ nefunguje“",
      slug: "Scéna 4 · Rodinná poradna · odpoledne",
      lines: [
        ["marek", "Honzo, dneska bych chtěl mluvit o dětech prakticky. Když vidím, jak některé reagují na drobnosti, jak je můžu naučit zvládat emoce?"],
        ["jan", "Jejich mozek je nastavený na přežití, jak už víte. Klíčem je pomoct jim naučit se, jak svůj stres regulovat. A to se neučí slovy."],
        ["marek", "Říkat „uklidni se“ asi opravdu nefunguje."],
        ["jan", "Nefunguje. Děti potřebují pracovat s tělem a zažívat, že zklidnění je možné. Bezpečné místo, koutek klidu. Tělesné techniky: Houpání, pevné objetí, dech. A rituály, protože předvídatelnost snižuje stres."],
        ["marek", "A co když dítě nechce mluvit o tom, jak se cítí?"],
        ["jan", "Pak jsou skvělé neverbální cesty: Kreslení, hra, emoční barometr. Dítě nemusí mluvit, a přesto se učí své emoce vnímat."],
        ["klara", "Marku, děti se potřebují naučit cítit bezpečí ve svém těle. Jen jim říct „jsi v bezpečí“ nestačí. Potřebují dotek, rytmus, předvídatelnost."],
        ["marek", "Takže objímání pomáhá?"],
        ["klara", "Ano, ale respektujte hranice dítěte. Některé chce jen držet za ruku, jiné potřebuje houpání nebo tíhu deky, další potřebuje odstup. Každé dítě je jiné. A vždycky se ptejte."]
      ],
      takeaways: [
        "Seberegulaci se děti učí zkušeností, ne vysvětlováním.",
        "Bezpečné místo, tělesné techniky a rituály jsou základ.",
        "Neverbální techniky pomáhají dětem, které nechtějí nebo neumějí mluvit.",
        "Dotek je nabídka, ne povinnost."
      ]
    },
    {
      type: "text",
      title: "Bezpečné místo: Vnější i vnitřní",
      html: `
<h3>Vnější bezpečné místo</h3>
<p>Koutek v bytě, kde je klid: Stan z deky, polštáře, měkká hračka, tlumené světlo, sluchátka s oblíbenou hudbou, těžká deka. Zásady:</p>
<ul>
  <li>Nikdy to není místo trestu. Na „hanbu“ se tam neposílá.</li>
  <li>Dítě tam smí kdykoli a samo. Vy jste nablízku, pokud o to stojí.</li>
  <li>Vytvářejte ho spolu s dítětem: Vybírá barvy, předměty a jméno („jeskyně“, „hnízdo“, „kosmická loď“).</li>
</ul>
<h3>Vnitřní bezpečné místo</h3>
<p>Představa místa, kde je dítěti dobře: Pláž, les, pokojík. Je to útočiště, které si dítě nosí s sebou. Postup:</p>
<ol>
  <li><strong>Představit si místo:</strong> „Vzpomeň si nebo si vymysli místo, kde je ti dobře a bezpečně.“</li>
  <li><strong>Zapojit smysly:</strong> Co tam vidí, slyší, cítí, čeho se dotýká, jak to tam voní.</li>
  <li><strong>Vytvořit kotvu:</strong> Slovo nebo gesto, které místo připomene (např. „klid“ a dlaň na srdce).</li>
  <li><strong>Trénovat v klidu:</strong> Kotvu cvičte, když je dítě v pohodě. Teprve pak ji použijte v těžké chvíli.</li>
</ol>
<blockquote>Pěstounka Petra cvičila bezpečné místo s dcerou, která se bála tmy. Dcera si představila pokojík plný hraček: „Když se bojím, představím si, že jsem tam.“ Strach ze tmy se postupně zmenšoval.</blockquote>
<blockquote>Adam (7) se při stresu schovával pod postel. Pěstounka Lenka s ním postavila „bunkr“ z deky v rohu pokoje. Dnes Adam sám řekne: „Jdu do svého bezpečného koutku.“</blockquote>
<p class="note">U dětí s těžkým traumatem se může stát, že představa „bezpečného místa“ vyvolá úzkost, protože žádné bezpečné místo nezažily. Pak začněte vnějším koutkem a konkrétními předměty. Imaginaci přidejte později, případně s terapeutem.</p>
`
    },
    {
      type: "barometer",
      id: "bar5",
      title: "Cvičení: Emoční barometr",
      intro: "Emoční barometr pomáhá dětem pojmenovat, jak silná je jejich emoce, a najít, co pomáhá. Vyzkoušejte si ho nejdřív za sebe: Jak silné je vaše napětí teď? Potom připravíte kartu pro dítě."
    },
    {
      type: "text",
      title: "Jak hrát emoční barometr s dítětem",
      html: `
<ol>
  <li><strong>Nakreslete barometr</strong> spolu s dítětem: Stupnice 1 až 10 od klidu po výbuch, každý stupeň jinou barvou. Menší děti mohou mít jen tři barvy (zelená, žlutá, červená) nebo obličejíčky.</li>
  <li><strong>Pojmenujte stupně</strong> jeho slovy: „Na 2 jsem v pohodě, na 5 mě to štve, na 8 už křičím, na 10 nevím, co dělám.“</li>
  <li><strong>Najděte, co pomáhá</strong> na každém stupni: „Když jsem na 8, pomáhá mi dupat a mačkat polštář.“</li>
  <li><strong>Používejte ho v klidu i v emocích:</strong> „Kde jsi teď na barometru?“ Stačí ukázat prstem, nemusí mluvit.</li>
  <li><strong>Hrajte to i za sebe:</strong> „Já jsem teď na 6, potřebuju se napít vody a třikrát vydechnout.“ Tím dítěti ukazujete, jak se to dělá.</li>
</ol>
<blockquote>Pěstoun Tomáš hrál barometr se synem, který měl problémy s agresí. Syn jednou řekl: „Když jsem na 10, pomáhá mi dupat.“ Postupně začal dupat místo křiku.</blockquote>
`
    },
    {
      type: "text",
      title: "Postoj PACE a validace",
      html: `
<p>Psycholog Dan Hughes, který se dlouhodobě věnuje dětem v náhradní péči, popsal postoj <strong>PACE</strong>. Nejde o techniku, ale o způsob, jak být s dítětem. <span class="tag fact">ověřeno</span></p>
<ul>
  <li><strong>P</strong>layfulness, <strong>hravost</strong>: lehkost, humor, radost, kde je to možné.</li>
  <li><strong>A</strong>cceptance, <strong>přijetí</strong>: přijímám prožitek dítěte (strach, vztek, smutek), i když nepřijímám chování.</li>
  <li><strong>C</strong>uriosity, <strong>zvědavost</strong>: „Zajímalo by mě, co se ti v tu chvíli honilo hlavou…“ místo „Proč jsi to udělal?“</li>
  <li><strong>E</strong>mpathy, <strong>empatie</strong>: „To muselo být hrozně těžké.“</li>
</ul>
<h3>Validace: Pojmenovat a uznat</h3>
<div class="table-wrap"><table>
<thead><tr><th>Místo…</th><th>Zkuste…</th></tr></thead>
<tbody>
<tr><td>„Přestaň řvát!“</td><td>„Vidím, že jsi hodně naštvaný. Jsem tady.“</td></tr>
<tr><td>„Vždyť se nic nestalo.“</td><td>„Tebe to hodně vyděsilo.“</td></tr>
<tr><td>„Kluci nebrečí.“</td><td>„Je ti smutno. To je v pořádku.“</td></tr>
<tr><td>„Proč to zase děláš?“</td><td>„Zajímalo by mě, co se ti stalo, že jsi teď tak rozrušený.“</td></tr>
<tr><td>„Jdi do pokoje, dokud se neuklidníš.“ (time-out)</td><td>„Pojď, sedneme si spolu, než to přejde.“ (time-in)</td></tr>
</tbody></table></div>
<p><strong>Validace neznamená souhlas.</strong> Pravidla platí dál: „Chápu, že máš vztek. Bít se ale nesmí. Pojď, zkusíme dupat.“ Hranice se lépe přijímají ve vztahu, kde se dítě cítí pochopené.</p>
<h3>Rituály a předvídatelnost</h3>
<ul>
  <li>Stejný sled večerních činností (koupel, pohádka, světýlko, věta na dobrou noc).</li>
  <li>Obrázkový rozvrh dne pro menší děti; pro starší týdenní plán na lednici.</li>
  <li>Ohlašovat změny předem: „Za deset minut končíme a jdeme na večeři.“</li>
  <li>Rituál před a po kontaktu s biologickou rodinou (co si vezmu s sebou, co uděláme, až se vrátím).</li>
</ul>
`
    },
    {
      type: "case",
      id: "k5",
      title: "Kazuistika: Noční děsy",
      story: `<p>Devítiletá Nikola se v pěstounské rodině budí třikrát týdně s křikem. Ráno si nic nepamatuje a je unavená. Pěstounka Katka je po několika týdnech vyčerpaná a začíná být podrážděná.</p><p><strong>Co z následujícího je nejvhodnější kombinace?</strong></p>`,
      options: [
        { text: "Nikolu v noci budit a ptát se, co se jí zdálo, aby to zpracovala.", good: false, feedback: "U nočních děsů dítě často není plně při vědomí a buzení může stav zhoršit. Rozbor snů v noci nepomáhá." },
        { text: "Večerní rituál (stejný sled, dechová cesta, bezpečné místo), klidná přítomnost v noci bez vyptávání, konzultace s pediatrem a Katka si domluví střídání nocí nebo odlehčení.", good: true, feedback: "Ano. Předvídatelný večer, regulace přes tělo, klidná přítomnost a ověření u lékaře. A sebepéče pečující osoby, bez které dlouhodobě nic nevydrží." },
        { text: "Vysvětlit Nikole, že se nemá čeho bát, protože je teď v bezpečí.", good: false, feedback: "Ujištění je fajn, ale samo o sobě nestačí. Bezpečí musí dítě zažít tělem a rituálem, nejen slyšet." },
        { text: "Nechat Nikolu spát s rozsvíceným tabletem, aby se nebála.", good: false, feedback: "Modré světlo a obsah obrazovky spánek spíš zhoršují (víc v lekci 6). Lepší je tlumené noční světýlko." }
      ]
    },
    {
      type: "reflect",
      id: "r5-safe",
      title: "Reflexe a plán: Bezpečné místo pro naše dítě",
      prompt: "Popište, jak by mohlo vypadat bezpečné místo pro vaše dítě: Kde bude, co v něm bude, jak ho spolu vytvoříte. Kterou větu z tabulky validace si zkusíte tento týden říct?",
      min: 150
    },
    {
      type: "task",
      id: "t5",
      title: "Úkol do příštích dní",
      html: `<p>S dítětem (nebo s jedním z dětí) nakreslete <strong>emoční barometr</strong> a pověste ho na viditelné místo. Aspoň jednou denně se k němu vraťte: Dítě ukáže, kde je, vy ukážete, kde jste vy.</p>`,
      commit: "Barometr s dítětem vyrobím a vyzkoušíme ho."
    },
    {
      type: "summary",
      title: "Shrnutí lekce 5",
      points: [
        "Bezpečné místo má vnější podobu (koutek) i vnitřní (představa a kotva). Nikdy to není místo trestu.",
        "Emoční barometr učí děti pojmenovat sílu emoce a najít, co pomáhá. Dospělý jde příkladem.",
        "Postoj PACE: Hravost, přijetí, zvědavost, empatie.",
        "Validace emocí neznamená souhlas s chováním. Hranice platí dál.",
        "Rituály a předvídatelnost snižují stres. Změny ohlašujeme předem."
      ],
      sources: [
        "Hughes, D. A., Golding, K. S.: Brain-Based Parenting / práce o PACE a DDP (anglicky).",
        "Siegel, D. J., Bryson, T. P.: Celostní výchova dítěte (česky; údaje o vydání ověřte).",
        "Matějček, Z.: Náhradní rodinná péče. Praha: Portál.",
        "Shapiro, L. E.: Emoční inteligence dítěte a její rozvoj (česky; údaje o vydání ověřte)."
      ]
    }
  ],
  quiz: [
    { q: "Dítě má doma „bezpečné místo“. Co platí?", o: ["Smí tam kdykoli a nikdy se tam neposílá jako trest", "Posíláme ho tam, když zlobí", "Smí tam jen s naším povolením"], c: 0, why: "Bezpečné místo patří dítěti. Když se z něj stane trest, přestane být bezpečné." },
    { q: "Proč se kotva bezpečného místa cvičí nejdřív v klidu?", o: ["Aby v těžké chvíli fungovala skoro sama", "Protože v klidu se nic nemůže pokazit", "Není to potřeba"], c: 0, why: "Co se naučíme v klidu, to se nám v rozrušení vybaví snáz." },
    { q: "Dítě řekne: „Ve škole jsem hloupý.“ Která reakce odpovídá postoji PACE (přijetí, zvědavost, empatie)?", o: ["„Zní to, že se ve škole cítíš špatně. Chceš mi o tom říct?“", "„Nemluv tak, to není pravda.“", "„Tak se víc uč.“"], c: 0, why: "Nejdřív přijmout, co dítě cítí, a být zvědavý. Rady a vyvracení až potom." },
    { q: "Dítě se bojí dětského lékaře. Která věta je validace?", o: ["„Tebe to hodně vyděsilo.“", "„To je hloupost, nic se neděje.“", "„Přestaň, už jsi velký.“"], c: 0, why: "Validace znamená uznat prožitek dítěte. Neřešíte ještě, jestli je strach „oprávněný“." },
    { q: "Znamená validace, že dítěti dovolíte všechno?", o: ["Ne, pravidla platí dál; dítě je snáz přijme, když se cítí slyšené", "Ano, hranice jsou jen k tomu, aby se rušily", "Ano, tak dítě nikdy nezlobí"], c: 0, why: "Validace a hranice jdou ruku v ruce. Dítě potřebuje obojí." }
  ]
});

window.COURSE.modules.push({
  id: "m6",
  short: "Společné aktivity a technostres",
  title: "Lekce 6: Společné aktivity a jak omezit technostres",
  minutes: 45,
  goals: [
    "Zvolíte vhodné společné aktivity podle věku dítěte.",
    "Znáte doporučení k času u obrazovky a projevy technostresu.",
    "Sestavíte návrh rodinné digitální dohody.",
    "Zamyslíte se nad vlastním používáním telefonu."
  ],
  steps: [
    {
      type: "scene",
      title: "Scéna: Herna a mobil",
      slug: "Scéna 5 · Dětská herna · káva u stolu, děti si hrají v pozadí",
      lines: [
        ["marek", "Honzo, co když s dítětem zkouším všechno možné, a pořád nejsme úplně blízcí?"],
        ["jan", "Blízkost a důvěru nejlépe budují společné zážitky. Děti se často vyjadřují líp hrou, tvořením nebo pohybem než rozhovorem o emocích."],
        ["marek", "Takže i když si jen kreslíme nebo kopeme do míče, pomáhá to?"],
        ["jan", "Ano. Děti si zapamatují hlavně to, jak se s vámi cítí. A mluví nejlíp „mimochodem“: při vaření, v autě, při kutění. Vedle sebe, ne proti sobě."],
        ["marek", "A co technologie? Děti tráví čím dál víc času na mobilech."],
        ["jan", "Technologie jsou užitečné, ale můžou být past. Zakazovat všechno nefunguje. Lepší je dohodnout pravidla podle věku a nabídnout zajímavé alternativy. Nekontrolované a nesmyslné sledování obrazovek dětem neprospívá."],
        ["marek", "Takže místo zákazu domluva?"],
        ["jan", "Ano. Když děti rozumí důvodům, snáz pravidla přijmou. A když je pomáhají tvořit, ještě snáz."],
        ["klara", "Děti potřebují rovnováhu mezi online a offline světem. Výborně funguje třeba pravidlo „žádné obrazovky hodinu před spaním“. A jedna věc pro dospělé: Děti nás pozorují. Kolikrát denně se díváme do telefonu my?"]
      ],
      takeaways: [
        "Společné zážitky budují vztah víc než rozhovory o vztahu.",
        "Děti často mluví „mimochodem“, vedle sebe při činnosti.",
        "U technologií funguje dohoda a alternativy lépe než zákaz.",
        "Pravidla platí i pro dospělé. Jsme vzor."
      ]
    },
    {
      type: "text",
      title: "Společné aktivity podle věku",
      html: `
<p>Společné aktivity jsou jako <strong>lepidlo</strong>, které drží rodinu pohromadě. Posilují vztah a pomáhají zvládat stres dětem i dospělým. Vždy jde o <strong>nabídku, ne povinnost</strong>.</p>
<h3>Předškoláci (3–6 let)</h3>
<ul>
  <li><strong>Hra na zvířátka:</strong> Pohyb, motorika a uvolnění napětí.</li>
  <li><strong>Pohádky o emocích:</strong> Čtení a povídání („Jak se asi cítila kůzlátka, když slyšela vlka?“).</li>
  <li><strong>Malování emocí:</strong> Dítě nakreslí, jak se cítí, a povídáte si o obrázku.</li>
</ul>
<blockquote>„Mami, když skáču jako žába, zapomínám, že jsem se bála.“ (dcera pěstounky Jany, 4 roky)</blockquote>
<h3>Školáci (7–12 let)</h3>
<ul>
  <li><strong>Deskové a karetní hry:</strong> Dobble, Activity, Ubongo apod. Pozornost, střídání, prohra v bezpečí.</li>
  <li><strong>Společný projekt:</strong> Domeček, krmítko, rodinný plakát, zahrádka.</li>
  <li><strong>Sport a příroda:</strong> Kolo, míč, výlety, stopovaná.</li>
</ul>
<blockquote>„Tati, když hrajeme, necítím se sám.“ (syn pěstouna Pavla, 10 let)</blockquote>
<h3>Dospívající (13–18 let)</h3>
<ul>
  <li><strong>Společné vaření:</strong> Výběr receptu, nákup, příprava.</li>
  <li><strong>Hudba:</strong> Poslech jejich hudby (se zájmem, bez hodnocení), nástroj, koncert.</li>
  <li><strong>Rovnocenná diskuse:</strong> Čaj, procházka, jízda autem. Respekt k jejich názoru.</li>
</ul>
<blockquote>„Když vaříme, můžeme si povídat o všem.“ (dcera pěstounky Katky, 15 let)</blockquote>
<h3>Příroda jako společný regulátor</h3>
<p>Japonsko má pro pobyt v lese pojem <em>šinrin-joku</em> („lesní koupel“), zavedený v 80. letech japonskou lesnickou správou. Norsko zná <em>friluftsliv</em>, život pod širým nebem jako běžnou součást rodinného života. <span class="tag fact">ověřeno</span> (původ pojmů) Výzkumy naznačují, že pobyt v zeleni snižuje subjektivní stres. <span class="tag probable">pravděpodobné</span> Pro rodinu to znamená jednoduše: Chodit ven, pravidelně, bez výkonu.</p>
`
    },
    {
      type: "text",
      title: "Technostres u dětí (i u nás)",
      html: `
<p>Technologie jsou <strong>dvousečný meč</strong>. Pomáhají se učit, být v kontaktu, odpočívat. Zároveň mohou být zdrojem <strong>technostresu</strong>: úzkosti, podrážděnosti, problémů se spánkem a soustředěním, srovnávání se s ostatními, konfliktů kvůli vypínání.</p>
<p>U dětí s traumatem bývá obrazovka i <strong>únikovou cestou</strong> (útěk z nepříjemných pocitů). Prudké odebrání pak může spustit silnou reakci. Proto postupně a s náhradou.</p>
<h3>Doporučení podle věku</h3>
<ul>
  <li><strong>Do 2 let:</strong> WHO (2019) nedoporučuje pasivní čas u obrazovky. Výjimkou jsou videohovory s blízkými. <span class="tag fact">ověřeno</span></li>
  <li><strong>2–4 roky:</strong> WHO doporučuje nejvýš 1 hodinu denně, méně je lépe, ideálně se sledováním společně. <span class="tag fact">ověřeno</span></li>
  <li><strong>Předškoláci obecně:</strong> Dívat se spolu a o tom, co dítě vidělo, si povídat. Vybírat kvalitní obsah.</li>
  <li><strong>Školáci:</strong> Jasná pravidla a offline ostrůvky (jídlo bez mobilů, ložnice bez mobilů), dostatek pohybu a spánku, podpora čtení tištěných knih a časopisů. Osvědčuje se vyvažovat čas u obrazovky aspoň stejným, nebo i dvojnásobným časem pohybu či jiné nedigitální aktivity.</li>
  <li><strong>Dospívající:</strong> Opakované otevřené rozhovory o rizicích (srovnávání, závislostní design aplikací, kyberšikana, sdílení fotek), společně dohodnuté dny nebo chvíle digitálního detoxu.</li>
</ul>
<h3>Pravidla, která se osvědčují</h3>
<ul>
  <li>Hodinu před spaním žádné obrazovky. Telefon se nabíjí mimo ložnici, i ten náš.</li>
  <li>U jídla bez telefonů, pro všechny.</li>
  <li>Nejdřív povinnosti a pohyb, pak obrazovka.</li>
  <li>Pravidla vznikají dohodou a jsou napsaná. Platí pro celou rodinu.</li>
</ul>
<blockquote>Pěstoun Tomáš zavedl pravidlo „před spaním žádné telefony“. Jeho devítiletý syn začal lépe usínat a byl méně podrážděný. Pěstounka Lenka se s šestnáctiletou dcerou dohodla na neděli bez sociálních sítí: „Najednou mám čas na knížky a procházky.“</blockquote>
`
    },
    {
      type: "mediaplan",
      id: "mp6",
      title: "Cvičení: Návrh rodinné digitální dohody",
      intro: "Vyberte věkovou skupinu a pravidla, která chcete s dětmi probrat. Vznikne návrh dohody, který se uloží do deníku. Konečnou podobu dotvořte s dětmi doma: Pravidla, na kterých se podílely, dodržují mnohem snáz."
    },
    {
      type: "reflect",
      id: "r6-me",
      title: "Reflexe: Já a můj telefon",
      prompt: "Kolik času denně trávíte na telefonu vy? Ve kterých chvílích po něm saháte automaticky (únava, nuda, napětí)? Co by se změnilo, kdyby u jídla a večer ležel telefon jinde? Navrhněte jednu společnou aktivitu na příští víkend.",
      min: 120
    },
    {
      type: "summary",
      title: "Shrnutí lekce 6",
      points: [
        "Společné aktivity posilují vztahy a pomáhají zvládat stres. Volíme je podle věku a nabízíme, nenutíme.",
        "Děti často mluví nejlíp vedle nás při činnosti.",
        "Technostres se projevuje úzkostí, podrážděností a horším spánkem. U dětí s traumatem bývá obrazovka i únikem.",
        "WHO: Do 2 let bez pasivního času u obrazovky, 2–4 roky nejvýš hodina denně.",
        "Pravidla fungují, když jsou dohodnutá, napsaná a platí pro celou rodinu."
      ],
      sources: [
        "WHO: Guidelines on physical activity, sedentary behaviour and sleep for children under 5 years of age. Ženeva, 2019.",
        "Spitzer, M.: Digitální demence (česky; kriticky laděná, k diskusi).",
        "E-Bezpečí (Univerzita Palackého v Olomouci): https://www.e-bezpeci.cz (prevence rizik internetu pro rodiče a děti)."
      ]
    }
  ],
  quiz: [
    { q: "Dítě začne vyprávět o důležitých věcech, když spolu vaříte nebo hrajete hru. Proč?", o: ["Při společné činnosti je rozhovor méně ohrožující a napětí klesá", "Protože při hře nic neposlouchá", "Je to náhoda"], c: 0, why: "Říkat těžké věci „mimochodem“ je pro dítě snazší než sedět proti sobě a vyprávět." },
    { q: "Kolik času u obrazovky doporučuje Světová zdravotnická organizace pro děti ve věku 2 až 4 roky?", o: ["Nejvýš hodinu denně, méně je lépe", "Tři hodiny denně", "Čas se nemusí hlídat"], c: 0, why: "Hranice jsou orientační. Důležité je i to, co dítě sleduje a že u toho není samo." },
    { q: "Jak nejlépe nastavit pravidla pro mobil a tablet?", o: ["Společně se domluvit, napsat je a platí pro celou rodinu", "Určí je dospělý a nevysvětluje", "Platí jen pro děti"], c: 0, why: "Pravidla, kterým děti rozumějí a platí i pro dospělé, se snáz dodržují." },
    { q: "Dítěti, které prožilo trauma, naráz seberete telefon a ono vybuchne. Proč?", o: ["Obrazovka mu často slouží jako útěk od nepříjemných pocitů", "Chce vás schválně zlobit", "Je to jen náhoda"], c: 0, why: "Proto pomáhá odpojování po krocích, s předstihem a s nabídkou jiné činnosti." },
    { q: "Co pomáhá spánku celé rodiny?", o: ["Hodinu před spaním bez obrazovek a nabíjení telefonů mimo ložnici", "Dlouhý film před spaním", "Telefon u postele kvůli budíku"], c: 0, why: "Klidný večerní rituál dělá víc než jakékoli zákazy." }
  ]
});

window.COURSE.modules.push({
  id: "m7",
  short: "Dlouhodobý plán a podpora",
  title: "Lekce 7: Dlouhodobý plán, krizový plán a podpora",
  minutes: 35,
  goals: [
    "Sestavíte si osobní krizový plán a plán doplňování sil.",
    "Znáte koncept záblesků (glimmers) a vyzkoušíte ho.",
    "Víte, kde a jak hledat podporu, včetně svých zákonných nároků.",
    "Porovnáte vstupní a výstupní Pěstounské zrcadlo."
  ],
  steps: [
    {
      type: "scene",
      title: "Scéna: Závěrečná káva",
      slug: "Scéna 6 · Klidná kavárna · Marek a Jan u závěrečné kávy",
      lines: [
        ["marek", "Honzo, prošli jsme stres, techniky, práci s dětmi. Ale jak si to udržet? Teď jsem motivovaný. Co když za měsíc sklouznu do starých kolejí?"],
        ["jan", "To je normální. Změna není sprint, ale maraton. Pomáhá jednoduchý plán: Znát své spouštěče, mít krabici s nástroji, pravidelně se zastavit a ohlédnout se, a mít kolem sebe podporu."],
        ["marek", "A když přijde špatný týden a já zase vybouchnu?"],
        ["jan", "To se stane každému. Nejde o to být dokonalý, ale umět se vrátit. Jeden zkažený den neznamená, že je všechno ztracené. A když vybouchnete, můžete to s dítětem napravit: „Křičel jsem. To nebylo v pořádku. Mrzí mě to.“ I to je pro dítě cenná lekce."],
        ["marek", "Kde hledat podporu?"],
        ["jan", "U doprovázející organizace, v podpůrných skupinách pěstounů, u psychologa. A v rodině a mezi přáteli. Někdy stačí vědět, že se máte komu svěřit."],
        ["klara", "Marku, rodiče mají často pocit, že musí všechno zvládnout sami. Každý ale občas potřebuje pomoc. Říct si o ni není slabost. Je to klíčová dovednost."],
        ["marek", "Připomíná mi to péči o zahradu. Když se o ni nestaráte, zaroste."],
        ["jan", "Přesně. Když pečujete o sebe i o děti, vztahy rozkvetou. A trny k tomu patří."]
      ],
      takeaways: [
        "Dlouhodobá změna je proces. Uklouznutí patří k němu, důležitý je návrat.",
        "Po výbuchu je možná náprava. To je pro dítě silná zkušenost.",
        "Podpora zvenčí je součást profesionální péče, ne slabost."
      ]
    },
    {
      type: "text",
      title: "Čtyři kroky dlouhodobého plánu",
      html: `
<p>Plán je jako <strong>mapa</strong>. Nemusí být dokonalý, ale měl by být realistický a pružný.</p>
<ol>
  <li><strong>Znát své spouštěče.</strong> Pro sebe (konflikty, časový tlak, izolace, kontakty, úřady) i pro děti (škola, vrstevníci, vzpomínky, změny). Mapu stresorů z lekce 1 máte v deníku.</li>
  <li><strong>Mít „krabici s nástroji“.</strong> 2–3 techniky pro sebe (dech, zemnění, 5-4-3-2-1, pohyb) a seznam aktivit pro děti (barometr, bezpečné místo, zvířátka, Země a moře).</li>
  <li><strong>Pravidelná reflexe.</strong> Jednou týdně 10–15 minut: Co mi tento týden pomohlo? Co bych chtěl/a udělat jinak?</li>
  <li><strong>Podpora.</strong> Doprovázející organizace, skupina pěstounů, psycholog, přátelé, rodina.</li>
</ol>
<blockquote>Pěstounka Jana si každou neděli večer sedla s manželem a probrali, jaký byl týden. „Najednou jsme si uvědomili, že nám dělají dobře společné procházky. Tak jsme si je dali do kalendáře.“</blockquote>
<blockquote>Pěstoun Pavel si vytvořil krabici s technikami pro sebe i syna. Když syn zažíval stres, Pavel řekl: „Vyber si něco z naší krabice.“ Syn si nejčastěji vybral hru na zvířátka.</blockquote>

<h3>Od spouštěčů k zábleskům</h3>
<p>Pěstouni obvykle velmi dobře znají své spouštěče. Neustálé hlídání hrozeb ale nervový systém udržuje v pohotovosti. Deb Dana proto navrhla protiváhu: <strong>Záblesky</strong> (glimmers), krátké momenty bezpečí nebo pohody, často jen na 15–30 sekund. Vůně kávy, teplý ručník ze sušičky, úsměv prodavačky, světlo na zdi. <span class="tag hyp">model</span></p>
<p>Nejde o růžové brýle ani popírání toho, že dny jsou těžké. Mozek má vrozený sklon pamatovat si hrozby (negativní zkreslení). Sbírání záblesků je trénink, který učí všímat si i drobných dávek bezpečí. Klíčové je nezůstat u popisu a všimnout si, <strong>co udělalo tělo</strong>: povolila ramena, prohloubil se dech.</p>
`
    },
    {
      type: "glimmers",
      id: "gl7",
      title: "Cvičení: Sběratel záblesků",
      intro: "Vzpomeňte si na tři záblesky z posledních dnů: Krátké chvíle, kdy vám bylo aspoň trochu dobře nebo bezpečně. U každého zapište, co to bylo a co při tom udělalo vaše tělo."
    },
    {
      type: "crisisplan",
      id: "cp7",
      title: "Cvičení: Můj krizový plán",
      intro: "Když přijde krize, rozvaha se vypíná. Proto potřebujeme mít plán napsaný „v době míru“. Vyplňte ho. Uloží se do deníku a na konci kurzu si ho můžete zkopírovat nebo vytisknout."
    },
    {
      type: "text",
      title: "Kde hledat podporu",
      html: `
<h3>Doprovázející organizace</h3>
<p>Podle zákona o sociálně-právní ochraně dětí (č. 359/1999 Sb., § 47a) má osoba pečující mimo jiné právo na: <span class="tag fact">ověřeno</span></p>
<ul>
  <li>zajištění osobní péče o svěřené dítě (respit), pokud dítě dosáhlo věku 2 let, v rozsahu nejméně 14 kalendářních dnů v roce,</li>
  <li>zprostředkování odborné pomoci, zejména psychologické, terapeutické a poradenské,</li>
  <li>zajištění vzdělávání a pomoc při zajištění odlehčovací péče.</li>
</ul>
<p>A zároveň povinnost zvyšovat si znalosti a dovednosti v rozsahu <strong>24 hodin během 12 po sobě jdoucích měsíců</strong>. Tento kurz může být jeho součástí. O započtení rozhoduje vaše doprovázející organizace.</p>
<p class="note">Konkrétní podobu nároků a postup si ověřte u své doprovázející organizace nebo klíčové pracovnice. Zákony se mění.</p>

<h3>Kontakty, když je toho moc</h3>
<div class="table-wrap"><table>
<tbody>
<tr><td><strong>Linka první psychické pomoci</strong></td><td>116 123</td><td>nonstop, zdarma, pro dospělé</td></tr>
<tr><td><strong>Rodičovská linka</strong></td><td>606 021 021</td><td>pro rodiče a pečující; provozní dobu ověřte</td></tr>
<tr><td><strong>Linka bezpečí</strong></td><td>116 111</td><td>nonstop, zdarma, pro děti a dospívající</td></tr>
<tr><td><strong>Akutní ohrožení života</strong></td><td>155 / 112</td><td>záchranná služba / integrovaný záchranný systém</td></tr>
</tbody></table></div>
<h3>Další možnosti</h3>
<ul>
  <li>podpůrné skupiny pěstounů (místní i online),</li>
  <li>psycholog nebo psychoterapeut (část péče hradí zdravotní pojišťovny),</li>
  <li>supervize, pokud ji vaše organizace nabízí,</li>
  <li>praktický lékař, když se přidávají tělesné potíže.</li>
</ul>
`
    },
    {
      type: "mirror",
      id: "mirrorPost",
      title: "Pěstounské zrcadlo (výstupní)",
      intro: "Stejný audit jako na začátku. Odpovídejte podle toho, jak to máte teď. Po vyplnění uvidíte porovnání se vstupem. Krátký kurz obvykle velké změny nepřinese a to je v pořádku. Zrcadlo slouží hlavně k tomu, abyste si všímali, co se děje."
    },
    {
      type: "text",
      title: "Desatero pro zvládání stresu pěstounů",
      html: `
<p class="lede">Aneb jak pečovat o sebe i o děti s láskou a klidem.</p>
<ol>
  <li><strong>Dýchej zhluboka, i když se cítíš přetížený/á.</strong> Dech je nejrychlejší cesta ke zklidnění. Stačí pár minut denně.</li>
  <li><strong>Pamatuj, že stres je signál, ne selhání.</strong> Když cítíš napětí, tělo volá o pozornost. Poslouchej ho.</li>
  <li><strong>Tělo je tvůj spojenec.</strong> Protažení, procházka, pohyb uvolní napětí.</li>
  <li><strong>Děti s traumatem potřebují bezpečí, ne dokonalost.</strong> Když nevíš kudy kam, řekni si: „Stačí, že jsem tu.“</li>
  <li><strong>Nejdřív zklidnit, pak vztah, pak rozum.</strong> U dítěte i u sebe.</li>
  <li><strong>Společné zážitky posilují vztahy.</strong> Hry, tvoření, vaření, obyčejné povídání.</li>
  <li><strong>Méně obrazovek, víc spolu.</strong> Pravidla platí pro celou rodinu.</li>
  <li><strong>Sebepéče není luxus, je to nutnost.</strong> Čtení, pohyb, tichá káva, sbor.</li>
  <li><strong>Reflektuj a plánuj.</strong> Každý týden chvilka na to, co funguje a co upravit.</li>
  <li><strong>Hledej podporu a nezůstávej na to sám/sama.</strong> Říct si o pomoc není slabost.</li>
</ol>
<h3>Příběh na závěr: Strom a vítr</h3>
<p>V jedné zahradě rostl strom, který se při každém větru třásl strachy. Zahradník mu řekl: „Nemusíš s větrem bojovat. Nauč se s ním tančit.“ Strom to zkusil. Když vítr foukal, hýbal větvemi do rytmu. A zjistil, že ho vítr nezlomí, když se nebrání a pevně drží kořeny. Stejně tak vy a vaše děti: Stres nezmizí, ale můžete se naučit v něm stát a hýbat se s ním.</p>
`
    },
    {
      type: "reflect",
      id: "r7-commit",
      title: "Reflexe: Co si odnáším",
      prompt: "Co bylo pro vás v kurzu nejdůležitější? Které dvě techniky si dáte do své „krabice s nástroji“? A co uděláte jinak s dítětem v příštím měsíci?",
      min: 150
    },
    {
      type: "summary",
      title: "Shrnutí lekce 7",
      points: [
        "Dlouhodobý plán: Spouštěče, krabice s nástroji, pravidelná reflexe, podpora.",
        "Záblesky jsou protiváhou spouštěčů. Trénují všímavost k bezpečí.",
        "Krizový plán píšeme v klidu, aby fungoval v krizi.",
        "Máte zákonné nároky na respit, odbornou pomoc a vzdělávání. Využívejte je.",
        "Po výbuchu je možná náprava. Uklouznutí patří k cestě."
      ],
      sources: [
        "Zákon č. 359/1999 Sb., o sociálně-právní ochraně dětí, § 47a (aktuální znění ověřte např. na zakonyprolidi.cz).",
        "Dana, D.: Anchored. Boulder: Sounds True, 2021 (anglicky; o záblescích a regulaci).",
        "Neff, K.: Soucit se sebou (česky; údaje o vydání ověřte)."
      ]
    }
  ],
  quiz: [
    { q: "Krizový plán se píše v době klidu. Proč?", o: ["V krizi hůř přemýšlíme a plán nám pak slouží jako opora", "Protože v krizi nemáme čas na psaní", "Nemá smysl ho psát"], c: 0, why: "Plán v ruce vás v těžké chvíli nenechá na pospas improvizaci." },
    { q: "Co jsou „záblesky“ (glimmers)?", o: ["Krátké okamžiky bezpečí a pohody, které učí tělo vnímat klid", "Spouštěče stresu", "Optické klamy"], c: 0, why: "Všímat si malých dobrých chvilek pomáhá nervovému systému zotavit se." },
    { q: "Na dítě jste vybouchli. Co je nejlepší udělat?", o: ["Napravit to: Pojmenovat, co se stalo, omluvit se a obnovit kontakt", "Nic, aby se to nezhoršilo", "Čekat, až se omluví dítě"], c: 0, why: "Každému se to stane. Důležité je opravit vztah, ne být dokonalý. Dítě se tak učí, že vztahy se dají napravit." },
    { q: "Kolik hodin vzdělávání zákon pro pěstouny ukládá za 12 měsíců?", o: ["24 hodin", "6 hodin", "100 hodin"], c: 0, why: "Tento kurz se do rozsahu vzdělávání započítává podle pravidel vaší organizace." },
    { q: "Kam můžete zavolat, když vás přemáhá tíseň a potřebujete si promluvit?", o: ["Linka první psychické pomoci 116 123", "Policie 158", "Hasiči 150"], c: 0, why: "Když vám není dobře, můžete se obrátit na odbornou pomoc, a klidně i bez ohlášení." }
  ]
});

window.COURSE.modules.push({
  id: "m8",
  short: "Závěrečný test a osvědčení",
  title: "Závěr: Test, hodnocení kurzu a osvědčení",
  minutes: 15,
  final: true,
  goals: ["Ověříte si znalosti z celého kurzu.", "Ohodnotíte kurz.", "Získáte osvědčení o absolvování."],
  steps: [],
  quiz: null
});

window.COURSE.finalTest = [
    { q: "Který z těchto signálů patří ke stresu a nemusí znamenat, že je s vámi něco špatně?", o: ["Zrychlený tep, napětí v těle a podrážděnost v náročné chvíli", "Vždy jde o vážnou nemoc", "Znamená, že pěstounství nezvládáte"], c: 0, m: 1, why: "Stres je normální reakce těla. Důležité je umět se po něm vrátit do klidu." },
    { q: "Jak vám může pomoct obraz sklenice vody?", o: ["Připomíná, že zátěž je třeba průběžně odkládat, ne ji nést celý den", "Připomíná, že máme víc pít", "Připomíná, že malé starosti nikdy nevadí"], c: 0, m: 1, why: "Rozhoduje, jak dlouho zátěž neseme. Pomáhají pauzy a odkládání." },
    { q: "Syn po zvýšení vašeho hlasu ztuhne a je nápadně poslušný. Co to nejspíš znamená?", o: ["Je ve velké tísni a bojí se", "Pochopil pravidlo", "Je unavený"], c: 0, m: 2, why: "Nápadná poslušnost bývá znamení zamrznutí. Dítě potřebuje cítit bezpečí." },
    { q: "Dcera vybuchne vzteky. Co uděláte nejdřív?", o: ["Zůstanu klidný, budu nablízku a pomohu jí zklidnit tělo", "Vysvětlím jí, proč se to nedělá", "Potrestám ji, aby si to pamatovala"], c: 0, m: 2, why: "Pořadí je zklidnit, vztah, až potom rozum." },
    { q: "Která věta nejlíp zabere v akutní chvíli?", o: ["„Jsem tady. Jsi v bezpečí.“", "„Tohle už nedělej.“", "„Za chvíli uvidíš.“"], c: 0, m: 2, why: "Krátká klidná věta dává signál bezpečí." },
    { q: "Co můžete udělat sami pro sebe za minutu, když cítíte, že vám stoupá napětí?", o: ["Pomalu a dlouze vydechnout a zatlačit chodidla do země", "Přečíst si pořádně všechny zprávy", "Rychle a zhluboka dýchat"], c: 0, m: 3, why: "Dlouhý výdech a zemnění zklidňují tělo velmi rychle." },
    { q: "Zaměření na dech vás znervózňuje. Co zvolíte?", o: ["Pohyb, chlad, zvuk nebo pozornost ven", "Vydržím to", "Budu dýchat rychleji"], c: 0, m: 3, why: "Existuje víc cest. Dech není povinný." },
    { q: "Dlouho jste vyčerpaní, děti vás obtěžují a nic vás netěší. Co je dobré udělat?", o: ["Říct si o podporu (klíčový pracovník, odborník, linka)", "Vydržet, přejde to samo", "Přestat o tom přemýšlet"], c: 0, m: 4, why: "Včasná podpora je projev síly, ne selhání." },
    { q: "Co můžete dělat s úzkostí, která nejde hned odeznít?", o: ["Přijmout ji, jak je, a přesto udělat, co je potřeba", "Potlačit ji", "Čekat, až zmizí"], c: 0, m: 4, why: "Nemusíte čekat na dobrý pocit. Můžete jednat s ním." },
    { q: "Kdy se hodí technika 5-4-3-2-1?", o: ["Když mě přeplavují emoce a chci se vrátit do přítomnosti", "Když potřebuji usnout za pět minut", "Když chci zrychlit dech"], c: 0, m: 4, why: "Smysly vás vrátí do „tady a teď“." },
    { q: "Dítě se bojí. K čemu může sloužit hra „Emoční barometr“?", o: ["Pomůže dítěti pojmenovat, jak moc je napjaté nebo rozrušené", "Změří mu teplotu", "Slouží jako odměna za poslušnost"], c: 0, m: 5, why: "Pojmenovaný pocit je lépe zvladatelný." },
    { q: "Dítě má doma „bezpečné místo“. Co platí?", o: ["Neslouží jako trest a dítě ho pomáhá vytvořit", "Posíláme ho tam, když zlobí", "Musí být vždy jen ve fantazii"], c: 0, m: 5, why: "Bezpečné místo patří dítěti." },
    { q: "Dítě řekne, že se bojí tmy. Která věta je validace?", o: ["„Tebe to hodně vyděsilo.“", "„Nemusíš se bát, to je hloupost.“", "„Ve tvém věku se bát nesmí.“"], c: 0, m: 5, why: "Nejdřív uznat prožitek, pak případně hledat řešení." },
    { q: "Jak nejlépe ukončíte hodinové hraní na tabletu, aby nedošlo k hádce?", o: ["Dohodnutá pravidla předem a krátké upozornění, že čas končí", "Bez varování vypnu wi-fi", "Slíbím, že čas bude neomezený"], c: 0, m: 6, why: "Dohodnutá pravidla a předvídatelný konec snižují napětí." },
    { q: "Co dělá krizový plán užitečným?", o: ["Píšeme ho dopředu v klidu, abychom ho měli po ruce, když přijde krize", "Píšeme ho během hádky", "Nikdo ho nikdy nečte"], c: 0, m: 7, why: "V krizi se špatně přemýšlí. Plán nese vás." }
];

window.COURSE.evaluation = [
  { id: "e1", q: "Jak užitečný byl kurz pro vaši praxi?", type: "scale" },
  { id: "e2", q: "Jak srozumitelný byl obsah?", type: "scale" },
  { id: "e3", q: "Jak hodnotíte praktická cvičení?", type: "scale" },
  { id: "e4", q: "Co vám v kurzu nejvíc pomohlo?", type: "text" },
  { id: "e5", q: "Co byste v kurzu změnili nebo doplnili?", type: "text" }
];
