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
import prev from "../../imgs/prev.svg";
function TeacherNavbar({ changeModal, modal }) {
  const [modalClass, setModalClass] = useState("");

  const handleClick = () => {
    changeModal(false);
  };

  return (
    <div  className={
      modalClass == "qaytish" ? "Nav  teacher-navbar qaytish" : "Nav teacher-navbar"
    }>
      <div className={modal ? "circle" : "d-none circle"} onClick={handleClick}>
        <img src={prev} alt="prev" />
      </div>
      <div>
        <TeachUserprofile />
      </div>
      <ul>
        <li>
          <img src={t1} alt="" />
          <Link to="/teacher/darslar">darslar</Link>
        </li>
        <li>
          <img src={t2} alt="" />
          <Link to="/teacher/hisoblar">hisob balans</Link>
        </li>
        <li>
          <img src={t3} alt="" />
          <Link to="/teacher/kurs">kurs yuklash</Link>
        </li>
        <li>
          <img src={t4} alt="" />
          <Link to="/teacher/statistic">statistika</Link>
        </li>
        <li>
          <img src={t5} alt="" />
          <Link to="/teacher/update/kurs">kursni yangilash</Link>
        </li>
        <li>
          <img src={t6} alt="" />
          <Link to="/teacher/profile">profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default TeacherNavbar;
