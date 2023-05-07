import React from "react";
import "./index.css";
import homeSidebar1 from "../imgs/sidebar1.png";
import homeSidebar2 from "../imgs/sidebar2.png";
import homeSidebar3 from "../imgs/sidebar3.png";
import homeSidebar4 from "../imgs/sidebar4.png";
import SidebarCart from "../components/SidebarCart/SidebarCart";
const Navvedio = () => {
  return (
    <div className="Nav sidebar-main-content">
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
  );
};

export default Navvedio;
