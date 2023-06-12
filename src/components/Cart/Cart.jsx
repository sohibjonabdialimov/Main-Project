import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";
import axios from "axios";
const Cart = (props) => {
  const navigate = useNavigate();
  let kursId = props.cart._id;
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
  const [teacher,setTeacher]=useState({});

  useEffect(()=>{
    axios.get("http://165.232.127.62:5001/teacherinfo/"+props.cart.teacher_Id).then((res)=>{
      setTeacher(res.data)
    })
  },[])
  return (
    <div className="d-flex justify-content-center"
      onClick={() => {
        navigate("/student/kurs/" + kursId);
      }}
    >
      <div className="main-cart">
        <img src={"http://165.232.127.62:5001"+deleteplatforma(props.cart.obloshka)} alt="" />
        <div className="cart-desc_wrap">
          <h3>{props.cart.Kursname}</h3>
          <p>{props.cart.Kursdesc}</p>
          <div className="desc">
            <img className="small_img" src={"http://165.232.127.62:5001"+deleteplatforma(teacher.path)} alt="" />
            <span>{teacher.fullname}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
