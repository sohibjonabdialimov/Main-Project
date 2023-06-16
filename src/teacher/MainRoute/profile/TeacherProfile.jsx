import React, { useEffect, useState } from "react";
import opacha from "../../../imgs/big-logo.png";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function deleteplatforma(url){
  try {
    if(url.includes("platforma")){
      url=url.split("/")
      let res=""
      for(let i=2;i<url.length;i++){
        res+="/"+url[i]
      }
      return(res)
    }
    return "/"+url
  } catch (error) {
    console.log(error)
  }
}
function TeacherProfile() {
  const navigate = useNavigate();
  const [profile,setProfile]=useState([]);
  useEffect(()=>{
    axios.get("http://165.232.127.62:5001/teacherme/",{
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }).then((res)=>{
      setProfile(res.data)
    })
  },[])
  console.log(profile)
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
        <img src={"http://165.232.127.62:5001"+deleteplatforma(profile.path)} alt="" />
        <h2>{profile.fullname}</h2>
      <p>{profile.obunachilar} obunachi</p>
        <span>Mutaxassislik: {profile.mutahasislik}</span>
        <div className={styles.profile_bio}>
          <p>
            BIO: {profile.bio}
          </p>
        </div>
        <label className={styles.location}>Joylashuv: {profile.joylashuv}</label>
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
