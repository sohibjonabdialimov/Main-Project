import React, { useRef } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
const ProcessFreeDownload = () => {
  const navigate = useNavigate();
  const videoNameRef = useRef();
  const videoDescRef = useRef();
  const videoImgRef = useRef();
  const onBack = () => {
    navigate("/kurs/free");
  };
  return (
    <>
      <div className="app-content">
        <div className="global_wrap">
          <div className="process_free_wrap">
            <button onClick={onBack} className="back">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <h2>Tekin kurs yuklash</h2>
            <form className="process_free_form">
              <div className="free_input_wrap">
                <label htmlFor="name">Video dars nomi</label>
                <input ref={videoNameRef} type="text" id="name" />
              </div>
              <div className="free_input_wrap">
                <label htmlFor="about">Video dars haqida</label>
                <textarea ref={videoDescRef} name="about" id="about"></textarea>
              </div>
              <div className="process_input_file">
                <p>Video dars</p>
                <input ref={videoImgRef} type="file" placeholder="Muqova uchun rasm" />
              </div>
              <button type="submit">Saqlash</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessFreeDownload;
