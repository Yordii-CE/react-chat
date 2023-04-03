import '../styles/chat.scss'
export default function Chat() {
  return (
    <div className="chat">
      <div className="contact-name">
        <h4>IFT585</h4>
        <small>Admin1.Alex</small>
      </div>

      <div className="sms-history">
        <div className="sms">
          <div className="other">
            <p>Hi!! </p>
          </div>
          <div className="me">
            <p>Hi!!</p>
          </div>
        </div>
      </div>
      <div className="send-sms">
        <input type="text" placeholder="Écrivez un message..." />
        <i className="fa-sharp fa-solid fa-paper-plane"></i>
      </div>
    </div>
  )
}
