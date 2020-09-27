const io = require('socket.io-client');

let sock = io('http://localhost:4000');

const room = 'foo';

sock.on('room_error', err=>{
    console.log('Error: ' + err);
});

sock.on('user_joined', ()=>{
    console.log(`An user joined to room: ${room}`);
});

sock.emit('join', room);