import React from "react";

const SidebarCart = ({ img, text }) => {
  return (
    <>
      <div className="sidebar-component">
        <img src={img} alt="" />
        <p>{text}</p>
      </div>
    </>
  );
};

export default SidebarCart;
