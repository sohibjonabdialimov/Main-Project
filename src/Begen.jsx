import React from 'react'
import { NavLink } from 'react-router-dom'
function Begen() {
  return (
    <div>
        <NavLink to="/student/">student</NavLink>
        <br />
        <NavLink to="/teacher/darslar">oqituvchi</NavLink>
    </div>
  )
}

export default Begen;