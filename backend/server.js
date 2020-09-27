const app = require('express')();
const http = require('http').createServer(app);
const sokcetIO = require('socket.io');

const PORT = process.env.PORT || 4000;

const io = sokcetIO(http);

// DEBUGGING célból
app.get('/', (req, res) => {
    res.status(200).send("Working");
});

// Szobának a számontartására.
const room_manager = {};

io.on('connection', socket => {

    console.log('An user has joined to the server.');

    // A szoba beléptető logikája.
    socket.on('join', room => {

        // Ha a szoba még nem létezik, akkor tegyük a tagok számát 0-ra.
        if (!(room in room_manager)) {
            console.log('Createing new room.');
            room_manager[room] = 0
        }

        // Ha még van a szobában hely, akkor tegyük be az embereket.
        if (room_manager[room] < 2) {
            console.log('An user joining to room: '+ room);
            socket.join(room);
            socket._room = room;
            room_manager[room] += 1;
            socket.to(room).emit('user_joined');

            // Ha mind a 2 játékos bent van, akkor kezdőthet a játék.
            if(room_manager[room] == 2){
                io.to(room).emit('start_game', {
                    starter_player: Math.random() < 0.5 ? 'player1' : 'player2'
                });
            }
        }
        // Ha televan, akkor küldjünk vissza hiba üzenetet.
        else {
            socket.emit('room_error', 'The room is full!');
        }

    });

    // A szoba kiléptető logikája.
    socket.on('disconnect', () => {
        console.log('An user has disconnected from the server.');
        // Értesítsük a szobát, hogy a játékoosuk kilépett.
        io.to(socket._room).emit('user_disconnected');

        // Vegyük a ki a tagot a szobából és csökkentsük a tagszámot a szobában.
        socket.leave(socket._room);
        room_manager[socket._room] -= 1;

        // Kiveszzük a memóriából ha üres a szoba.
        if(room_manager[socket._room] == 0){
            console.log('Deleting empty room.');
            delete room_manager[socket._room];
        }
    });

    // A játék lépés logikája.
    socket.on('user_input', data=>{
        // Ha játékos már a szobában van.
        if('_room' in socket){
            socket.to(socket._room).emit('user_input', data);
        }
        // Ha nincs szobában hiba üzenet
        else {
            socket.emit('room_error', 'You have not joined to a room yet.');
        }
    });
});

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
    console.log('http://localhost:4000/');
});