# 1. Jelenlegi helyzet leírása
2020 technológiai helyzetének köszönhetően a
mai kor gyermekei teljesen más környezetben nőnek fel,
élik életüket, tanulnak, na és persze **JÁTSZANAK**. Ennek a
rohamos fejlődésnek, valamint a közösségi média platformoknak,
[YouTube](https://youtube.com)-nak,
[Twitch.tv](https://www.twitch.tv)-nek köszönhetően, a videójátékokkal
játszó fiatalok száma jelentősen megnőtt. Ez a szám nem, hogy csak stagnál,
de iszonyatos léptékben növekszik napról napra.
[*LÁSD*](https://www.npd.com/wps/portal/npd/us/news/press-releases/2019/according-to-the-npd-group--73-percent-of-u-s--consumers-play-video-games/).
Továbbá az is egyre megszokottabb, ha egy felnőtt játszik
valamiféle videójátékkal. Az ESA (*Entertainment Software Association*) idei
“2019 Essential Facts About the Computer and Video Game Industry.” elnevezésű
közvéleménykutatása szerint az amerikai felnőttek közel 65%-a, magyarán több mint 164 millió
ember játszik számítógépes játékokkal az egyesült államokban.
Magyarországon ez a szám egyes becslések szerint nem tart itt, azonban általánosan
kimondható, hogy hazánkban is növekvő tendenciát mutat a videójátékozó
felnőttek aránya. A fent leírtakra támaszkodva, szeretnénk megfogni egy olyan réteget, akik nem
korspecifikusak, nem egy konkrét játék, vagy játékzsanra rajongói, hanem azok
akik, szeretnek a buszra várva, az unalmas órákon időt eltöltve, pihenve
gondolkozni.
A fent leírtakra támaszkodva, szeretnénk megfogni egy olyan réteget, akik nem
korspecifikusak, nem egy konkrét játék, vagy játékzsanra rajongói, hanem azok
akik, szeretnek a buszra várva, az unalmas órákon időt eltöltve, pihenve
gondolkozni. Aki nem tud veszíteni és meg kell mutatnia, hogy ebben is jobb
mint bárki más. Aki ezt nem hiszi el és elfogadja a kihívást. Az ilyen
embereket szeretnénk kiszolgálni egy olyan eszközzel amivel ezeket mind
megvalósíthatják. 

# 2. Vágyálomrendszer leírása
Célunk egy olyan egyszerűen játszható játék megírása, melyet mindenki ismer,
így komplexitás szempontjából a legegyszerűbb : Amőba. A játéknak online
játszhatónak kell lennie. Fontos szempont az egyszerű csatlakozás 2 féle módon:
- Szobát csinálunk
- Egy meglévő szobához csatlakozatunk
Mivel webes felület, az oldalnak átlátható letisztult UI-ai kell rendelkeznie.
Online Tic-Tac-Toe játékunk, regisztráció nélkül névtelenül játszahtó kell,
hogy legyen.

# 3. Rendszerre vonatkozó pályázat/törvények/rendeletek/szabványok és ajánlások
- **3.1** Törvények és Rendeletek:
  - Felhasználói adatokra vonatkozó törvények:
    - [https://europa.eu/youreurope/citizens/consumers/internet-telecoms/data-protection-online-privacy/index_hu.htm](https://europa.eu/youreurope/citizens/consumers/internet-telecoms/data-protection-online-privacy/index_hu.htm)
  - Sütikre (cookie-k) vonatkozó szabályozások:
    - [https://nav.gov.hu/data/cms483474/Cookie_hasznalati_tajekoztato.pdf](https://nav.gov.hu/data/cms483474/Cookie_hasznalati_tajekoztato.pdf)
  - Oldalunkra egy meghatározó európai vagy más országbeli törvény sem érvényes. Általában egyes országok megszabják, hogy az oldal, valamint az azt üzemeltető cég mit csinálhat és mit nem csinálhat a felhasználóktól gyűjtött adatokkal. Szolgáltatásunk felsoroltak közül egy módszert sem alkalmaz:
    - *Nem tárolunk adatokat a felhasználóink oldalán (legyen az böngésző vagy gép).*
    - *Nem használunk sütiket vagy más felhasználókövető eszközt.*
    - *Nem naplózunk semmit az oldalon történő tevékenységek közül.*
- **3.2** Szabványok:
  -  Szabványok: A W3C nem az egyetlen olyan szervezet volt, mely szabványokat hozott létre az internet számára. A Web Standards Project a ‘90-es években jelent meg, és a W3C-t támogatta. Egyéni küldetése az volt, hogy olcsóbbá és egyszerűbbé tegye a web működését. Habár 2013-ban megszűnt, fontos szerepe volt abban, hogy a böngészők támogassák a HTML5-et és az XHTML-t. Jelenleg is vannak a W3C-n kívül más szabványokkal foglalkozó szervezetek, melyek segítenek rendet tenni a weben. Néhány nagyobb szervezet, mely jelenleg is aktív: az Ecma már a ‘60-as évek óta létezik, célja a kommunikáció és az információs rendszerek szabványainak kialakítása. Emellett felelős az ECMAScript fejlesztéséért, mely szabványosított JavaScript. az Internet Engineering Task Force (IETF) célja az internet felépítésének erősítése, miközben egy nyitottabb környezetet hoz létre. a WHATWG közösség számos szabványt hozott létre az URL-ekkel, a kódolással, az API-kkal kapcsolatosa
  - HTTP (protocol) - A HTTP (HyperText Transfer Protocol) egy információátviteli protokoll elosztott, kollaboratív, hipermédiás, információs rendszerekhez. A HTTP fejlesztését a World Wide Web Consortium és az Internet Engineering Task Force koordinálta RFC-k formájában. Az 1999-ben kiadott RFC 2616 definiálja a HTTP/1.1-et, amit 2015 végére leváltott a HTTP/2.0-ás verzió, amit az RFC 7540 definiál. Hivatalosan ez a legújabb protokoll. A HTTP egy kérés-válasz alapú protokoll kliens és szerver között. A HTTP-klienseket a „user agent” gyűjtőnévvel is szokták illetni. A user agent jellemzően, de nem feltétlenül webböngésző.A HTTP a TCP/IP réteg felett helyezkedik el. A HTTP implementálható más megbízható szállítási réteg felett is, akár az interneten, akár más hálózaton. Kizárólagosan TCP protokollt használ, mivel az adatveszteség nem megengedhető.
  - HTML5 (Hyper Text Markup Language) - A HTML5 a HTML (Hypertext Markup Language, a web fő jelölőnyelve) korábbi verzióinak az átdolgozott változata. A kifejlesztésének egyik fő célja, hogy a webes alkalmazásokhoz ne legyen szükség pluginek (pl. Adobe Flash, Microsoft Silverlight, Oracle JavaFX) telepítésére.
  - Javascript (ES6) -  A JavaScript programozási nyelv egy objektumorientált, prototípus alapú szkriptnyelv, amelyet weboldalakon elterjedten használnak.
  - Websocket - A WebSocket internetes technológia, ami kétirányú, duplex kommunikációs csatornák kiépítését teszi lehetővé egyetlen TCP protokollon keresztül. Kifejlesztésének fő motivációja volt, hogy a webböngészőben futó alkalmazás képes legyen a szerverrel való kétirányú kommunikációra a Comet barkácsmegoldásai (több HTTP-kapcsolat nyitva tartása; XMLHttpRequest vagy és long polling) nélkül, bizonyos esetekben a szükségtelen fejlécforgalom akár 500:1-1000:1 arányú, a késleltetés 3:1 arányú csökkentésével. Korlátozó tényező volt a HTTP 1.1 specifikációja, mely kimondja, hogy a böngészőnek legfeljebb két kapcsolatot szabad egyidejűleg nyitva tartani a webszerver felé.
# 4. Jelenlegi üzleti folyamatok modellje
- **4.1** Játék helyszíne és ideje:
  - *Egy meghatározott helyen kell lennie mind a kettő játékosnak, valamint az időpontnak mindenkinek meg kell felelnie.*
- **4.2** Játékhoz szükséges eszközök és feltételek:
  - *Parír (lehetőleg kockás) vagy más eszköz, amire lehet ínrni.*
  - *Toll, ceruza vagy egyéb íróeszköz.*
  - *A két személynek egy helyen kell lennie és valamilyen formában tudniuk kell kommunikálni szóban.*
- **4.3** Játék menete:
  - *A játékos - akinek éppen a köre van - a 3x3 cellából álló táblázat valalamelyik cellájába berajzolja a jelét az íróeszközével.*
  - *Az előző lépés addig ismétlődik, míg egy játékot lezáró esemény nem történik.*
  - *A nem befejezett játék megmarad a lapon.*
- **4.4** Játékot lezáró események:
  - *Egy játékos győz, ha valamelyik sorban, oszlopban vagy átlóban kigyűjt a jeléből három.*
  - *A játék döntetlen, ha már nincs helye a 3x3 cellás táblán.*
  - *Eszközök elfogyása vagy meghibásodása.*
- **4.5** Játék után:
  - *A játékosok eldönthetik, hogy játszanak-e még vagy nem.*
  - *További játék feltétele, hogy van még hely a papíron és hogy működik az íróeszköz.*
  
# 5. Igényelt üzleti folyamatok modellje
- **5.1** Játék helyszíne és ideje:
  - *Bármikor és bárhol, ahol internetelérés van.*
- **5.2** Játékhoz szükséges eszközök és feltételek:
  - *Internetelérés és bármilyen eszköz megléte, amivel fel tud csatlakozni a weboldalra.*
- **5.3** Játék menete:
  - *A játékos csatlakozik egy már létező szobához, a szoba link segítségével.*
  - *Ha még nincs elérhető szoba, akkor a játékos készíthet egyet és meghívót küldhet bárkinek, link formájában.*
  - *A játékos - akinek éppen a köre van - a 3x3 cellából álló táblázat valalamelyik cellájába beszúrja a jelét egy új lemnyomással (tapintással).*
  - *Az előző lépés addig ismétlődik, míg egy játékot lezáró esemény nem történik.*
  - *A nem befejezett játék nem marad meg, helyette újrakezdődik a játék.*
- **5.4** Játékot lezáró események:
  - *Egy játékos győz, ha valamelyik sorban, oszlopban vagy átlóban kigyűjt a jeléből három.*
  - *A játék döntetlen, ha már nincs helye a 3x3 cellás táblán.*
  - *Eszközök elfogyása vagy meghibásodása.*
  - *Internet kapcsolat megszakadása.*
- **5.5** Játék után:
  - *A játékosok eldönthetik, hogy játszanak-e még vagy nem.*
  - *A játék nem marad meg, nem lesz elmentve.*
  - *Ha valamenyik játékos még marad a virtuális szobában, akkor megint meg tud hívni más játékosokat a szoba linkjével.*

# 6. Követelménylista
- Reszponzív, mobilbarát design
- Gyors betöltődés, optimalizáció a lassú internetkapcsolattal rendelkező felhasználók részére
- Az alapvető biztonsági és adatvédelmi protokollok
- Egyszerű felület, könnyű kezelhetőség

# 7. Irányított és szabad szöveges riportok szövege
A megválaszolatlan kérdéseket majd élőben feltesszük.

# 8. Fogalomszótár
- **Tic-tac-toe** - kétszemélyes absztrakt stratégiai táblás játék, a gomoku játékcsalád egy széleskörben ismert tagja, amit már az ókori Egyiptom területén is ismertek.
- **Real-time** - valós idejű feldolgozás.
- **Webszerver** - webhosting cégek által üzemeltetett számítógépek, amiket jellemzően adatközpontoknak (data center) nevezett helyeken hoznak létre. A webszerverek egyetlen célja az, hogy honlapokat tároljanak, amíg nem jön egy látogató, ekkor pedig megjelenítik az oldal tartalmát a látogató böngészőjében.
- **Microservice** - egy alkalmazást külön processzben futó, egymással valamilyen, viszonylag egyszerű mechanizmussal kommunikáló (ez legtöbbször egy HTTP API) kisebb szolgáltatások összességéből építünk fel.
- **Reszponzív** design - a weboldalnak egy olyan kialakítása, amelyik rugalmasan alkalmazkodik a különböző böngészők képernyőjének méretéhez annak érdekében, hogy optimális megjelenést biztosítson a felhasználónak minden böngészésre alkalmas eszközön, legyen az desktop, laptop, mobil, vagy tablet.
- **Böngésző** - Webböngészőnek vagy böngészőnek (angolul browser) nevezzük azon programokat, amelyekkel az interneten található tartalmakat – legtöbbször weblapokat – lehet megtekinteni, illetve az interneten keresztül elérhető szolgáltatásokat használni.
- **Sütik (cookies)** -  A HTTP-süti (általában egyszerűen süti, illetve angolul cookie) egy információcsomag, amelyet a szerver küld a webböngészőnek, majd a böngésző visszaküld a szervernek minden, a szerver felé irányított kérés alkalmával. A sütiket maga a webszerver hozza létre a böngésző segítségével a felhasználó gépén, ahol azok egy elkülönített könyvtárban kerülnek tárolásra. Lou Montulli, a Netscape Communications egykori alkalmazottja használta először a süti technikát a webes kommunikációban.
- **Naplózás (log)** - Az oldalon vagy az oldallal történő események rögzítése, naplózása valamilyen formában (általában szöveges fájl formában). Ez egy külön program feladata, amit naplózó programnak vagy logger-nek nevezünk.
- **Javascript** - A JavaScript programozási nyelv egy objektumorientált, prototípus alapú szkriptnyelv, amelyet weboldalakon elterjedten használnak.
- **Link** - Hiperhivatkozás (angolul hyperlink), más néven link, ugrópont, kapocs, a hiperszöveges és a hipermediális rendszerek elemeit, objektumait összekötő eszköz. Értelmezéséhez különleges, számítógépes alkalmazásra van szükség. Hiperhivatkozással legtöbbször az internet böngészése közben találkozhatunk, ahol a hasonló témájú információk így vannak összekötve.
- **URL** - Az URL vagy más néven webcím (mely a Uniform Resource Locator [egységes erőforrás-helymeghatározó] rövidítése), az interneten megtalálható bizonyos erőforrások (például szövegek, képek) szabványosított címe.
- **Átirányítás** - Átirányításnak azt nevezzük, amikor egy lap nem tartalmaz szöveget, hanem csak egy hivatkozást egy másik lapra, a céllapra. Ha rákattintunk egy átirányító lapra mutató belső hivatkozásra, akkor automatikusan a céllapra jutunk. Ha ezt a belső linket zöld színben látod, akkor a te beállításaidban, ahol ki-bekapcsolható, be van kapcsolva az a segédeszköz, hogy az átirányításra mutató belső linkek kék helyett zölden jelenjenek meg.
- **HTTP (protocol)**- A HTTP (HyperText Transfer Protocol) egy információátviteli protokoll elosztott, kollaboratív, hipermédiás, információs rendszerekhez. A HTTP fejlesztését a World Wide Web Consortium és az Internet Engineering Task Force koordinálta RFC-k formájában. Az 1999-ben kiadott RFC 2616 definiálja a HTTP/1.1-et, amit 2015 végére leváltott a HTTP/2.0-ás verzió, amit az RFC 7540 definiál. Hivatalosan ez a legújabb protokoll. A HTTP egy kérés-válasz alapú protokoll kliens és szerver között. A HTTP-klienseket a „user agent” gyűjtőnévvel is szokták illetni. A user agent jellemzően, de nem feltétlenül webböngésző.A HTTP a TCP/IP réteg felett helyezkedik el. A HTTP implementálható más megbízható szállítási réteg felett is, akár az interneten, akár más hálózaton. Kizárólagosan TCP protokollt használ, mivel az adatveszteség nem megengedhető.
- **Websocket** - A WebSocket internetes technológia, ami kétirányú, duplex kommunikációs csatornák kiépítését teszi lehetővé egyetlen TCP protokollon keresztül. Kifejlesztésének fő motivációja volt, hogy a webböngészőben futó alkalmazás képes legyen a szerverrel való kétirányú kommunikációra a Comet barkácsmegoldásai (több HTTP-kapcsolat nyitva tartása; XMLHttpRequest vagy és long polling) nélkül, bizonyos esetekben a szükségtelen fejlécforgalom akár 500:1-1000:1 arányú, a késleltetés 3:1 arányú csökkentésével. Korlátozó tényező volt a HTTP 1.1 specifikációja, mely kimondja, hogy a böngészőnek legfeljebb két kapcsolatot szabad egyidejűleg nyitva tartani a webszerver felé. A WebSocketet megelőzően nem volt lehetséges komplexebb, a szerverrel valós idejű kommunikációt igénylő webes alkalmazást, pl. csevegő alkalmazások, árfolyamkijelzők, játékok, levelezőkliensek a HTTP-kapcsolat nem rendeltetésszerű használata nélkül megvalósítani. Bár a fő cél a webböngészőkben és webszervereken való implementáció, más kliens-szerver megoldásokban is használható. A WebSocket API-t a W3C szabványosítja, míg a WebSocket protokollt az IETF az RFC 6455-ben írja le. Mivel nem otthoni környezetben a nem a 80-as TCP portra irányuló kapcsolatokat a rendszergazdák sok esetben blokkolják, a WebSocket arra is használható, hogy a korlátozások ellenére – és a protokollból eredő némi vízfej mellett – az egyetlen hozzáférhető TCP porton több WebSocket-szolgáltatást multiplexáljanak.
