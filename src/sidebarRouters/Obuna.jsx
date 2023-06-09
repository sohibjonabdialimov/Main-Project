import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import prev from '.././imgs/prev.svg';


function Obuna ({modalDarslar,changeModalDars,me}) {
  const handleClick = () => {
    changeModalDars(false)
  }
  return (
    <div className="Nav sidebar-main-content">
       <div className={(modalDarslar)?"mobile__header":'d-none '} onClick={handleClick}>
         <div className="circle">
         <img src={prev} alt="prev" />
         </div>
         <h3>Darslar</h3>
         
      </div>
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
