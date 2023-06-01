import React from "react";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";

function TeachMoneykurs() {
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  return (
    <div className="global_wrap">
      <div className={styles.kurs_yuklash}>
        <button onClick={onBack} className={styles.back}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <h1>Tekin kurs yuklash</h1>
        <form className={styles.kurs_yuklash_form}>
          <div className={styles.input_wrap}>
            <label htmlFor="amount">Pul miqdori</label>
            <div className={styles.input_div}>
              <input type="text" placeholder="so'm" />
            </div>
          </div>
          <div className={styles.input_wrap}>
            <label htmlFor="amount">Pul miqdori</label>
            <div className={styles.input_div}>
              <input type="text" placeholder="so'm" />
            </div>
          </div>
          <div className="upload_div">
            <div className={styles.input_file}>
              <p>Muqova uchun rasm</p>
              <input type="file" placeholder="Muqova uchun rasm" />
            </div>
            <div className="video_download">
              <p>1-video dars</p>
              <button>Video dars yuklash</button>
              <button>
                <ion-icon name="add-outline"></ion-icon>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TeachMoneykurs;
