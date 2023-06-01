import React from "react";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import user from "../../../imgs/edit_user.png";
import camera from "../../../imgs/camera.png";

const TeachEditProfile = () => {
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  }
  return (
    <div className={styles.edit_profile}>
      <button onClick={onBack} className={styles.back}>
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
    </div>
  );
};

export default TeachEditProfile;
