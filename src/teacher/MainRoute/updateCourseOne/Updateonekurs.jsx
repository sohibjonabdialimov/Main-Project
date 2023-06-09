import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./update.module.css";

function TeachUpdateonekurs() {
  const { Id } = useParams();
  const [plus, setPlus] = useState(false);

  console.log(Id);
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  const onHandleForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="app-content">
      <div className="global_wrap">
        <div className={styles.kurs_yuklash}>
          <button onClick={onBack} className={styles.back}>
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
          <h1>Kursni yangilash</h1>
          <form
            onSubmit={(e) => onHandleForm(e)}
            className={styles.kurs_yuklash_form}
          >
            <div className={styles.input_wrap}>
              <label htmlFor="amount">Kurs nomi</label>
              <input type="text" />
            </div>
            <div className={styles.input_wrap}>
              <label htmlFor="amount">Kurs haqida</label>
              <textarea></textarea>
            </div>
            <div className={styles.upload_div}>
              <div className={styles.input_file}>
                <p>Muqova uchun rasm</p>
                <input type="file" placeholder="Muqova uchun rasm" />
              </div>
              <div className={styles.videos}>
                <div className={styles.video_download}>
                  <p>1-video dars</p>
                  <button type="button" className={styles.down_btn}>
                    Video dars yuklash
                  </button>
                  <button type="button" className={styles.plus_btn}>
                    <ion-icon name="add-outline"></ion-icon>
                  </button>
                </div>
                {plus && (
                  <div className={styles.video_download}>
                    <p>2-video dars</p>
                    <button type="button" className={styles.down_btn}>
                      Video dars yuklash
                    </button>
                    <div className={styles.plus_minus}>
                      <button type="button" className={styles.plus_btn}>
                        <ion-icon name="remove-outline"></ion-icon>
                      </button>
                      <button type="button" className={styles.plus_btn}>
                        <ion-icon name="add-outline"></ion-icon>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.extra_div}>
              <div className={styles.input_wrap}>
                <p htmlFor="amount" className={styles.amount}>
                  Davomiylik
                </p>
                <input className={styles.second} type="text" />
              </div>
            </div>
            <button className={styles.btn} type="submit">
              KURSNI YUKLASH
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TeachUpdateonekurs;
