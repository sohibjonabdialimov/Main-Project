import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import "../style.css";
import LessonCard from "../../components/lessonCard/LessonCard";
import axios from "axios";
import MobileHeader from "../../../components/mobileHeader/mobileHeader";
import StudentNavbar from "../../../navbar/student/StudentNavbar";
import TeacherNavbar from "../../../navbar/teacher/TeacherNavbar";
function LessonsTeacher() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.ilmlar.com/teacher-mycurs/", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setCourses(res.data);
      });
  }, []);

  let [modal, setModal] = useState(false);
  let [modalDarslar, setModalDarslar] = useState(false);
  function clickModal() {
    setModal(!modal);
  }
  const changeModal = (value) => {
    setModal(value);
  };
  function clickDarslarModal() {
    console.log("darslarModal", modalDarslar);
    setModalDarslar(!modalDarslar);
    console.log("darslarModal", modalDarslar);
  }
  const changeModalDars = (value) => {
    setModalDarslar(value);
  };

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
      <div className="teacher edit_teacher">
        <div className={modal ? "def modal-navbar" : "def yoq"}>
          {/* <StudentNavbar changeModal={changeModal} modal={modal} /> */}
          <TeacherNavbar changeModal={changeModal} modal={modal} />
        </div>
        <div
          className={
            modal || modalDarslar
              ? "blur w100 main_lesson mobile"
              : "w100 main_lesson"
          }
        >
          <MobileHeader
            changeModalDars={changeModalDars}
            changeModal={changeModal}
            modal={modal}
            modalDarslar={modalDarslar}
            type={"search"}
            where="teacher"
          />
        </div>
        <div className="main_teacher_content sidebar-main-wrap teacher-main-sidebar">
          <div className="lessons_wrap">
            {courses.map((course, index) => {
              return <LessonCard cart={course} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default LessonsTeacher;
