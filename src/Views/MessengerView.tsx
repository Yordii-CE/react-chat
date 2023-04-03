import '../styles/messenger.scss'
import Header from '../components/Header'
import Messages from '../components/Messages'
import Chat from '../components/Chat'
import Bar from '../components/Bar'

export default function MessengerView() {
  return (
    <div className="messages-page">
      <Header />
      <div className="content">
        <Messages />
        <Chat />
        <Bar />
      </div>
    </div>
  )
}
