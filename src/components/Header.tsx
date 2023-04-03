import '../styles/header.scss'
export default function Header() {
  return (
    <div className="header">
      <p className="title">CHAT IFT585</p>
      <div className="logout">
        <i className="fa-sharp fa-regular fa-bell"></i>
        <p>Logout</p>
      </div>
    </div>
  )
}
