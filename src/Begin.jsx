import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
function Begin() {
  return (
    <div className="ionex">
      <div className="ionex_header">
        <div className="ionex_logo">
        ionex
        </div>
      </div>
      <NavLink to="/login/">student</NavLink>
      <br />
      <NavLink to="/teacherlogin">oqituvchi</NavLink>
    </div>
  );
}

export default Begin;
