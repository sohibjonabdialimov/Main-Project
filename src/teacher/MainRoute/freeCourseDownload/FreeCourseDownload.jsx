import React, { useState } from "react";
import styles from "./free.module.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function FreeCourseDownload() {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const fileInputRef = useRef();
  const [videoLessons, setVideoLessons] = useState([{ id: 1 }]);
  const [videoDataArray, setVideoDataArray] = useState([]);
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  console.log(videoLessons)
  const addVideoLesson = (e) => {
    try {
      const title = titleInputRef.current.value;
      const description = descriptionInputRef.current.value;
      const file = fileInputRef.current.files[0];
      if (!title || !description || !file) {
        return 0;
      }
      const newId = videoLessons.length + 1;
      const newVideoLesson = { id: newId };
      setVideoLessons([...videoLessons, newVideoLesson]);
      const videoData = {
        id: newId-1,
        title,
        description,
        file,
      };

      setVideoDataArray((prevData) => [...prevData, videoData]);
    } catch (error) {
      const newId = videoLessons.length + 1;
      const newVideoLesson = { id: newId };
      setVideoLessons([...videoLessons, newVideoLesson]);
    }
    e.preventDefault();


  };
  const handleRemoveVideoLesson = (id) => {
    const updatedVideoLessons = videoLessons.filter((lesson, index) => index !== id-1);
    setVideoLessons(updatedVideoLessons);
    const updatedVideoDataArray = videoDataArray.filter(
      (videoData) => videoData.id !== id
    );
    setVideoDataArray(updatedVideoDataArray);
  };
  console.log(videoDataArray);
  const handleVideoLessonUpload = () => {
    navigate("/teacher/processfreedownload");
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
          <h1>Tekin kurs yuklash</h1>
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
                {videoLessons.map((lesson, index) => (
                  <div className={styles.video_download} key={lesson.id}>
                    <p key={index}>{index + 1}-video dars</p>

                    {videoLessons.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveVideoLesson(lesson.id)}
                        className={`${styles.plus_btn} ${styles.minus_btn}`}
                      >
                        <ion-icon name="remove-outline"></ion-icon>
                      </button>
                    )}
                    <input type="text" placeholder="Enter video title" ref={titleInputRef} />
                    <input type="text" placeholder="Enter video description" ref={descriptionInputRef} />
                    <input type="file" placeholder="Muqova uchun video" ref={fileInputRef} />

                  </div>

                ))}
                <button
                  type="submit"
                  onClick={addVideoLesson}
                  style={{ height: "75px" }}
                  className={styles.plus_btn}
                >
                  <ion-icon name="add-outline"></ion-icon>
                </button>
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

export default FreeCourseDownload;
