import '../styles/login.scss'
import { Link } from 'react-router-dom'

export default function LoginView() {
  return (
    <div className="login-page">
      <div className="login">
        <h1>Chat IFT585</h1>
        <form>
          <input type="text" placeholder="Num d'utilisateur" />
          <input type="text" placeholder="Mot de passe" />
          <Link to={'messages'}>COMMENCER</Link>
        </form>
      </div>
    </div>
  )
}
