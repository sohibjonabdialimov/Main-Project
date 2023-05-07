import React from 'react'
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className='Nav'>
        <div></div>
        <ul>
            <li><Link to="/">darslar</Link></li>
            <li><Link to="hisoblar">hisob balans</Link></li>
            <li><Link to="profile">profile</Link></li>
        </ul>
    </div>
  )
}

export default Nav