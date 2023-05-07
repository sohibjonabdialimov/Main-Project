import React from 'react'
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
        <div></div>
        <ul>
            <li><Link to="vbn">darslar</Link></li>
            <li><Link to="bnm">hisob balans</Link></li>
            <li><Link to="ghj">profile</Link></li>
        </ul>
    </div>
  )
}

export default Nav