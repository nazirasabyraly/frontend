import React, { useEffect, useRef, useState } from 'react'

const WS_URL = 'ws://localhost:8000/ws/chat/1' // Example WebSocket URL
const QUESTIONS = [
  'Расскажите о вашем опыте работы.',
  'Какие навыки вы считаете своими сильными сторонами?',
  'Есть ли у вас опыт работы в команде?',
  'Какие ваши карьерные цели?',
  'Есть ли у вас опыт работы с современными технологиями?' 
]

// После завершения диалога показываем анализ кандидата
const getCandidateAnalysis = () => {
  // Здесь можно добавить реальный анализ, сейчас — имитация
  return {
    mainMatch: Math.floor(60 + Math.random() * 30), // 60-90%
    softSkill: Math.floor(50 + Math.random() * 40), // 50-90%
    hardSkill: Math.floor(55 + Math.random() * 35)  // 55-90%
  }
}

export default function ChatWidget() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Здравствуйте! Я бот. Чем могу помочь?' }
  ])
  const [input, setInput] = useState('')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [showAnalysis, setShowAnalysis] = useState(false)
  const [analysis, setAnalysis] = useState<{mainMatch:number,softSkill:number,hardSkill:number}|null>(null)
  const ws = useRef<WebSocket | null>(null)

  useEffect(() => {
    ws.current = new window.WebSocket(WS_URL)
    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data)
      setMessages((prev) => [...prev, { role: 'bot', text: data.text }])
    }
    // При первом рендере бот задает первый вопрос
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'bot', text: QUESTIONS[0] }])
    }, 1000)
    return () => {
      ws.current?.close()
    }
  }, [])

  const sendMessage = () => {
    if (input.trim() && ws.current) {
      setMessages((prev) => [...prev, { role: 'user', text: input }])
      ws.current.send(JSON.stringify({ text: input }))
      setInput('')
      // Если есть следующий вопрос, бот задает его
      if (questionIndex + 1 < QUESTIONS.length) {
        setTimeout(() => {
          setMessages((prev) => [...prev, { role: 'bot', text: QUESTIONS[questionIndex + 1] }])
          setQuestionIndex(questionIndex + 1)
        }, 1200)
      } else if (questionIndex + 1 === QUESTIONS.length) {
        setTimeout(() => {
          setMessages((prev) => [...prev, { role: 'bot', text: 'Спасибо! Ваши ответы помогут подобрать лучшие вакансии.' }])
          setQuestionIndex(questionIndex + 1)
          // Показать анализ кандидата
          setTimeout(() => {
            setAnalysis(getCandidateAnalysis())
            setShowAnalysis(true)
          }, 1500)
        }, 1200)
      }
    }
  }

  return (
    <div className="max-w-xl mx-auto my-12 bg-white rounded-2xl shadow-lg p-6 flex flex-col h-[500px]">
      <div className="font-black text-2xl mb-4">Чат с ботом</div>
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`px-4 py-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>{msg.text}</div>
          </div>
        ))}
        {showAnalysis && analysis && (
          <div className="mt-6 p-4 rounded-xl bg-gray-50 border">
            <div className="font-bold mb-2 text-lg">Анализ кандидата:</div>
            <div className="mb-1">Main match (город, страна, релокация, опыт, зарплата, график, тип занятости, образование, языки): <span className="font-semibold text-blue-700">{analysis.mainMatch}%</span></div>
            <div className="mb-1">Soft skill: <span className="font-semibold text-green-700">{analysis.softSkill}%</span></div>
            <div className="mb-1">Hard skill: <span className="font-semibold text-purple-700">{analysis.hardSkill}%</span></div>
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Введите сообщение..."
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
        />
        <button
          className="bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
          onClick={sendMessage}
        >
          Отправить
        </button>
      </div>
    </div>
  )
}
