import React from "react";
import { NavLink } from "react-router-dom";

let money = 650000;
money = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
let hisobraqam = 1234567890123456;
hisobraqam = hisobraqam.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " ");
function TeachHisoblar() {
  return (
    <div className="teacherHomePage main_teacher_content sidebar-wrap teacher-main-sidebar">
        <div className="fife main-content">
          <div className="hisoblar">
            <h2 style={{ fontSize: 22 }}>Hisobdagi pul miqdori:</h2>
            <p style={{ fontSize: 45 }}>{money}UZS</p>
            <h2>Hisob raqam:</h2>
            <p style={{ fontSize: 45 }}>{hisobraqam}</p>
            <NavLink to="/hisoblar/pulyichish"> pul yichish</NavLink>
          </div>
        </div>
      </div>
  );
}

export default TeachHisoblar;
