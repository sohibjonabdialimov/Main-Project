import React from "react";
import styles from "./style.module.css";
import img from "../../../imgs/statistika.png";
import { useNavigate, useParams } from "react-router-dom";
const CourseStatistic = () => {
  
  const { course } = useParams();
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  return (
    <div className="app-content">
      <div className="global_wrap">
        <div className={styles.course_statistic}>
          <button onClick={onBack} className={styles.back}>
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
          <div className={styles.course_statictic_wrap}>
            <div className={styles.img_card}>
              <img src={img} alt="" />
              <div className={styles.img_card_desc}>
                <h3>IELTS-8.0 English Course</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptate aliquid assumenda magnam nihil sed iure.
                </p>
              </div>
            </div>
            <div className={styles.course_statictic_desc}>
              <h2>Kurs statistikasi</h2>
              <p>Yuklangan vaqt: 4, April, 2022</p>
              <p>Narxi: 150 000 so'm</p>
              <p>Kurs davomiyligi: 2 oy</p>
              <p>Olingan: 450</p>
              <p>Kurs tugatilgan: 300</p>
              <p>Kurs o'qilish jarayonida: 150</p>
              <p>Kurs daromadi: 67 500 000 so'm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseStatistic;
