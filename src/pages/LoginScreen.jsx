import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginScreen() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/profile')
  }

  return (
    <div className="flex flex-col min-h-screen bg-white px-8 pt-14 pb-10">

      <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-2">
        Signin to your<br />PopX account
      </h1>
      <p className="text-sm text-gray-400 leading-relaxed mb-10">
        Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.
      </p>

      <form onSubmit={handleLogin} className="flex flex-col gap-5">

        {/* Email field */}
        <div className="relative border border-gray-200 rounded-lg px-3 pt-4 pb-2.5 focus-within:border-[#6c25be] transition-colors">
          <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-medium text-[#6c25be]">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full text-sm text-gray-800 outline-none placeholder-gray-300 bg-transparent"
          />
        </div>

        {/* Password field */}
        <div className="relative border border-gray-200 rounded-lg px-3 pt-4 pb-2.5 focus-within:border-[#6c25be] transition-colors">
          <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-medium text-[#6c25be]">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            className="w-full text-sm text-gray-800 outline-none placeholder-gray-300 bg-transparent"
          />
        </div>

        {/* Login button */}
        <button
          type="submit"
          className="w-full py-[14px] bg-[#6c25be] text-white font-semibold rounded-lg text-sm tracking-wide hover:bg-[#5a1fa0] active:scale-[0.98] transition-all duration-150 shadow-sm mt-4"
        >
          Login
        </button>

      </form>
    </div>
  )
}

export default LoginScreen