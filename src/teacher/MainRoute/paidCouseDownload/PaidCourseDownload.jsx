import React, { useState } from "react";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";

function PaidCourseDownload() {
  const [courseSections, setCourseSections] = useState([{ id: 1 }]);
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  const onHandleForm = (e) => {
    e.preventDefault();
  };
  const addCourseSection = () => {
    const newId = courseSections.length + 1;
    const newCourseSection = { id: newId };
    setCourseSections([...courseSections, newCourseSection]);
  };
  const removeCourseSection = (id) => {
    const updatedSections = courseSections.filter(
      (section) => section.id !== id
    );
    setCourseSections(updatedSections);
  };
  return (
    <div className="app-content">
      <div className="global_wrap">
        <div className={styles.kurs_yuklash}>
          <button onClick={onBack} className={styles.back}>
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
          <h1>Pullik kurs yuklash</h1>
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
                {courseSections.map((section) => (
                  <div className={styles.video_download} key={section.id}>
                    <p>{section.id}-video dars</p>
                    <button
                      type="button"
                      onClick={() => {
                        navigate("/teacher/processmoneydownload");
                      }}
                      className={styles.down_btn}
                    >
                      Video dars yuklash
                    </button>
                    {section.id > 1 && (
                      <div className={styles.plus_minus}>
                        <button
                          type="button"
                          className={styles.plus_btn}
                          onClick={() => {
                            removeCourseSection(section.id);
                          }}
                        >
                          <ion-icon name="remove-outline"></ion-icon>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <button
                type="button"
                className={styles.plus_btn}
                onClick={addCourseSection}
              >
                <ion-icon name="add-outline"></ion-icon>
              </button>
            </div>
            <div className={styles.extra_div}>
              <div className={styles.input_wrap}>
                <label htmlFor="amount">Kur narxi (so'm)</label>
                <input className={styles.first} type="text" />
              </div>
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

export default PaidCourseDownload;
