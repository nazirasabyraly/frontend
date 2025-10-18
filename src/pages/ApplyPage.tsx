import React, { useState } from 'react'

export default function ApplyPage() {
  const [selected, setSelected] = useState<'cv' | 'no-cv' | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-br from-gray-400 to-gray-200 rounded-t-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center mb-0">
        <div>
          <div className="text-3xl font-black mb-2">Репетитор</div>
          <div className="text-xl text-gray-200 mb-2">Алматы</div>
          <div className="text-xl text-white mb-4">от 50 000 до 150 000 KZT до вычета налогов</div>
          <span className="text-white">❤</span>
        </div>
        <div className="text-right w-full md:w-auto mt-4 md:mt-0">
          <div className="text-white text-lg">Jane (Жайна Закирхан)</div>
        </div>
      </div>
      <div className="bg-white rounded-b-2xl p-8 shadow-md">
        <div className="mb-8">
          <div className="text-2xl font-black mb-4">Выберите резюме из списка</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className={`rounded-xl border ${selected==='cv' ? 'border-blue-500' : 'border-gray-200'} bg-white p-6 shadow flex flex-col gap-2 cursor-pointer transition-all`}
              onClick={() => setSelected('cv')}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold text-xl">Full stack</div>
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg width="20" height="20" fill="none" stroke="#aaa"><circle cx="10" cy="6" r="3" strokeWidth="2"/><path d="M2 18c0-3 16-3 16 0" strokeWidth="2"/></svg>
                </div>
              </div>
              <div className="flex gap-2 mb-2">
                <span className="bg-gray-200 rounded px-3 py-1 text-base">300 000 KZT</span>
                <span className="bg-gray-200 rounded px-3 py-1 text-base">Казахстан Астана</span>
              </div>
              <div className="text-gray-500 text-base">Опубликовано менее одного дня назад</div>
            </div>
            <div
              className={`rounded-xl border ${selected==='no-cv' ? 'border-blue-500' : 'border-gray-200'} bg-white p-6 shadow flex flex-col items-center justify-center gap-2 cursor-pointer transition-all`}
              onClick={() => setSelected('no-cv')}
            >
              <div className="font-bold text-lg text-center">Откликнуться без резюме</div>
              <div className="text-gray-600 text-center">Работодатель увидит только ваше сопроводительное письмо</div>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="bg-gray-200 text-gray-600 font-semibold px-5 py-2 rounded-lg">Вернуться к поиску</button>
          <button
            className={`px-5 py-2 rounded-lg font-semibold ${selected ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-400 text-white cursor-not-allowed'}`}
            disabled={!selected}
            onClick={() => selected && window.location.assign(`/chat/1`)}
          >
            Откликнуться на вакансию
          </button>
        </div>
      </div>
    </div>
  )
}
