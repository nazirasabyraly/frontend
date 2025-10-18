import React, { useEffect, useRef, useState } from 'react'

const WS_URL = 'ws://localhost:8000/ws/chat/1' // Example WebSocket URL

export default function ChatWidget() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Здравствуйте! Я бот. Чем могу помочь?' }
  ])
  const [input, setInput] = useState('')
  const ws = useRef<WebSocket | null>(null)

  useEffect(() => {
    ws.current = new window.WebSocket(WS_URL)
    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data)
      setMessages((prev) => [...prev, { role: 'bot', text: data.text }])
    }
    return () => {
      ws.current?.close()
    }
  }, [])

  const sendMessage = () => {
    if (input.trim() && ws.current) {
      setMessages((prev) => [...prev, { role: 'user', text: input }])
      ws.current.send(JSON.stringify({ text: input }))
      setInput('')
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
