interface Member {
  name: string
}
interface Prop {
  data: Array<Member>
}
export default function Members({ data }: Prop) {
  return (
    <div className="members">
      <div className="title">
        <p>Membres</p>
        <i className="fa-solid fa-angle-down"></i>
      </div>
      {data.map((el) => (
        <div className="member">
          <i className="fa-solid fa-bell"></i>

          <p>{el.name}</p>
        </div>
      ))}
      <div className="search">
        <input type="text" placeholder="Écrire le nom d'utilisateur" />
      </div>
    </div>
  )
}
