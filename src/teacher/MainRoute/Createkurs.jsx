import React from 'react'
import { NavLink } from 'react-router-dom'

const TeachCreatekurs = () => {
  return (
    <div className="teacherHomePage main_profile_container sidebar-wrap teacher-main-sidebar">
      <div className="w100">
        <NavLink to="/kurs/free">tekin kurs joylash</NavLink>
        <NavLink to="/kurs/money">pullik kurs joylash</NavLink>
      </div>
    </div>
  )
}

export default TeachCreatekurs;