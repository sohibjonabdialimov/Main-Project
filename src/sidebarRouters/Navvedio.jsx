import React from "react";
import "./index.css";
import homeSidebar1 from "../imgs/sidebar1.png";
import homeSidebar2 from "../imgs/sidebar2.png";
import homeSidebar3 from "../imgs/sidebar3.png";
import homeSidebar4 from "../imgs/sidebar4.png";
import prev from '../imgs/prev.svg';
import SidebarCart from "../components/SidebarCart/SidebarCart";
function  Navvedio ({modalDarslar,changeModalDars,topic}) {
console.log(modalDarslar,'saaaaaaaaa');

const handleClick = () => {
  changeModalDars(false)
}
  return (
    <div className="Nav sidebar-main-content">
      <div className={(modalDarslar)?"mobile__header":'d-none '} onClick={handleClick}>
         <div className="circle">
         <img src={prev} alt="prev" />
         </div>
         <h3>{topic}</h3>
         
      </div>
      <div className="mobileForPadding">
      <h2>Olingan darslar - 2 ta</h2>
      <div className="sidebar-line"></div>
      <div className="sidebar-bought-course">
        <SidebarCart
          img={homeSidebar1}
          text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
        />
        <SidebarCart
          img={homeSidebar2}
          text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
        />
      </div>
      <h2 className="saqlanganlar">Saqlanganlar - 4 ta</h2>
      <div className="sidebar-line"></div>
      <SidebarCart
        img={homeSidebar3}
        text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
      />
      <SidebarCart
        img={homeSidebar4}
        text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
      />
      <SidebarCart
        img={homeSidebar3}
        text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
      />
      <SidebarCart
        img={homeSidebar4}
        text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
      />
      </div>
     
    </div>
  );
};

export default Navvedio;
