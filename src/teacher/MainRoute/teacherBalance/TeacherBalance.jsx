import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import "../style.css";

let money = 650000;
money = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
let hisobraqam = 1234567890123456;
hisobraqam = hisobraqam.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " ");
function TeacherBalance() {
  return (
    <div className="teacherHomePage main_teacher_content sidebar-wrap teacher-main-sidebar ">
        <div className="fife main-content teacher_hisoblar__wrapper">
          <div className="teacher_hisoblar">
            <h2 style={{ fontSize: 22 }}>Hisob balansi:</h2>
            <p style={{ fontSize: 45 }}>{money}000.00 so'm</p>
            <NavLink to="/hisoblar/pulyichish" className="price_btn">Pul yechib olish</NavLink>
          </div>
        </div>
      </div>
  );
}

export default TeacherBalance;
