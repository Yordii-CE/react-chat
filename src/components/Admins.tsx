interface Admin {
  name: String
}
interface Prop {
  data: Array<Admin>
}
export default function Admins({ data }: Prop) {
  return (
    <div className="admins">
      <div className="title">
        <p>Administrateurs</p>
        <i className="fa-solid fa-angle-down"></i>
      </div>

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
  )
}
