import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./App.css";
import logo from "./imgs/ionex.png";
import carousel1 from "./imgs/carousel1.png";
import carousel2 from "./imgs/carousel2.png";
import carousel3 from "./imgs/carousel3.png";
import carousel4 from "./imgs/carousel4.png";
import hero_img from "./imgs/hero_img.png";
function Begin() {
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
        <button>Boshlash</button>
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
      <NavLink to="/login/">student</NavLink>
      <br />
      <NavLink to="/teacherlogin">oqituvchi</NavLink>
    </div>
  );
}

export default Begin;
