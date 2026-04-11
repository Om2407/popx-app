import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignupScreen() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/profile')
  }

  // Reusable floating-label input
  const FloatInput = ({ label, name, type = 'text', placeholder, required }) => (
    <div className="relative border border-gray-200 rounded-lg px-3 pt-4 pb-2.5 focus-within:border-[#6c25be] transition-colors">
      <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-medium text-[#6c25be]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleChange}
        required={required}
        className="w-full text-sm text-gray-800 outline-none placeholder-gray-300 bg-transparent"
      />
    </div>
  )

  return (
    <div className="flex flex-col min-h-screen bg-white px-8 pt-14 pb-10">

      <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-8">
        Create your<br />PopX account
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        <FloatInput label="Full Name*"        name="fullName"     placeholder="Enter your full name"  required />
        <FloatInput label="Phone number*"     name="phone"        type="tel" placeholder="+91 00000 00000" required />
        <FloatInput label="Email address*"    name="email"        type="email" placeholder="example@email.com" required />
        <FloatInput label="Password*"         name="password"     type="password" placeholder="Create a password" required />
        <FloatInput label="Company name"      name="companyName"  placeholder="Your company (optional)" />

        {/* Agency toggle */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-3">
            Are you an Agency?*
          </p>
          <div className="flex gap-8">
            {['yes', 'no'].map((val) => (
              <label key={val} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  value={val}
                  checked={formData.isAgency === val}
                  onChange={handleChange}
                  className="accent-[#6c25be] w-4 h-4"
                />
                {val.charAt(0).toUpperCase() + val.slice(1)}
              </label>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-[14px] bg-[#6c25be] text-white font-semibold rounded-lg text-sm tracking-wide hover:bg-[#5a1fa0] active:scale-[0.98] transition-all duration-150 shadow-sm mt-2"
        >
          Create Account
        </button>

      </form>
    </div>
  )
}

export default SignupScreen