import React, { useEffect, useState } from "react";
import "./style.css";
import "../style.css";
import StatisticCard from "../../components/statisticCard/StatisticCard";
import axios from "axios";
import TeacherNavbar from "../../../navbar/teacher/TeacherNavbar";
import MobileHeader from "../../../components/mobileHeader/mobileHeader";
function Statistic() {
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
      })
      .catch((err) => console.log(err));
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
    <div className="">
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
      <div className="main_teacher_content sidebar-main-wrap statistic__wrapper">
        {courses.map((course, index) => {
          return <StatisticCard cart={course} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Statistic;
