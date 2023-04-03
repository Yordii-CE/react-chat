import { useState } from 'react'
import Members from './Members'
import Admins from './Admins'

import '../styles/bar.scss'

export default function Bar() {
  const [members, setMembers] = useState([
    {
      name: 'Admin admin',
    },
    {
      name: 'Alex Gelina',
    },
    {
      name: 'Alex Gelisna',
    },
  ])

  const [admins, setAdmins] = useState([
    {
      name: 'Admin2 admin',
    },
    {
      name: 'Alex Gelina',
    },
  ])

  return (
    <div className="bar">
      <Members data={members} />
      <Admins data={admins} />

      <div className="exit">
        <i className="fa-sharp fa-solid fa-circle-xmark"></i>
        <p>Abandonar chat</p>
      </div>
    </div>
  )
}
