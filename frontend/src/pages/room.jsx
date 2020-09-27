import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import io from 'socket.io-client'
import { Redirect } from 'react-router-dom'

const sock = io('http://localhost:4000/');

const Room = () => {
    const { id } = useParams();
    const [name, setName] = useState('player1');
    const [secured, setSecured] = useState(false);
    const [my_turn, setMyTurn] = useState(false);
    const [started, setStarted] = useState(false);
    const [error, setError] = useState('');

    // Socket eventek implementálása
    useEffect(() => {

        // Ekkor mindig az hiba oldalra küldjön ezzel az üzenettel.
        sock.on('room_error', err => {
            console.log('Error: ' + err);
            setError(err);
        });

        // Ha a játékos belépett
        sock.on('user_joined', () => {
            console.log(`An user joined to room: ${id}`);
            // Maradjon a neve player1
            setSecured(true);
        });

        // Ha egy játékos kilépett
        sock.on('user_disconnected', () => {
            console.log(`An user disconnected from room: ${id}`);

            // Játék vég
            setStarted(false);

            // Mindig az egyetlen játékos lesz a player1
            setName('player1');
            setSecured(false);
        });

        // A csak az a játékos kapja ezt, aki nem küldte, ezért...
        sock.on('user_input', data => {
            console.log(`User input: ${data}`);

            // most ez a játékos jön.
            setMyTurn(true);
        });

        // Játék inditási logika
        sock.on('start_game', ({ starter_player }) => {

            // Ha másodikként érkezett, akkor legyen a neve player2
            if (!secured) {
                setName('player2');
            }

            console.log(`I am ${name}.`);

            console.log(`Starting game... ${starter_player}'s turn`);

            setStarted(true);

            // Kinek a köre és ha nem ezé a játékosé, akkor ne tudjon kattintani
            if (starter_player === name) {
                setMyTurn(true);
                console.log('This is my turn.');
            }
        });

    }, []);

    // Szobába belépés
    useEffect(() => {
        sock.emit('join', id);
    }, []);


    return error === '' ? (
        <div>
            <h1>Room Page</h1>
            <p>Your room is: {id}</p>
            <p>Invite Link: {window.location.href}</p>
            <p>{started ? '' : 'Waiting for an opponent'}</p>
            {
                !started ?
                    '':
                    <p>{my_turn ? 'It is your turn' : 'Oponent\'s turn'}</p>

            }
        </div>
    ) : (<Redirect
        to={{
            pathname: "/error",
            state: { error }
        }}
    />)
}

export default Room
