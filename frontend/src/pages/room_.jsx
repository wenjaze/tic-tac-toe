import React, { useEffect, useState, Component } from 'react'
import { useParams } from 'react-router-dom'
import io from 'socket.io-client'
import { Redirect, Link } from 'react-router-dom'
import './room.css';


export class Room extends Component {
    state = {
        name: 'player1',
        secured: false,
        my_turn: false,
        started: false,
        error: '',
        board: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    handle_step = (cell, n) => {
        let b = board;
        b[cell] = n;
        setBoard(b);
    }

    reset_board = () => {
        setBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }

    handle_input = (index) => {
        if (my_turn && board[index] == 0) {
            sock.emit('user_input', { type: 'step', cell: index });
            handle_step(index, 1);
            setMyTurn(false);
        }
    }

    componentDidMount() {
        this.sock = io('http://localhost:4000/');

        // Ekkor mindig az hiba oldalra küldjön ezzel az üzenettel.
        this.sock.on('room_error', err => {
            console.log('Error: ' + err);
            setError(err);
        });

        // Ha a játékos belépett
        this.sock.on('user_joined', () => {
            console.log(`An user joined to room: ${id}`);
            // Maradjon a neve player1
            setSecured(true);
        });

        // Ha egy játékos kilépett
        this.sock.on('user_disconnected', () => {
            console.log(`An user disconnected from room: ${id}`);

            // Játék vég
            setStarted(false);

            // Új tábla
            reset_board();

            // Mindig az egyetlen játékos lesz a player1
            setName('player1');
            setSecured(false);
        });

        // A csak az a játékos kapja ezt, aki nem küldte, ezért...
        this.sock.on('user_input', data => {
            console.log(`User input: ${data}`);
            handle_step(data.cell, 2);
            // most ez a játékos jön.
            setMyTurn(true);
        });

        // Játék inditási logika
        this.sock.on('start_game', ({ starter_player }) => {
            console.log('DEBUG: ' + secured);
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

        this.sock.emit('join', id);

    }


    render() {
        return error === '' ? (
            <div className="body_room">
                <div className="header">
                    <Link to="/">
                        <div className="brand">
                            <div className="green">Tic</div>
                            <div className="blue">Tac</div>
                            <div className="red">Toe</div>
                        </div>
                    </Link>
                    <div className="btn btn-primary" onClick={
                        () => {
                            window.navigator.clipboard.writeText(window.location.href)
                                .then(() => console.log('COPIED LINK'));
                        }
                    }>Copy Link</div>
                </div>
                <div className="indicator">
                    {!started ? 'Waiting for another player.' : my_turn ? 'Your turn!' : 'Opponent\'s turn!'}
                </div>
                <div className="board">
                    {board.map((v, index) => {
                        return (
                            <div className="cell" key={index} onClick={() => handle_input(index)}>
                                {v === 0 ? null : v === 2 ? <div className="circle"></div> : <div className="circle-red"></div>}
                            </div>
                        )
                    })}
                </div>
            </div>
        ) : (<Redirect
            to={{
                pathname: "/error",
                state: { error }
            }}
        />)
    }
}

export default Room

