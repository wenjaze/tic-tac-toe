import React from 'react'

const Error = ({location}) =>{
    const {error}  = location.state || {error: 'Internal server error!'};
    return (
        <div>
            <h1>Error : {error}</h1>
        </div>
    )
}

export default Error
