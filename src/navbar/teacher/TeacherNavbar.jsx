import React, { memo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../style.css";
import TeachUserprofile from "../../teacher/components/Userprofile";
import t1 from "../../imgs/t1.svg";
import t2 from "../../imgs/t2.svg";
import t3 from "../../imgs/t3.svg";
import t4 from "../../imgs/t4.svg";
import t5 from "../../imgs/t5.svg";
import t6 from "../../imgs/t6.svg";
function TeacherNavbar() {
  return (
    <div className="teacher-navbar">
      <div>
        <TeachUserprofile />
      </div>
      <ul>
        <li>
          <img src={t1} alt="" />
          <NavLink to="darslar">darslar</NavLink>
        </li>
        <li>
          <img src={t2} alt="" />
          <NavLink to="hisoblar">hisob balans</NavLink>
        </li>
        <li>
          <img src={t3} alt="" />
          <NavLink to="kurs">kurs yuklash</NavLink>
        </li>
        <li>
          <img src={t4} alt="" />
          <NavLink to="statistic">statistika</NavLink>
        </li>
        <li>
          <img src={t5} alt="" />
          <NavLink to="update/kurs">kursni yangilash</NavLink>
        </li>
        <li>
          <img src={t6} alt="" />
          <NavLink to="profile">profile</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default TeacherNavbar;
