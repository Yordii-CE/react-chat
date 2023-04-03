import { useState } from 'react'
import '../styles/header.scss'
import Notification from './Notification'
export default function Header() {
  const [notifications, setNotifications] = useState(3)
  const [notifVisible, setNotifVisible] = useState(true)

  const handleClickBell = (e: any) => {
    if (notifVisible) {
      setNotifVisible(false)
    } else {
      setNotifVisible(true)
    }
  }
  return (
    <div className="header">
      <p className="title">CHAT IFT585</p>
      <div className="logout">
        <Notification visible={notifVisible} />
        <div className="bell" onClick={handleClickBell}>
          <i className="fa-sharp fa-regular fa-bell"></i>
          <span>{notifications}</span>
        </div>
        <p>Logout</p>
      </div>
    </div>
  )
}
