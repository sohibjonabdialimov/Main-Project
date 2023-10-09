import React, { useEffect, useState } from "react";
import Obuna from "../../sidebarRouters/Obuna";
import { useNavigate } from "react-router-dom";
import "./style.css";
import StudentNavbar from "../../navbar/student/StudentNavbar";
import MobileHeader from "../../components/mobileHeader/mobileHeader";
import axios from "axios";

function Profile() {
  function deleteplatforma(url){
    try {
      if(url?.includes("platforma")){
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
  const navigate = useNavigate();
  const [profile, setProfil] = useState({});
  useEffect(() => {
    axios
      .get("https://api.ilmlar.com/usersme", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setProfil(res.data);
      });
  }, []);
  let [modal, setModal] = useState(false);
  let [modalDarslar, setModalDarslar] = useState(false);
  const changeModal = (value) => {
    setModal(value);
  };

  const changeModalDars = (value) => {
    setModalDarslar(value);
  };
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
      return url;
    } catch (error) {
      console.log(error);
    }
  }
  const deleteAccount = () => {
    localStorage.clear();
    navigate("/");
  }
  return (
    <div className="main-page">
      <div className={modal ? "def modal-navbar" : "def yoq"}>
        <StudentNavbar changeModal={changeModal} modal={modal} />
      </div>
      <div
        className={
          modal || modalDarslar
            ? "blur fife w100 main_lesson mobile_none"
            : "fife w100 main_lesson mobile_none"
        }
      >
        <MobileHeader
          changeModalDars={changeModalDars}
          changeModal={changeModal}
          modal={modal}
          modalDarslar={modalDarslar}
          type={"Profile"}
        />

        <div className="profile-content">
          <img
            src={"https://api.ilmlar.com" + deleteplatforma(profile.path)}
            alt=""
          />
          <h1>{profile.fullname}</h1>
          <div className="profile-content-para">
            <p>Username: {profile.username}</p>
            <p>Email: {profile.email}</p>
          </div>
          <div className="profile-buttons">
            <button onClick={() => navigate("/editprofil")}>
              Profilni tahrirlash
            </button>
            <button onClick={() => deleteAccount()}>Chiqib ketish</button>
          </div>
        </div>
      </div>
      <Obuna me={profile.mycurs} />
      <div className={modalDarslar ? "defDars modalDarslar" : "defDars yoq"}>
        <Obuna
          modalDarslar={modalDarslar}
          changeModalDars={changeModalDars}
          topic="obuna"
          me={profile.mycurs}
        />
      </div>
    </div>
  );
}

export default Profile;
