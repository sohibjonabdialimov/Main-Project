import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import img from "../../../imgs/statistika.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function deleteplatforma(url) {
  try {
    if (url.includes("platforma")) {
      url = url.split("/")
      let res = ""
      for (let i = 2; i < url.length; i++) {
        res += "/" + url[i]
      }
      return (res);
    }
    return "/" + url
  } catch (error) {
    console.log(error)
  }
}
const CourseStatistic = () => {

  const { course } = useParams();
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios.post("https://api.ilmlar.com/courseone/me", { cursId: course }, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setCourses(res.data);
      });
  }, []);
  return (
    <div className="app-content">
      <div className="global_wrap">
        <div className={styles.course_statistic}>
          <button onClick={onBack} className={styles.back}>
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
          <div className={styles.course_statictic_wrap}>
            <div className={styles.img_card}>
              <img src={"https://api.ilmlar.com" + deleteplatforma(courses.obloshka)} alt="" />
              <div className={styles.img_card_desc}>
                <h3>{courses.Kursname}</h3>
                <p>{courses.Kursdesc}</p>
              </div>
            </div>
            <div className={styles.course_statictic_desc}>
              <h2>Kurs statistikasi</h2>
              <p>Yuklangan vaqt: 4, April, 2022</p>
              <p>Narxi: {courses.narxi} UZS</p>
              <p>Kurs davomiyligi: 2 oy</p>
              <p>Kurs o'qilish jarayonida:{courses.subs?.length}</p>
              <p>Kurs daromadi: {courses.narxi*courses.subs?.length*0.8}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseStatistic;
