import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./courseInfo.module.css";
import VideosNavbar from "../../../navbar/videos/VideosNavbar";
import VideoInformation from "../../components/videoInformation/VideoInformation";
function CourseInfo() {
  const { kursId } = useParams();
  const navigate = useNavigate();
  const onBack = () => {
    navigate("/teacher/darslar");
  };
  return (
    <div className={styles.course_info}>
      <button onClick={onBack} className={styles.back}>
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
      <VideosNavbar />
      <VideoInformation />
    </div>
  );
}

export default CourseInfo;
