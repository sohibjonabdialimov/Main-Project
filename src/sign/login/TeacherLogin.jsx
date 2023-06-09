import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const TeacherLogin = () => {
  const passwordRef = useRef();
  const usernameRef = useRef();
  const navigate = useNavigate();
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
    <div>
      <form onSubmit={(e) => onHandler(e)}>
        <input ref={usernameRef} type="text" placeholder="username" />
        <input ref={passwordRef} type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default TeacherLogin;
