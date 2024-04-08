import React, { useState } from 'react'

function Login() {

    const [username, setUsername] = useState('user');
    const [password, setPassword] = useState('54321');

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleUsernameChange = (Event) => {
        setUsername(Event.target.value)
    }

    const handlePasswordChange = (Event) => {
        setPassword(Event.target.value)
    }

    const handleSubmit = () => {
        if (username === 'user' && password === '54321') {
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
        } else {
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    return (
        <div className='p-5'>
            <div className='p-3'>
                {showSuccessMessage && (
                    <h1 className='text-xl font-semibold text-green-500'>Authenticated Successfully!</h1>
                )}
                {showErrorMessage && (
                    <h1 className='text-xl font-semibold text-red-500'>Authentication failed, Try again!</h1>
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

export default Login