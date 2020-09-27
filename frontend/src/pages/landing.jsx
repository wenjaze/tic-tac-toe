import React from 'react'
import { Link } from 'react-router-dom'

const Landing = ({location}) =>{
    console.log(location);

    return (
        <div>
            <h1>Landing Page</h1>
            <Link
                to={{
                    pathname: "/error",
                    state: { error: "Room is full!" }
                }}>Error</Link>
        </div>
    )
}

export default Landing
