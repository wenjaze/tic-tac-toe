import React from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuid4 } from 'uuid'

const Landing = ({ location }) => {
    console.log(location);

    return (
        <div>
            <h1>Landing Page</h1>
            <Link
                to={{
                    pathname: "/error",
                    state: { error: "Room is full!" }
                }}>Error</Link>

            <p>Create new room: <Link to={{ pathname: "/room/" + uuid4() }}>new room</Link></p>
        </div>
    )
}

export default Landing
