/* Poznámky k textům lekcí.
   „Po lopatě“: jednoduché vysvětlení prostým jazykem, s příměry a příklady (je otevřené a předčítá se).
   „Odborná poznámka“: odbornější výklad, citace a odkazy na zdroje (je sbalená a nepředčítá se).
   Načítá se po content-4.js. */
(function () {
  var C = window.COURSE;
  function mod(id) { for (var i = 0; i < C.modules.length; i++) if (C.modules[i].id === id) return C.modules[i]; }
  function lop(html) { return '<details class="nota nota-lop" open><summary><span class="nota-chip">Po lopatě</span> Jednoduše řečeno</summary><div class="nota-body">' + html + '</div></details>'; }
  function odb(html) { return '<details class="nota nota-odb"><summary><span class="nota-chip">Odborná poznámka</span> Zdroje a souvislosti</summary><div class="nota-body">' + html + '</div></details>'; }
  function refs(arr) { return '<ul>' + arr.map(function (r) { return '<li>' + r + '</li>'; }).join("") + '</ul>'; }
  function add(modId, key, notes) {
    var m = mod(modId), hit = null;
    m.steps.forEach(function (s) { if (s.type === "text" && s.title && s.title.indexOf(key) === 0) hit = s; });
    if (!hit) throw new Error("content-notes: krok nenalezen: " + modId + " / " + key);
    hit.html += notes;
  }

  /* ---------- Úvod ---------- */
  add("m0", "Vítejte v kurzu", lop(
    '<p>Pěstounství je maraton, ne sprint. Tenhle kurz je spíš krabice s nářadím než přednáška. Nemusíte ho umět všechen. Vyberte si dvě tři věci, které sednou vám a vašemu dítěti, a ty zkoušejte pořád dokola. Jako s kladivem: nemusíte mít celý sklep nářadí, ale musíte vědět, kam sáhnout, když něco spadne.</p>'));
  add("m0", "Než začnete", lop(
    '<p>Nic z toho, co tu najdete, neumí „opravit“ dítě ani vás. Je to souprava pomůcek, jak se dostat z ostrých situací do klidu. A kdybyste z nějaké věci dostali pocit, že je vám hůř, nic se neděje: přestaňte a vezměte to jinou cestou.</p>'));

  /* ---------- Lekce 1 ---------- */
  add("m1", "Co je stres doopravdy", lop(
    '<p>Stres je hasičský poplach pro tělo. Když zazvoní, tělo se rozeběhne: zrychlí tep, napne svaly. To je dobře, pokud hoří. Špatně je, když poplach zní celý den a nikdo ho nevypne. Typický příklad: syn vybuchne vzteky, vám buší srdce a tuhnou zuby. Tělo se připravuje bránit se, i když „nebezpečí“ je jen velký hluk v obýváku.</p>') +
    odb('<p>Pojem stresu do biologie zavedl Hans Selye popisem <em>obecného adaptačního syndromu</em> (poplach, odolávání, vyčerpání). Lazarus a Folkmanová později zdůraznili, že stres není vlastností podnětu, ale vztahem člověka a situace: rozhoduje <em>hodnocení</em> (appraisal) a <em>zvládání</em> (coping). McEwen zavedl pojem <em>allostatické zátěže</em>: „opotřebení“ vzniká, když stresové systémy běží příliš dlouho nebo se nevypnou.</p>' +
      refs(['Selye, H. (1936). A syndrome produced by diverse nocuous agents. <em>Nature</em>, 138, 32.',
        'Lazarus, R. S., Folkman, S. (1984). <em>Stress, Appraisal, and Coping</em>. New York: Springer.',
        'McEwen, B. S. (1998). Protective and damaging effects of stress mediators. <em>New England Journal of Medicine</em>, 338(3), 171–179.',
        'Křivohlavý, J. (1994). <em>Jak zvládat stres</em>. Praha: Grada.'])));
  add("m1", "Tři mýty o stresu", lop(
    '<p>Sval roste, když zvedáte závaží, které zvládnete, a když stojí vedle vás někdo, kdo vás jistí. Neroste, když mu závaží celé odebereme, ani když na něj hodíme tunu. Totéž je s dětmi a stresem: ne vata, ne hození do vody, ale závaží na míru a jistič vedle.</p>') +
    odb('<p>Rozlišení <em>eustresu</em> a <em>distresu</em> pochází od Selyeho. Je ale odborně sporné: Le Fevre a spol. upozornili, že původní pojem se v praxi rozmělnil a „dobrý stres“ se obvykle redukuje na výkonnostní křivku. Pro pěstouna je podstatnější praktické pravidlo „záleží na dávce, délce a opoře“. Radostné životní události mohou zátěž zvyšovat podobně jako negativní (Holmes, Rahe). Americká pediatrická akademie rozlišuje pozitivní, <em>tolerovatelný</em> a <em>toxický</em> stres: rozhoduje přítomnost podporujícího dospělého, který zátěž tlumí (Shonkoff, Garner).</p>' +
      refs(['Le Fevre, M., Matheny, J., Kolt, G. S. (2003). Eustress, distress, and interpretation in occupational stress. <em>Journal of Managerial Psychology</em>, 18(7), 726–744.',
        'Holmes, T. H., Rahe, R. H. (1967). The Social Readjustment Rating Scale. <em>Journal of Psychosomatic Research</em>, 11(2), 213–218.',
        'Shonkoff, J. P., Garner, A. S. a kol. (2012). The lifelong effects of early childhood adversity and toxic stress. <em>Pediatrics</em>, 129(1), e232–e246.'])));
  add("m1", "Odkud stres přichází", lop(
    '<p>Stresory jsou kapky do kbelíku. Jedna kapka nevadí, ale kbelík se plní: noční vstávání, papíry, škola, kontakty, vaše vlastní „musím to zvládnout“. Když přeteče, nepřeteče kvůli poslední kapce, ale kvůli všem dohromady. Proto má smysl vědět, odkud kape, a ne se zlobit na tu poslední.</p>') +
    odb('<p>Teorie <em>zachování zdrojů</em> (COR) tvrdí, že stres vzniká při ohrožení nebo ztrátě zdrojů, které si cením (čas, zdraví, vztahy, jistota). Pěstouni ztrácejí zejména čas a energii a zároveň nesou závazek bez „konce směny“. Rozdělení stresorů na fyzikálně-chemické, úkolové, myšlenkové a sociální je přehledné pracovní schéma; v literatuře existují i jiná členění.</p>' +
      refs(['Hobfoll, S. E. (1989). Conservation of resources: a new attempt at conceptualizing stress. <em>American Psychologist</em>, 44(3), 513–524.',
        'Křivohlavý, J. (1994). <em>Jak zvládat stres</em>. Praha: Grada.'])));
  add("m1", "Jak stres ovlivňuje tělo", lop(
    '<p>Tělo hlásí stres jako kontrolky na palubní desce: bolí hlava, tuhne krk, nejde spát. Jenže řidič je často zvyklý kontrolky přehlížet, dokud auto nezastaví. Nepotřebujete hned „opravovat“, stačí si všimnout, že svítí.</p>') +
    odb('<p>Souvislost chronického psychického stresu s kardiovaskulárními, imunologickými a psychiatrickými obtížemi je dobře popsána, ale jde o <em>rizikový faktor</em>, ne o přímou příčinu každé nemoci. Přehled podává Cohen a spol. Při tělesných příznacích je proto nutné nejprve vyloučit somatickou příčinu.</p>' +
      refs(['Cohen, S., Janicki-Deverts, D., Miller, G. E. (2007). Psychological stress and disease. <em>JAMA</em>, 298(14), 1685–1687.',
        'McEwen, B. S. (1998). Protective and damaging effects of stress mediators. <em>New England Journal of Medicine</em>, 338, 171–179.'])));
  add("m1", "Základní nástroje první volby", lop(
    '<p>Dech je jediné „tlačítko“ vegetativního systému, které můžete mačkat vědomě. Rychlý dech znamená „hoří“, pomalý dlouhý výdech znamená „je to dobré“. Je to jako brzdový pedál: nemusíte vědět, jak funguje brzdová soustava, abyste ho šlápli.</p>') +
    odb('<p>Systematický přehled Zaccara a spol. (15 studií) uvádí, že pomalé dýchání (méně než 10 dechů za minutu) zvyšuje variabilitu srdeční frekvence a souvisí s menší úzkostí a vzrušením. Mechanismy ale zůstávají předmětem debaty a většina studií je malá. Proto štítek „pravděpodobné“.</p>' +
      refs(['Zaccaro, A. a kol. (2018). How breath-control can change your life: a systematic review on psycho-physiological correlates of slow breathing. <em>Frontiers in Human Neuroscience</em>, 12, 353.',
        'Balban, M. Y. a kol. (2023). Brief structured respiration practices enhance mood and reduce physiological arousal. <em>Cell Reports Medicine</em>, 4(1), 100895.'])));

  /* ---------- Lekce 2 ---------- */
  add("m2", "Proč děti s traumatem", lop(
    '<p>Představte si hlásič kouře, který pípá, i když jen opečete chleba. Dítě, které zažilo oheň, má doma právě takový. Nelže a nepřehání: jeho tělo se naučilo, že lepší sto falešných poplachů než jeden přehlédnutý. Proto zbytečně nevysvětlujte, že „se nic neděje“. Pomozte tělu poznat, že už je bezpečno.</p>') +
    odb('<p>Neurosekvenční model (Perry) vysvětluje, že mozek se vyvíjí zdola nahoru a opakovaný stres v raném věku nastaví stresové systémy citlivěji a ovlivní vývoj regulace. Dlouhodobé a nezvládnutelné zatížení bez ochranné přítomnosti dospělého bývá označováno jako <em>toxický stres</em>. Nejde o „osud“: plasticita mozku zůstává a bezpečné, předvídatelné vztahy výrazně pomáhají.</p>' +
      refs(['Perry, B. D. (2009). Examining child maltreatment through a neurodevelopmental lens: clinical application of the Neurosequential Model of Therapeutics. <em>Journal of Loss and Trauma</em>, 14(4), 240–255.',
        'Perry, B. D., Szalavitz, M. (2006). <em>The Boy Who Was Raised as a Dog</em>. New York: Basic Books.',
        'Shonkoff, J. P., Garner, A. S. a kol. (2012). The lifelong effects of early childhood adversity and toxic stress. <em>Pediatrics</em>, 129(1), e232–e246.'])));
  add("m2", "Ruka potřeb", lop(
    '<p>Když chybí prst, ruka drží hůř. Dítě bez „palce“ nemá hranice, bez „ukazováku“ nemá své místo, bez „malíčku“ nemá pocit bezpečí. Stačí se zeptat: který prst je u nás teď nejslabší? A začít u něj. Příklad: dítě, které bez ustání zkouší pravidla, často nepotřebuje přísnost, ale jasné a klidné hranice (palec) a jistotu, že u nás zůstane (malíček).</p>') +
    odb('<p>Ruka potřeb je autorský model (Hrochová Hrubá, Hroch) a není empiricky ověřen jako samostatná teorie. Pojmově ale navazuje na zavedené koncepty: Maslowovu hierarchii potřeb a zejména teorii sebeurčení (Ryan, Deci), která považuje za základní psychologické potřeby autonomii, kompetenci a sounáležitost. Používejte ji jako <em>pracovní metaforu</em> pro reflexi, ne jako diagnostický nástroj.</p>' +
      refs(['Maslow, A. H. (1943). A theory of human motivation. <em>Psychological Review</em>, 50(4), 370–396.',
        'Ryan, R. M., Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. <em>American Psychologist</em>, 55(1), 68–78.'])));
  add("m2", "Boj, útěk, zamrznutí", lop(
    '<p>Okno tolerance je jako pásmo příjemné teploty: uvnitř se vám dobře přemýšlí. Když je moc horko, dítě „vybuchne“ (křik, kopání). Když je moc zima, „zamrzne“ (ticho, prázdný pohled). Nejhůř se vám pozná to druhé, protože zamrzlé dítě nezlobí. Proto si všímejte i tichých dětí.</p>') +
    odb('<p>Reakci boj–útěk popsal Cannon a Selye ji zasadil do širšího modelu. Pojem <em>okno tolerance</em> zavedl Siegel; v práci s traumatem jej rozpracovali Ogdenová, Minton a Pain. Je to klinický model, ne přísně měřitelná veličina. Zamrznutí (freeze) je v literatuře o obranných reakcích popsáno jako samostatná odpověď, často provázená sníženým pohybem a změnou srdeční frekvence.</p>' +
      refs(['Cannon, W. B. (1915). <em>Bodily Changes in Pain, Hunger, Fear and Rage</em>. New York: Appleton.',
        'Siegel, D. J. (1999). <em>The Developing Mind</em>. New York: Guilford.',
        'Ogden, P., Minton, K., Pain, C. (2006). <em>Trauma and the Body</em>. New York: Norton.'])));
  add("m2", "Jak dítěti pomoci", lop(
    '<p>Nejdřív zklidnit, pak vysvětlovat. Je to jako s pláčem miminka: nevysvětlujete mu, proč nemusí plakat, vezmete ho do náruče. Totéž platí pro školáka v amoku. Málo slov, nižší hlas, pomalé tempo. Až se dítě zklidní, pak je čas povídat.</p>') +
    odb('<p>Princip „regulovat – spojit se – uvažovat“ vychází z neurosekvenčního modelu (Perry): zpracování slovních vysvětlení je možné až po zklidnění nižších mozkových center. Obdobně Siegel a Brysonová doporučují nejprve <em>emočně se napojit</em> a teprve potom přesměrovat (connect and redirect).</p>' +
      refs(['Perry, B. D., Szalavitz, M. (2006). <em>The Boy Who Was Raised as a Dog</em>. New York: Basic Books.',
        'Siegel, D. J., Bryson, T. P. (2011). <em>The Whole-Brain Child</em>. New York: Delacorte Press.'])));

  /* ---------- Lekce 3 ---------- */
  add("m3", "Proč začínat tělem", lop(
    '<p>Tělo je rychlejší než slova. Když hoří, nezačnete debatou, ale hasicím přístrojem. Rozumět se začne, až když je klid. Proto „uklidni se“ nefunguje, ale houpání, dup nebo pomalý výdech často ano.</p>') +
    odb('<p>Přístupy „zdola nahoru“ (bottom-up) pracují s dechem, pohybem a smyslovým vnímáním dřív než s kognicí. Jejich teoretické zdůvodnění je částečně založeno na polyvagální teorii, která je dnes předmětem kritiky. Praktická účinnost pomalého dechu je ale doložena nezávisle na ní (viz Zaccaro a spol.).</p>' +
      refs(['van der Kolk, B. (2014). <em>The Body Keeps the Score</em>. New York: Viking.',
        'Zaccaro, A. a kol. (2018). Frontiers in Human Neuroscience, 12, 353.'])));
  add("m3", "Žebřík nervového systému", lop(
    '<p>Žebřík jsou tři patra domu. Nahoře máte pohodu, uprostřed poplach a dole zamrznutí. Ze dna se nevyskočí rovnou nahoru. Člověk, který je „vypnutý“, nejdřív potřebuje drobné rozhýbání (otevřít okno, napít se, postavit se), a pak teprve výš.</p>') +
    odb('<p>Polyvagální teorii formuloval Stephen Porges, pro praxi ji zpracovala Deb Dana. Neurofyziologický základ teorie je v odborné literatuře zpochybněn (Grossman a Taylor; Grossman 2023). Žebřík proto používáme jako <em>mapu prožívání</em>, nikoli jako popis nervových drah.</p>' +
      refs(['Porges, S. W. (2011). <em>The Polyvagal Theory</em>. New York: Norton.',
        'Dana, D. (2018). <em>The Polyvagal Theory in Therapy</em>. New York: Norton.',
        'Grossman, P. (2023). Fundamental challenges and likely refutations of the five basic premises of the polyvagal theory. <em>Biological Psychology</em>, 180, 108589.'])));
  add("m3", "Další tělesné techniky", lop(
    '<p>Každá technika je hasicí přístroj. Musíte vědět, kde visí, a vyzkoušet si ho, než začne hořet. Proto je zkoušejte v klidu. Když pak přijde bouře, ruce si „pamatují“, co mají udělat.</p>') +
    odb('<p>Cyklický povzdech zkoumali Balban a spol. (randomizovaná studie na dospělých): pět minut denně zlepšilo náladu a snížilo klidovou dechovou frekvenci víc než meditace všímavosti. Jde o jednu studii, proto je závěr předběžný.</p>' +
      refs(['Balban, M. Y. a kol. (2023). Brief structured respiration practices enhance mood and reduce physiological arousal. <em>Cell Reports Medicine</em>, 4(1), 100895.'])));
  add("m3", "Relaxace a aktivace", lop(
    '<p>Relaxace není lenost. Je to nabíjení telefonu: zasunete zástrčku, aby měl telefon na co fungovat. Kdo celý den jede na 3 %, brzy vypne sám. A pozor: nabitý telefon, který nikdo nepoužije, také nic nevyřeší. Proto po uvolnění přijde smysluplná činnost.</p>') +
    odb('<p>Progresivní svalovou relaxaci vyvinul Edmund Jacobson ve 30. letech minulého století, autogenní trénink J. H. Schultz. Meta-analýza Stettera a Kuppera (60 studií) zjistila střední až velké účinky autogenního tréninku na řadu obtíží, u kontrolovaných srovnání spíše střední. Při užití u lidí s psychickým onemocněním, nízkým tlakem nebo traumatem je vhodná odborná konzultace.</p>' +
      refs(['Jacobson, E. (1938). <em>Progressive Relaxation</em>. Chicago: University of Chicago Press.',
        'Schultz, J. H. (1932). <em>Das autogene Training</em>. Leipzig: Thieme.',
        'Stetter, F., Kupper, S. (2002). Autogenic training: a meta-analysis of clinical outcome studies. <em>Applied Psychophysiology and Biofeedback</em>, 27(1), 45–98.'])));
  add("m3", "Hry s tělem", lop(
    '<p>Hra je cvičná bouřka. Dítě si v bezpečí zkouší, jaké to je zrychlit a zpomalit, vyskočit i usnout. A když se pak stres objeví doopravdy, tělo už ten pohyb zná.</p>') +
    odb('<p>Hra je podle pediatrické literatury důležitou součástí zdravého vývoje a regulace emocí.</p>' +
      refs(['Ginsburg, K. R. (2007). The importance of play in promoting healthy child development and maintaining strong parent-child bonds. <em>Pediatrics</em>, 119(1), 182–191.'])));

  /* ---------- Lekce 4 ---------- */
  add("m4", "Stres v mozku a těle", lop(
    '<p>V mozku je „šéf“ (prefrontální kůra), který plánuje a rozvažuje. Když hoří, odejde z kanceláře a předá velení hasičům (amygdale). Proto v největším stresu neděláme dobrá rozhodnutí. Naštěstí šéf se vrátí, jakmile se zklidníme.</p>') +
    odb('<p>Akutní stres snižuje funkci prefrontální kůry a zvyšuje aktivitu amygdaly. Chronický stres může ovlivnit strukturu prefrontální kůry a hipokampu; změny jsou do určité míry vratné. Přehledy podávají McEwen a Arnstenová.</p>' +
      refs(['McEwen, B. S. (2007). Physiology and neurobiology of stress and adaptation: central role of the brain. <em>Physiological Reviews</em>, 87(3), 873–904.',
        'Arnsten, A. F. T. (2009). Stress signalling pathways that impair prefrontal cortex structure and function. <em>Nature Reviews Neuroscience</em>, 10, 410–422.'])));
  add("m4", "Dlouhodobý stres a zdraví", lop(
    '<p>Tělo si vede účty. Když na něj stres působí pár minut, zaplatí a je to vyřízené. Když stres trvá měsíce, splácí se s úroky: bolestmi, únavou, nemocemi. A tělo neplatí hotově, ale tím, jak se vám daří žít.</p>') +
    odb('<p>Přehled vztahu stresu a nemocí podávají Cohen a spol. (2007). Pro kardiovaskulární onemocnění existují silné důkazy o rizikovém působení chronického stresu (Kivimäki, Steptoe 2018), jde ale o asociaci a faktor v součtu s dalšími (životní styl, genetika).</p>' +
      refs(['Cohen, S., Janicki-Deverts, D., Miller, G. E. (2007). Psychological stress and disease. <em>JAMA</em>, 298(14), 1685–1687.',
        'Kivimäki, M., Steptoe, A. (2018). Effects of stress on the development and progression of cardiovascular disease. <em>Nature Reviews Cardiology</em>, 15, 215–229.'])));
  add("m4", "Syndrom vyhoření", lop(
    '<p>Vyhoření je vybitá baterie, která se už nenabíjí ani přes noc. Nepoznáte ho podle toho, že jste jednou unavení. Poznáte ho podle toho, že vám začne být všechno jedno, jste cyničtí a nevěříte, že to má smysl.</p>') +
    odb('<p>Christina Maslachová definuje vyhoření třemi rozměry: emoční vyčerpání, cynismus (depersonalizace) a snížený pocit účinnosti. Pojem pochází od Freudenbergera (1974). V MKN-11 je vyhoření v kapitole „Faktory ovlivňující zdravotní stav“ (QD85) a definováno jako syndrom z chronického pracovního stresu, který nebyl úspěšně zvládnut. Odborně se diskutuje překryv s depresí (Bianchi a spol.). Únava ze soucitu (Figley) se týká pečujících o traumatizované osoby.</p>' +
      refs(['Maslach, C., Schaufeli, W. B., Leiter, M. P. (2001). Job burnout. <em>Annual Review of Psychology</em>, 52, 397–422.',
        'Freudenberger, H. J. (1974). Staff burn-out. <em>Journal of Social Issues</em>, 30(1), 159–165.',
        'Bianchi, R., Schonfeld, I. S., Laurent, E. (2015). Burnout–depression overlap: a review. <em>Clinical Psychology Review</em>, 36, 28–41.',
        'Figley, C. R. (1995). <em>Compassion Fatigue</em>. New York: Brunner/Mazel.',
        'World Health Organization (2019). Burn-out an „occupational phenomenon“: International Classification of Diseases.'])));
  add("m4", "Kdo je vyhořením ohrožen", lop(
    '<p>Vyhoření nedostanou líní. Dostanou ho ti, kdo se nejvíc snaží a nikdo jim nevezme část břemene. Dobrý pěstoun je pak typický kandidát: dává a dává, a když něco nejde, myslí si, že selhal on. Proto se nestyďte brát pomoc, než se vám začne bortit základ.</p>') +
    odb('<p>Maslachová a Leiter popisují vyhoření jako nesoulad mezi člověkem a prostředím v oblastech pracovní zátěže, kontroly, odměny, komunity, spravedlnosti a hodnot. Při pěstounské péči lze tento model uplatnit analogicky, ale většina empirických studií se týká zaměstnaných pomáhajících profesí. Zobecnění je tedy opatrné.</p>' +
      refs(['Maslach, C., Leiter, M. P. (2016). Understanding the burnout experience: recent research and its implications for psychiatry. <em>World Psychiatry</em>, 15(2), 103–111.'])));
  add("m4", "Jak poznat, že se blížím", lop(
    '<p>Kontrolky na palubní desce svítí dřív, než se auto porouchá. U vyhoření to je podobné: nejdřív „dělám víc a víc, a nic z toho nemám“, potom podrážděnost a únava, nakonec lhostejnost. Čím dřív si všimnete, tím jednodušší oprava.</p>') +
    odb('<p>Čtyři fáze (nadšení, stagnace, frustrace, apatie) popsali Edelwich a Brodsky; v české literatuře se doplňují pátou fází, vlastním vyhořením. Je to popisný model, nikoli prognostický nástroj: lidé jednotlivé fáze nemusejí procházet lineárně. Měřicím nástrojem je Maslach Burnout Inventory.</p>' +
      refs(['Edelwich, J., Brodsky, A. (1980). <em>Burn-out: Stages of Disillusionment in the Helping Professions</em>. New York: Human Sciences Press.',
        'Maslach, C., Jackson, S. E. (1981). The measurement of experienced burnout. <em>Journal of Occupational Behavior</em>, 2(2), 99–113.'])));
  add("m4", "Techniky pro každý den", lop(
    '<p>Malé věci každý den fungují líp než velké věci jednou ročně. Pět minut s čajem je lepší než dovolená, na kterou nikdy nedojde. A když píšete večer tři dobré věci, trénujete mozek, který si jinak pamatuje hlavně hrozby.</p>') +
    odb('<p>V experimentální studii Emmonse a McCulloughové zlepšovalo vedení záznamů vděčnosti („counting blessings“) subjektivní pohodu. Výsledky berte jako podpůrné, ne jako doklad silného účinku.</p>' +
      refs(['Emmons, R. A., McCullough, M. E. (2003). Counting blessings versus burdens. <em>Journal of Personality and Social Psychology</em>, 84(2), 377–389.'])));
  add("m4", "Psychická odolnost", lop(
    '<p>Odolný člověk není tvrdý jako dub, který se zlomí. Je spíš jako bambus: ohýbá se a vrací. Odolnost se nerodí, buduje se z drobností: spánku, vztahů a z toho, že se nenecháte sníst jednou událostí.</p>') +
    odb('<p>Masten označuje odolnost za „obyčejnou magii“: vychází ze základních adaptačních systémů (vztahy, schopnost regulace, smysl), nikoli z mimořádných vlastností. Přehled definic podávají Southwick a spol.; definice se v literatuře liší, proto je termín třeba používat opatrně.</p>' +
      refs(['Masten, A. S. (2001). Ordinary magic: resilience processes in development. <em>American Psychologist</em>, 56(3), 227–238.',
        'Southwick, S. M. a kol. (2014). Resilience definitions, theory, and challenges. <em>European Journal of Psychotraumatology</em>, 5, 25338.'])));

  /* ---------- Lekce 5 ---------- */
  add("m5", "Bezpečné místo", lop(
    '<p>Bezpečné místo je zásuvka, do které se dítě může připojit, když mu dochází baterka. Není to trest ani „time-out“. Dítě tam jde samo a vy jste nablízku. Důležité je procvičovat ho v klidu, aby pak fungovalo v bouři.</p>') +
    odb('<p>Představa bezpečného místa je technika používaná při stabilizaci v traumaterapii (např. v přípravné fázi EMDR). Pro dětské použití není dostatek kontrolovaných studií, proto ji doporučujeme jako podpůrnou techniku a při závažných obtížích ve spolupráci s terapeutem.</p>' +
      refs(['Shapiro, F. (2001). <em>Eye Movement Desensitization and Reprocessing</em> (2. vyd.). New York: Guilford.'])));
  add("m5", "Jak hrát emoční barometr", lop(
    '<p>Co pojmenujeme, to se dá líp zvládat. Když si dítě řekne „jsem na osmičce“, má už před sebou něco, co se dá snížit na sedmičku. Kdo nemá slova, má jen výbuch.</p>') +
    odb('<p>Pojmenování emocí (affect labeling) snižuje aktivitu amygdaly a zvyšuje aktivitu pravé ventrolaterální prefrontální kůry, jak ukázali Lieberman a spol. fMRI studií na dospělých. Přenos na děti po traumatu je plausibilní, ale přímo neověřený.</p>' +
      refs(['Lieberman, M. D. a kol. (2007). Putting feelings into words: affect labeling disrupts amygdala activity in response to affective stimuli. <em>Psychological Science</em>, 18(5), 421–428.'])));
  add("m5", "Postoj PACE", lop(
    '<p>PACE je způsob, jak být s dítětem, ne technika. Je to jako hodit někomu záchranný kruh místo přednášky o plavání: nejdřív se přidat k jeho světu (hravost, přijetí, zvědavost, soucit), až potom řešit chování. Přijmout cítění neznamená schvalovat čin.</p>') +
    odb('<p>PACE (Playfulness, Acceptance, Curiosity, Empathy) je postoj popsaný Danem Hughesem v rámci <em>dyadické vývojové psychoterapie</em> pro děti v náhradní péči. Empirická evidence je zatím omezená (malé studie), model se však široce používá v praxi náhradní rodinné péče.</p>' +
      refs(['Hughes, D. A. (2009). <em>Attachment-Focused Parenting</em>. New York: Norton.',
        'Golding, K. S., Hughes, D. A. (2012). <em>Creating Loving Attachments</em>. London: Jessica Kingsley.'])));

  /* ---------- Lekce 6 ---------- */
  add("m6", "Společné aktivity", lop(
    '<p>Společná činnost je lepidlo. Nemusí být velká: hra, vaření, procházka. Podstatné je, že děláte věc spolu a nikdo nemusí hned něco hlásit. A nabídka je lepší než rozkaz: když dítě odmítne, nic se neděje, zkuste to znovu jindy.</p>') +
    odb('<p>Přehled výzkumu rodinných rutin a rituálů (Fiese a spol.) dokládá souvislost s kompetencí rodičů, přizpůsobením dětí a spokojeností partnerů. Studie jsou však často založené na vzorcích dostupných účastníků a nerozlišují přímé a nepřímé účinky.</p>' +
      refs(['Fiese, B. H. a kol. (2002). A review of 50 years of research on naturally occurring family routines and rituals: cause for celebration? <em>Journal of Family Psychology</em>, 16(4), 381–390.'])));
  add("m6", "Technostres", lop(
    '<p>Telefon je nůž: umí krájet chleba, ale i řezat. Není dobrý ani špatný, záleží, jak a kdy. Dítě s traumatem často v obrazovce hledá útěk před nepříjemnými pocity. Když mu ji sebereme ze dne na den, zazní poplach. Proto pomalu a s náhradou, ne s trestem.</p>') +
    odb('<p>Doporučení Světové zdravotnické organizace (2019) se týkají dětí do 5 let. Pro starší děti doporučení vychází z konsenzu odborných společností a z korelačních studií. Pojem technostres zavedl Brod (1984). Spitzerova kniha „Digitální demence“ je v odborné komunitě kritizována jako jednostranná, proto ji doporučujeme číst kriticky.</p>' +
      refs(['World Health Organization (2019). <em>Guidelines on physical activity, sedentary behaviour and sleep for children under 5 years of age</em>. Geneva: WHO.',
        'Brod, C. (1984). <em>Technostress: The Human Cost of the Computer Revolution</em>. Reading: Addison-Wesley.'])));

  /* ---------- Lekce 7 ---------- */
  add("m7", "Čtyři kroky", lop(
    '<p>Plán je jako mapa s označeným schovaným klíčem: nemusí být dokonalý, ale musí být po ruce. Nejlépe funguje ve formě „když nastane tohle, udělám tohle“. Například „když se začnu hádat s dítětem, třikrát vydechnu a půjdu se napít“.</p>') +
    odb('<p>Formulace „když–pak“ (<em>implementation intentions</em>) podle Gollwitzera zvyšují pravděpodobnost splnění záměru. Meta-analýzy potvrzují střední účinek na dosahování cílů.</p>' +
      refs(['Gollwitzer, P. M. (1999). Implementation intentions: strong effects of simple plans. <em>American Psychologist</em>, 54(7), 493–503.'])));
  add("m7", "Kde hledat podporu", lop(
    '<p>Pomoc si nemusíte zasloužit. Je to jako kvalitní boty při dlouhé túře: nejsou slabost, jsou součástí výbavy. Napsat doprovodné organizaci nebo zavolat na linku není pozdě a není to přehnané. Je to pořád dřív, než se něco zlomí.</p>') +
    odb('<p>Sociální opora působí podle Cohena a Willsové jako nárazník proti škodlivým účinkům stresu (buffering) zejména tehdy, když je vnímána jako dostupná a reagující na potřeby. Zákonná práva pečujících osob upravuje zákon č. 359/1999 Sb., § 47a; znění zákona se mění, ověřujte aktuální verzi.</p>' +
      refs(['Cohen, S., Wills, T. A. (1985). Stress, social support, and the buffering hypothesis. <em>Psychological Bulletin</em>, 98(2), 310–357.'])));
  add("m7", "Desatero pro zvládání", lop(
    '<p>Desatero je podpěra, ne seznam úkolů. Nemusíte je splnit celé. Zkuste jedno nebo dvě. Jeden bod týdně stačí. A „stačí, že jsem tu“ je často nejlepší bod.</p>'));
  add("m7", "Krizová období", lop(
    '<p>Když je zle všude kolem, hodí se držet základy: jíst, spát, mluvit spolu a nechat si pomoct. Nepotřebujete hned řešit celý svět. Stačí, když zůstane jeden stabilní bod: vy a vaše rodina.</p>'));

  /* ---------- Lekce 8 ---------- */
  add("m9", "Strategie zvládání stresu:", lop(
    '<p>Strategie zvládání jsou jako nářadí v dílně. Kdo má jen kladivo, vidí všechno jako hřebík. Kdo má víc nářadí, vybere si podle práce. Cílem není mít „správnou“ strategii, ale mít jich víc a vědět, kdy sáhnout po které.</p>') +
    odb('<p>Dotazník SVF (Stressverarbeitungsfragebogen; Janke, Erdmann) měří způsoby, jakými lidé zvládají stres, a existuje v několika verzích (např. SVF 120 a kratší SVF 78) s různým počtem škál. Strategie v této lekci odpovídají škálám dotazníku SVF v podobě, jak ji používal původní Moodle kurz (13 strategií). V literatuře existují i jiné modely, které strategie dělí jinak (Lazarus a Folkmanová; Carver a spol.; Skinnerová a spol.). Lekce slouží jen k sebereflexi, nikoli jako diagnostický nástroj. Třídění na strategie zaměřené na problém a na emoce vychází z Lazaruse a Folkmanové. Přehled kategoriálních systémů zvládání uvádějí Skinnerová a spol.</p>' +
      refs(['Janke, W., Erdmann, G.: <em>Stressverarbeitungsfragebogen (SVF)</em>. Göttingen: Hogrefe.',
        'Lazarus, R. S., Folkman, S. (1984). <em>Stress, Appraisal, and Coping</em>. New York: Springer.',
        'Skinner, E. A. a kol. (2003). Searching for the structure of coping. <em>Psychological Bulletin</em>, 129(2), 216–269.',
        'Carver, C. S., Scheier, M. F., Weintraub, J. K. (1989). Assessing coping strategies: a theoretically based approach. <em>Journal of Personality and Social Psychology</em>, 56(2), 267–283.'])));
  add("m9", "Tři nejzdravější strategie", lop(
    '<p>Kontrola situace je jako navigace: víte, kde jste, kam jedete a jak. Kontrola reakcí je jako ruční brzda: nezastaví auto, ale pomůže, když začne klouzat. A pozitivní sebeinstrukce je hlas spolujezdce, který říká „jedeš dobře“, místo aby kritizoval.</p>') +
    odb('<p>Koncept <em>self-efficacy</em> (Bandura) vysvětluje, proč víra ve vlastní schopnost zvládat zátěž zvyšuje vytrvalost a výkon. Self-instruction (Meichenbaum) je technika kognitivně-behaviorální terapie, při které si člověk říká „vnitřní instrukce“ k řešení náročné situace. Potlačení emocí (response modulation) je podle Grosse dlouhodobě méně účinné než změna situace nebo jejího hodnocení.</p>' +
      refs(['Bandura, A. (1977). Self-efficacy: toward a unifying theory of behavioral change. <em>Psychological Review</em>, 84(2), 191–215.',
        'Meichenbaum, D. (1977). <em>Cognitive-Behavior Modification</em>. New York: Plenum.',
        'Gross, J. J. (1998). The emerging field of emotion regulation: an integrative review. <em>Review of General Psychology</em>, 2(3), 271–299.'])));
  add("m9", "Přehodnocení a odklon", lop(
    '<p>Aikido stresu: nepostavíte se proti vlně, ale uhnete a necháte ji přejít. Například dítě vás pošle někam: neodpovíte vztekem, ale klidně řeknete „vidím, že jsi naštvaný“, a vztek se rozplyne. Vyžaduje to cvik, ale stojí to za to.</p>') +
    odb('<p>Kognitivní přehodnocení (reappraisal) je podle Grosse jednou z nejlépe zdokumentovaných adaptivních strategií regulace emocí. Humor jako strategie zvládání shrnuje Martin. Humor je účinný zejména ve své afiliativní a sebepodporující podobě.</p>' +
      refs(['Gross, J. J. (1998). Review of General Psychology, 2(3), 271–299.',
        'Martin, R. A. (2007). <em>The Psychology of Humor</em>. Burlington: Academic Press.'])));
  add("m9", "Podle situace a rizikové", lop(
    '<p>Přemílání je jako jízda v kruhovém objezdu: pořád se točíte kolem stejného místa a nikam se nedostanete. Pomáhá vyjet ven: zapsat si to, domluvit se s někým nebo si dát lhůtu („řeším do deseti večer“).</p>') +
    odb('<p>Ruminace (perseverace) je v literatuře dobře popsána jako rizikový faktor pro depresi a úzkost (Nolen-Hoeksema a spol.). Rezignace odpovídá konceptu naučené bezmocnosti (Seligman). Metaanalýza Aldaové a spol. ukázala, že vyhýbání se, potlačování a ruminace souvisejí s vyšší psychopatologií, zatímco přehodnocení a řešení problémů s nižší.</p>' +
      refs(['Nolen-Hoeksema, S., Wisco, B. E., Lyubomirsky, S. (2008). Rethinking rumination. <em>Perspectives on Psychological Science</em>, 3(5), 400–424.',
        'Seligman, M. E. P. (1972). Learned helplessness. <em>Annual Review of Medicine</em>, 23, 407–412.',
        'Aldao, A., Nolen-Hoeksema, S., Schweizer, S. (2010). Emotion-regulation strategies across psychopathology: a meta-analytic review. <em>Clinical Psychology Review</em>, 30(2), 217–237.',
        'Cohen, S., Wills, T. A. (1985). Psychological Bulletin, 98(2), 310–357 (sociální opora).'])));
})();
