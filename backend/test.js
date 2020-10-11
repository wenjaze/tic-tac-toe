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

// Ekkor mindig az hiba oldalra küldjön ezzel az üzenettel.
sock.on('room_error', err => {
    console.log('Error: ' + err);
});

// Ha a játékos belépett
sock.on('user_joined', () => {
    console.log(`An user joined to room: ${room}`);
    // Maradjon a neve player1
    state.secured = true;
});

// Ha egy játékos kilépett
sock.on('user_disconnected', () => {
    console.log(`An user disconnected from room: ${room}`);

    // Mindig az egyetlen játékos lesz a player1
    state.name = 'player1';
    state.secured = false;
});

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

// A csak az a játékos kapja ezt, aki nem küldte, ezért...
sock.on('user_input', data => {
    console.log(`User input: ${data}`);

    // most ez a játékos jön.
    state.my_turn = true;
});


// User belép a szobába
sock.emit('join', room);