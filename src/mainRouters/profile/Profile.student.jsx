import React, { useEffect, useState } from "react";
import Obuna from "../../sidebarRouters/Obuna";
import opacha from "../../imgs/big-logo.png";
import obuna1 from "../../imgs/obuna1.png";
import obuna2 from "../../imgs/obuna2.png";
import obuna3 from "../../imgs/obuna3.png";
import obuna4 from "../../imgs/obuna4.png";
import obuna5 from "../../imgs/obuna5.png";
import obuna6 from "../../imgs/obuna6.png";
import obuna7 from "../../imgs/obuna7.png";
import { useNavigate } from "react-router-dom";
import "./style.css";
import StudentNavbar from "../../navbar/student/StudentNavbar";
import MobileHeader from "../../components/mobileHeader/mobileHeader";
import Baystudy from "../../sidebarRouters/boughtLessons/BoughtLessons";
import axios from "axios";
import { userme } from "../../../unvervars/userme";

function Profile() {
  const navigate = useNavigate();
  const [profile, setProfil] = useState({})
  useEffect(() => {
    axios.get("http://165.232.127.62:5001/usersme", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then((res) => {
      setProfil(res.data)

    })
  }, [])
  let [modal, setModal] = useState(false)
  let [modalDarslar, setModalDarslar] = useState(false)
  const changeModal = (value) => {
    setModal(value)
  }

  const changeModalDars = (value) => {
    setModalDarslar(value)
  }
  function deleteplatforma(url) {
    try {
      if (url.includes("platforma")) {
        url = url.split("/")
        let res = ""
        for (let i = 2; i < url.length; i++) {
          res += "/" + url[i]
        }
        return (res)
      }
      return "/" + url
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="main-page">
      <div className={modal ? "def modal-navbar" : "def yoq"} >
        <StudentNavbar changeModal={changeModal} modal={modal} />
      </div>
      <div
        className={(modal || modalDarslar) ? "blur fife w100 main_lesson mobile_none" : "fife w100 main_lesson mobile_none"}
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      // }}
      >
        <MobileHeader changeModalDars={changeModalDars} changeModal={changeModal} modal={modal} modalDarslar={modalDarslar} type={'Profile'} />

        <div className="profile-content">
          <img src={"http://165.232.127.62:5001" + deleteplatforma(profile.path)} alt="" />
          <h1>{profile.fullname}</h1>
          <div className="profile-content-para">
            <p>Username: {profile.username}</p>
            <p>Email: {profile.email}</p>
          </div>
          <div className="profile-buttons">
            <button onClick={() => navigate('/editprofil')}>Profilni tahrirlash</button>
            <button>Chiqib ketish</button>
          </div>
        </div>
      </div>
      <Obuna me={profile.mycurs} />
      <div className={modalDarslar ? "defDars modalDarslar" : "defDars yoq"} >
        <Obuna modalDarslar={modalDarslar} changeModalDars={changeModalDars} topic='obuna' me={profile.mycurs} />
      </div>
    </div>
  );
}

export default Profile;
