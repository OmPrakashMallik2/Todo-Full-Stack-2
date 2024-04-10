import React, { createContext } from "react";

// 1: create context
const AuthContext = createContext();

export default function AuthProvider({ children }) {
    // 2: define initial context value
    // const initialAuthState = {
    //     isAuthenticated: false,
    //     user: null,
    // };

    return (
        // 3: provide context value
        <AuthContext.Provider >
            {children}
        </AuthContext.Provider>
    )
}
