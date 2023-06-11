import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";
import { ToastContainer, toast } from 'react-toastify';

const StudentLogin = () => {
  const passwordRef = useRef();
  const usernameRef = useRef();
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
        toast.error('Username yoki parol xato', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        console.log(err);
      });
  };
  return (
    <div className="app-content">
       <ToastContainer />
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

export default StudentLogin;
