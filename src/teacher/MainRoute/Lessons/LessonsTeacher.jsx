import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import "../style.css";
import LessonCard from "../../components/lessonCard/LessonCard";
import axios from "axios";
function LessonsTeacher() {
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
    <>
      {/* <header className="responsive_header">
        <div className="menubar" onClick={() => setMenubar((prev) => !prev)}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <div className="header_desc">
          <p>Darslar</p>
        </div>
      </header> */}
      <div className="main_teacher_content sidebar-main-wrap teacher-main-sidebar">
        <div className="lessons_wrap">
          {courses.map((course, index) => {
            return <LessonCard cart={course} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default LessonsTeacher;
