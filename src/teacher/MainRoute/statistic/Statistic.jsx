import React, { useEffect, useState } from "react";
import img12 from "../../../imgs/main1.png";
import img13 from "../../../imgs/main2.png";
import img14 from "../../../imgs/main3.png";
import img15 from "../../../imgs/main4.png";
import "./style.css";
import "../style.css";
import StatisticCard from "../../components/statisticCard/StatisticCard";
import axios from "axios";
function Statistic() {
  const [courses,setCourses]=useState([]);
  useEffect(()=>{
    axios.get("http://165.232.127.62:5001/teacher-mycurs/",{
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }).then((res)=>{
      setCourses(res.data)
    })
  },[])
  let carts = [
    {
      kursId: 12,
      img: img12,
      name: "Super miya",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      kursId: 13,
      img: img13,
      name: "Kitoblarni effectiv o'qish",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      kursId: 14,
      img: img14,
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
      kursId: 16,
      img: img14,
      name: "Quvnoq ingliz tili",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      kursId: 17,
      img: img15,
      name: "Inson omili yoki AI",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      kursId: 18,
      img: img14,
      name: "Quvnoq ingliz tili",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      kursId: 19,
      img: img15,
      name: "Inson omili yoki AI",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="main-page teacherHomePage main-content teacher-main-sidebar">
      <div className="main_teacher_content sidebar-main-wrap">
        {courses.map((course, index) => {
          return <StatisticCard cart={course} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Statistic;
