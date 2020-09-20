const express = require('express');
const http = require('http');
const sokcetIO = require('socket.io');

const PORT = process.env.PORT || 4000;

const app = express();
const server = http.createServer(app);
const io = sokcetIO(server);


app.get('/', (req, res) => {
    res.status(200).send("Working");
});

io.on('connection', socket => {
    console.log('New user just connected...');

    socket.on('disconnect', ()=>{
        console.log('User disconnected!');
    })
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));