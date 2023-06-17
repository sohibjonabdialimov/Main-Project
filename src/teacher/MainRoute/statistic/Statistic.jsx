import React, { useEffect, useState } from "react";
import "./style.css";
import "../style.css";
import StatisticCard from "../../components/statisticCard/StatisticCard";
import axios from "axios";
function Statistic() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get("http://165.232.127.62:5001/teacher-mycurs/", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setCourses(res.data);
      });
  }, []);
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
