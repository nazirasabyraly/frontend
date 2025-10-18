import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import VacancyPage from './pages/VacancyPage'
import ApplyPage from './pages/ApplyPage'
import ChatWidget from './pages/ChatWidget'
import Header from './ui/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vacancy/:id" element={<VacancyPage />} />
        <Route path="/apply/:id" element={<ApplyPage />} />
        <Route path="/chat/:id" element={<ChatWidget />} />
      </Routes>
    </BrowserRouter>
  )
}
