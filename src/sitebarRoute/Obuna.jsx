import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Obuna = () => {
  return (
    <div className="Nav sidebar-main-content">
      <div className="users_subs">
        <div className="users_subs-buttons">
          <NavLink to="/student/profile/subs">obunalar</NavLink>
          <NavLink to="/student/profile/darslar">darslar</NavLink>
        </div>
        <div className="line-main"></div>
          <Outlet />
      </div>
    </div>
  );
};

export default Obuna;
