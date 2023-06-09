import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style.css";
import Userprofile from "../../components/userpofile/Userprofile";
import nav1 from "../../imgs/nav1.png";
import nav2 from "../../imgs/nav2.png";
import nav3 from "../../imgs/nav3.png";
import prev from "../../imgs/prev.svg";
function StudentNavbar( { changeModal ,modal} ) {
  console.log(modal,'ssd');
  const [modalClass,setModalClass]=useState('')

  console.log('bir',modal);
  const handleClick = () => {
    changeModal(false)
 }
 
 return (
    <div className={(modalClass=='qaytish')?'Nav  user-navbar qaytish':'Nav user-navbar'}>
      <div className={(modal)?"circle":"d-none circle"} onClick={handleClick}>
        <img src={prev} alt="prev" />
      </div>
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
          <NavLink to="profile/subs">profile</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default StudentNavbar;
