import React from "react";
import { NavLink } from "react-router-dom";
function Begin() {
  return (
    <div>
      <NavLink to="/login/">student</NavLink>
      <br />
      <NavLink to="/teacherlogin">oqituvchi</NavLink>
    </div>
  );
}

export default Begin;
