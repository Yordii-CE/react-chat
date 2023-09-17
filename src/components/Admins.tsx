import { useRef } from 'react'

interface Admin {
  name: String
}
interface Prop {
  data: Array<Admin>
}
export default function Admins({ data }: Prop) {
  const $admins = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    if($admins.current == null) return
    if ($admins.current.style.display == 'block') {
      $admins.current.style.display = 'none'
    } else {
      
      $admins.current.style.display = 'block'
    }
  }
  return (
    <div className="container-admins">
      <div className="title">
        <p>Administrateurs</p>
        <i className="fa-solid fa-angle-down" onClick={handleClick}></i>
      </div>

      <div ref={$admins} className="admins">
        {data.map((el) => (
          <div className="admin">
            <i></i>
            <p>{el.name}</p>
          </div>
        ))}
        <div className="search">
          <input type="text" placeholder="Écrire le nom d'utilisateur" />
        </div>
      </div>
    </div>
  )
}
