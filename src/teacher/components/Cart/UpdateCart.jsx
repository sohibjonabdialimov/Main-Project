import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";
const TeachUpdateCart = (props) => {
  const navigate = useNavigate();
  const { img, name, autorId } = props.cart;
  let kursId = props.cart.kursId;
  return (
    <div
      onClick={() => {
        navigate("/teacher/update/kurs/" + kursId);
      }}
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

export default TeachUpdateCart;