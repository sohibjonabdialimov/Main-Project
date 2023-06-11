import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
const ProcessFreeDownload = () => {
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="app-content">
        <div className="global_wrap">
          <div className="process_free_wrap">
            <button onClick={onBack} className="back">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <h2>Pullik kurs yuklash</h2>
            <form className="process_free_form">
              <div className="free_input_wrap">
                <label htmlFor="name">Video dars nomi</label>
                <input type="text" id="name" />
              </div>
              <div className="free_input_wrap">
                <label htmlFor="about">Video dars haqida</label>
                <textarea name="about" id="about"></textarea>
              </div>
              <div className="process_input_file">
                <p>Video dars</p>
                <input type="file" placeholder="Muqova uchun rasm" />
              </div>
              <button type="submit">Saqlash</button>
            </form>
          </div>
        </div>
      </div>

      <div className="free_modal">
        <div className="free_modal_content">
          <p>Bu kursni haqiqatdan yuklamoqchimisiz?</p>
          <div className="free_modal_wrap">
            <button onClick={() => navigate(-1)}>YO'Q</button>
            <button onClick={() => navigate("/free/success")}>HA</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessFreeDownload;
