import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='flex p-5 bg-purple-400'>

            <div className='w-1/2'>
                <Link className='text-4xl font-bold' to="/">OPM Todo</Link>
            </div>

            <div className='flex justify-around w-1/2 items-center'>
                <Link to="/" className='text-xl font-medium hover:underline'>Home</Link>
                <Link to="/todos" className='text-xl font-medium hover:underline'>Todos</Link>
                <Link to="/login" className='text-xl font-medium hover:underline'>Login</Link>
                <Link to="/logout" className='text-xl font-medium hover:underline'>Logout</Link>
            </div>
        </div >
    )
}

export default Header
