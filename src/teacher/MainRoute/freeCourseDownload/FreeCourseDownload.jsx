import React, { useEffect, useState } from "react";
import styles from "./free.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

function FreeCourseDownload() {
  const modalRef = useRef();
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const fileInputRef = useRef();
  const [videoLessons, setVideoLessons] = useState([{ id: 1 }]);
  const [videoDataArray, setVideoDataArray] = useState([]);
  const navigate = useNavigate();
  const { kursId } = useParams();
  const onBack = () => {
    navigate("/teacher/kurs");
  };
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
        id: newId - 1,
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
    const updatedVideoLessons = videoLessons.filter(
      (lesson, index) => index !== id - 1
    );
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

  const onSendFunc = () => {
    navigate("/teacher/processfreedownload");
  }


  // useEffect(() => {
  //   axios
  //     .post("http://165.232.127.62:5001/courses/" + "12ddd", {
  //       name: "testmuddat",
  //       desc: "ok",
  //       narxi: 100000,
  //       muddati: 3,
  //       vediosdesc: ["lorem1", "lorem2"],
  //       vediosname: ["lorem1", "lorem2"],
  //       file: ["ok", "ok2"],
  //       obloshka: "ok.png",
  //     }, {
  //       headers: {
  //         Authorization: localStorage.getItem("token"),
  //       }
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [kursId]);

  return (
    <>
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

                      {/* {videoLessons.length > 1 && (
                        
                      )} */}
                      {/* <input
                        type="text"
                        placeholder="Enter video title"
                        ref={titleInputRef}
                      />
                      <input
                        type="text"
                        placeholder="Enter video description"
                        ref={descriptionInputRef}
                      />
                      <input
                        type="file"
                        placeholder="Muqova uchun video"
                        ref={fileInputRef}
                      /> */}
                      <button onClick={() => onSendFunc()} className={styles.free_video_lesson_download}>
                        Video dars yuklash
                      </button>
                      <div className={styles.plus_minus}>
                        <button
                          type="button"
                          onClick={() => handleRemoveVideoLesson(lesson.id)}
                          className={`${styles.plus_btn} ${styles.minus_btn}`}
                        >
                          <ion-icon name="remove-outline"></ion-icon>
                        </button>
                        <button
                          type="submit"
                          onClick={addVideoLesson}
                          className={styles.plus_btn}
                        >
                          <ion-icon name="add-outline"></ion-icon>
                        </button>
                      </div>
                    </div>
                    // <div className={styles.video_download} key={lesson.id}>
                    //   <p key={index}>{index + 1}-video dars</p>

                    //   {videoLessons.length > 1 && (
                    //     <button
                    //       type="button"
                    //       onClick={() => handleRemoveVideoLesson(lesson.id)}
                    //       className={`${styles.plus_btn} ${styles.minus_btn}`}
                    //     >
                    //       <ion-icon name="remove-outline"></ion-icon>
                    //     </button>
                    //   )}
                    //   <input
                    //     type="text"
                    //     placeholder="Enter video title"
                    //     ref={titleInputRef}
                    //   />
                    //   <input
                    //     type="text"
                    //     placeholder="Enter video description"
                    //     ref={descriptionInputRef}
                    //   />
                    //   <input
                    //     type="file"
                    //     placeholder="Muqova uchun video"
                    //     ref={fileInputRef}
                    //   />
                    // </div>
                  ))}
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
              <button
                onClick={() => (modalRef.current.style.display = "flex")}
                className={styles.btn}
                type="submit"
              >
                KURSNI YUKLASH
              </button>
            </form>
          </div>
        </div>
      </div>

      <div ref={modalRef} className={styles.free_modal}>
        <div className={styles.free_modal_content}>
          <p>Bu kursni haqiqatdan yuklamoqchimisiz?</p>
          <div className={styles.free_modal_wrap}>
            <button onClick={() => (modalRef.current.style.display = "none")}>
              YO'Q
            </button>
            <button onClick={() => navigate("/free/success")}>HA</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FreeCourseDownload;
