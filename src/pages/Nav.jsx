import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import Userprofile from "../components/userprofile";
import nav1 from "../imgs/nav1.png";
import nav2 from "../imgs/nav2.png";
import nav3 from "../imgs/nav3.png";
function Nav() {
  return (
    <div className="Nav user-navbar">
      <div>
        <Userprofile />
      </div>
      <ul>
        <li>
          <img src={nav1} alt="" />
          <NavLink to="/student/">darslar</NavLink>
        </li>
        <li>
          <img src={nav2} alt="" />
          <NavLink to="hisoblar">hisob balans</NavLink>
        </li>
        <li>
          <img src={nav3} alt="" />
          <NavLink to="profile">profile</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
