import React, { useContext, useEffect } from "react";
import TeachCart from "../../../components/Cart/Cart";
import img15 from "../../../imgs/teacher-main-sidebar.png";
import styles from "./style.module.css";

import "../style.css";
import MenuContext from "antd/es/menu/MenuContext";
function LessonsTeacher() {
  let carts = [
    {
      kursId: 12,
      img: img15,
      name: "Super miya",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      kursId: 13,
      img: img15,
      name: "Kitoblarni effectiv o'qish",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      kursId: 14,
      img: img15,
      name: "Quvnoq ingliz tili",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      kursId: 15,
      img: img15,
      name: "Inson omili yoki AI",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      kursId: 1452,
      img: img15,
      name: "Quvnoq ingliz tili",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      kursId: 1545,
      img: img15,
      name: "Inson omili yoki AI",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      kursId: 14521,
      img: img15,
      name: "Quvnoq ingliz tili",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      kursId: 154522,
      img: img15,
      name: "Inson omili yoki AI",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      kursId: 14522121,
      img: img15,
      name: "Quvnoq ingliz tili",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      kursId: 15454444,
      img: img15,
      name: "Inson omili yoki AI",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];



  return (
    <>
      <header className="responsive_header">
        <div className="menubar" onClick={() => setMenubar(prev => !prev)}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <div className="header_desc">
          <p>Darslar</p>
        </div>
      </header>
      <div className="main_teacher_content sidebar-main-wrap teacher-main-sidebar">
        {carts.map((cart, index) => {
          return <TeachCart cart={cart} key={index} />;
        })}
      </div>
    </>
  );
}

export default LessonsTeacher;
