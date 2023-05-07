import React from "react";
import "./index.css";
import homeSidebar1 from "../imgs/sidebar1.png";
import homeSidebar2 from "../imgs/sidebar2.png";
import SidebarCart from "../components/SidebarCart/SidebarCart";
const Navvedio = () => {
  return (
    <div className="Nav">
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
    </div>
  );
};

export default Navvedio;
