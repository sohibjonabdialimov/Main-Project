import React from 'react'
import { Link } from 'react-router-dom'
function Sitebar() {
  return (
    <div className='Nav'>
        <div></div>
        <ul>
            <li><Link to="vbn">darslar</Link></li>
            <li><Link to="bnm">hisob balans</Link></li>
            <li><Link to="ghj">profile</Link></li>
        </ul>
    </div>
  )
}

export default Sitebar