import { useState } from 'react'
import '../styles/messages.scss'

export default function MessageList() {
  const [messages, setMessages] = useState([
    {
      name: 'Alex Gelinas',
      message: 'hola',
      date: 'Mar 29',
    },
    {
      name: 'Alex',
      message: '',
      date: '',
    },
    {
      name: 'IFT606',
      message: '',
      date: '',
    },
  ])
  return (
    <div className="messages">
      {messages.map((el) => (
        <div className="message">
          <div className="contact-name">
            <p>{el.name}</p>
            <i className="fa-solid fa-circle"></i>
          </div>
          <div>
            <span>{el.message}</span>
            <span>{el.date}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
