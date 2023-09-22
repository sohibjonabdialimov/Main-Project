import React, { useEffect, useState } from "react";
import Baystudy from "../../sidebarRouters/boughtLessons/BoughtLessons";
import "./style.css";
import "../style.css";
import MobileHeader from "../../components/mobileHeader/mobileHeader";
import Navvedio from "../../sidebarRouters/Navvedio";
import StudentNavbar from "../../navbar/student/StudentNavbar";
import axios from "axios";
let money = 650000;
money = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
let hisobraqam = 1234567890123456;
hisobraqam = hisobraqam.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " ");
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
function Balance() {
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
  
  return (
    <div className="main-page">
      <div className={modal ? "def modal-navbar" : "def yoq"}>
        <StudentNavbar changeModal={changeModal} modal={modal} />
      </div>
      <div
        className={
          modal || modalDarslar
            ? "blur w100 main_lesson mobile_none"
            : "w100 main_lesson mobile_none"
        }
      >
        <MobileHeader
          changeModalDars={changeModalDars}
          changeModal={changeModal}
          modal={modal}
          modalDarslar={modalDarslar}
          type={"Hisob balansi"}
        />
        <div className="fife main-content">
          <div className="hisoblar">
            <p className="hisoblar_header">Hisobdagi pul miqdori:</p>
            <p className="hisoblar_number">{profile.price} so'm</p>
            <p className="hisoblar_header">Tolov uchun ID:</p>
            <p className="hisoblar_number">{profile._id}</p>
          </div>
        </div>
      </div>

      <Baystudy />
      <div className={modalDarslar ? "defDars modalDarslar" : "defDars yoq"}>
        <Baystudy
          modalDarslar={modalDarslar}
          changeModalDars={changeModalDars}
          topic="Olingan kurslarning narxi"
        />
      </div>

      <Baystudy />
    </div>
  );
}

export default Balance;
