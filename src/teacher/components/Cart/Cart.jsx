import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";
const TeachCart = (props) => {
  const navigate = useNavigate();
  let kursId = props.cart.kursId;
  return (
    <div
      onClick={() => {
        navigate("kurs/" + kursId);
      }}
      className="one_card"
    >
      <div className="main-cart">
        <img src={props.cart.img} alt="" />
        <div className="cart-desc">
          <h3>{props.cart.name}</h3>
          <p>{props.cart.text}</p>
        </div>
      </div>
    </div>
  );
};

export default TeachCart;
