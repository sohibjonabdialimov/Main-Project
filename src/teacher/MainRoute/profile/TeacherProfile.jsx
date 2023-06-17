import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function deleteplatforma(url) {
  try {
    if (url.includes("platforma")) {
      url = url.split("/");
      let res = "";
      for (let i = 2; i < url.length; i++) {
        res += "/" + url[i];
      }
      return res;
    }
    return "/" + url;
  } catch (error) {
    console.log(error);
  }
}
function TeacherProfile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    axios
      .get("http://165.232.127.62:5001/teacherme/", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setProfile(res.data);
      });
  }, []);

  return (
    <div className="teacherHomePage main_profile_container sidebar-wrap teacher-main-sidebar">
      <div className={styles.teacher_profile_wrap}>
        <img
          src={"http://165.232.127.62:5001" + deleteplatforma(profile.path)}
          alt=""
        />
        <h2>{profile.fullname}</h2>
        <h4>{profile.obunachilar} obunachi</h4>
        <div className={styles.profile_teacher_desc}>
          <p>Mutaxassislik: {profile.mutahasislik}</p>
          <p>BIO: {profile.bio}</p>
          <label className={styles.location}>
            Joylashuv: {profile.joylashuv}
          </label>
        </div>

        <div className={styles.profile_buttons}>
          <button onClick={() => navigate("/editteacherprofile")}>
            Profilni tahrirlash
          </button>
          <button>Chiqib ketish</button>
        </div>
      </div>
    </div>
  );
}

export default TeacherProfile;
