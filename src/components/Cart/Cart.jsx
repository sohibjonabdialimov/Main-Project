import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";
const Cart = (props) => {
  const navigate = useNavigate();
  let kursId = props.cart.kursId;
  return (
    <div
      onClick={() => {
        navigate("/student/kurs/" + kursId);
      }}
    >
      <div className="main-cart">
        <img src={props.cart.img} alt="" />
        <div className="cart-desc">
          <h3>{props.cart.name}</h3>
          <p>{props.cart.text}</p>
          <div className="desc">
            <img src={props.cart.smallImg} alt="" />
            <span>{props.cart.author}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
