import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import user from "../../../imgs/edit_user.png";
import camera from "../../../imgs/camera.png";

const TeachEditProfile = () => {
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="app-content">
      <div className={styles.edit_student_profile}>
        <button onClick={onBack} className={styles.back}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <div className={styles.imgs_div}>
          <img src={user} alt="" />
          <img src={camera} alt="" />
        </div>
        <form onSubmit={(e) => onHandleSubmit(e)} className={styles.form}>
          <div className={styles.input_wrap}>
            <input type="text" placeholder="ism" />
            <input type="text" placeholder="familiya" />
          </div>

          <input type="text" placeholder="mutaxassislik" />
          <input type="text" placeholder="bio" />
          <div className={styles.input_wrap}>
            <input type="text" placeholder="joylashuv" />
            <input type="text" placeholder="havola" />
          </div>
          <div className={styles.input_wrap}>
            <input type="text" placeholder="username" />
            <input type="text" placeholder="parol" />
          </div>
          <button onClick={() => navigate("/teacher/profile")}>Saqlash</button>
        </form>
      </div>
    </div>
  );
};

export default TeachEditProfile;
