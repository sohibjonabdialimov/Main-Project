import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

function deleteplatforma(url){
  try {
    if(url.includes("platforma")){
      url=url.split("/")
      let res=""
      for(let i=2;i<url.length;i++){
        res+="/"+url[i]
      }
      return(res)
    }
    return "/"+url
  } catch (error) {
    console.log(error)
  }
}
const StatisticCard = (props) => {
  const navigate = useNavigate();
  let kursId = props.cart._id;
  return (
    <div
      onClick={() => {
        navigate("/teacher/statistic/" + kursId);
      }}
    >
      <div className="main-cart">
        <img src={"http://165.232.127.62:5001"+deleteplatforma(props.cart.obloshka)} alt="" />
        <div className="cart-desc">
          <h3>{props.cart.Kursname}</h3>
          <p>{props.cart.Kursdesc}</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticCard;
