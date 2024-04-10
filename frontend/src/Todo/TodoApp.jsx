import React from 'react'
import Login from './Login'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Welcome from './Welcome'
import Error from './Error'
import TodoList from './TodoList'
import Logout from './Logout'
import Header from './Header'
import Footer from './Footer'
import AuthProvider, { useAuth } from './Security/AuthContext'

function AuthenticatedRoute({ children }) {
  const authContext = useAuth()

  if (authContext.isAuthenticated) {
    return children
  }
  return <Navigate to="/" />
}

function TodoApp() {
  return (
    <div>
      <AuthProvider>

        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/welcome/:username' element={<AuthenticatedRoute> <Welcome /> </AuthenticatedRoute>} />
            <Route path='/todos' element={<AuthenticatedRoute><TodoList /></AuthenticatedRoute>} />
            <Route path='/logout' element={<AuthenticatedRoute><Logout /></AuthenticatedRoute>} />

            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </AuthProvider>
    </div>
  )
}

export default TodoApp
