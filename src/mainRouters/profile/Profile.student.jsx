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

function Profile() {
  const navigate = useNavigate();
  const [profile,setProfil]=useState({})
  useEffect(() => {
    axios.get("http://165.232.127.62:5001/users/me", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then((res) => {
      console.log(res.data)
      setProfil(res.data)
      
    })
  }, [])
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
          name: "Guljahon Shermatova",
          what: "Ingliz tili",
          avatar: obuna1,
        },
        {
          userId: 13,
          name: "Mavjuda Olimova",
          what: "Matematika",
          avatar: obuna2,
        },
        {
          userId: 14,
          name: "Sevara Temirova",
          what: "O'zbek tili",
          avatar: obuna3,
        },
        {
          userId: 15,
          name: "Mahmud Soliyev",
          what: "Fizika",
          avatar: obuna4,
        },
        {
          userId: 16,
          name: "Everest English",
          what: "Ingliz tili",
          avatar: obuna5,
        },
        {
          userId: 17,
          name: "Mavjuda Olimova",
          what: "Matematika",
          avatar: obuna6,
        },
        {
          userId: 18,
          name: "Davron Turdiyev",
          what: "Mnemonika",
          avatar: obuna7,
        },
      ],
    },
  ];
  let [modal, setModal] = useState(false)
  let [modalDarslar, setModalDarslar] = useState(false)
  const changeModal = (value) => {
    setModal(value)
  }

  const changeModalDars = (value) => {
    setModalDarslar(value)
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
          <img src={opacha} alt="" />
          <h1>{me[0].name + " " + me[0].surname}</h1>
          <div className="profile-content-para">
            <p>Username: {me[0].username}</p>
            <p>Email: {me[0].email}</p>
          </div>
          <div className="profile-buttons">
            <button onClick={() => navigate('/editprofil')}>Profilni tahrirlash</button>
            <button>Chiqib ketish</button>
          </div>
        </div>
      </div>
      <Obuna me={me} />
      <div className={modalDarslar ? "defDars modalDarslar" : "defDars yoq"} >
        <Obuna  modalDarslar={modalDarslar} changeModalDars={changeModalDars} topic='obuna' me={me}/>
      </div>
    </div>
  );
}

export default Profile;
