import { useRef } from 'react'

interface Member {
  name: string
}
interface Prop {
  data: Array<Member>
}
export default function Members({ data }: Prop) {
  const $members = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    if ($members?.current?.style.display == 'block') {
      $members.current.style.display = 'none'
    } else {
      $members.current.style.display = 'block'
    }
  }
  return (
    <div className="container-members">
      <div className="title">
        <p>Membres</p>
        <i className="fa-solid fa-angle-down" onClick={handleClick}></i>
      </div>
      <div ref={$members} className="members">
        {data.map((el) => (
          <div className="member">
            <i className=""></i>
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
