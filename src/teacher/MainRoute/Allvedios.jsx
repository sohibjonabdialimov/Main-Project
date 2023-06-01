import React from "react";
import TeachCart from "../components/Cart/Cart";
import img15 from "../../imgs/teacher-main-sidebar.png";
import "./style.css";
function TeachAllvedios() {
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
      <div className="main_teacher_content sidebar-main-wrap teacher-main-sidebar">
        {carts.map((cart, index) => {
          return <TeachCart cart={cart} key={index} />;
        })}
      </div>
  );
}

export default TeachAllvedios;
