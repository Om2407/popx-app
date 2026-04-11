import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LandingScreen from './pages/LandingScreen'
import LoginScreen from './pages/LoginScreen'
import SignupScreen from './pages/SignupScreen'
import ProfileScreen from './pages/ProfileScreen'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-purple-100 flex items-center justify-center">
        <div className="w-97.5 min-h-211 bg-white rounded-[40px] overflow-hidden shadow-2xl">
          <Routes>
            <Route path="/" element={<LandingScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App