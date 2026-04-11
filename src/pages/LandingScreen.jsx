import React from 'react'
import { useNavigate } from 'react-router-dom'

function LandingScreen() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col justify-end min-h-screen bg-white px-8 pb-14 relative overflow-hidden">

      {/* Subtle ambient glow - replaces clunky dots */}
      <div
        className="absolute top-0 left-0 w-full h-[50%] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 65% 25%, rgba(108,37,190,0.09) 0%, transparent 68%)',
        }}
      />

      {/* Wordmark / logo area */}
      <div className="absolute top-10 left-8 z-10">
        <span className="text-xs font-semibold tracking-[0.18em] text-[#6c25be] uppercase opacity-60">
          PopX
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <h1 className="text-[2rem] font-bold text-gray-900 mb-3 leading-snug">
          Welcome to PopX
        </h1>
        <p className="text-sm text-gray-400 mb-10 leading-relaxed max-w-[260px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <button
          onClick={() => navigate('/signup')}
          className="w-full py-[14px] bg-[#6c25be] text-white font-semibold rounded-lg mb-3 text-sm tracking-wide hover:bg-[#5a1fa0] active:scale-[0.98] transition-all duration-150 shadow-sm"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate('/login')}
          className="w-full py-[14px] bg-[#ede8f5] text-[#6c25be] font-semibold rounded-lg text-sm tracking-wide hover:bg-[#e0d6f0] active:scale-[0.98] transition-all duration-150"
        >
          Already Registered? Login
        </button>
      </div>

    </div>
  )
}

export default LandingScreen