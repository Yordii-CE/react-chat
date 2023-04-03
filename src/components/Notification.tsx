import '../styles/notification.scss'
interface Prop {
  visible: Boolean
}
export default function Notification({ visible }: Prop) {
  return (
    <div
      className="notification"
      style={{ visibility: visible ? 'visible' : 'hidden' }}
    >
      <i className="fa-solid fa-circle"></i>
      <div>
        <p className="description">
          le groupe IGE 501 souhaite que vous rejoigniez son équipe.
        </p>
        <div>
          <button>Accepter</button>
          <button>Refuser</button>
        </div>
      </div>
    </div>
  )
}
