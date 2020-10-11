Tesztjegyzőkönyv
================

Tesztelendő program összefoglalása
----------------------------------
A projektet 2 fő részre lehet felosztani: backend és frontend. Ennek a két főalkotó elemnek kell tökéletesen harmóniában lennie, ezért fontos hogy több integrálási teszt legyen, mint unit teszt. A web applikáció kritikus pontja a backend, ugyanis funkcionalitás 90%-ka innen jön.

Testelési környezet és eszközök
-------------------------------

### Backend
A backend egy egyszerű nodejs applikáció, ami főleg socket.io könyvtárra épül, ezért nem áll rendelkezésünkre sok tesztelő program. Erre külön script-et kell írni, ugyanúgy a socket.io könyvtárra építve. Szerencsére a dokumentációban részletesen leírták a kliensük API-jának használatát.
> **Megjegyzés** : a socket.io kliensről [itt](https://socket.io/docs/client-api/) lehet többet megtudni.

### Frontend
Frontendet már több szemszögből kell tesztelni. A frontend a React keretrendszerben íródott, sajnos ezért néhány funkcióját manuálisan kell tesztelni és nem lehet automatizálni. A React virtuális DOM-ot használ, ami nem jelenik meg az oldal betöltésekor, ezért emberi kézi tesztre van szükség. Egyéb responsive tesztek elvégzése is kézzel, emberi erőforrással történik.

#### Böngészők és környezetek
+ Mozilla Firefox - [https://www.mozilla.org/hu/firefox/new/](https://www.mozilla.org/hu/firefox/new/)
+ Google Chrome - [https://www.google.com/intl/hu_hu/chrome/](https://www.google.com/intl/hu_hu/chrome/)
+ Microsoft Edge - [https://www.microsoft.com/hu-hu/edge](https://www.microsoft.com/hu-hu/edge)
+ Chromium - [https://www.chromium.org/](https://www.chromium.org/)

Tesztek
-------

### Backend tesztek

A backend tesztelését nem lehet kisebb unit tesztekre bontani! A teszt már egy nagy integrálási teszt script-jében van implementálva. Ez a script megtalálható a ***backend*** mappában a ***test.js*** fájlban. Elérési útvonal: ``` TIC-TAC-TOE/backend/test.js ```.

#### 0. Teszt környezetének előkészítése

```javascript
// Socket.io kliens API könyvtár meghívása
const io = require('socket.io-client');

// Websocket léhtrehozása
let sock = io('http://localhost:4000');

// Ez majd query paraméter lesz.
// ?id=foo
// id lehet bármi, de most uuid vagy md5 hash lesz
const room = 'foo';

// Játék állapotai
const state = {
    name: 'player1',
    secured: false, // Marad-e a neve player1 vagy sem.
    my_turn: false // table_disabled
};
```

#### 1. Teszt a hiba üzenetek megszerzése és kiírása

```javascript
// Ekkor mindig az hiba oldalra küldjön ezzel az üzenettel.
sock.on('room_error', err => {
    console.log('Error: ' + err);
});
```

#### 2. Játékos belépése a szobába és játék állapot frissítése

```javascript
// Ha a játékos belépett
sock.on('user_joined', () => {
    console.log(`An user joined to room: ${room}`);
    // Maradjon a neve player1
    state.secured = true;
});
```

#### 3. Játékos kilépése a szobából és játék állapot frissítése

```javascript
// Ha egy játékos kilépett
sock.on('user_disconnected', () => {
    console.log(`An user disconnected from room: ${room}`);

    // Mindig az egyetlen játékos lesz a player1
    state.name = 'player1';
    state.secured = false;
});
```

#### 4. Játékos elindítása és játék logika tesztelése

```javascript
// Játék inditási logika
sock.on('start_game', ({ starter_player }) => {

    // Ha másodikként érkezett, akkor legyen a neve player2
    if(!state.secured){
        state.name = 'player2';
    }

    console.log(`I am ${state.name}.`);

    console.log(`Starting game... ${starter_player}'s turn`);

    // Kinek a köre és ha nem ezé a játékosé, akkor ne tudjon kattintani
    if(starter_player == state.name){
        state.my_turn = true;
        console.log('This is my turn.');
    }


    // Ez csak akkor lehet küldeni, ha a játék elkezdődött.
    setTimeout(() => {
        // Ha a játékos lépett.
        sock.emit('user_input', {type: 'step', row: 0, col: 1 });
        // Ha a játkos újra akarja kezdeni (függetlenül, hogy a másik akarja vagy sem).
        sock.emit('user_input', {type: 'restart'});
    }, Math.floor(Math.random()) * 10000);
});
```

#### 5. Játékos lépésének közvetítése a másik játékos részére és engedély kiadása

```javascript
// A csak az a játékos kapja ezt, aki nem küldte, ezért...
sock.on('user_input', data => {
    console.log(`User input: ${data}`);

    // most ez a játékos jön.
    state.my_turn = true;
});
```

### Frontend tesztek
Frontend tesztek lebonyolitása emberi erőforrással, kézzel történt, mivel a virtuális DOM megakadályozta, hogy automatizálva legyen. Tesztelés során nem találtunk problémát. Reszponzivitás és funkcionalitás szempontjából minden működött. Web applikációnk tökéletesen működött a felsorolt tesztelési környezetekben.
  
Általános értékelés
-------------------
Web applikációnk müködése elvárás szerint működik. Az előírtaknak megfelelően mindent teljesítettünk.

Eredmények összefoglalása
--------------------------
Létrehoztunk sikeresen egy online valósidejű web applikációt, az előírt követelmények szerint. Tesztelés folyamán minden teszten átment.

Előre haladás
-------------
A jelenlegi forma a végső állapot, bővíteni az applikációt és a teszteket könyedén lehet.