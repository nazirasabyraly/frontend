import React, { useState } from 'react'

const candidates = [
  {
    name: 'Иван Иванов',
    mainMatch: 85,
    softSkill: 70,
    hardSkill: 80,
    chat: [
      { role: 'bot', text: 'Здравствуйте! Я бот. Чем могу помочь?' },
      { role: 'bot', text: 'Расскажите о вашем опыте работы.' },
      { role: 'user', text: 'Работал 6 лет в IT.' },
      { role: 'bot', text: 'Какие навыки вы считаете своими сильными сторонами?' },
      { role: 'user', text: 'React, Node.js, коммуникация.' },
      { role: 'bot', text: 'Спасибо! Ваши ответы помогут подобрать лучшие вакансии.' }
    ],
    details: {
      city: 'Алматы',
      country: 'Казахстан',
      relocation: 'Возможна',
      experience: '6 лет',
      salary: '120 000 KZT',
      schedule: 'Гибкий',
      employment: 'Проектная работа',
      education: 'Высшее',
      languages: 'Русский, Английский',
      softSkill: 'Коммуникабельность, стрессоустойчивость',
      hardSkill: 'React, Node.js, SQL'
    }
  },
  {
    name: 'Жайна Закирхан',
    mainMatch: 78,
    softSkill: 82,
    hardSkill: 75,
    chat: [
      { role: 'bot', text: 'Здравствуйте! Я бот. Чем могу помочь?' },
      { role: 'bot', text: 'Расскажите о вашем опыте работы.' },
      { role: 'user', text: '4 года преподавания.' },
      { role: 'bot', text: 'Какие навыки вы считаете своими сильными сторонами?' },
      { role: 'user', text: 'Python, обучаемость.' },
      { role: 'bot', text: 'Спасибо! Ваши ответы помогут подобрать лучшие вакансии.' }
    ],
    details: {
      city: 'Астана',
      country: 'Казахстан',
      relocation: 'Нет',
      experience: '4 года',
      salary: '100 000 KZT',
      schedule: 'Полный день',
      employment: 'Постоянная',
      education: 'Среднее специальное',
      languages: 'Казахский, Русский',
      softSkill: 'Ответственность, обучаемость',
      hardSkill: 'Python, Django, ML'
    }
  }
]

function getTotalPercent(c) {
  return Math.round((c.mainMatch + c.softSkill + c.hardSkill) / 3)
}

export default function EmployerPage() {
  const [selected, setSelected] = useState<null | 'list' | number>(null)

  return (
    <div className="max-w-3xl mx-auto my-12 bg-white rounded-2xl shadow-lg p-6">
      <div className="font-black text-2xl mb-4">Вакансии (Работодателям)</div>
      <div className="mb-6 p-4 rounded-xl bg-gray-50 border">
        <div className="font-bold mb-2 text-lg">Репетитор</div>
        <div className="mb-2 text-gray-700">от 50 000 до 150 000 KZT до вычета налогов</div>
        <div className="flex gap-2 flex-wrap mb-2">
          <span className="bg-gray-200 rounded px-2 py-1 text-sm">Казахстан Алматы</span>
          <span className="bg-gray-200 rounded px-2 py-1 text-sm">Опыт: Более 6 лет</span>
          <span className="bg-gray-200 rounded px-2 py-1 text-sm">Тип занятости: Проектная работа</span>
          <span className="bg-gray-200 rounded px-2 py-1 text-sm">График: Гибкий график</span>
        </div>
        <button className="bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 transition" onClick={() => setSelected('list')}>Отклики</button>
      </div>
      {selected === 'list' && (
        <div className="mt-6">
          <div className="font-bold mb-2">Кандидаты:</div>
          <table className="w-full border text-left mb-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Имя</th>
                <th className="p-2">Main match</th>
                <th className="p-2">Soft skill</th>
                <th className="p-2">Hard skill</th>
                <th className="p-2">Общий %</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((c, i) => (
                <tr key={i} className="hover:bg-blue-50 cursor-pointer" onClick={() => setSelected(i)}>
                  <td className="p-2 font-semibold text-blue-700">{c.name}</td>
                  <td className="p-2">{c.mainMatch}%</td>
                  <td className="p-2">{c.softSkill}%</td>
                  <td className="p-2">{c.hardSkill}%</td>
                  <td className="p-2 font-bold">{getTotalPercent(c)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {typeof selected === 'number' && (
        <div className="mt-6 p-4 rounded-xl bg-gray-50 border">
          <div className="font-bold mb-2 text-lg">Анализ кандидата: {candidates[selected].name}</div>
          <div className="mb-1">Main match: <span className="font-semibold text-blue-700">{candidates[selected].mainMatch}%</span></div>
          <div className="mb-1">Soft skill: <span className="font-semibold text-green-700">{candidates[selected].softSkill}%</span></div>
          <div className="mb-1">Hard skill: <span className="font-semibold text-purple-700">{candidates[selected].hardSkill}%</span></div>
          <div className="mb-1">Общий процент: <span className="font-bold text-gray-900">{getTotalPercent(candidates[selected])}%</span></div>
          <div className="mt-2 text-sm text-gray-700">
            <div>Город: {candidates[selected].details.city}</div>
            <div>Страна: {candidates[selected].details.country}</div>
            <div>Релокация: {candidates[selected].details.relocation}</div>
            <div>Опыт: {candidates[selected].details.experience}</div>
            <div>Зарплата: {candidates[selected].details.salary}</div>
            <div>График: {candidates[selected].details.schedule}</div>
            <div>Тип занятости: {candidates[selected].details.employment}</div>
            <div>Образование: {candidates[selected].details.education}</div>
            <div>Языки: {candidates[selected].details.languages}</div>
            <div>Soft skill: {candidates[selected].details.softSkill}</div>
            <div>Hard skill: {candidates[selected].details.hardSkill}</div>
          </div>
          <div className="mt-4">
            <div className="font-bold mb-2">История чата с кандидатом:</div>
            <div className="bg-white rounded-lg border p-3">
              {candidates[selected].chat.map((msg, idx) => (
                <div key={idx} className={`mb-2 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`px-4 py-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>{msg.text}</div>
                </div>
              ))}
            </div>
          </div>
          <button className="mt-4 bg-gray-300 px-4 py-2 rounded-lg" onClick={() => setSelected('list')}>Назад к списку кандидатов</button>
        </div>
      )}
    </div>
  )
}
