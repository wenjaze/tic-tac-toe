import React from 'react'
import {useParams} from 'react-router-dom'

const Room = () =>{
    const { id } = useParams();

    return (
        <div>
            <h1>Room Page</h1>
            <p>Your room is: {id}</p>
        </div>
    )
}

export default Room
