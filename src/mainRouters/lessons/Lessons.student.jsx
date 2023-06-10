import React, { useEffect, useState } from "react";
import Cart from "../../components/Cart/Cart";
import Navvedio from "../../sidebarRouters/Navvedio";
// import search from "../../imgs/search.png";
// import img12 from "../../imgs/main1.png";
// import img13 from "../../imgs/main2.png";
// import img14 from "../../imgs/main3.png";
// import img15 from "../../imgs/main4.png";
// import small1 from "../../imgs/teacher-home1.png";
// import small2 from "../../imgs/teacher-home2.png";
// import small3 from "../../imgs/teacher-home3.png";
// import small4 from "../../imgs/teacher-home4.png";
// import mobileBurger from "../../imgs/mobile-burger.svg";
// import mobileMenu from "../../imgs/mobile_menu.svg";
import "./style.css";
import "../style.css";
import StudentNavbar from "../../navbar/student/StudentNavbar";
import MobileHeader from "../../components/mobileHeader/mobileHeader";
import axios from "axios";

function Lessons() {
  const [courses,setCourses]=useState([]);
  useEffect(()=>{
    axios.get("http://165.232.127.62:5001/courses/").then((res)=>{
      setCourses(res.data)
    })
  },[])
  let [modal, setModal] = useState(false);
  let [modalDarslar, setModalDarslar] = useState(false);
  function clickModal() {
    console.log("vvvvv", modal);
    setModal(!modal);
  }
  const changeModal = (value) => {
    setModal(value);
  };
  function clickDarslarModal() {
    console.log("darslarModal", modalDarslar);
    setModalDarslar(!modalDarslar);
    console.log("darslarModal", modalDarslar);
  }
  const changeModalDars = (value) => {
    setModalDarslar(value);
  };
  console.log("vvvvv", modal, "222");
  return (
    <div className="main-page">
      <div className={modal ? "def modal-navbar" : "def yoq"}>
        <StudentNavbar changeModal={changeModal} modal={modal} />
      </div>
      <div
        className={
          modal || modalDarslar ? "blur w100 main_lesson" : "w100 main_lesson"
        }
      >
        <MobileHeader
          changeModalDars={changeModalDars}
          changeModal={changeModal}
          modal={modal}
          modalDarslar={modalDarslar}
          type={"search"}
        />
        <div className="fife  main-content sidebar-main-wrap_all">
          <div className="student_lessons_wrap">
          {courses.map((cart, index) => {
            return <Cart cart={cart} key={index} />
          })}
          </div>
          
        </div>
      </div>
      <Navvedio />
      <div className={modalDarslar ? "defDars modalDarslar" : "defDars yoq"}>
        <Navvedio
          modalDarslar={modalDarslar}
          changeModalDars={changeModalDars}
          topic="Darslaringiz"
        />
      </div>
    </div>
  );
}

export default Lessons;
