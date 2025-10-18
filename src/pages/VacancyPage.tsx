import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

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
    description: 'Хорошая работа',
  },
]

export default function VacancyPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const vacancy = vacancies.find(v => v.id === Number(id))

  if (!vacancy) return <div className="p-8">Вакансия не найдена</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-br from-gray-400 to-gray-200 rounded-t-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center mb-0">
        <div>
          <div className="text-3xl font-black mb-2">{vacancy.name}</div>
          <div className="text-xl text-gray-200 mb-2">{vacancy.city}</div>
          <div className="text-xl text-white mb-4">{vacancy.salary}</div>
          <button className="bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 transition" onClick={() => navigate(`/apply/${vacancy.id}`)}>
            Откликнуться
          </button>
        </div>
        <div className="text-right w-full md:w-auto mt-4 md:mt-0">
          <div className="text-white text-lg">{vacancy.company}</div>
        </div>
      </div>
      <div className="bg-white rounded-b-2xl p-8 shadow-md">
        <div className="mb-6">
          <div className="text-2xl font-black mb-2">Описание вакансии</div>
          <div>{vacancy.description}</div>
        </div>
        <div className="mb-6">
          <div className="text-2xl font-black mb-2">Опыт работы</div>
          <button className="border border-blue-400 text-blue-600 px-4 py-1 rounded-lg font-semibold bg-white mb-2">{vacancy.experience}</button>
        </div>
        <div className="mb-6">
          <div className="text-2xl font-black mb-2">Тип занятости</div>
          <button className="border border-blue-400 text-blue-600 px-4 py-1 rounded-lg font-semibold bg-white mb-2">{vacancy.type}</button>
        </div>
        <div className="mb-6">
          <div className="text-2xl font-black mb-2">График работы</div>
          <button className="border border-blue-400 text-blue-600 px-4 py-1 rounded-lg font-semibold bg-white mb-2">{vacancy.schedule}</button>
        </div>
      </div>
    </div>
  )
}
