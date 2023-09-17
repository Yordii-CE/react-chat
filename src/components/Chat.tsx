import { useRef, useState } from 'react'
import '../styles/chat.scss'
export default function Chat() {
  const $input = useRef<HTMLInputElement>(null)
  const [messages, setMessages] = useState([
    {
      text: 'Hi!',
    },
  ])

  const handleClick = () => {
    let text = $input.current?.value
    if (!text) return

    setMessages([
      ...messages,
      {
        text,
      },
    ])

    if($input.current == null) return
    $input.current.value = ''
    $input.current?.focus()
  }

  return (
    <div className="chat">
      <div className="contact-name">
        <h4>IFT585</h4>
        <small>Admin1.Alex</small>
      </div>

      <div className="sms-history">
        <div className="other">
          <i className="fa-solid fa-circle-user"></i>
          <p>Hi!!</p>
        </div>
        <div className="me">
          {messages.map((el) => (
            <p>{el.text}</p>
          ))}
        </div>
      </div>
      <div className="send-sms">
        <input ref={$input} type="text" placeholder="Écrivez un message..." />
        <div onClick={handleClick}>
          <i className="fa-sharp fa-solid fa-paper-plane"></i>
        </div>
      </div>
    </div>
  )
}
