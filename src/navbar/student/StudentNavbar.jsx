import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style.css";
import Userprofile from "../../components/userpofile/Userprofile";
import t1 from "../../imgs/t1.svg";
import t2 from "../../imgs/t2.svg";
import t6 from "../../imgs/t6.svg";
import prev from "../../imgs/prev.svg";
function StudentNavbar({ changeModal, modal }) {
  const [modalClass, setModalClass] = useState("");

  const handleClick = () => {
    changeModal(false);
  };

  return (
    <div
      className={
        modalClass == "qaytish" ? "Nav  user-navbar qaytish" : "Nav user-navbar"
      }
    >
      <div className={modal ? "circle" : "d-none circle"} onClick={handleClick}>
        <img src={prev} alt="prev" />
      </div>
      <div>
        <Userprofile />
      </div>
      <ul>
        <li>
          <img src={t1} alt="" />
          <NavLink to="/student/">darslar</NavLink>
        </li>
        <li>
          <img src={t2} alt="" />
          <NavLink to="hisoblar">hisob balans</NavLink>
        </li>
        <li>
          <img src={t6} alt="" />
          <NavLink to="profile/subs">profile</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default StudentNavbar;
