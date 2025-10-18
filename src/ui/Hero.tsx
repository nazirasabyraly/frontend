import React from 'react'

export default function Hero() {
  return (
    <div className="relative bg-[url('/hero-bg.jpg')] bg-cover bg-center h-[340px] flex items-center justify-center rounded-b-3xl shadow-lg overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 w-full flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-black text-white text-center mb-8 drop-shadow-lg leading-tight">Найди идеальную работу и зарабатывай больше</h1>
        <div className="flex w-full max-w-2xl shadow-lg rounded-lg overflow-hidden bg-white/90">
          <input
            className="flex-1 px-5 py-3 text-lg outline-none rounded-l-lg bg-transparent placeholder-gray-400 border-none"
            placeholder="Название вакансии"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-r-lg text-lg font-semibold transition">НАЙТИ</button>
        </div>
      </div>
    </div>
  )
}
