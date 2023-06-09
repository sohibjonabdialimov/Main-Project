import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./style.module.css";
function TakingMoney() {
  const navigate = useNavigate();
  const onHandleClick = (e) => {
    e.preventDefault();
    navigate("/hisoblar/pulyichish/ok");
  };
  const onBack = () => {
    navigate(-1);
  };
  return (
    <div className="global_wrap">
      <div className={styles.hisob_wrap}>
        <button onClick={onBack} className={styles.back}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <form onSubmit={(e) => onHandleClick(e)} className={styles.hisob_form}>
          <div className={styles.input_wrap}>
            <label htmlFor="amount">Pul miqdori</label>
            <div className={styles.input_div}>
              <input type="text" placeholder="so'm" />
            </div>
          </div>
          <div className={styles.input_wrap}>
            <div className={styles.label_wrap}>
              <label>Karta raqami</label>
              <label>Humo / UzCard </label>
            </div>

            <div className={styles.input_div}>
              <input type="text" placeholder="xxxx   xxxx   xxxx   xxxx" />
            </div>
          </div>
          <div className={styles.input_wrap}>
            <label htmlFor="amount">Parol ( sahifangizga kirish paroli )</label>
            <div className={styles.input_div}>
              <input type="text" />
            </div>
          </div>
          <button type="submit">Pulni yechib olish</button>
        </form>
      </div>
    </div>
  );
}

export default TakingMoney;
