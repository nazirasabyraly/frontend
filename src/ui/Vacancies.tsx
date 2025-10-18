import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const tabs = [
  { label: 'Новые вакансии', desc: 'Недавно опубликованные', active: true },
  { label: 'Топ вакансий', desc: 'Самые популярные вакансии' },
  { label: 'Работа без опыта', desc: 'Можно без опыта работы' },
  { label: 'Удаленная работа', desc: 'Можно работать из дома' },
]

const vacancies = [
  {
    id: 1,
    name: 'Репетитор',
    company: 'Jane (Жайна Закирхан)',
    salary: 'от 50 000 до 150 000 KZT до вычета налогов',
    city: 'Казахстан Алматы',
    experience: 'Более 6 лет',
    type: 'Проектная работа',
    schedule: 'Гибкий график',
    published: 'менее одного дня назад',
    preview: true,
    description: 'Хорошая работа',
  },
  {
    id: 2,
    name: 'Репетитор',
    company: 'Jane (Жайна Закирхан)',
    salary: 'от 50 000 до 150 000 KZT до вычета налогов',
    city: 'Город Алматы',
    experience: 'Более 6 лет',
    type: 'Проектная работа',
    schedule: 'Гибкий график',
    published: 'менее одного дня назад',
    preview: false,
    description: 'Хорошая работа',
  },
]

export default function Vacancies() {
  const [previewId, setPreviewId] = useState<number|null>(null)
  const [showDetails, setShowDetails] = useState(false)
  const navigate = useNavigate()

  const handlePreview = (id: number) => {
    setPreviewId(id)
    setShowDetails(false)
  }

  const handleDetails = (id: number) => {
    navigate(`/vacancy/${id}`)
  }

  const leftVacancy = vacancies[0]
  const rightVacancy = previewId ? vacancies.find(v => v.id === previewId) : null

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left: Vacancy Card List */}
      <div className="flex flex-col gap-6">
        {vacancies.map((v) => (
          <div key={v.id} className={`rounded-xl border ${v.preview ? 'border-blue-300' : 'border-gray-200'} bg-white p-6 shadow-md flex flex-col gap-2 transition hover:shadow-lg`}>
            <div className="flex items-center justify-between">
              <div className="text-blue-600 font-medium text-sm mb-1 cursor-pointer hover:underline">{v.company}</div>
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <svg width="24" height="24" fill="none" stroke="#aaa"><circle cx="12" cy="8" r="4" strokeWidth="2"/><path d="M4 20c0-4 16-4 16 0" strokeWidth="2"/></svg>
              </div>
            </div>
            <div className="font-bold text-2xl mb-1">{v.name}</div>
            <div className="font-extrabold text-xl mb-2">{v.salary}</div>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-gray-200 rounded px-3 py-1 text-base">{v.city}</span>
              <span className="bg-gray-200 rounded px-3 py-1 text-base">Опыт: {v.experience}</span>
              <span className="bg-gray-200 rounded px-3 py-1 text-base">Тип занятости: {v.type}</span>
              <span className="bg-gray-200 rounded px-3 py-1 text-base">График работы: {v.schedule}</span>
            </div>
            <div className="text-gray-500 text-base">Опубликовано {v.published}</div>
            {v.preview && (
              <div className="text-blue-500 text-base mt-2 font-semibold cursor-pointer hover:underline text-right" onClick={() => handlePreview(v.id)}>
                ПРЕДПРОСМОТР
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Right: Preview/Details */}
      <div>
        {rightVacancy && !showDetails && (
          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-md flex flex-col gap-2 min-h-[340px]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <svg width="24" height="24" fill="none" stroke="#aaa"><circle cx="12" cy="8" r="4" strokeWidth="2"/><path d="M4 20c0-4 16-4 16 0" strokeWidth="2"/></svg>
              </div>
              <span className="text-blue-600 font-medium text-base cursor-pointer hover:underline">{rightVacancy.company}</span>
            </div>
            <div className="font-bold text-2xl mb-1">{rightVacancy.name}</div>
            <div className="font-extrabold text-xl mb-2">{rightVacancy.salary}</div>
            <div className="flex flex-col gap-2 mb-2">
              <div className="text-base"><span className="font-semibold">Город</span> {rightVacancy.city}</div>
              <div className="text-base"><span className="font-semibold">Опыт работы</span> {rightVacancy.experience}</div>
              <div className="text-base"><span className="font-semibold">График работы</span> {rightVacancy.schedule}</div>
              <div className="text-base"><span className="font-semibold">Тип занятости</span> {rightVacancy.type}</div>
            </div>
            <button className="bg-blue-100 text-blue-600 font-semibold px-5 py-2 rounded-lg hover:bg-blue-200 transition w-fit mt-2" onClick={() => handleDetails(rightVacancy.id)}>
              СТРАНИЦА ВАКАНСИИ
            </button>
            <div className="mt-4 text-gray-600">{rightVacancy.description}</div>
          </div>
        )}
        {rightVacancy && showDetails && (
          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-md flex flex-col gap-2 min-h-[340px]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <svg width="24" height="24" fill="none" stroke="#aaa"><circle cx="12" cy="8" r="4" strokeWidth="2"/><path d="M4 20c0-4 16-4 16 0" strokeWidth="2"/></svg>
              </div>
              <span className="text-blue-600 font-medium text-base cursor-pointer hover:underline">{rightVacancy.company}</span>
            </div>
            <div className="font-bold text-2xl mb-1">{rightVacancy.name}</div>
            <div className="font-extrabold text-xl mb-2">{rightVacancy.salary}</div>
            <div className="flex flex-col gap-2 mb-2">
              <div className="text-base"><span className="font-semibold">Город</span> {rightVacancy.city}</div>
              <div className="text-base"><span className="font-semibold">Опыт работы</span> {rightVacancy.experience}</div>
              <div className="text-base"><span className="font-semibold">График работы</span> {rightVacancy.schedule}</div>
              <div className="text-base"><span className="font-semibold">Тип занятости</span> {rightVacancy.type}</div>
            </div>
            <div className="bg-blue-100 text-blue-600 font-semibold px-5 py-2 rounded-lg w-fit mt-2 cursor-pointer">СТРАНИЦА ВАКАНСИИ</div>
            <div className="mt-4 text-gray-600">{rightVacancy.description}</div>
          </div>
        )}
      </div>
    </div>
  )
}
