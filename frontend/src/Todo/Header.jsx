import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './Security/AuthContext';

function Header() {

    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated

    const logout = () => {
        authContext.setAuthenticated(false);
    }

    return (
        <div className='flex p-5 bg-purple-400'>

            <div className='w-1/2'>
                <Link className='text-4xl font-bold' to="/">OPM Todo</Link>
            </div>

            <div className='flex justify-around w-1/2 items-center'>
                {isAuthenticated && <Link to="/" className='text-xl font-medium hover:underline'>Home</Link>}
                {isAuthenticated && <Link to="/todos" className='text-xl font-medium hover:underline'>Todos</Link>}
                {!isAuthenticated && < Link to="/login" className='text-xl font-medium hover:underline'>Login</Link>}
                {isAuthenticated && <Link to="/logout" onClick={logout} className='text-xl font-medium hover:underline'>Logout</Link>}
            </div>

        </div >
    )
}

export default Header
