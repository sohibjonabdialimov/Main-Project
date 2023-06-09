import { useNavigate } from "react-router-dom";
import yes from "../../../imgs/yes.svg";
import styles from "./style.module.css";

function TeachPulyichishok() {
  const navigate = useNavigate();
  const onBack = () => {
    navigate("/teacher/hisoblar");
  };
  return (
    <div className="app-content">
      <div className="global_wrap">
        <div className={styles.process_wrap}>
          <div className={styles.img_wrap}>
            <img src={yes} alt="" />
          </div>
          <h2>Pul o'tkazildi!</h2>
          <button onClick={onBack} className={styles.btn}>
            Bosh sahifa
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeachPulyichishok;
