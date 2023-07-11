import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import "../../../App.css";
import TeacherNavbar from "../../../navbar/teacher/TeacherNavbar";
import MobileHeader from "../../../components/mobileHeader/mobileHeader";
const SelectDownloadCourse = () => {
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
      <div className={modal ? "def modal-navbar" : "def yoq"}>
        {/* <StudentNavbar changeModal={changeModal} modal={modal} /> */}
        <TeacherNavbar changeModal={changeModal} modal={modal} />
      </div>
      <div
        className={
          modal || modalDarslar
            ? "blur w100 main_lesson mobile mobile_none"
            : "w100 main_lesson mobile_none"
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
      <div className="teacherHomePage main_profile_container sidebar-wrap teacher-main-sidebar">
        <div className={styles.buttons}  >
          <NavLink to="/kurs/free">Tekin kurs yuklash</NavLink>
          <NavLink to="/kurs/money">Pullik kurs yuklash</NavLink>
        </div>
      </div>
    </>
  );
};

export default SelectDownloadCourse;
