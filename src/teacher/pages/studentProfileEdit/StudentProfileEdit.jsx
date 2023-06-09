import React from "react";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import user from "../../../imgs/edit_user.png";
import camera from "../../../imgs/camera.png";

const StudentProfileEdit = () => {
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={style.edit_profile}>
      <button onClick={onBack} className={style.back}>
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
      <div className={style.imgs_div}>
        <img src={user} alt="" />
        <img src={camera} alt="" />
      </div>
      <form onSubmit={(e) => onHandleSubmit(e)} className={style.form}>

        <input type="text" placeholder="ism" />
        <input type="text" placeholder="familiya" />
        <input type="text" placeholder="username" />
        <input type="password" placeholder="parol" />
        <button>Saqlash</button>
      </form>
    </div>
  );
};

export default StudentProfileEdit;
