# Rendszerterv
### 1.0 A rendszer célja
+ **1.1** Célunk olyan valós idejű online játék létrehozása volt, amit mindenki könnyen elérhet és másokkal játszhat, felethetetlenül, bármilyen felhasználói adat gyüjtése nélkül. Online felületünkhöz bárki hozzáférhet egy böngésző és internet kapcsolat segítségével, bármikor és bárhonnan.

+ **1.2** Ami nem volt a célunk:
    + ***1.2.1** Felhasználói adatok gyűjtése.*
    + ***1.2.2** Adatok tárolása a felhasználó oldalán.*
    + ***1.2.3** Tevékenységek naplózása az oldalon.*
    + ***1.2.4** Felhasználó követő eszközök alkalmazása.*

### 2.0 Projekt terv
+ **2.1** Projekt szerepkörök felelősségek:
    + **2.1.1** Látványtervek kifejlesztése és létrehozása.
    + **2.1.2** Backend és websocket rendszer megtervezése és létrehozása.
    + **2.1.3** Frontend és routing rendszer megtervezése és létrehozása.
    + **2.1.4** Unit és integrálási tesztek létrehozása és végrehajtása.
    + **2.1.4** DevOps feladatok kivitelezése és oldal szolgáltatás publikációja.

+ **2.2** Projekt munkások és felelősségeik:

+ **2.3** Mérföldkövek és ütemterv:
    - ***2.3.1** Rendszerhez tartozó látványtervek létrehozása. →*
    - ***2.3.2** Látványtervek lefejlesztése statikus erőforrásokra. →*
    - ***2.3.3** Frontend komponensek megtervezése. →*
    - ***2.3.4** Játék logika implementálása javascriptben. →*
    - ***2.3.5** Frontend komponensek lefejlesztése.→*
    - ***2.3.6** Backend logika és routing létrehozása. →*
    - ***2.3.7** Websocket rendszer implementálása backendre. →*
    - ***2.3.8** Websocket rendszer implementálása frontendre. →*
    - ***2.3.9** Unittestek létrehozása és tesztek végrehajtása. →*
    - ***2.3.10** Bug keresése és kód refaktoriálása, ha szükséges. →*
    - ***2.3.11** Applikáció konténer létrehozása és locálist tesztelése. →*
    - ***2.3.12** Oldal webszerverre telepítése. →*
    - ***2.3.13** Szolgáltatás publikációja. →*
### 3 Üzleti folyamatok modellje
- **3.1** Játék helyszíne és ideje:
  - *Egy meghatározott helyen kell lennie mind a kettő játékosnak, valamint az időpontnak mindenkinek meg kell felelnie.*
- **3.2** Játékhoz szükséges eszközök és feltételek:
  - *Parír (lehetőleg kockás) vagy más eszköz, amire lehet ínrni.*
  - *Toll, ceruza vagy egyéb íróeszköz.*
  - *A két személynek egy helyen kell lennie és valamilyen formában tudniuk kell kommunikálni szóban.*
- **3.3** Játék menete:
  - *A játékos - akinek éppen a köre van - a 3x3 cellából álló táblázat valalamelyik cellájába berajzolja a jelét az íróeszközével.*
  - *Az előző lépés addig ismétlődik, míg egy játékot lezáró esemény nem történik.*
  - *A nem befejezett játék megmarad a lapon.*
- **3.4** Játékot lezáró események:
  - *Egy játékos győz, ha valamelyik sorban, oszlopban vagy átlóban kigyűjt a jeléből három.*
  - *A játék döntetlen, ha már nincs helye a 3x3 cellás táblán.*
  - *Eszközök elfogyása vagy meghibásodása.*
- **3.5** Játék után:
  - *A játékosok eldönthetik, hogy játszanak-e még vagy nem.*
  - *További játék feltétele, hogy van még hely a papíron és hogy működik az íróeszköz.*
### 4 Követelmények
### 5 Funkcionális  terv
