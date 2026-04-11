import React from 'react'

function ProfileScreen() {
  const user = {
    name: 'Marry Doe',
    email: 'Marry@Gmail.Com',
    bio: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam',
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Header */}
      <div className="px-6 pt-12 pb-5 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-5">
          Account Settings
        </h2>

        <div className="flex items-center gap-4">

          {/* Avatar with camera badge */}
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#6c25be] rounded-full border-2 border-white flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-white">
                <path d="M12 9a3 3 0 100 6 3 3 0 000-6zm6.5-4H17l-1.5-2h-7L7 5H5.5A2.5 2.5 0 003 7.5v11A2.5 2.5 0 005.5 21h13a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0018.5 5zm1.5 13.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 18.5v-11A1.5 1.5 0 015.5 6H8l1.5-2h5L16 6h2.5A1.5 1.5 0 0120 7.5v11z"/>
              </svg>
            </div>
          </div>

          {/* Name & email */}
          <div>
            <h3 className="text-base font-semibold text-gray-900">
              {user.name}
            </h3>
            <p className="text-sm text-[#6c25be] font-medium">
              {user.email}
            </p>
          </div>

        </div>
      </div>

      {/* Bio */}
      <div className="px-6 py-5 border-b border-dashed border-gray-200">
        <p className="text-sm text-gray-400 leading-relaxed">
          {user.bio}
        </p>
      </div>

    </div>
  )
}

export default ProfileScreen
