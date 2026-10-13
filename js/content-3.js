/* Obsah kurzu – část 3: lekce 5–7, závěr, závěrečný test a hodnocení. */
window.COURSE.modules.push({
  id: "m5",
  short: "Techniky pro děti",
  title: "Lekce 5: Techniky pro děti: jak jim pomoci zvládat stres",
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
        ["jan", "Nefunguje. Děti potřebují pracovat s tělem a zažívat, že zklidnění je možné. Bezpečné místo, koutek klidu. Tělesné techniky: houpání, pevné objetí, dech. A rituály, protože předvídatelnost snižuje stres."],
        ["marek", "A co když dítě nechce mluvit o tom, jak se cítí?"],
        ["jan", "Pak jsou skvělé neverbální cesty: kreslení, hra, emoční barometr. Dítě nemusí mluvit, a přesto se učí své emoce vnímat."],
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
      title: "Bezpečné místo: vnější i vnitřní",
      html: `
<h3>Vnější bezpečné místo</h3>
<p>Koutek v bytě, kde je klid: stan z deky, polštáře, měkká hračka, tlumené světlo, sluchátka s oblíbenou hudbou, těžká deka. Zásady:</p>
<ul>
  <li>Nikdy to není místo trestu. Na „hanbu“ se tam neposílá.</li>
  <li>Dítě tam smí kdykoli a samo. Vy jste nablízku, pokud o to stojí.</li>
  <li>Vytvářejte ho spolu s dítětem: vybírá barvy, předměty a jméno („jeskyně“, „hnízdo“, „kosmická loď“).</li>
</ul>
<h3>Vnitřní bezpečné místo</h3>
<p>Představa místa, kde je dítěti dobře: pláž, les, pokojík. Je to útočiště, které si dítě nosí s sebou. Postup:</p>
<ol>
  <li><strong>Představit si místo:</strong> „Vzpomeň si nebo si vymysli místo, kde je ti dobře a bezpečně.“</li>
  <li><strong>Zapojit smysly:</strong> co tam vidí, slyší, cítí, čeho se dotýká, jak to tam voní.</li>
  <li><strong>Vytvořit kotvu:</strong> slovo nebo gesto, které místo připomene (např. „klid“ a dlaň na srdce).</li>
  <li><strong>Trénovat v klidu:</strong> kotvu cvičte, když je dítě v pohodě. Teprve pak ji použijte v těžké chvíli.</li>
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
      intro: "Emoční barometr pomáhá dětem pojmenovat, jak silná je jejich emoce, a najít, co pomáhá. Vyzkoušejte si ho nejdřív za sebe: jak silné je vaše napětí teď? Potom připravíte kartu pro dítě."
    },
    {
      type: "text",
      title: "Jak hrát emoční barometr s dítětem",
      html: `
<ol>
  <li><strong>Nakreslete barometr</strong> spolu s dítětem: stupnice 1 až 10 od klidu po výbuch, každý stupeň jinou barvou. Menší děti mohou mít jen tři barvy (zelená, žlutá, červená) nebo obličejíčky.</li>
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
<h3>Validace: pojmenovat a uznat</h3>
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
      title: "Reflexe a plán: bezpečné místo pro naše dítě",
      prompt: "Popište, jak by mohlo vypadat bezpečné místo pro vaše dítě: kde bude, co v něm bude, jak ho spolu vytvoříte. Kterou větu z tabulky validace si zkusíte tento týden říct?",
      min: 150
    },
    {
      type: "task",
      id: "t5",
      title: "Úkol do příštích dní",
      html: `<p>S dítětem (nebo s jedním z dětí) nakreslete <strong>emoční barometr</strong> a pověste ho na viditelné místo. Aspoň jednou denně se k němu vraťte: dítě ukáže, kde je, vy ukážete, kde jste vy.</p>`,
      commit: "Barometr s dítětem vyrobím a vyzkoušíme ho."
    },
    {
      type: "summary",
      title: "Shrnutí lekce 5",
      points: [
        "Bezpečné místo má vnější podobu (koutek) i vnitřní (představa a kotva). Nikdy to není místo trestu.",
        "Emoční barometr učí děti pojmenovat sílu emoce a najít, co pomáhá. Dospělý jde příkladem.",
        "Postoj PACE: hravost, přijetí, zvědavost, empatie.",
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
    { q: "Co platí o bezpečném místě?", o: ["Je to vhodné místo, kam poslat dítě za trest", "Dítě tam smí kdykoli, vytváří ho spolu s dospělým a nikdy neslouží k trestu", "Musí to být vždy samostatný pokoj"], c: 1, why: "Bezpečné místo musí být spojené jen s bezpečím. Trest by ho znehodnotil." },
    { q: "Proč se kotva bezpečného místa trénuje nejdřív v klidu?", o: ["Aby se ji dítě naučilo a v těžké chvíli fungovala automaticky", "Protože v emocích je zakázaná", "Aby dítě neodmítalo spát"], c: 0, why: "V poplachu se nové věci neučí. Trénink v klidu vytváří spojení, které pak funguje i ve stresu." },
    { q: "Co znamená písmeno A v postoji PACE?", o: ["Autorita", "Přijetí (acceptance) prožitku dítěte", "Aktivita"], c: 1, why: "Přijímám prožitek dítěte, i když nepřijímám jeho chování." },
    { q: "Která reakce je validací?", o: ["„Vždyť se nic nestalo.“", "„Tebe to hodně vyděsilo.“", "„Kdybys poslouchal, nestalo by se to.“"], c: 1, why: "Validace pojmenuje a uzná prožitek dítěte." },
    { q: "Znamená validace emoce, že rušíme pravidla?", o: ["Ano, emoce mají vždy přednost", "Ne, pravidla platí dál, jen je dítě lépe přijme ve vztahu", "Ano, ale jen u menších dětí"], c: 1, why: "„Chápu, že máš vztek. Bít se nesmí.“ Uznání i hranice zároveň." }
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
        ["klara", "Děti potřebují rovnováhu mezi online a offline světem. Výborně funguje třeba pravidlo „žádné obrazovky hodinu před spaním“. A jedna věc pro dospělé: děti nás pozorují. Kolikrát denně se díváme do telefonu my?"]
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
  <li><strong>Hra na zvířátka:</strong> pohyb, motorika a uvolnění napětí.</li>
  <li><strong>Pohádky o emocích:</strong> čtení a povídání („Jak se asi cítila kůzlátka, když slyšela vlka?“).</li>
  <li><strong>Malování emocí:</strong> dítě nakreslí, jak se cítí, a povídáte si o obrázku.</li>
</ul>
<blockquote>„Mami, když skáču jako žába, zapomínám, že jsem se bála.“ (dcera pěstounky Jany, 4 roky)</blockquote>
<h3>Školáci (7–12 let)</h3>
<ul>
  <li><strong>Deskové a karetní hry:</strong> Dobble, Activity, Ubongo apod. Pozornost, střídání, prohra v bezpečí.</li>
  <li><strong>Společný projekt:</strong> domeček, krmítko, rodinný plakát, zahrádka.</li>
  <li><strong>Sport a příroda:</strong> kolo, míč, výlety, stopovaná.</li>
</ul>
<blockquote>„Tati, když hrajeme, necítím se sám.“ (syn pěstouna Pavla, 10 let)</blockquote>
<h3>Dospívající (13–18 let)</h3>
<ul>
  <li><strong>Společné vaření:</strong> výběr receptu, nákup, příprava.</li>
  <li><strong>Hudba:</strong> poslech jejich hudby (se zájmem, bez hodnocení), nástroj, koncert.</li>
  <li><strong>Rovnocenná diskuse:</strong> čaj, procházka, jízda autem. Respekt k jejich názoru.</li>
</ul>
<blockquote>„Když vaříme, můžeme si povídat o všem.“ (dcera pěstounky Katky, 15 let)</blockquote>
<h3>Příroda jako společný regulátor</h3>
<p>Japonsko má pro pobyt v lese pojem <em>šinrin-joku</em> („lesní koupel“), zavedený v 80. letech japonskou lesnickou správou. Norsko zná <em>friluftsliv</em>, život pod širým nebem jako běžnou součást rodinného života. <span class="tag fact">ověřeno</span> (původ pojmů) Výzkumy naznačují, že pobyt v zeleni snižuje subjektivní stres. <span class="tag probable">pravděpodobné</span> Pro rodinu to znamená jednoduše: chodit ven, pravidelně, bez výkonu.</p>
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
  <li><strong>Předškoláci obecně:</strong> dívat se spolu a o tom, co dítě vidělo, si povídat. Vybírat kvalitní obsah.</li>
  <li><strong>Školáci:</strong> jasná pravidla a offline ostrůvky (jídlo bez mobilů, ložnice bez mobilů), dostatek pohybu a spánku, podpora čtení tištěných knih a časopisů. Osvědčuje se vyvažovat čas u obrazovky aspoň stejným, nebo i dvojnásobným časem pohybu či jiné nedigitální aktivity.</li>
  <li><strong>Dospívající:</strong> opakované otevřené rozhovory o rizicích (srovnávání, závislostní design aplikací, kyberšikana, sdílení fotek), společně dohodnuté dny nebo chvíle digitálního detoxu.</li>
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
      intro: "Vyberte věkovou skupinu a pravidla, která chcete s dětmi probrat. Vznikne návrh dohody, který se uloží do deníku. Konečnou podobu dotvořte s dětmi doma: pravidla, na kterých se podílely, dodržují mnohem snáz."
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
        "WHO: do 2 let bez pasivního času u obrazovky, 2–4 roky nejvýš hodina denně.",
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
    { q: "Proč děti často mluví víc „mimochodem“, při společné činnosti?", o: ["Protože je rozhovor tváří v tvář méně ohrožující a činnost snižuje napětí", "Protože nechtějí, aby je dospělý poslouchal", "Protože jsou při činnosti unavené"], c: 0, why: "Vedle sebe, ne proti sobě. Společná činnost snižuje tlak a otevírá prostor." },
    { q: "Co doporučuje WHO (2019) pro děti ve věku 2–4 roky?", o: ["Neomezeně, pokud jde o vzdělávací obsah", "Nejvýš 1 hodinu u obrazovky denně, méně je lépe", "Aspoň 2 hodiny denně kvůli digitálním dovednostem"], c: 1, why: "Doporučení WHO pro tuto věkovou skupinu: max. 1 hodina, méně je lépe." },
    { q: "Jak nejlépe zavádět pravidla pro technologie u školáků?", o: ["Plošně zakázat všechny technologie", "Nastavit jasná, společně dohodnutá pravidla a podporovat offline aktivity", "Nechat to na dítěti, ono se naučí samo"], c: 1, why: "Dohoda, jasnost a alternativy fungují lépe než zákaz nebo nečinnost." },
    { q: "Proč může u dítěte s traumatem prudké odebrání telefonu vyvolat silnou reakci?", o: ["Protože obrazovka mu často slouží jako únik z nepříjemných pocitů", "Protože je rozmazlené", "Protože telefony obsahují návykové látky"], c: 0, why: "Obrazovka bývá strategie útěku. Odebrání bez náhrady bere dítěti jediný známý způsob úlevy." },
    { q: "Které pravidlo pomáhá spánku celé rodiny?", o: ["Telefon u postele kvůli budíku", "Žádné obrazovky hodinu před spaním a nabíjení telefonů mimo ložnici", "Usínání u videa, aby dítě neslyšelo zvuky"], c: 1, why: "Obrazovky před spaním spánek zhoršují. Pravidlo platí i pro dospělé." }
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
        ["jan", "To je normální. Změna není sprint, ale maraton. Pomáhá jednoduchý plán: znát své spouštěče, mít krabici s nástroji, pravidelně se zastavit a ohlédnout se, a mít kolem sebe podporu."],
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
<p>Pěstouni obvykle velmi dobře znají své spouštěče. Neustálé hlídání hrozeb ale nervový systém udržuje v pohotovosti. Deb Dana proto navrhla protiváhu: <strong>záblesky</strong> (glimmers), krátké momenty bezpečí nebo pohody, často jen na 15–30 sekund. Vůně kávy, teplý ručník ze sušičky, úsměv prodavačky, světlo na zdi. <span class="tag hyp">model</span></p>
<p>Nejde o růžové brýle ani popírání toho, že dny jsou těžké. Mozek má vrozený sklon pamatovat si hrozby (negativní zkreslení). Sbírání záblesků je trénink, který učí všímat si i drobných dávek bezpečí. Klíčové je nezůstat u popisu a všimnout si, <strong>co udělalo tělo</strong>: povolila ramena, prohloubil se dech.</p>
`
    },
    {
      type: "glimmers",
      id: "gl7",
      title: "Cvičení: Sběratel záblesků",
      intro: "Vzpomeňte si na tři záblesky z posledních dnů: krátké chvíle, kdy vám bylo aspoň trochu dobře nebo bezpečně. U každého zapište, co to bylo a co při tom udělalo vaše tělo."
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
<h3>Příběh na závěr: strom a vítr</h3>
<p>V jedné zahradě rostl strom, který se při každém větru třásl strachy. Zahradník mu řekl: „Nemusíš s větrem bojovat. Nauč se s ním tančit.“ Strom to zkusil. Když vítr foukal, hýbal větvemi do rytmu. A zjistil, že ho vítr nezlomí, když se nebrání a pevně drží kořeny. Stejně tak vy a vaše děti: stres nezmizí, ale můžete se naučit v něm stát a hýbat se s ním.</p>
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
        "Dlouhodobý plán: spouštěče, krabice s nástroji, pravidelná reflexe, podpora.",
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
    { q: "Proč se krizový plán píše „v době míru“?", o: ["Protože v krizi se rozvaha vypíná a plán pak funguje jako opora", "Protože v krizi není čas na psaní", "Protože to vyžaduje zákon"], c: 0, why: "Ve stresu klesá schopnost plánovat. Předem napsaný plán nemusíme vymýšlet." },
    { q: "Co jsou záblesky (glimmers)?", o: ["Krátké momenty bezpečí či pohody, které trénují nervový systém vnímat bezpečí", "Spouštěče stresových reakcí", "Popírání problémů pozitivním myšlením"], c: 0, why: "Záblesky jsou protiváhou spouštěčů, ne růžové brýle." },
    { q: "Co je vhodné udělat, když na dítě vybouchnete?", o: ["Tvářit se, že se nic nestalo", "Situaci napravit: pojmenovat, omluvit se, obnovit kontakt", "Vysvětlit dítěti, že si za to mohlo samo"], c: 1, why: "Náprava vztahu je pro dítě silná zkušenost: chyby se dají napravit a vztah vydrží." },
    { q: "Jaký rozsah vzdělávání ukládá osobám pečujícím zákon o SPOD?", o: ["12 hodin ročně", "24 hodin během 12 po sobě jdoucích měsíců", "6 hodin za dva roky"], c: 1, why: "§ 47a zákona č. 359/1999 Sb.: 24 hodin během 12 po sobě jdoucích kalendářních měsíců." },
    { q: "Které číslo je Linka první psychické pomoci?", o: ["116 123", "116 111", "158"], c: 0, why: "116 123 je Linka první psychické pomoci pro dospělé. 116 111 je Linka bezpečí pro děti." }
  ]
});

window.COURSE.modules.push({
  id: "m8",
  short: "Závěrečný test a osvědčení",
  title: "Závěr: test, hodnocení kurzu a osvědčení",
  minutes: 15,
  final: true,
  goals: ["Ověříte si znalosti z celého kurzu.", "Ohodnotíte kurz.", "Získáte osvědčení o absolvování."],
  steps: [],
  quiz: null
});

window.COURSE.finalTest = [
  { q: "Co je hlavní funkcí stresové reakce?", o: ["Udělat nám v hlavě chaos", "Mobilizovat organismus a signalizovat, že je potřeba něco změnit", "Donutit nás sníst celou čokoládu na posezení"], c: 1, m: 1 },
  { q: "Ve které fázi Selyeho modelu tělo „jede na výkon“ a navenek vše zvládá?", o: ["Poplach", "Odolávání", "Vyčerpání"], c: 1, m: 1 },
  { q: "Proč je obraz „sklenice vody“ užitečný?", o: ["Ukazuje, že rozhoduje doba nesení zátěže a schopnost ji odkládat", "Ukazuje, že je třeba pít víc vody", "Ukazuje, že malá zátěž nevadí nikdy"], c: 0, m: 1 },
  { q: "Jak děti s traumatem často reagují na stres?", o: ["Jdou si v klidu postavit lego", "Mohou ztuhnout, být agresivní nebo utéct", "Začnou meditovat jako tibetští mniši"], c: 1, m: 2 },
  { q: "Dítě po zvýšení hlasu „zamrzne“ a je nápadně poslušné. Co to nejspíš znamená?", o: ["Pochopilo pravidlo", "Je v obranné reakci zamrznutí, tedy ve velké tísni", "Je unavené"], c: 1, m: 2 },
  { q: "Správné pořadí podle B. Perryho je:", o: ["rozum, vztah, zklidnění", "zklidnění, vztah, rozum", "vztah, zklidnění, rozum"], c: 1, m: 2 },
  { q: "Co platí o „žebříku nervového systému“?", o: ["Cílem je nikdy nespadnout dolů", "Cílem je umět se vracet nahoru; z vypnutí se jde přes aktivaci", "Platí jen pro děti"], c: 1, m: 3 },
  { q: "Co dělat, když vás zaměření na dech znervózňuje?", o: ["Vydržet za každou cenu", "Zvolit pohyb, chlad, zvuk nebo pozornost ven", "Dýchat rychleji"], c: 1, m: 3 },
  { q: "Co aktivuje dlouhý pomalý výdech?", o: ["Sympatikus (boj nebo útěk)", "Parasympatikus (odpočinek a trávení)", "Žaludek (reakce „mám hlad“)"], c: 1, m: 3 },
  { q: "Které tři složky má syndrom vyhoření podle Maslachové?", o: ["Vyčerpání, cynismus či odosobnění, snížený pocit účinnosti", "Hlad, žízeň, únava", "Smutek, vztek, strach"], c: 0, m: 4 },
  { q: "Jaká technika pomáhá převést pozornost do smyslů a přítomnosti?", o: ["Výkřik do polštáře", "Technika 5-4-3-2-1", "Psaní stížností na úřady, dokud stres nezmizí"], c: 1, m: 4 },
  { q: "Arugamama v Moritově terapii znamená:", o: ["Potlačit pocit a jednat", "Přijmout pocit, jak je, a přesto udělat, co je potřeba", "Vyčkat, až pocit zmizí, a teprve pak jednat"], c: 1, m: 4 },
  { q: "Co pomáhá dětem pojmenovat a regulovat emoce?", o: ["Hra „Emoční barometr“", "Přísná výchova ve vojenském stylu", "Přednáška o vývoji mozku"], c: 0, m: 5 },
  { q: "Bezpečné místo pro dítě:", o: ["slouží i jako místo pro „time-out“", "nikdy neslouží k trestu a dítě ho pomáhá vytvořit", "musí být vždy imaginární"], c: 1, m: 5 },
  { q: "Validace emocí znamená:", o: ["souhlasit se vším, co dítě udělá", "pojmenovat a uznat prožitek, hranice přitom platí dál", "nechat dítě, ať se vypláče samo"], c: 1, m: 5 },
  { q: "Jak lze omezit technostres u dětí?", o: ["Hodinu před spaním bez obrazovek a podporovat offline aktivity", "Koupit nový tablet, aby se lépe usínalo", "Nechat dítě na mobilu celý den, ono se samo odpojí"], c: 0, m: 6 },
  { q: "Pravidla pro technologie nejlépe fungují, když:", o: ["je určí dospělý bez vysvětlení", "jsou dohodnutá, napsaná a platí pro celou rodinu", "platí jen pro děti"], c: 1, m: 6 },
  { q: "Jaký je nejlepší dlouhodobý plán pro zvládání stresu?", o: ["Počkat, až stres sám zmizí", "Pravidelná sebepéče, reflexe, nástroje a podpora", "Každý měsíc dovolená na exotickém ostrově"], c: 1, m: 7 },
  { q: "Co jsou záblesky (glimmers)?", o: ["Krátké momenty bezpečí, které trénují vnímání bezpečí", "Spouštěče", "Optické klamy"], c: 0, m: 7 },
  { q: "Jak poznat, že se stres u pěstouna zlepšuje?", o: ["Na každé zakňourání nereaguje jako sopka a rychleji se vrací do klidu", "Už nikdy nic necítí", "Začal mluvit tibetsky a levitovat"], c: 0, m: 7 }
];

window.COURSE.evaluation = [
  { id: "e1", q: "Jak užitečný byl kurz pro vaši praxi?", type: "scale" },
  { id: "e2", q: "Jak srozumitelný byl obsah?", type: "scale" },
  { id: "e3", q: "Jak hodnotíte praktická cvičení?", type: "scale" },
  { id: "e4", q: "Co vám v kurzu nejvíc pomohlo?", type: "text" },
  { id: "e5", q: "Co byste v kurzu změnili nebo doplnili?", type: "text" }
];
