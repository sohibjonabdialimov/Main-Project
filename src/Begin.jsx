import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import logo from "./imgs/ionex.png";
import carousel1 from "./imgs/carousel1.png";
import carousel2 from "./imgs/carousel2.png";
import carousel3 from "./imgs/carousel3.png";
import carousel4 from "./imgs/carousel4.png";
import hero_img from "./imgs/hero_img.png";
import ionex_content from "./imgs/hero_img_2.png";
import ionex_content2 from "./imgs/hero_img_3.png";
import ionex_mobile from "./imgs/ionex_mobile.png";
import big_img from "./imgs/hero_img_1.svg";
import { useNavigate } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
function Begin() {
  const [start,setStart]=useState(false)
  const navigate = useNavigate();
  const startFunc = () => {
    navigate("/select");
  };
  const startFuncLogin = () => {
    navigate("/selectLogin");
  };
  const startClick = () => {
   setStart(!start)
  };
  return (
    <div className="ionex">
      <div className="ionex_header">
        <div className="ionex_logo">
          <Link>ionex</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link>Biz haqimizda</Link>
            </li>
            <li>
              <Link>O'qituvchilar</Link>
            </li>
            <li>
              <Link>O'rganuvchilar</Link>
            </li>
          </ul>
        </nav>
        <button onClick={startClick}>Boshlash</button>
        {/* className="route-select"  */}
        <div className={start?'route-select':'route-select d-none'} >
          <div onClick={() => startFuncLogin()}>Kirish</div>
          <div onClick={() => startFunc()}>Ro'yhatdan o'tish</div>
        </div>
      </div>

      <div className="ionex_hero">
        <div className="hero_logo">
          {/* <img src={logo} alt="" /> */}
          <button className="ionex-btn">ionex</button>
          <p>Yangi avlod ta'lim platformasi</p>
        </div>
        <div>
          <img className="hero_img mobile-noneb" src={hero_img} alt="ionex" />
          <img src={ionex_mobile} alt="img" className="desktop-none" />
        </div>
      </div>
      <div className="carousel_imgs">
        <img src={carousel1} alt="" />
        <img src={carousel2} alt="" />
        <img src={carousel3} alt="" />
        <img src={carousel4} alt="" />
      </div>
      <div className="hero_big_img">
        <img src={big_img} alt="" />
      </div>
      <div className="hero_text_content">
        <p className="mobile--text">
          ionex.com ta’lim platformasi, insonlar o’rtasida ilmlarni o’rganish va
          o’rgatish uchun yaratilgan.
        </p>
      </div>
      <div className="ionex_about_content">
        <img src={ionex_content} alt="" />
        <div className="ionex_about_content_desc">
          <h3>O’qituvchilar</h3>
          <p className="mobile--text">
            <span className="bold_class">ionex.com</span> ta'lim platformasi,
            masofaviy ta'lim berishni maqsad qilgan o'qituvchilar uchun
            yaratilgan. Bunda siz o'zingizning video darslardan iborat
            kurslaringizni platformaga joylashingiz va daromad olishingiz
            mumkin.
          </p>
        </div>
      </div>
      <div className="ionex_advertise">
        <p>ionex.com</p>
      </div>

      <div className="ionex_about_content ionex-more">
        <div className="ionex_about_content_desc child-1">
          <h3>O’qituvchilar</h3>
          <p className="mobile--text">
            <span className="bold_class">ionex.com</span> ta'lim platformasi,
            masofaviy ta'lim olishni istaganlar uchun to'g'ri tanlov. Siz bu
            platformada, barcha fanlar bo'yicha video kurslarni topishingiz
            mumkin. O'zingiz uchun qulay vaqtda va qulay joyda ta'lim oling.
          </p>
        </div>
        <img src={ionex_content2} alt="" className="child-2" />
      </div>

      <div className="ionex_advertise">
        <p>ionex.com</p>
      </div>
      <footer className="footer_section">
        <p>Footer section</p>
      </footer>
    </div>
  );
}

export default Begin;
