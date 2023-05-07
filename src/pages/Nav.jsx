import React from 'react'
import { Link, NavLink } from "react-router-dom";
import './style.css';
import Userprofile from '../components/userprofile';
function Nav() {
  return (
    <div className='Nav'>
        <div><Userprofile/></div>
        <ul>
            <li><NavLink to="/">darslar</NavLink></li>
            <li><NavLink to="hisoblar">hisob balans</NavLink></li>
            <li><NavLink to="profile">profile</NavLink></li>
        </ul>
    </div>
  )
}

export default Nav