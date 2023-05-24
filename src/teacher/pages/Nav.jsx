import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import TeachUserprofile from "../components/Userprofile";
import nav1 from "../imgs/nav1.png";
import nav2 from "../imgs/nav2.png";
import nav3 from "../imgs/nav3.png";
function TeachNav() {
  return (
    <div className="teacher-navbar">
      <div>
        <TeachUserprofile />
      </div>
      <ul>
        <li>
          <img src={nav1} alt="" />
          <NavLink to="darslar">darslar</NavLink>
        </li>
        <li>
          <img src={nav2} alt="" />
          <NavLink to="hisoblar">hisob balans</NavLink>
        </li>
        <li>
          <img src={nav3} alt="" />
          <NavLink to="kurs">kurs yuklash</NavLink>
        </li>
        <li>
          <img src={nav3} alt="" />
          <NavLink to="statistic">statistika</NavLink>
        </li>
        <li>
          <img src={nav3} alt="" />
          <NavLink to="update/kurs">kursni yangilash</NavLink>
        </li>
        <li>
          <img src={nav3} alt="" />
          <NavLink to="profile">profile</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default TeachNav;
