import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Security/AuthContext';

function Login() {
    const [username, setUsername] = useState('opmallik')
    const [password, setPassword] = useState('54321')
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate()

    const authContext = useAuth()

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = () => {
        if (authContext.login(username, password)) {
            navigate(`/welcome/${username}`);
        } else {
            setShowErrorMessage(true);
        }
    }

    return (
        <div className='p-5'>
            <div className='p-3'>
                {showErrorMessage && (
                    <h1 className='text-xl font-semibold text-white bg-red-500 rounded py-2'>Authentication failed, Try again!</h1>
                )}
            </div>

            <div className='p-3'>
                <label>Username: </label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}
                    className='p-3 rounded bg-neutral-100'
                />
            </div>
            <div className='p-3'>
                <label>Password: </label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className='p-3 rounded bg-neutral-100'
                />
            </div>
            <div className='p-3'>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className='bg-blue-500 text-white font-bold p-3 rounded'
                >Login</button>
            </div>
        </div>
    )
}

export default Login;
