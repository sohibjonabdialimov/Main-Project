import React, { useState } from "react";
import Cart from "../../components/Cart/Cart";
import Navvedio from "../../sidebarRouters/Navvedio";
import search from "../../imgs/search.png";
import img12 from "../../imgs/main1.png";
import img13 from "../../imgs/main2.png";
import img14 from "../../imgs/main3.png";
import img15 from "../../imgs/main4.png";
import small1 from "../../imgs/teacher-home1.png";
import small2 from "../../imgs/teacher-home2.png";
import small3 from "../../imgs/teacher-home3.png";
import small4 from "../../imgs/teacher-home4.png";
import mobileBurger from "../../imgs/mobile-burger.svg";
import mobileMenu from "../../imgs/mobile_menu.svg";
import "./style.css";
import "../style.css";
import StudentNavbar from "../../navbar/student/StudentNavbar";
import MobileHeader from "../../components/mobileHeader/mobileHeader";
function Lessons() {
  let carts = [
    {
      kursId: 12,
      img: img12,
      smallImg: small1,
      name: "Super miya",
      autorId: 14,
      author: "Davron Turdiyev",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      kursId: 13,
      img: img13,
      smallImg: small2,
      name: "Kitoblarni effectiv o'qish",
      autorId: 14,
      author: "Madina Olimova",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      kursId: 14,
      img: img14,
      smallImg: small3,
      name: "Quvnoq ingliz tili",
      autorId: 14,
      author: "Cambridge LC",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      kursId: 15,
      img: img15,
      smallImg: small4,
      name: "Inson omili yoki AI",
      autorId: 14,
      author: "MohirDev",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      kursId: 17,
      img: img14,
      smallImg: small3,
      name: "Quvnoq ingliz tili",
      autorId: 14,
      author: "Cambridge LC",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      kursId: 18,
      img: img15,
      smallImg: small4,
      name: "Inson omili yoki AI",
      autorId: 14,
      author: "MohirDev",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  let [modal, setModal] = useState(false)
  let [modalDarslar, setModalDarslar] = useState(false)
  function clickModal() {
    console.log('vvvvv', modal);
    setModal(!modal)
  }
  const changeModal = (value) => {
    setModal(value)
  }
  function clickDarslarModal() {
    console.log('darslarModal', modalDarslar);
    setModalDarslar(!modalDarslar)
    console.log('darslarModal', modalDarslar);

  }
  const changeModalDars = (value) => {
    setModalDarslar(value)
  }
  console.log('vvvvv', modal, '222');
  return (
    <div className="main-page">
      <div className={modal ? "def modal-navbar" : "def yoq"} >
        <StudentNavbar changeModal={changeModal} modal={modal} />
      </div>
      <div className={(modal || modalDarslar) ? "blur w100 main_lesson" : "w100 main_lesson"}>
        {/* <div className="mobile-for">
          <div className="burger" onClick={clickModal}>
            <div className="burger-box">
              <img src={mobileBurger} alt="burger" />
            </div>

          </div>
          <div className="search-div">

            <input
              type="search"
              className="search-main"
              placeholder="search..."
            />
            <div className="search-img-box">
              <img src={search} alt="" />
            </div>
          </div>
          <div className="burger" onClick={clickDarslarModal}>
            <div className="burger-box" >
              <img src={mobileMenu} alt="burger" />
            </div>

          </div>
        </div> */}
        <MobileHeader changeModalDars={changeModalDars} changeModal={changeModal} modal={modal} modalDarslar={modalDarslar} type={'search'} />
        <div className="fife  main-content sidebar-main-wrap_all">
          {carts.map((cart, index) => {
            return <Cart cart={cart} key={index} />;
          })}
        </div>
      </div>
      <Navvedio />
      <div className={modalDarslar ? "defDars modalDarslar" : "defDars yoq"} >
        <Navvedio modalDarslar={modalDarslar} changeModalDars={changeModalDars} />
      </div>
    </div>
  );
}

export default Lessons;
