const app = require('express')();
const http = require('http').createServer(app);
const sokcetIO = require('socket.io');

const PORT = process.env.PORT || 4000;

const io = sokcetIO(http);


app.get('/', (req, res) => {
    res.status(200).send("Working");
});

// Szobának a számontartására.
const room_manager = {};

io.on('connection', socket => {

    console.log('User joined');

    socket.on('join', room => {

        // Ha a szoba még nem létezik, akkor tegyük a tagok számát 0-ra.
        if (!(room in room_manager)) {
            console.log('Createing room');
            room_manager[room] = 0
        }

        // Ha még van a szobában hely, akkor tegyük be az embereket.
        if (room_manager[room] < 2) {
            console.log('Joining');
            socket.join(room);
            socket._room = room;
            room_manager[room] += 1;
            socket.to(room).emit('user_joined', '')
        }
        // Ha televan, akkor küldjünk vissza hiba üzenetet.
        else {
            socket.emit('room_error', 'The room is full!');
        }

    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
        // Vegyük a ki a tagot a szobából és csökkentsük a tagszámot a szobában.
        socket.leave(socket._room);
        room_manager[socket._room] -= 1;

        // Kiveszzük a memóriából ha üres a szoba.
        if(room_manager[socket._room] == 0){
            console.log('deleting room')
            delete room_manager[socket._room];
        }
    })
});

//app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
http.listen(PORT, () => console.log('Http listening...'));