import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";

const TeacherRegistration = () => {
  const nameRef = useRef();
  const surnameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordRepeatRef = useRef();
  const navigate = useNavigate();

  const onBack = () => {
    navigate("/select");
  };
  const onHandler = (e) => {
    e.preventDefault();
    const obj = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    axios
      .post("http://165.232.127.62:5001/users/login", obj)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          navigate("/student/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="app-content">
      <div className="sign_wrap">
        <h3 className="registr_title">O'qituvchi sifatida ro'yxatdan o'tish</h3>
        <button onClick={onBack} className="back">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <form className="registr_form" onSubmit={(e) => onHandler(e)}>
          <input ref={nameRef} type="text" placeholder="ism" />
          <input ref={surnameRef} type="text" placeholder="familiya" />
          <input ref={usernameRef} type="text" placeholder="username" />
          <input ref={emailRef} type="email" placeholder="email" />
          <input ref={passwordRef} type="password" placeholder="parol" />
          <input
            ref={passwordRepeatRef}
            type="password"
            placeholder="parolni qayta yozing"
          />
          <button type="submit">Ro'yxatdan o'tish</button>
        </form>
      </div>
    </div>
  );
};

export default TeacherRegistration;
