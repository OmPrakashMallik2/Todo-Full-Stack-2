import React, { createContext, useContext, useState } from "react";

// 1: create context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext)

// 2: define initial context value
export default function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(false);

    const login = (username, password) => {
        if (username === 'opmallik' && password === '54321') {
            setAuthenticated(true)
            return true
        } else {
            setAuthenticated(false)
            return false
        }
    }

    const logout = () => {
        setAuthenticated(false);
    }

    return (
        // 3: provide context value
        <AuthContext.Provider value={{ isAuthenticated, login, logout }} >
            {children}
        </AuthContext.Provider>
    )
}
