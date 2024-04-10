import React from 'react'
import { useParams, Link } from 'react-router-dom'

function Welcome() {
    const { username } = useParams();

    return (
        <div>
            <h1 className='text-5xl font-semibold p-3'>Welcome {username}</h1>
            <h1 className='text-xl font-semibold p-3'> Manage your Todo <Link className='text-blue-500 hover:underline' to="/todos">click here</Link>.</h1>
        </div>
    )
}

export default Welcome
