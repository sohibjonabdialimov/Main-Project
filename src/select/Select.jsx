import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Select = () => {
  const navigate = useNavigate();
  const onBack = () => {
    navigate("/");
  };
  return (
    <div className="app-content">
      <div className="sign_wrap">
        <button onClick={onBack} className="back">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <div className="select_div">
          <Link className="select_link" to="/login/">
            O'quvchi sifatida ro'yhatdan o'tish
          </Link>
          <br />
          <Link className="select_link" to="/teacherlogin">
            O'qituvchi sifatida ro'yhatdan o'tish
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Select;
