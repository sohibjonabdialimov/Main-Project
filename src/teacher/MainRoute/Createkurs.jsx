import React from 'react'
import { NavLink } from 'react-router-dom'

const TeachCreatekurs = () => {
  return (
    <div className="main-page">
      <div className="w100">
        <NavLink to="/kurs/free">tekin kurs joylash</NavLink>
        <NavLink to="/kurs/money">pullik kurs joylash</NavLink>
      </div>

    </div>
  )
}

export default TeachCreatekurs