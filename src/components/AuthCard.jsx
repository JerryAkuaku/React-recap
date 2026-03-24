import React from 'react'

export default function AuthCard({ children }) {
  return (
    <div className="max-w-md bg-chatgptDark text-gray-100 p-8 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <img
          src="/src/assets/image.png"
          alt="alle-ai"
          className="h-10 w-10 object-contain"
        />
        <div>
          <div className="text-2xl font-bold">alle-ai</div>
          <div className="text-xs text-gray-400">Your All-in-One AI</div>
        </div>
      </div>

      <div className="bg-chatgptDark border border-borderDark p-6 rounded-xl shadow-inner">
        {children}
      </div>
    </div>
  )
}
