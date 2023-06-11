import React from "react";
import "./style.css";
import yes from "../../../imgs/yes.svg";
import { useNavigate } from "react-router-dom";

const SuccessFreeDownload = () => {
  const navigate = useNavigate();
  const onBack = () => {
    navigate("/teacher/kurs");
  };
  return (
    <div className="app-content">
      <div className="global_wrap">
        <div className="process_wrap">
          <div className="img_wrap">
            <img src={yes} alt="" />
          </div>
          <div className="success_free_title">
            <h2>Tabriklaymiz!</h2>
            <h2>Kurs yuklandi</h2>
          </div>
          <button onClick={onBack} className="success_free_btn">
            Bosh sahifa
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessFreeDownload;
