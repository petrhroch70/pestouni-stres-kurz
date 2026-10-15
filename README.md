# Stres v pěstounské péči – e-learning (7 hodin, verze 1.1)

Statická webová aplikace pro vzdělávání pěstounů a osob pečujících. Nepotřebuje server, databázi ani sestavení. Stačí nahrát složku na libovolný web.

## Spuštění

```
cd elearning-pestouni
python3 -m http.server 8000
```

Pak otevřete `http://localhost:8000`. Funguje i přímé otevření `index.html` z disku.

**Režim náhledu** (pro lektora nebo doprovázející organizaci): přidejte do adresy `#nahled`. Čas se nevyžaduje a osvědčení je označené jako neplatné. Režim se uloží do postupu v prohlížeči, takže pro běžné studium použijte jiný prohlížeč nebo „Smazat postup a začít znovu“.

## Struktura kurzu (420 min)

| Blok | Obsah | Doporučený čas |
|---|---|---|
| 0 | Úvod, video lektora, Pěstounské zrcadlo (vstup), očekávání | 20 min |
| 1 | Co je stres, tři mýty o stresu, stresory, tělo a emoce | 50 min |
| 2 | Děti s traumatem, Ruka potřeb, boj/útěk/zamrznutí | 55 min |
| 3 | Tělo jako nástroj, relaxace a aktivace (Jacobson, autogenní trénink) | 52 min |
| 4 | Vlastní stres pěstouna, psychosomatika, vyhoření, odolnost | 61 min |
| 5 | Techniky pro děti | 50 min |
| 6 | Společné aktivity a technostres | 45 min |
| 7 | Dlouhodobý plán, krizový plán, podpora, krizová období, Zrcadlo (výstup) | 37 min |
| 8 | **Nová lekce:** Strategie zvládání stresu (13 strategií) | 35 min |
| závěr | Závěrečný test (20 otázek), hodnocení, osvědčení | 15 min |

**Verze 1.1** přidává obsah z původního Moodle kurzu „Hroší kůže pro přechodné pěstouny“ (OSPOD Mladá Boleslav, 2021): třináct strategií zvládání stresu, tři mýty o stresu, Ruka potřeb, relaxaci a aktivaci, psychosomatiku, rizikové profese, psychickou odolnost, krizová období, videa lektora a odborníků (odkazy na YouTube), prezentace (PDF). Podrobnosti viz `MOODLE-IMPORT.md`.

Každá lekce obsahuje modelovou scénu (Marek, Jan, Klára), výklad, interaktivní cvičení (dechový průvodce, vedená relaxace, zemnění s časovačem, 5-4-3-2-1, třídění reakcí, žebřík nervového systému, emoční barometr, fáze vyhoření, záblesky, krizový plán, digitální dohoda), kazuistiku s rozhodováním, reflexi do deníku, shrnutí se zdroji a kontrolní test (5 otázek, ≥ 80 %).

## Mluvené slovo a podcast

- **Poslechnout tuto stránku:** na každé stránce kapitoly. Scény čtou hlasy postav, ostatní text vypravěč. Čtený odstavec se zvýrazní.
- **Podcast o zvládání stresu:** 17 dílů, asi 70 minut. Rozhovor vede Klára, vysvětluje Jan a Marek přidává zkušenost z praxe. Díly jsou u každé kapitoly i pohromadě na stránce *Podcast* s přepisy.
- **Přehrávač** v dolní liště hraje dál i při procházení kurzu. Umí pauzu, přeskočení repliky, tempo a výběr hlasů. Poslech se počítá do aktivního času.

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

- **Volný postup:** kapitoly i kroky lze procházet v libovolném pořadí. Časy jsou doporučené a postup neblokují.
- **Kapitola se započte**, když účastník splní aspoň 60 % jejích kroků (prohlédnuté texty, hotová cvičení, reflexe, test) **nebo** v ní stráví aspoň 60 % doporučeného času. Hlavička kapitoly ukazuje oba podíly.
- **Aktivní čas** se měří po sekundách v otevřené lekci a jen při aktivitě: pohyb myši, psaní, posun, dotyk, dechová cvičení nebo poslech. Po 3 minutách nečinnosti nebo při skryté záložce se zastaví.
- **Podmínky osvědčení:**
  1. Všechny kapitoly (0–7) započtené podle pravidla 60 %.
  2. Závěrečný test aspoň na 60 %.
  3. Aktivní čas v aplikaci aspoň 180 min, tedy 50 % z 360.
  4. Hodnocení kurzu.
  5. Pokud je aktivní čas pod 360 min, **čestné prohlášení** o zbývajícím čase. Účastník vybere činnosti (sebereflexe, četba, diskuse, další zdroje, nácvik technik) a stručně popíše, jak dobu využil (aspoň 80 znaků). Prohlášení se zpřístupní až po dosažení 180 min.
- **Osvědčení** uvádí zvlášť aktivní studium v aplikaci a samostudium podle prohlášení (dohromady 360 min). Dále obsahuje text prohlášení, řádek pro podpis účastníka a řádek pro **ověření klíčovým pracovníkem**. Je platné až po tomto ověření.
- **Kontrolní kód** je hash ze jména, časů, výsledku a data vystavení. Slouží ke kontrole souladu se záznamem o studiu. Nejde o elektronický podpis.
- Účastník může **stáhnout záznam o studiu (JSON)**, včetně prohlášení, nebo ho zkopírovat jako text a poslat doprovázející organizaci.

**Omezení:** postup se ukládá do `localStorage` prohlížeče. Nesdílí se mezi zařízeními a smazáním dat prohlížeče se ztratí. Pro centrální evidenci by bylo potřeba napojení na LMS (např. Moodle přes SCORM/xAPI) nebo jednoduchý backend. O započtení do 24 hodin podle § 47a zákona č. 359/1999 Sb. rozhoduje doprovázející organizace.

## Nastavení

V `js/content-1.js` (objekt `window.COURSE`):

- `moduleQuizPass`: hranice kontrolních testů (výchozí 0.6),
- `finalPass`: hranice závěrečného testu (výchozí 0.6),
- `minActiveShare`: povinný podíl aktivního času z 360 min (výchozí 0.5),
- `lessonShare`: podíl obsahu nebo času pro započtení kapitoly (výchozí 0.6),
- `idleSeconds`: po kolika sekundách nečinnosti se čas zastaví (výchozí 180),
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
