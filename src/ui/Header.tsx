import React from 'react'

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100 py-3 px-0 sticky top-0 z-30 shadow">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-2 select-none">
          <span className="text-3xl font-black text-black tracking-tight">my</span>
          <span className="text-3xl font-black text-blue-400 tracking-tight">link</span>
        </div>
        <nav className="flex items-center gap-8">
          <a href="#" className="text-blue-500 font-semibold border-b-2 border-blue-500 pb-1 transition hover:text-blue-600">СОИСКАТЕЛЯМ</a>
          <a href="#" className="text-black font-semibold hover:text-blue-500 pb-1 transition">РАБОТОДАТЕЛЯМ</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="bg-blue-100 text-blue-600 font-semibold px-5 py-2 rounded-lg hover:bg-blue-200 transition">РЕГИСТРАЦИЯ</button>
          <button className="bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-600 transition">ВОЙТИ</button>
        </div>
      </div>
    </header>
  )
}
