import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow">
      <div className="font-black text-2xl"><span className="text-black">my</span> <span className="text-blue-500">link</span></div>
      <nav className="flex gap-8">
        <Link to="/" className={`font-semibold ${location.pathname === '/' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-black'}`}>Соискателям</Link>
        <Link to="/employer" className={`font-semibold ${location.pathname === '/employer' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-black'}`}>Работодателям</Link>
      </nav>
      <div className="flex gap-2">
        <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold">РЕГИСТРАЦИЯ</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold">ВОЙТИ</button>
      </div>
    </header>
  )
}
