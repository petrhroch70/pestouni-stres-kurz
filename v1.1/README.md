# Stres v pěstounské péči – e-learning (8 hodin, verze 1.1)

Statická webová aplikace pro vzdělávání pěstounů a osob pečujících. Nepotřebuje server, databázi ani sestavení. Stačí nahrát složku na libovolný web.

## Spuštění

```
cd elearning-pestouni
python3 -m http.server 8000
```

Pak otevřete `http://localhost:8000`. Funguje i přímé otevření `index.html` z disku.

**Režim náhledu** (pro lektora nebo doprovázející organizaci): přidejte do adresy `#nahled`. Čas se nevyžaduje a osvědčení je označené jako neplatné. Režim se uloží do postupu v prohlížeči, takže pro běžné studium použijte jiný prohlížeč nebo „Smazat postup a začít znovu“.

## Struktura kurzu (8 hodin, odborný odhad pro průměrného pěstouna)

| Blok | Obsah | Doporučený čas |
|---|---|---|
| 0 | Úvod, video lektora, Pěstounské zrcadlo (vstup), očekávání | 15 min |
| 1 | Co je stres, tři mýty o stresu, stresory, tělo a emoce | 42 min |
| 2 | Děti s traumatem, Ruka potřeb, boj/útěk/zamrznutí | 46 min |
| 3 | Tělo jako nástroj, relaxace a aktivace (Jacobson, autogenní trénink) | 42 min |
| 4 | Vlastní stres pěstouna, psychosomatika, vyhoření, odolnost | 52 min |
| 5 | Techniky pro děti | 42 min |
| 6 | Společné aktivity a technostres | 35 min |
| 7 | Dlouhodobý plán, krizový plán, podpora, krizová období, Zrcadlo (výstup) | 30 min |
| 8 | **Nová lekce:** Strategie zvládání stresu (příklad modelu SVF) | 41 min |
| závěr | Závěrečný test (12 otázek z banky 20), hodnocení, osvědčení | 15 min |

Rozsah se nastavuje v `js/content-4.js` (`C.totalMinutes`, v minutách; 480 = 8 astronomických hodin po 60 minutách podle metodiky MPSV) a všechny texty aplikace (osvědčení, přehled, pravidla) se z něj odvozují. Zda se kurz započítá jako 8 hodin vzdělávání pěstounů, rozhoduje vaše doprovázející organizace (viz zákon č. 359/1999 Sb., § 47a, 24 hodin za 12 měsíců).

## Styl textů a poznámky

Základní text je psaný běžným jazykem pro laiky. U většiny textových kroků jsou navíc dva druhy poznámek (`js/content-notes.js`):
- **Po lopatě** (otevřená, předčítá se): jednoduché vysvětlení prostým jazykem s příměrem a příkladem z praxe.
- **Odborná poznámka** (sbalená, nepředčítá se): odbornější výklad s citacemi. Odkazy na zdroje byly ověřeny vyhledáním (Maslach a spol. 2001, McEwen 1998, Gross 1998, Nolen-Hoeksema a spol. 2008, Cohen a Willsová 1985, Le Fevre a spol. 2003, Masten 2001, Grossman 2023, Perry 2009, Stetter a Kupper 2002, Shonkoff a Garner 2012, Zaccaro a spol. 2018, Skinner a spol. 2003, Fiese a spol. 2002, Lieberman a spol. 2007). U ostatních citací (např. Selye 1936, Lazarus a Folkmanová 1984, Siegel 1999) stojí za to před oficiálním vydáním ověřit stránky a vydání.

**Verze 1.1** přidává obsah z původního Moodle kurzu „Hroší kůže pro přechodné pěstouny“ (OSPOD Mladá Boleslav, 2021): třináct strategií zvládání stresu, tři mýty o stresu, Ruka potřeb, relaxaci a aktivaci, psychosomatiku, rizikové profese, psychickou odolnost, krizová období, videa lektora a odborníků (odkazy na YouTube), prezentace (PDF). Podrobnosti viz `MOODLE-IMPORT.md`.

Každá lekce obsahuje modelovou scénu (Marek, Jan, Klára), výklad, interaktivní cvičení (dechový průvodce, vedená relaxace, zemnění s časovačem, 5-4-3-2-1, třídění reakcí, žebřík nervového systému, emoční barometr, fáze vyhoření, záblesky, krizový plán, digitální dohoda), kazuistiku s rozhodováním, reflexi do deníku, shrnutí se zdroji a kontrolní test (5 otázek, ≥ 80 %).

## Mluvené slovo a podcast

- **Poslechnout tuto stránku:** na každé stránce kapitoly. Scény čtou hlasy postav, ostatní text vypravěč. Čtený odstavec se zvýrazní.
- **Podcast o zvládání stresu:** 17 dílů, asi 70 minut. Rozhovor vede Klára, vysvětluje Jan a Marek přidává zkušenost z praxe. Díly jsou u každé kapitoly i pohromadě na stránce *Podcast* s přepisy.
- **Co se namlouvá:** Jen odborný obsah, tedy podcast, výkladové texty, scény, kazuistiky, shrnutí lekcí a vedená cvičení (dech, zemnění, relaxace). Testy, formuláře, reflexe, úkoly, stránky s videi, pokyny k fungování kurzu a seznamy zdrojů se nepředčítají. Účastníci se čtečkou si je přečtou sami. Seznam typů je v `js/app.js` (`AUDIO_TYPES`).
- **Přehrávač** v dolní liště hraje dál i při procházení kurzu. Umí pauzu, přeskočení repliky, tempo a výběr hlasů. 

### Odkud se bere zvuk

Pro každou repliku přehrávač nejdřív hledá **předgenerovanou nahrávku** `<klíč>.mp3` ve složce `PODCAST.audioBase` (v `js/content-podcast.js`). Seznam dostupných nahrávek je v `index.json`. Když nahrávka chybí, repliku přečte **syntéza řeči prohlížeče**. Nahrávky a syntéza se dají míchat po rolích, takže například muže mohou mluvit nahrávky a Kláru prohlížeč.

Klíč je hash role a textu. Když se text repliky změní, změní se i klíč a generátor dotvoří jen změněné nahrávky.

### Generování nahrávek

```
npm i -D playwright && npx playwright install chromium     # jednorázově
node tools/extract_tts.js                                  # → tools/tts-items.json (všechny promluvy)
pip install -r tools/requirements.txt                      # jen pro FOSS engine Piper
python3 tools/generate_audio.py --out audio                # → audio/*.mp3 + audio/index.json
```

Hlasy pro jednotlivé role se nastavují v `tools/voices.json`.

### Výchozí FOSS hlasy (komerčně použitelné)

Čeština se syntetizuje jediným volně dostupným českým modelem **Piper „Jirka“** (data CC0, engine MIT). Další postavy vznikají **převodem hlasu kNN-VC** (Baas a kol., 2023; MIT). Ten nahradí barvu hlasu barvou z referenčních lidských nahrávek a zachová českou výslovnost. Reference pocházejí z datasetů **OHF-Voice / Nabu Casa (CC0)**, kde má každý mluvčí 30–40 minut řeči.

| Role | Hlas | CER | DNSMOS OVRL | DNSMOS P.808 |
|---|---|---|---|---|
| Jan | Piper Jirka (originál) | 5,3 % | 3,35 | 4,17 |
| Klára | Jirka → kNN-VC **Lili** (slovenština, žena), mix 0,35 | 8,0 % | 3,13 | 3,92 |
| Marek | Jirka → kNN-VC **Dmitri** (ruština, muž), mix 0,35 | 6,4 % | 3,12 | 3,90 |
| Radka (průvodkyně) | Jirka → kNN-VC **Gosia** (polština, žena), mix 0,35 | 7,9 % | 3,26 | 3,92 |

Hodnoty jsou z hotové produkce: náhodný vzorek 15 replik na roli po opravném průchodu. Celkem 1 088 replik, 2,6 h zvuku, 62 MB.

Jak se měřilo:
- **CER** je chybovost automatického přepisu (Whisper small) proti textu, tedy srozumitelnost.
- **DNSMOS** je predikce hodnocení posluchačů na škále 1–5. Je to objektivní náhrada poslechového testu, ne jeho plnohodnotná náhrada.
- **Mix** je podíl původních českých příznaků při převodu. Hodnota 0,35 snížila chybovost krátkých replik z 30 % na 9 % a výška hlasu zůstala zachovaná (F0 Kláry kolem 190 Hz, Jirky 158 Hz).
- **Opravný průchod** (`tools/repair_audio.py`) zkontroloval 934 převedených replik a 98 slabých přegeneroval ve více variantách (průměrný CER 36 % → 23 %). Zbylé odchylky jsou převážně artefakty měření: jednoslovné nadpisy, číslice a anglické názvy.
- Při výběru hlasů tvořilo vzorek 5 vět na kandidáta, 2 hodnoty k (4 a 8). Vyřazení kandidáti: Darkman (PL, vyšší CER) a Denis (RU, nižší P.808). Kontrola: přímé čtení češtiny slovenským hlasem Lili mělo CER 32 %.

Mastering: odšumění a doplnění výšek pro 16kHz výstup kNN-VC a sjednocení hlasitosti na −17 LUFS. Kompresor v řetězci není, protože v měření zhoršoval DNSMOS (zvýrazňuje šum vokodéru).

Potřebné soubory (nejsou v repozitáři, stahují se z GitHub Releases):
- `models/vits-piper-cs_CZ-jirka-medium`: https://github.com/k2-fsa/sherpa-onnx/releases/tag/tts-models
- `knnvc/WavLM-Large.pt`, `knnvc/prematch_g.pt` a kód `knnvc/src`: https://github.com/bshall/knn-vc
- `ref16/<mluvčí>/*.wav`: referenční nahrávky z https://github.com/OHF-Voice/voice-datasets/releases (převod na 16 kHz mono)
- `Rhubarb-Lip-Sync-*/rhubarb`: https://github.com/DanielSWolf/rhubarb-lip-sync/releases

### Avatary

Každá nahrávka má vedle sebe `<klíč>.lip.json` s vizémy z Rhubarb Lip Sync (MIT, fonetický rozpoznávač nezávislý na jazyce). Ilustrované avatary v `js/avatars.js` jsou původní SVG kresby a podle vizémů mění 9 tvarů úst. K tomu mrkají a jemně pohybují hlavou. Bez lip-sync dat, například při syntéze v prohlížeči, se ústa hýbou podle jednoduchého vzoru.

### Cloudové alternativy

| Engine | Licence a cena | Poznámka |
|---|---|---|
| `google` | proprietární, bezplatný měsíční limit | `GOOGLE_TTS_API_KEY`, hlasy přes `--list-voices google` |
| `azure` | proprietární, bezplatná úroveň F0 | `AZURE_TTS_KEY`, `AZURE_TTS_REGION` |

Celý kurz má asi 100 000 znaků mluveného slova, což jsou zhruba 2 hodiny zvuku a 45 MB MP3 (48 kb/s, mono).

### Hosting zdarma

- **Aplikace:** GitHub Pages. Workflow `.github/workflows/pages.yml` v kořeni repozitáře nasadí složku `elearning-pestouni`. Pages jsou zdarma jen u **veřejného** repozitáře, u soukromého jen s placeným účtem. Proto doporučujeme samostatný veřejný repozitář jen pro kurz.
- **Zvuk:** samostatný veřejný repozitář (například `pestouni-stres-audio`) se zapnutými Pages. Obsahuje jen soubory z `audio/`. V `content-podcast.js` pak nastavte `audioBase: "https://<uživatel>.github.io/pestouni-stres-audio/"`. GitHub Pages posílá hlavičku CORS `*`, takže aplikace si `index.json` načte i z jiné adresy. Limit Pages je 1 GB na web, kurz potřebuje asi 50 MB.

## Jak se doloží rozsah

- **Volný postup:** Kapitoly i kroky lze procházet v libovolném pořadí. Čas se neměří. Rozsah 8 hodin je odborný odhad pro průměrného pěstouna (včetně studia materiálů a vlastního přemýšlení) a neověřuje se.
- **Kapitola se započte**, když účastník otevře všechny její stránky a podkapitoly a splní její kontrolní test (aspoň 60 %). Videa není nutné přehrát, stránku s nimi je třeba otevřít. Počítadlo kurzu počítá splněné kapitoly.
- **Podmínky osvědčení:**
  1. Všechny kapitoly (0–8) započtené podle pravidla výše.
  2. Závěrečný test aspoň na 60 %.
  3. Hodnocení kurzu.
- **Osvědčení** uvádí rozsah 8 hodin, autora a odborného garanta a řádek pro **ověření klíčovým pracovníkem** (jméno, datum, podpis). Je platné až po tomto ověření. Na druhé straně A4 je název, anotace a skladba kurzu.
- **Kontrolní kód** je hash ze jména, časů, výsledku a data vystavení. Slouží ke kontrole souladu se záznamem o studiu. Nejde o elektronický podpis.
- Účastník může **stáhnout záznam o studiu (JSON)**, nebo ho zkopírovat jako text a poslat doprovázející organizaci.

**Omezení:** postup se ukládá do `localStorage` prohlížeče. Nesdílí se mezi zařízeními a smazáním dat prohlížeče se ztratí. Pro centrální evidenci by bylo potřeba napojení na LMS (např. Moodle přes SCORM/xAPI) nebo jednoduchý backend. O započtení do 24 hodin podle § 47a zákona č. 359/1999 Sb. rozhoduje doprovázející organizace.

## Nastavení

V `js/content-1.js` (objekt `window.COURSE`):

- `moduleQuizPass`: hranice kontrolních testů (výchozí 0.6),
- `finalPass`: hranice závěrečného testu (výchozí 0.6),
- `totalMinutes`: rozsah kurzu v minutách (480 = 8 hodin po 60 minutách), jen informativní,
- `minutes` u každého bloku: doporučený čas.

Obsah lekcí je v `js/content-1.js` až `js/content-3.js` jako prostá data (HTML v řetězcích). Logika je v `js/app.js`, vzhled v `css/style.css`.

## Zdroje obsahu

Kurz vychází z dokumentu *Stres pěstouni, revize* a dalších materiálů autora: prezentace *Stres a syndrom vyhoření – pěstouni*, *Pěstounské zrcadlo* (sebereflektivní audit), pracovní list *Krizový plán a psychohygiena*, manuál *STRESUJME SE ZDRAVĚ* a podklad *Pěstounské vzdělávání: NVR a resilience*. Věcné úpravy oproti zdrojům jsou v souboru [REVIZE.md](REVIZE.md).

## Zvláštní režimy (demo a admin)

Kurz je statická stránka, režimy se volí příponou adresy. Každý režim má **vlastní úložiště v prohlížeči**, takže nikdy nemění postup skutečného účastníka.

| Adresa | Režim | Co umí |
|---|---|---|
| `…/pestouni-stres-kurz/` | běžné studium | všechny podmínky (kapitoly, čas, test, prohlášení, hodnocení) |
| `…/#demo` | **demo** | ukázka částí kurzu (`COURSE.demo.modules`, výchozí Úvod a Lekce 1, včetně testu), krátký závěrečný test (5 otázek) a ukázkové osvědčení se vodoznakem „DEMO · UKÁZKA · NEPLATNÉ“; ostatní bloky jsou zamčené, stahování skryté |
| `…/#admin` | **admin** | plná verze, vše odemčené, bez povinného času, testů, prohlášení i hodnocení; osvědčení lze vystavit hned, je ale označeno „ADMIN · BEZ OVĚŘENÍ · NEPLATNÉ“ a kód začíná písmenem A |
| `…/#nahled` | technický náhled | starší režim pro kontrolu obsahu |

**Heslo pro admin:** `node tools/admin_hash.js "heslo"` vypíše otisk, vložte ho do `js/content-1.js` jako `adminHash`. Bez hesla je admin otevřený. Pozor: u statické stránky jde o ochranu před náhodným použitím, ne o bezpečnost; proto jsou osvědčení z admin režimu označená jako neplatná pro doložení.

## Zápis, účet a právní informace

- **Zápis:** při prvním vstupu účastník vyplní jméno, roli, volitelně e-mail, doprovázející organizaci a klíčového pracovníka a odsouhlasí informace o zpracování údajů. Údaje jsou v `localStorage` prohlížeče (u každého režimu zvlášť).
- **Můj účet:** profil, přehled postupu po blocích, záloha a obnova postupu souborem (přenos mezi zařízeními), e-mail klíčovému pracovníkovi se záznamem o studiu, smazání dat.
- **Informace a soukromí:** provozovatel (OSVČ), co kurz je a není, osvědčení a započtení, AI hlasy, cookies a ukládání, ochrana osobních údajů. Údaje provozovatele se doplňují v `COURSE.operator` (`js/content-1.js`); prázdné položky se nezobrazí. V admin režimu se zobrazí upozornění, co chybí.
- **Bez cizích serverů:** písma jsou přibalená (`fonts/`, `css/fonts.css`), aplikace nenačítá nic z externích adres a nepoužívá cookies.
- **Omezení:** protože kurz běží jako statická stránka, **neexistuje centrální evidence** účastníků. Klíčový pracovník dostane záznam od účastníka. Centrální sledování by vyžadovalo server (např. PocketBase na VPS).
- **Šablona osvědčení:** `download/sablona-osvedceni.docx` a `.pdf` (generuje `tools/build_cert_template.py`).

## Změny po první revizi verze 1.1

- Úvodní strana: hero s dechovou animací, anotace stresu, fakta o kurzu, návod „Jak kurz absolvovat“, upozornění na zálohu postupu.
- Zálohování postupu: stažení souboru JSON, odeslání e-mailem (sdílení v mobilu, jinak stažení a e-mail), načtení zálohy. Postup se jinak ukládá jen v prohlížeči a mezi zařízeními se nepřenáší.
- Přehrávač má posuvnou lištu (posun po replikách a uvnitř nahrávky).
- Audio sekce je nad seznamem částí kapitoly. U každého dílu podcastu je odkaz na přepis (PDF), generuje je `node tools/build_transcripts.js`.
- Dechová cvičení mění barvu podle fáze (nádech modrá, zadržení fialová, výdech zelená).
- Závěrečný test: při každém pokusu 12 otázek z banky 20, rovnoměrně z lekcí (`C.finalSize`, `C.finalQuota` v `js/content-4.js`).
- Režimy `#demo`, `#admin`: změna adresy v otevřeném okně nově režim přepne (stránka se načte znovu).
- Potvrzení pro klíčového pracovníka obsahuje jen výsledek splnil/nesplnil, bez procent, časů a výsledků testů. Nic se neodesílá automaticky.
