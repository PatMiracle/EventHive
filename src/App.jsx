import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import College from './pages/College'
import Event from './pages/Event'
import AllEvents from './pages/AllEvents'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="event" element={<Event />} />
        <Route path="college" element={<College />} />
        <Route path="all-events" element={<AllEvents />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
