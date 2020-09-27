const io = require('socket.io-client');

let sock = io('http://localhost:4000');

const room = 'foo';

sock.on('room_error', err=>{
    console.log('Error: ' + err);
});

sock.on('user_joined', ()=>{
    console.log(`An user joined to room: ${room}`);
});

sock.on('user_disconnected', ()=>{
    console.log(`An user disconnected from room: ${room}`);
});

sock.on('start_game', ({starter_player}) =>{
    console.log(`Starting game... ${starter_player}'s turn`);
});

sock.emit('join', room);