import React from "react";
import opacha from "../../../imgs/big-logo.png";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";

function TeacherProfile() {
  const navigate = useNavigate();
  let me = [
    {
      type: 0,
      name: "name",
      surname: "surname",
      username: "username",
      email: "username@email.com",
      subscibe: [
        {
          userId: 12,
          name: "",
          surname: "",
          email: "",
        },
        {
          userId: 13,
          name: "",
          surname: "",
          email: "",
        },
        {
          userId: 14,
          name: "",
          surname: "",
          email: "",
        },
        {
          userId: 15,
          name: "",
          surname: "",
          email: "",
        },
        {
          userId: 16,
          name: "",
          surname: "",
          email: "",
        },
        {
          userId: 17,
          name: "",
          surname: "",
          email: "",
        },
      ],
    },
  ];

  return (
    <div className="teacherHomePage main_profile_container sidebar-wrap teacher-main-sidebar">
      <div className={styles.teacher_profile_wrap}>
        <img src={opacha} alt="" />
        <h2>Name Surname</h2>
        <p>1250 obunachi</p>
        <span>Mutaxassislik: Ingliz tili o'qituvchi, Filolog va Tilshunos</span>
        <div className={styles.profile_bio}>
          <p>
            BIO: Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book
          </p>
        </div>
        <label className={styles.location}>Joylashuv: Yunusobod, Tashkent, Uzbekistan</label>
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
