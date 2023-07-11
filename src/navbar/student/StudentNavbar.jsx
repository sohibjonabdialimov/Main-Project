import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/student">darslar</Link>
        </li>
        <li>
          <img src={t2} alt="" />
          <Link to="/student/hisoblar">hisob balans</Link>
        </li>
        <li>
          <img src={t6} alt="" />
          <Link to="/student/profile/subs">profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default StudentNavbar;
