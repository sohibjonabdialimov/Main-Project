import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import prev from ".././imgs/prev.svg";

function Obuna({ modalDarslar, changeModalDars, topic, me }) {
  const handleClick = () => {
    changeModalDars(false);
  };
  return (
    <div className="Nav sidebar-main-content">
      <div>
        <div
          className={
            modalDarslar
              ? "mobile__header users_subs-buttons"
              : "d-none users_subs-buttons"
          }
        >
          <div
            className={modalDarslar ? "circle" : "d-none circle"}
            onClick={handleClick}
          >
            <img src={prev} alt="prev" />
          </div>
          <NavLink to="/student/profile/subs" className={"necha"}>obunalar</NavLink>
          <NavLink to="/student/profile/darslar">darslar</NavLink>
        </div>
        <div className="line-main users_subs">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Obuna;
