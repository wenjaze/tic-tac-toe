import React from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuid4 } from 'uuid'
import './landing.css';


const Landing = ({ location }) => {
    return (
        <div className="body_landing">
            <div className="container">
                <div className="hero">
                    <div className="hero_brand">
                        <div className="green">Tic</div>
                        <div className="blue">Tac</div>
                        <div className="red">Toe</div>
                    </div>
                    <div className="hero_title">
                        Play Tic Tac Toe with Others!
            </div>
                    <p className="hero_message">Join an existing Room by pressing the Join Room button, or enter a username and
                    click Lets Go. You can
                also enter by pasting an existing Room link from your friend.</p>
                    <div className="hero_actions">
                        <div className="btn btn-primary" style={{ marginRight: 70 }}>
                            <Link to={`/room/${uuid4()}`}>CREATE ROOM</Link>
                        </div>
                        <div href="#" className="btn btn-secondary">JOIN EXISTING ROOM</div>
                    </div>
                </div>
            </div>
            <div className="pic_container">

            </div>
        </div>
    )
}

export default Landing
