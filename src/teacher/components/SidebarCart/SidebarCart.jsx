import React from "react";
import './style.css';

const TeachSidebarCart = ({ img, text }) => {
  return (
    <>
      <div className="sidebar-component">
        <img src={img} alt="" />
        <p>{text}</p>
      </div>
    </>
  );
};

export default TeachSidebarCart;
