import React from "react";
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
import big_img from "./imgs/hero_img_1.svg";
import { useNavigate } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
function Begin() {
  const navigate = useNavigate();
  const startFunc = () => {
    navigate("/select");
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
        <button onClick={() => startFunc()}>Boshlash</button>
      </div>

      <div className="ionex_hero">
        <div className="hero_logo">
          <img src={logo} alt="" />
          <p>Yangi avlod ta'lim platformasi</p>
        </div>
        <img className="hero_img" src={hero_img} alt="" />
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
        <p>
          ionex.com ta’lim platformasi, insonlar o’rtasida ilmlarni o’rganish va
          o’rgatish uchun yaratilgan.
        </p>
      </div>
      <div className="ionex_about_content">
        <img src={ionex_content} alt="" />
        <div className="ionex_about_content_desc">
          <h3>O’qituvchilar</h3>
          <p>
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

      <div className="ionex_about_content">
        <div className="ionex_about_content_desc">
          <h3>O’qituvchilar</h3>
          <p>
            <span className="bold_class">ionex.com</span> ta'lim platformasi,
            masofaviy ta'lim olishni istaganlar uchun to'g'ri tanlov. Siz bu
            platformada, barcha fanlar bo'yicha video kurslarni topishingiz
            mumkin. O'zingiz uchun qulay vaqtda va qulay joyda ta'lim oling.
          </p>
        </div>
        <img src={ionex_content2} alt="" />
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
