import React from 'react'
import './error.css';
import { Link } from 'react-router-dom'

const Error = ({ location }) => {
    const { error } = location.state || { error: 'Internal server error!' };
    return (
        <div className="body_error">
            <div className="container">
                <div className="brand">
                    <div className="green">Tic</div>
                    <div className="blue">Tac</div>
                    <div className="red">Toe</div>
                </div>

                <h1 className="error_message">{error}</h1>
                <p>Go to the landing page or Check back later</p>
                <div className="btn btn-primary">
                    <Link to="/">GO TO LANDING PAGE</Link>
                </div>
            </div>
        </div>
    )
}

export default Error
