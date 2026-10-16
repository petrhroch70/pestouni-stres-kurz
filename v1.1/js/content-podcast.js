/* Podcast o zvládání stresu – rozhovory k lekcím kurzu.
   Mluvčí: klara (moderátorka, rodinná psycholožka), jan (psycholog), marek (pěstoun).
   Psáno pro mluvené slovo: krátké věty, bez zkratek a závorek.
   audioBase: adresa složky s předgenerovanými MP3 a index.json (tools/generate_audio.py).
   Může být relativní ("audio/") nebo na jiném serveru ("https://uzivatel.github.io/pestouni-stres-audio/").
   Repliky bez nahrávky čte syntéza řeči prohlížeče. */
window.PODCAST = {
  audioBase: "audio/",
  title: "o zvládání stresu",
  subtitle: "Rozhovory o stresu v pěstounské péči",
  speakers: { klara: "Klára", jan: "Jan", marek: "Marek", nar: "Radka" },
  episodes: [
    {
      id: "p0-1", mod: "m0", title: "Proč mluvit o stresu",
      lines: [
        ["klara", "Dobrý den, tady je podcast o zvládání stresu v pěstounské péči. Jmenuji se Klára, jsem rodinná psycholožka, a dnes je se mnou psycholog Jan. Ahoj, Honzo."],
        ["jan", "Ahoj, Kláro. A dobrý den všem, kdo posloucháte. Možná u žehlení, v autě, nebo konečně v klidu, když děti spí."],
        ["klara", "Honzo, proč vůbec dělat kurz o stresu pro pěstouny? Nestačilo by naučit je, jak zvládat náročné chování dětí?"],
        ["jan", "To by bylo jako učit řidiče jezdit v náledí a nikdy mu neříct, že má zkontrolovat brzdy. Pěstoun je hlavní nástroj péče. Když je vyčerpaný, nefunguje ani ta nejlepší technika."],
        ["klara", "Takže začínáme u dospělého, ne u dítěte."],
        ["jan", "Začínáme u obou. Děti v náhradní péči často zažily trauma, zanedbávání, nebo opakované ztráty blízkých lidí. Svůj příběh pak vyprávějí chováním. A to chování na pěstouna dopadá. Dnem i nocí. Bez konce směny."],
        ["klara", "Co si z kurzu mají posluchači odnést?"],
        ["jan", "Tři věci. Zaprvé porozumění. Co se při stresu děje v těle a v mozku, u nich i u dítěte. Zadruhé nástroje. Dech, práci s tělem, bezpečné místo, emoční barometr. A zatřetí plán. Jak poznat, že se blíží k hranici, a co udělat dřív, než se něco zlomí."],
        ["klara", "Já bych přidala jednu poznámku. Tohle není terapie. Je to vzdělávání. Když se při některé části budete cítit hůř, dejte si pauzu. A pokud zátěž trvá, obraťte se na doprovázející organizaci nebo na odborníka."],
        ["jan", "A ještě jedna věc. Některé techniky pracují s dechem. U lidí v dlouhodobém přetížení se stává, že když se zastaví a zaměří se dovnitř, přijde úzkost místo úlevy. To není chyba. Pak zkusíte variantu s pohybem nebo s pozorností ven."],
        ["klara", "Na začátku kurzu vás čeká Pěstounské zrcadlo. Krátký dotazník o tom, jak na tom teď jste. Na konci ho vyplníte znovu a porovnáte."],
        ["jan", "Není to test, ani diagnóza. Je to zrcadlo. A zrcadlo nehodnotí, jen ukazuje."],
        ["klara", "Tak pojďme na to. V příštím díle se podíváme na to, co stres vlastně je. Díky, Honzo."],
        ["jan", "Díky, Kláro. A díky vám, že posloucháte."]
      ]
    },
    {
      id: "p1-1", mod: "m1", title: "Stres jako kontrolka",
      lines: [
        ["klara", "Vítejte u další části podcastu o zvládání stresu. Dnes se ptáme na úplný základ. Co je stres? Honzo."],
        ["jan", "Stres je přirozená reakce organismu na zátěž. Mozek vyhodnotí situaci jako potenciálně nebezpečnou a tělo spustí poplašný systém. Zrychlí se tep, zrychlí se dech, napnou se svaly. Do krve se vyplaví adrenalin a kortizol."],
        ["klara", "To zní dramaticky."],
        ["jan", "Je to starý mechanismus. Měl jediný úkol, pomoct nám přežít, když nás honil medvěd. Jenže tělo nerozlišuje medvěda od telefonátu z úřadu. Reaguje podobně."],
        ["klara", "Marek, náš pěstoun, to kdysi popsal hezky. Řekl, že se cítí, jako by běžel maraton bez cílové pásky."],
        ["jan", "Přesně to je dlouhodobý stres. Krátký stres je v pořádku. Mobilizuje nás a pak přijde zotavení. Problém je, když zotavení nepřichází."],
        ["klara", "Často se používá obraz kontrolky v autě. Proč?"],
        ["jan", "Protože kontrolka neříká, že jste špatný řidič. Říká, že je potřeba zastavit a doplnit olej. Stres je signál. Ne selhání. A s kontrolkou můžete udělat dvě věci. Zastavit a podívat se pod kapotu. Nebo ji přelepit páskou a jet dál."],
        ["klara", "A pěstouni často lepí pásku."],
        ["jan", "Často. Protože není kdy zastavit. A tady pomáhá jeden starý model. Endokrinolog Hans Selye popsal reakci na dlouhodobou zátěž ve třech fázích."],
        ["klara", "Které to jsou?"],
        ["jan", "První je poplach. Tělo se zmobilizuje. Druhá je fáze odolávání. Organismus se přizpůsobí a jede na výkon. Navenek to vypadá, že je všechno v pořádku. A třetí je vyčerpání. Rezervy dojdou. Přichází nemoci, otupělost, vyhoření."],
        ["klara", "Ta prostřední fáze je zrádná, že?"],
        ["jan", "Velmi. Pěstoun v ní může žít měsíce i roky. Říká si, že to zvládá. A zvládá. Až do chvíle, kdy najednou ne."],
        ["klara", "Je rozdíl mezi dobrým a špatným stresem?"],
        ["jan", "Mluvíme o eustresu a distresu. Eustres nás aktivuje a pak přijde odpočinek. Třeba příprava na oslavu. Distres trvá příliš dlouho, je příliš silný, nebo nad ním nemáme žádnou kontrolu. Rozhodují tři věci. Jak dlouho to trvá. Jestli mám pocit kontroly. A jestli přichází zotavení."],
        ["klara", "Takže otázka pro posluchače na závěr. Kdy jste naposledy opravdu zastavili? Ne odpočívali s telefonem v ruce, ale zastavili."],
        ["jan", "A pokud si nevzpomenete, je to taky odpověď. Bez výčitek. Jen jako informace z kontrolky."]
      ]
    },
    {
      id: "p1-2", mod: "m1", title: "Odkud stres přichází a sklenice vody",
      lines: [
        ["klara", "V minulém díle jsme si řekli, co je stres. Dnes se podíváme, odkud přichází. Je tu se mnou Honza a pěstoun Marek. Ahoj, Marku."],
        ["marek", "Ahoj. Rád jsem tady. I když stres mám dost i bez podcastu."],
        ["jan", "Tak to jsi tu správně. Stresory můžeme rozdělit do čtyř skupin. Fyzikální, jako je nedostatek spánku, hluk nebo jídlo ve stoje. Úkolové, tedy terapie, lékaři, škola, výkazy. Myšlenkové. A sociální."],
        ["marek", "Úkolové znám. Jeden týden jsme měli psychologa, logopedii, třídní schůzku a kontrolu z OSPOD. K tomu práce."],
        ["klara", "A ty myšlenkové? Ty nejsou vidět."],
        ["jan", "Ty jsou nejzajímavější. Jsou to věty, které si říkáme. Musím to zvládnout sám. Dobrý pěstoun nekřičí. Všichni vidí, že to nezvládám. Tyhle věty zesilují všechny ostatní stresory."],
        ["marek", "To sedí. Když syn křičí v obchodě, horší než ten křik je pocit, že se na mě všichni dívají."],
        ["jan", "Přesně. Stejná situace má jinou váhu, když si řekneš, to je jeho trauma, zvládneme to. Než když si řekneš, selhávám."],
        ["klara", "Pěstounství má ještě jednu zvláštnost. Nemá konec směny."],
        ["jan", "Ano. Sdílí hodně s pomáhajícími profesemi. Odpovědnost, kontrolu zvenčí, malé ocenění. Ale zdravotní sestra jde po směně domů. Pěstoun je doma pořád."],
        ["klara", "Jak poznám, že mě stres už zatěžuje?"],
        ["jan", "Ve třech vrstvách. Tělo. Bolest hlavy, ztuhlá šíje, stažená čelist, žaludek. Pak emoce. Podrážděnost, úzkost, pocity viny. A chování. Horší spánek, přejídání, víc kávy, výbuchy, stahování se od lidí."],
        ["marek", "U mě je to čelist. Večer zjistím, že ji mám celý den zaťatou."],
        ["jan", "To je tvoje kontrolka. Čím dřív ji zahlédneš, tím snáz zasáhneš."],
        ["klara", "Já používám obraz sklenice vody. Vezměte do ruky sklenici. Chvíli ji držet není problém. Hodinu, začne to bolet. Celý den, ruka vypoví službu. A přitom váha sklenice se nezměnila."],
        ["marek", "Změnila se doba."],
        ["klara", "Ano. Klíčem není nedržet nic. Klíčem je umět sklenici občas odložit."],
        ["jan", "A jak ji odložit? Čtyři nástroje první volby. Dech, hlavně pomalý a s dlouhým výdechem. Pohyb, protože stresová reakce chystá tělo k pohybu. Mikropauzy, pět minut s čajem. A humor."],
        ["marek", "Humor funguje. Když se u večeře začneme smát, je po napětí."],
        ["jan", "Ještě krabicové dýchání. Nádech na čtyři doby, zadržet na čtyři, výdech na čtyři, zadržet na čtyři. Pětkrát dokola. Kdo nemá rád zadržování dechu, zkrátí ho nebo vynechá."],
        ["klara", "A úkol na příští dny. Jednou denně pět cyklů dýchání nebo pětiminutová pauza. Aspoň tři dny po sobě. Pravidelnost je důležitější než dokonalost."]
      ]
    },
    {
      id: "p2-1", mod: "m2", title: "Kouřový hlásič",
      lines: [
        ["klara", "Dnes se v Kontrolce přesouváme k dětem. Honzo, proč některé děti reagují na úplně obyčejné situace tak silně?"],
        ["jan", "Představ si kouřový hlásič, který se spustí pokaždé, když si připálíš toast. Takový poplašný systém mívají děti, které zažily trauma. Jejich mozek se vyvíjel v prostředí, kde nebezpečí bylo skutečné a nepředvídatelné."],
        ["klara", "A mozek se tomu přizpůsobil."],
        ["jan", "Ano. Naučil se, že je lepší sto falešných poplachů než jeden přehlédnutý. Pro přežití je to logické. Pro běžný život v bezpečné rodině je to vyčerpávající. Pro dítě i pro vás."],
        ["marek", "U nás to vypadá tak, že když zvýším hlas, syn se schová pod stůl. Jindy po mně hodí, co má v ruce."],
        ["jan", "Obojí je stejný alarm. Jen jiná obrana."],
        ["klara", "Na co děti nejčastěji reagují?"],
        ["jan", "Na zvýšený hlas, prudký pohyb, bouchnutí dveří. Na určitý pach, třeba alkohol, cigarety, parfém. Na změnu programu. Na přechody, třeba z hraní k jídlu. Na blízkost a dotek. A velmi často na kontakty s biologickou rodinou, výročí a narozeniny. A pozor, i na hlad a únavu."],
        ["klara", "Tomu říkáme spouštěče."],
        ["jan", "A spouštěč nemusí mít s původní událostí logickou souvislost. Tělo si pamatuje vjemy, ne příběh. Vůně, tón hlasu, světlo."],
        ["klara", "Máš příklad?"],
        ["jan", "Osmiletý chlapec, říkejme mu Adam. Při každém hlasitějším zvuku ztuhne a dívá se do zdi. Jeho tělo si pamatuje, jak otec křičel na matku. Jeho reakce není špatná. Kdysi mu pomáhala přežít. Cílem není ho trestat, ale pomoct mu cítit se bezpečně."],
        ["marek", "Jenže v tu chvíli to vypadá jako vzdor."],
        ["jan", "Proto pomáhá jedna otázka. Místo proč to dělá, se zeptat, co mi tím chováním říká. Za vztekem často bývá strach. Za lží stud nebo strach z trestu. Za odmítáním blízkosti zkušenost, že blízkost bolí."],
        ["klara", "Chování jako zpráva."],
        ["jan", "Ano. Neznamená to, že chování schvalujeme. Znamená to, že mu rozumíme. A když rozumíme, reagujeme jinak."],
        ["klara", "V dalším díle si řekneme, jak ty obranné reakce vypadají a co je okno tolerance."]
      ]
    },
    {
      id: "p2-2", mod: "m2", title: "Boj, útěk, zamrznutí a okno tolerance",
      lines: [
        ["klara", "Honzo, minule jsme mluvili o poplašném systému. Jaké podoby má ta obrana?"],
        ["jan", "Tři. Boj, útěk a zamrznutí. Boj je křik, kopání, kousání, ničení věcí, nadávky. Útěk je schovávání, utíkání, zamykání se, bolest břicha před návštěvou, nebo únik do telefonu."],
        ["klara", "A zamrznutí?"],
        ["jan", "Ztuhnutí, prázdný pohled, dítě nereaguje, mluví potichu nebo vůbec. Někdy vypadá jako nápadná poslušnost."],
        ["marek", "Tohle mě zarazilo. Myslel jsem, že když je dítě potichu, je v pohodě."],
        ["jan", "To je nejčastější omyl. Dítě, které křičí, nás zatěžuje, takže si ho všimneme. Dítě, které zamrzne, nás nezatěžuje. A proto ho snadno přehlédneme. Přitom bývá ve větší tísni."],
        ["klara", "Co každá z těch reakcí potřebuje?"],
        ["jan", "Při boji bezpečný prostor, málo slov, klidný hlas a ochranu sebe i ostatních. Při útěku dítě nepronásledovat, ale zůstat dostupný. Při zamrznutí jemný návrat do těla a do přítomnosti, a hlavně nevyžadovat odpovědi."],
        ["klara", "Teď pojem, který se mi v praxi velmi osvědčil. Okno tolerance."],
        ["jan", "Popsal ho psychiatr Daniel Siegel. Je to pásmo, ve kterém člověk zvládá emoce, přemýšlí a je ve vztahu. Nad oknem je hyperaktivace. Úzkost, vztek, panika, tedy boj a útěk. Pod oknem je hypoaktivace. Otupělost, odpojení, zamrznutí."],
        ["marek", "A uvnitř okna se dá mluvit."],
        ["jan", "Přesně. Uvnitř okna se dá domlouvat, učit, hrát si. Mimo okno ne. Děti s traumatem mají okno úzké. Stačí málo a jsou venku."],
        ["klara", "Dá se okno rozšířit?"],
        ["jan", "Dá. Pomalu. Bezpečnými vztahy a opakovanou zkušeností, že po bouři přijde klid. A platí to i pro dospělé. Vyčerpaný pěstoun má okno taky užší."],
        ["marek", "To vysvětluje, proč večer vybuchnu kvůli rozlitému mléku."],
        ["jan", "Ano. Nejde o mléko. Jde o to, kolik místa ti v okně ten den zbylo."],
        ["klara", "Shrnu to. Tři obranné reakce, boj, útěk, zamrznutí. Zamrznutí je nejméně nápadné. A okno tolerance je místo, kde se dá s dítětem i se sebou pracovat."]
      ]
    },
    {
      id: "p2-3", mod: "m2", title: "Nejdřív zklidnit, pak vztah, pak rozum",
      lines: [
        ["klara", "Dnes velmi praktický díl. Marku, popiš nám situaci, kterou jsi zažil."],
        ["marek", "U večeře jsem sedmiletému Kubovi řekl, že po jídle bude koupání. Zbledl, vyskočil, hodil hrnek na zem a křičel, nesahej na mě."],
        ["klara", "Co se ti honilo hlavou?"],
        ["marek", "Že takhle to nejde. Že hrnky se neházejí. Chtěl jsem mu to vysvětlit."],
        ["jan", "A tady je klíč. Dětský psychiatr Bruce Perry popsal pořadí tří kroků. Nejdřív zklidnit tělo. Potom navázat vztah. A teprve potom rozum. Anglicky regulate, relate, reason."],
        ["klara", "A nejčastější chyba je začít třetím krokem."],
        ["jan", "Ano. Vysvětlujeme, moralizujeme, vyjednáváme s dítětem, které je mimo okno tolerance. A ono nás neslyší. Ne proto, že nechce. Ale proto, že nemůže."],
        ["marek", "Takže co jsem měl udělat?"],
        ["jan", "Zůstat klidně. Snížit hlas a tempo. Třeba si dřepnout v bezpečné vzdálenosti, aby nebyl tak vysoko nad ním. A říct málo slov. Jsi v bezpečí. Nikdo na tebe nesáhne."],
        ["klara", "To je první krok, zklidnění."],
        ["jan", "Pak, až Kuba vydechne, přijde vztah. Vyděsilo tě to. Jsem tady. A teprve úplně nakonec rozum. Jak jinak udělat koupání. A ten hrnek uklidíme spolu."],
        ["marek", "A co kdybych ho chytil za ruce, aby nic dalšího nerozbil?"],
        ["jan", "U dítěte se zkušeností násilí může fyzické držení poplach výrazně zesílit. Fyzicky zasahujte, jen když hrozí bezprostřední zranění. A co nejjemněji."],
        ["klara", "Já přidám věty, které pomáhají. Místo uklidni se, říct jsem tady, jsi v bezpečí. Místo přestaň řvát, říct vidím, že jsi hodně naštvaný. Tón hlasu, rytmus dechu a vaše přítomnost jsou v tu chvíli důležitější než slova."],
        ["jan", "A pomáhá i dechová cesta. Hra pro děti. Jsme na lodi uprostřed oceánu. Nádech, vítr plní plachty. Krátké zadržení, delfíni skáčou kolem lodi. Dlouhý výdech, vítr odfoukne starosti do moře. Pětkrát dokola."],
        ["marek", "To zkusím. Kuba má rád delfíny."],
        ["jan", "A pamatuj, pravidelnost je důležitější než dokonalé provedení. Technika, kterou děláte každý večer nějak, pomůže víc než ta, kterou děláte dokonale jednou za měsíc."],
        ["klara", "A pozor na to, že totéž platí pro dospělé. Když jste mimo okno vy, nejdřív zklidnit sebe. Proto celý kurz začal u vašeho dechu."]
      ]
    },
    {
      id: "p3-1", mod: "m3", title: "Žebřík nervového systému",
      lines: [
        ["klara", "Vítejte u další části podcastu o zvládání stresu. Dnes o těle. Honzo, proč pořád začínáme tělem?"],
        ["jan", "Protože stresová reakce začíná v hlubokých, vývojově starých částech mozku. Ty nerozumí argumentům. Rozumí signálům z těla. Rytmu dechu, svalovému napětí, doteku, pohybu, tónu hlasu."],
        ["klara", "Proto věta uklidni se nefunguje."],
        ["jan", "Nefunguje. Ale pomalý výdech nebo houpání často ano."],
        ["marek", "Moje žena jednou při synově záchvatu vzteku začala dupat do rytmu s ním. Zasmál se a bylo po bouřce."],
        ["jan", "To je krásný příklad. Pohyb dal energii poplachu kam odtéct. A přepnul situaci z ohrožení do hry."],
        ["klara", "V praxi používám obraz žebříku se třemi příčkami. Honzo, popiš ho."],
        ["jan", "Vychází z polyvagální teorie Stephena Porgese. Pro praxi ji zpřístupnila terapeutka Deb Dana. Hned říkám, že neurofyziologické detaily té teorie jsou mezi odborníky sporné. Ale jako mapa prožívání je žebřík velmi užitečný."],
        ["klara", "Tak tu mapu."],
        ["jan", "Nahoře je bezpečí a spojení. Dech je klidný, jsem zvědavý, mám humor, slyším dítě, můžu přemýšlet. Uprostřed je poplach. Napětí, vztek, úzkost, nemůžu sedět, uklízím jako o život, křičím. A dole je zamrznutí a vypnutí. Otupělost, prázdnota, je mi to jedno, únava, která nejde vyspat."],
        ["marek", "Já jsem v neděli večer před školním týdnem vždycky uprostřed."],
        ["jan", "To je cenná informace. Když to víš, můžeš si na neděli večer naplánovat něco, co tě drží nahoře."],
        ["klara", "Co je na žebříku nejdůležitější?"],
        ["jan", "Dvě věci. Zaprvé, po žebříku se pohybuje každý. Cílem není nikdy nespadnout. To je biologicky nemožné. Cílem je umět se vracet nahoru. Rychleji a s menší námahou."],
        ["klara", "A zadruhé?"],
        ["jan", "Z dolní příčky se nejde rovnou nahoru. Člověk ve vypnutí nejdřív potřebuje trochu energie. Pohyb, chlad, hudbu, rytmus. Teprve pak klid. Říct někomu ve vypnutí, ať myslí pozitivně, nepomáhá."],
        ["klara", "A z toho plyne úleva od viny."],
        ["jan", "Ano. Vaše vyčerpání ani reakce dítěte nejsou vadou charakteru. Nejsou selháním lásky. Jsou to předvídatelné reakce nervového systému na zátěž."]
      ]
    },
    {
      id: "p3-2", mod: "m3", title: "Techniky do kapsy",
      lines: [
        ["klara", "Dnes v Kontrolce praktický díl. Techniky, které se vejdou do kapsy. Honzo, začni zemněním."],
        ["jan", "Zemnění vrací pozornost do přítomného okamžiku. Postavte se, ideálně bosýma nohama na zem. Nebo se posaďte a dejte chodidla celou plochou na podlahu. Vnímejte tlak pod nohama. Je podlaha teplá, nebo studená?"],
        ["klara", "A pak dech."],
        ["jan", "Nádech nosem na čtyři doby, krátké zadržení na dvě, výdech ústy na šest. A s každým výdechem si představte, jak napětí odtéká z ramen přes nohy do země. Na konci otevřete oči a pojmenujte tři věci, které vidíte, a jeden zvuk, který slyšíte."],
        ["marek", "A pro děti?"],
        ["jan", "Představ si, že jsi strom. Z chodidel ti rostou kořeny hluboko do země. Vítr může foukat, ale ty stojíš pevně. Můžete se spolu kývat ve větru a pak zase zpevnit."],
        ["klara", "Druhá technika. Cyklický povzdech."],
        ["jan", "Dva nádechy nosem za sebou. První dlouhý, druhý krátký, dobírající. Pak dlouhý pomalý výdech ústy. Jednu až pět minut. Studie ze Stanfordské univerzity z roku dva tisíce dvacet tři zjistila, že pět minut denně tohoto dýchání zlepšovalo náladu o něco víc než krátká meditace. Je to jedna studie s menším vzorkem, takže opatrně. Ale stojí za vyzkoušení."],
        ["klara", "Třetí technika je moje oblíbená. Motýlí objetí."],
        ["jan", "Zkřižte ruce na hrudi, dlaně pod klíčními kostmi. A střídavě lehce poklepávejte levou a pravou dlaní. Pomalu, asi jednou za sekundu. Minutu nebo dvě. Technika vznikla v Mexiku při práci s dětmi po přírodní katastrofě."],
        ["marek", "To se dá dělat i na záchodě po telefonátu s OSPOD."],
        ["jan", "Přesně tak. Nenápadně a kdekoli. A zvládnou ji i děti."],
        ["klara", "Co když člověku dech nesedí?"],
        ["jan", "Pak studená voda na zápěstí nebo na obličej. Rychlá chůze, schody, deset dřepů. Broukání nebo zpívání, to přirozeně prodlužuje výdech. Nebo pozornost ven. Najděte v místnosti pět modrých věcí."],
        ["klara", "A hry s tělem pro děti?"],
        ["jan", "Země a moře. Na koberci dupeme, na modré dece tleskáme. Na zvířátka, skákat jako žába, plazit se jako had. Semafor, na zelenou běháme, na oranžovou po špičkách, na červenou jsme socha. A balónek na břiše. Dítě leží, má na břiše plyšáka a uspává ho pomalým dechem."],
        ["klara", "A jedno upozornění na závěr. Dotek a blízkost jsou nabídka, ne povinnost. U dětí se zkušeností zneužívání buďte zvlášť citliví. A ptejte se."]
      ]
    },
    {
      id: "p4-1", mod: "m4", title: "Mozek pod tlakem",
      lines: [
        ["klara", "Dnes se v Kontrolce otáčíme k vám, k pěstounům. Marku, ty jsi kdysi řekl, že na vlastní stres zapomínáš."],
        ["marek", "Pořád. A pak mě to složí. Většinou v nejhorší chvíli."],
        ["jan", "Představ si auto, které jede pořád na rezervu. Jednou zastaví. A obvykle tam, kde to nejméně potřebuješ. Sebepéče je pravidelné tankování."],
        ["klara", "Co se děje v mozku, když jsme ve stresu?"],
        ["jan", "Zjednodušeně. Amygdala je náš poplašný systém. Vyhodnocuje nebezpečí a spouští alarm. Prefrontální kůra má na starost rozvahu, plánování a sebekontrolu. Při silném stresu její vliv slábne. Proto jsme pod tlakem impulzivnější."],
        ["marek", "Takže když jsem pod tlakem, opravdu nemůžu jasně myslet."],
        ["jan", "Ano. A proto techniky trénujeme předem. Aby fungovaly i bez přemýšlení. Jako hasič, který cvičí, když nehoří."],
        ["klara", "A protiváha?"],
        ["jan", "Parasympatikus. Systém odpočinku a trávení. Říká tělu, poplach skončil. Zapínáme ho pomalým dechem s dlouhým výdechem, bezpečným kontaktem s lidmi, odpočinkem a spánkem."],
        ["klara", "Často slyšíme, že mozek se dá přeprogramovat."],
        ["jan", "Mozek je plastický. Mění se tím, co opakovaně děláme. Ale buďme poctiví. Pět minut dýchání týden nepřeprogramuje mozek. Pravidelný trénink ale postupně usnadňuje návrat do klidu. Opakování má smysl."],
        ["marek", "Jedna pěstounka u nás ve skupině říkala, že se pořád rozčílí, ale rychleji se vrátí."],
        ["jan", "To je přesně ten cíl. Ne nerozčilovat se. Rychleji se vracet."],
        ["klara", "Pěstouni si často říkají, že si nemůžou dovolit myslet na sebe."],
        ["jan", "Realita je opačná. Čím víc se staráte o své duševní zdraví, tím lepší jste rodič. A děti se učí z toho, co vidí. Když vidí, že umíte nastavit hranice a postarat se o sebe, učí se to taky."],
        ["klara", "Já říkám, chcete-li být pro děti studánkou, musíte mít vodu. A ta voda by měla být čistá."]
      ]
    },
    {
      id: "p4-2", mod: "m4", title: "Vyhoření: pět fází",
      lines: [
        ["klara", "Dnešní téma je vážné. Syndrom vyhoření. Honzo, co to je?"],
        ["jan", "Stav emočního, kognitivního a často i tělesného vyčerpání. Vzniká z dlouhodobého stresu, typicky v práci s lidmi. Psycholožka Christina Maslachová popsala tři složky. Emoční vyčerpání, tedy už nemám co dát. Odosobnění a cynismus, je mi to jedno. A snížený pocit vlastní účinnosti, stejně to nemá smysl."],
        ["klara", "Pěstouni patří mezi ohrožené skupiny."],
        ["jan", "Vedle zdravotníků, učitelů, sociálních pracovníků. A s tím rozdílem, že jejich zátěž nekončí odchodem z práce."],
        ["klara", "Popisuje se pět fází. Projdeme je?"],
        ["jan", "První je nadšení. Velké ideály, velké nasazení. Pěstounství je hlavní náplní života. Vlastní potřeby jdou stranou."],
        ["marek", "To jsem byl já první rok."],
        ["jan", "Druhá je stagnace. Výsledky neodpovídají představám. Přichází zklamání a nasazení polevuje. Třetí je frustrace. Negativní myšlení, problémy se spánkem a soustředěním, víc konfliktů. S dítětem, s OSPOD, s partnerem."],
        ["klara", "A tady se ještě dá hodně změnit."],
        ["jan", "Ano, to je kritický bod. Čtvrtá je apatie. Dělám jen to nutné. K ostatním jsem odměřený. Děti mě spíš obtěžují. A pátá je vyhoření. Úplné vyčerpání, ztráta smyslu, cynismus."],
        ["klara", "Jak poznat, že se člověk blíží k hranici?"],
        ["jan", "Jeden zrádný znak. Aktivita roste, ale výsledky ne. Člověk dělá víc a víc a cítí se hůř a hůř."],
        ["marek", "Co když je někdo ve fázi apatie?"],
        ["jan", "Tam už samotná vůle nestačí. Je potřeba odborná pomoc a odlehčení. Respitní péče. Není to selhání. Je to nutnost. A pokud by kdokoli z posluchačů měl myšlenky na sebepoškození, volejte Linku první psychické pomoci, sto šestnáct sto dvacet tři. V ohrožení života sto padesát pět nebo sto dvanáct."],
        ["klara", "Ještě zmíním únavu ze soucitu."],
        ["jan", "Charles Figley tak nazval stav, kdy člověk dlouhodobě pečující o lidi s traumatem nese část jejich tíhy. Dotěrné obrazy z příběhu dítěte, podrážděnost, pocit ohrožení. Není to slabost. Je to cena za empatii."],
        ["klara", "A poslední myšlenka. Vyhoření není jen osobní selhání. Část příčin je v systému. Málo ocenění, nedostatek odlehčovací péče, administrativa. Na systémové příčiny je správná odpověď žádat podporu. Ne se snažit ještě víc."]
      ]
    },
    {
      id: "p4-3", mod: "m4", title: "Arugamama a malé rituály",
      lines: [
        ["klara", "Dnes v Kontrolce trochu z Japonska. Honzo, co je arugamama?"],
        ["jan", "Japonská Moritova terapie vznikla na začátku dvacátého století. Pracuje s postojem arugamama. Přijmout věci, jak jsou. Úzkost, vztek ani únavu se nesnažíme vypnout. Necháme je být. A přesto uděláme, co je teď potřeba."],
        ["marek", "To se mi líbí. Já se vždycky snažím nejdřív uklidnit, a když to nejde, zlobím se na sebe ještě víc."],
        ["jan", "A to je past. Pro pěstouny může být úlevná věta, nemusím se cítit klidně, abych mohl jednat klidně."],
        ["klara", "Pojďme k drobnostem na každý den. Co doporučuješ?"],
        ["jan", "Ranní rituál. Dvě až pět minut, než začne provoz. Dech, protažení, sklenice vody a jedna věta pro sebe. Třeba, dneska stačí, když budu dost dobrý."],
        ["klara", "Mikropauzy."],
        ["jan", "Každou hodinu nebo dvě minutu až dvě. Tři dlouhé výdechy, protáhnout se, podívat se z okna do dálky."],
        ["marek", "A deník vděčnosti? Mně to vždycky přišlo trochu sladké."],
        ["jan", "Rozumím. Ale je to trénink, ne sladkost. Mozek má sklon pamatovat si hlavně hrozby. Večer si zapsat tři věci, které se povedly, je protiváha. Nemusí to být nic velkého. Syn snědl polévku. Bez křiku."],
        ["klara", "Rituál vypnutí dne."],
        ["jan", "Zapsat si, co zůstalo otevřené, a vědomě to na noc odložit. Řeším zítra v devět. A hranice. Jedna věc týdně, které řeknete ne. Nebo teď ne."],
        ["klara", "A technika pět, čtyři, tři, dva, jedna."],
        ["jan", "Když vás zaplavuje úzkost nebo vztek, přesuňte pozornost do smyslů. Pět věcí, které vidíte. Čtyři zvuky, které slyšíte. Tři věci, kterých se dotýkáte. Dvě vůně. Jedna chuť. Je to kotva v přítomnosti."],
        ["marek", "Jeden pěstoun říkal, že si při tom uvědomil zpěv ptáků. A najednou byl klidnější."],
        ["jan", "A nevěděl, jak byl předtím napjatý. Přesně tak to funguje."],
        ["klara", "Nemusíte dělat všechno. Vyberte si dvě věci, které jsou realistické. Lepší pět minut denně než hodina jednou za měsíc."]
      ]
    },
    {
      id: "p5-1", mod: "m5", title: "Bezpečné místo a emoční barometr",
      lines: [
        ["klara", "Vítejte u další části podcastu o zvládání stresu. Dnes nástroje pro děti. Marku, co u vás nefunguje?"],
        ["marek", "Říkat uklidni se. Nefunguje nikdy."],
        ["jan", "Protože seberegulaci se děti neučí slovy. Učí se ji zkušeností. Opakovaně zažívají, že zklidnění je možné."],
        ["klara", "Začněme bezpečným místem."],
        ["jan", "Má dvě podoby. Vnější je koutek v bytě. Stan z deky, polštáře, měkká hračka, tlumené světlo, sluchátka s oblíbenou hudbou. Tři pravidla. Nikdy to není místo trestu. Dítě tam smí kdykoli a samo. A vytváříte ho spolu. Dítě vybírá barvy, věci i jméno. Jeskyně, hnízdo, kosmická loď."],
        ["marek", "My jsme postavili bunkr. Syn tam teď sám řekne, jdu do svého bunkru."],
        ["jan", "To je přesně ono. A vnitřní bezpečné místo je představa. Pláž, les, pokojík. Dítě si ho nosí s sebou. Zapojíme smysly, co tam vidí, slyší, jak to tam voní. A vytvoříme kotvu. Slovo nebo gesto, třeba dlaň na srdce a slovo klid."],
        ["klara", "A kotvu trénujeme v klidu."],
        ["jan", "Ano. V poplachu se nové věci neučí. Nejdřív v pohodě, pak v těžké chvíli. A jedno upozornění. U dětí s těžkým traumatem může představa bezpečného místa vyvolat úzkost, protože žádné nezažily. Pak začněte vnějším koutkem a konkrétními předměty."],
        ["klara", "Teď emoční barometr."],
        ["jan", "Nakreslete s dítětem stupnici od jedné do deseti. Od klidu po výbuch. Každý stupeň jinou barvou. Menším dětem stačí tři barvy nebo obličejíčky. Pojmenujte stupně jeho slovy. Na dvojce jsem v pohodě, na osmičce už křičím."],
        ["marek", "A pak?"],
        ["jan", "Najděte, co pomáhá na kterém stupni. Když jsem na osmičce, pomáhá mi dupat a mačkat polštář. A používejte to. Kde jsi teď na barometru? Stačí ukázat prstem. Nemusí mluvit."],
        ["klara", "A hrajte to i za sebe."],
        ["jan", "To je nejdůležitější. Já jsem teď na šestce, potřebuju se napít vody a třikrát vydechnout. Tím dítěti ukazujete, jak se to dělá."],
        ["marek", "Jeden kluk ve skupině prý řekl, když jsem na desítce, pomáhá mi dupat. A začal dupat místo křiku."],
        ["klara", "Úkol pro posluchače. Nakreslete s dítětem barometr, pověste ho na lednici a jednou denně se k němu vraťte."]
      ]
    },
    {
      id: "p5-2", mod: "m5", title: "PACE a validace",
      lines: [
        ["klara", "Dnes o postoji. Ne o technice, ale o tom, jak být s dítětem. Honzo, co je PACE?"],
        ["jan", "Popsal ho psycholog Dan Hughes, který se dlouhodobě věnuje dětem v náhradní péči. Čtyři písmena. Hravost. Přijetí. Zvědavost. Empatie."],
        ["klara", "Rozvedeš je?"],
        ["jan", "Hravost je lehkost a humor, kde to jde. Přijetí znamená, že přijímám prožitek dítěte. Strach, vztek, smutek. I když nepřijímám jeho chování. Zvědavost je otázka, zajímalo by mě, co se ti v tu chvíli honilo hlavou. Místo proč jsi to udělal. A empatie, to muselo být hrozně těžké."],
        ["marek", "Ta zvědavost je těžká. Proč jsi to udělal mi z pusy vyletí samo."],
        ["jan", "To má každý. Proč zní jako obvinění. Dítě se brání. Zajímalo by mě zní jako pozvání."],
        ["klara", "Teď validace. Dáme pár příkladů?"],
        ["jan", "Místo přestaň řvát, vidím, že jsi hodně naštvaný, jsem tady. Místo vždyť se nic nestalo, tebe to hodně vyděsilo. Místo kluci nebrečí, je ti smutno a to je v pořádku. A místo jdi do pokoje, dokud se neuklidníš, pojď, sedneme si spolu, než to přejde."],
        ["klara", "Tomu poslednímu se říká time in místo time out."],
        ["marek", "A co pravidla? Nerozmazlím ho tím?"],
        ["jan", "Validace neznamená souhlas. Pravidla platí dál. Chápu, že máš vztek. Bít se ale nesmí. Pojď, zkusíme dupat. Hranice se lépe přijímají ve vztahu, kde se dítě cítí pochopené."],
        ["klara", "A rituály."],
        ["jan", "Stejný sled večerních činností. Koupel, pohádka, světýlko, věta na dobrou noc. Obrázkový rozvrh pro menší děti. Ohlašovat změny předem, za deset minut končíme. A rituál před a po kontaktu s biologickou rodinou. Co si vezmu s sebou a co spolu uděláme, až se vrátím."],
        ["marek", "Tohle poslední nás hodně podrželo. Po návštěvách byl syn vždycky rozbitý. Teď máme po návštěvě palačinky a deku na gauči."],
        ["jan", "Předvídatelnost snižuje stres. A palačinky taky."]
      ]
    },
    {
      id: "p6-1", mod: "m6", title: "Vedle sebe, ne proti sobě",
      lines: [
        ["klara", "Dnes v Kontrolce o společném čase. Marku, s čím přicházíš?"],
        ["marek", "Zkoušíme všechno možné, a pořád mám pocit, že si nejsme se synem úplně blízcí."],
        ["jan", "Blízkost a důvěru nejlépe budují společné zážitky. Děti se často vyjadřují líp hrou, tvořením nebo pohybem než rozhovorem o emocích. Zapamatují si hlavně to, jak se s vámi cítí."],
        ["klara", "A mluví nejlíp mimochodem."],
        ["jan", "Ano. Při vaření, v autě, při kutění. Vedle sebe, ne proti sobě. Rozhovor tváří v tvář může být pro dítě ohrožující. Společná činnost snižuje tlak."],
        ["klara", "Co podle věku?"],
        ["jan", "U předškoláků hra na zvířátka, pohádky o emocích, malování. Jak se asi cítila kůzlátka, když slyšela vlka? U školáků deskové hry, společný projekt jako krmítko nebo zahrádka, kolo a výlety. U dospívajících vaření, hudba a rovnocenná diskuse. Poslouchat jejich hudbu se zájmem a bez hodnocení."],
        ["marek", "To bez hodnocení je těžké."],
        ["jan", "Já vím. Ale vyplatí se. A vždy jako nabídka, ne povinnost."],
        ["klara", "Mám ráda příklady od dětí. Jedna čtyřletá holčička řekla, když skáču jako žába, zapomínám, že jsem se bála. A patnáctiletá dívka, když vaříme, můžeme si povídat o všem."],
        ["jan", "A příroda. Japonci mají pojem šinrin joku, lesní koupel. Norové mají friluftsliv, život pod širým nebem jako běžnou součást rodiny. Výzkumy naznačují, že pobyt v zeleni snižuje prožívaný stres."],
        ["klara", "Prakticky?"],
        ["jan", "Chodit ven. Pravidelně. Bez výkonu. Nemusí to být túra na Sněžku. Stačí park a kaluže."]
      ]
    },
    {
      id: "p6-2", mod: "m6", title: "Technostres",
      lines: [
        ["klara", "Dnes téma, které řeší skoro každá rodina. Obrazovky. Honzo, co je technostres?"],
        ["jan", "Stres spojený s technologiemi. U dětí se projevuje úzkostí, podrážděností, horším spánkem a soustředěním. Srovnáváním se s ostatními. A konflikty kvůli vypínání."],
        ["marek", "Ty konflikty znám. Vypnutí tabletu je u nás válka."],
        ["jan", "U dětí s traumatem bývá obrazovka i únikovou cestou. Útěkem z nepříjemných pocitů. Když ji prudce vezmete, berete dítěti jediný známý způsob úlevy. Proto postupně a s náhradou."],
        ["klara", "Jaká jsou doporučení podle věku?"],
        ["jan", "Světová zdravotnická organizace v roce dva tisíce devatenáct doporučila. Do dvou let žádný pasivní čas u obrazovky. Výjimkou jsou videohovory s blízkými. Od dvou do čtyř let nejvýš hodinu denně. A méně je lépe."],
        ["klara", "A školáci?"],
        ["jan", "Jasná pravidla a ostrůvky bez telefonu. U jídla bez mobilů. Ložnice bez mobilů. Osvědčuje se vyvažovat čas u obrazovky aspoň stejným časem pohybu. A podporovat čtení z papírových knih."],
        ["marek", "A puberťáci?"],
        ["jan", "Opakované otevřené rozhovory. O srovnávání na sítích, o tom, jak jsou aplikace navržené, aby nás udržely, o kyberšikaně, o sdílení fotek. A společně dohodnuté chvíle bez sítí. Třeba neděle."],
        ["klara", "Co funguje nejlíp?"],
        ["jan", "Dohoda místo zákazu. Když děti rozumí důvodům, snáz pravidla přijmou. A když je pomáhají tvořit, ještě snáz. A pravidla musí platit pro celou rodinu."],
        ["marek", "To je ten háček."],
        ["klara", "Je. Děti nás pozorují. Kolikrát denně se díváme do telefonu my? Jedno pravidlo, které pomáhá všem. Hodinu před spaním žádné obrazovky. A telefony se nabíjejí mimo ložnici. I ten náš."],
        ["jan", "Jeden pěstoun zavedl, před spaním žádné telefony. Jeho devítiletý syn začal lépe usínat a byl méně podrážděný. Žádný zázrak. Jen spánek."]
      ]
    },
    {
      id: "p7-1", mod: "m7", title: "Plán, záblesky a krizový plán",
      lines: [
        ["klara", "Blížíme se ke konci. Marku, co tě teď trápí?"],
        ["marek", "Teď jsem motivovaný. Ale co když za měsíc sklouznu do starých kolejí?"],
        ["jan", "To je normální. Změna není sprint, ale maraton. Pomáhá jednoduchý plán ve čtyřech krocích. Znát své spouštěče. Mít krabici s nástroji, dvě tři techniky pro sebe a pár aktivit pro děti. Jednou týdně se na deset minut zastavit a ohlédnout. Co pomohlo, co udělat jinak. A mít podporu."],
        ["marek", "A když přijde špatný týden a já vybouchnu?"],
        ["jan", "To se stane každému. Jde o to umět se vrátit. A po výbuchu je možná náprava. Křičel jsem. To nebylo v pořádku. Mrzí mě to. Pro dítě s traumatem je to silná zkušenost. Chyby se dají napravit a vztah vydrží."],
        ["klara", "Teď koncept záblesků."],
        ["jan", "Pěstouni obvykle velmi dobře znají své spouštěče. Ale neustálé hlídání hrozeb drží nervový systém v pohotovosti. Deb Dana navrhla protiváhu. Záblesky. Krátké momenty bezpečí nebo pohody, často jen na půl minuty. Vůně kávy. Teplý ručník ze sušičky. Úsměv prodavačky."],
        ["marek", "Nejsou to růžové brýle?"],
        ["jan", "Nejsou. Nikdo netvrdí, že dny nejsou těžké. Mozek má vrozený sklon pamatovat si hrozby. Sbírání záblesků je trénink, který učí všímat si i drobných dávek bezpečí. A klíčové je všimnout si, co udělalo tělo. Povolila ramena. Prohloubil se dech."],
        ["klara", "A krizový plán."],
        ["jan", "Píše se v době míru. Protože v krizi se rozvaha vypíná. Pět kroků první pomoci. Zastavím se a pojmenuji emoci. Tři dlouhé výdechy. Studená voda. Pokud je to bezpečné, na chvíli odejdu a řeknu, vrátím se za dvě minuty. A záchranné lano. Jméno a telefon člověka, kterému zavolám."],
        ["klara", "A pak doplňování nádoby."],
        ["jan", "Konkrétní aktivita s konkrétním termínem. A kdo pohlídá děti. Ne pokud zbude čas. To nikdy nezbude."],
        ["klara", "A mantra pro těžké dny. Krátká věta. Dělám to nejlepší, co umím. Nebo, i tohle přejde."]
      ]
    },
    {
      id: "p7-2", mod: "m7", title: "Kde hledat podporu a strom ve větru",
      lines: [
        ["klara", "Poslední díl podcastu o zvládání stresu. Honzo, kde mají pěstouni hledat podporu?"],
        ["jan", "Na prvním místě u doprovázející organizace. Zákon o sociálně právní ochraně dětí, paragraf čtyřicet sedm a, dává osobám pečujícím několik práv. Například na zajištění osobní péče o dítě, pokud je mu aspoň dva roky, v rozsahu nejméně čtrnácti dnů v roce. Na zprostředkování odborné pomoci, psychologické a terapeutické. A na vzdělávání."],
        ["klara", "A povinnosti?"],
        ["jan", "Mimo jiné vzdělávat se dvacet čtyři hodin během dvanácti měsíců. Tenhle kurz může být součástí. O započtení rozhoduje doprovázející organizace. A konkrétní podobu nároků si ověřte, zákony se mění."],
        ["marek", "Já jsem dlouho nevěděl, že na odlehčení mám nárok. Myslel jsem, že by to vypadalo, že to nezvládám."],
        ["klara", "To slyším často. Říct si o pomoc není slabost. Je to klíčová dovednost. Děti potřebují rodiče, kteří jsou v pohodě. Ne vyčerpané na pokraji sil."],
        ["jan", "Další možnosti jsou podpůrné skupiny pěstounů, místní i online. Psycholog nebo psychoterapeut. Supervize, pokud ji organizace nabízí. A praktický lékař, když se přidávají tělesné potíže."],
        ["klara", "A kontakty pro těžké chvíle."],
        ["jan", "Linka první psychické pomoci, sto šestnáct sto dvacet tři. Nonstop a zdarma. Rodičovská linka, šest set šest, nula dvacet jedna, nula dvacet jedna. Linka bezpečí pro děti, sto šestnáct sto jedenáct. A v ohrožení života sto padesát pět nebo sto dvanáct."],
        ["marek", "Mně celý tenhle kurz připomíná péči o zahradu. Když se o ni nestaráte, zaroste."],
        ["jan", "A když pečujete o sebe i o děti, vztahy rozkvetou. A trny k tomu patří."],
        ["klara", "Na závěr jeden příběh. V jedné zahradě rostl strom, který se při každém větru třásl strachy. Zahradník mu řekl, nemusíš s větrem bojovat. Nauč se s ním tančit. Strom to zkusil. Když vítr foukal, hýbal větvemi do rytmu. A zjistil, že ho vítr nezlomí, když se nebrání a pevně drží kořeny."],
        ["jan", "Stres nezmizí. Ale můžete se naučit v něm stát a hýbat se s ním."],
        ["klara", "Děkujeme, že jste poslouchali podcast o zvládání stresu. Honzo, Marku, díky."],
        ["marek", "Díky. A držte se. Pevně, ale pružně."],
        ["jan", "A až se vám rozsvítí kontrolka, zastavte. Nepřelepujte ji páskou."]
      ]
    }
  ]
};
