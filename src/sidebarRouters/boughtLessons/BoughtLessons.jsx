import React from "react";
import "./style.css";
import homeSidebar1 from "../../imgs/sidebar1.png";
import homeSidebar2 from "../../imgs/sidebar2.png";
import prev from '../../imgs/prev.svg';

import SidebarCart from "../../components/SidebarCart/SidebarCart";
function Baystudy ({modalDarslar,changeModalDars,topic}) {
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
      <h2>Sotib olingan darslar - 2 ta</h2>
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
     
       
      </div>
    </div>
  );
};

export default Baystudy;
