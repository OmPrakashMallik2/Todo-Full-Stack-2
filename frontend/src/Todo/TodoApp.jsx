import React from 'react'
import Login from './Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './Welcome'
import Error from './Error'
import TodoList from './TodoList'
import Logout from './Logout'
import Header from './Header'
import Footer from './Footer'
import AuthProvider from './Security/AuthContext'

function TodoApp() {
  return (
    <div>
      <AuthProvider>

        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/welcome/:username' element={<Welcome />} />
            <Route path='/todos' element={<TodoList />} />
            <Route path='/logout' element={<Logout />} />

            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </AuthProvider>
    </div>
  )
}

export default TodoApp
