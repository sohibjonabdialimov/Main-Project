import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";
const TeacherLogin = () => {
  const passwordRef = useRef();
  const usernameRef = useRef();
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  const onHandler = (e) => {
    e.preventDefault();
    const obj = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    axios
      .post("http://165.232.127.62:5001/teacher/login", obj)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          navigate("/teacher/darslar");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="app-content">
      <div className="sign_wrap">
      <button onClick={onBack} className="back">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
        <form className="sign_form" onSubmit={(e) => onHandler(e)}>
          <input ref={usernameRef} type="text" placeholder="username" />
          <input ref={passwordRef} type="password" placeholder="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default TeacherLogin;
