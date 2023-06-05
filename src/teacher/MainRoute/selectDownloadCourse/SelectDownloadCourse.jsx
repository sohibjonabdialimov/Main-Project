import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";

const SelectDownloadCourse = () => {
  return (
    <div className="teacherHomePage main_profile_container sidebar-wrap teacher-main-sidebar">
      <div className={styles.buttons}>
        <NavLink to="/kurs/free">Tekin kurs yuklash</NavLink>
        <NavLink to="/kurs/money">Pullik kurs yuklash</NavLink>
      </div>
    </div>
  );
};

export default SelectDownloadCourse;
