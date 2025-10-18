import React from 'react'
import Hero from '../ui/Hero'
import Vacancies from '../ui/Vacancies'

export default function Home(){
  return (
    <div className="min-h-screen bg-white">
      {/* Header is now in App.tsx */}
      <Hero />
      <div className="container mx-auto px-4 -mt-8">
        <Vacancies />
      </div>
    </div>
  )
}
