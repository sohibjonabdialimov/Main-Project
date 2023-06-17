import React, { useEffect, useState } from "react";
import styles from "./free.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

function FreeCourseDownload() {
  const modalRef = useRef();
  const titleInputRef = useRef();
  const courseNameRef = useRef();
  const courseDescRef = useRef();
  const courseImgRef = useRef();
  const courseMuddatiRef = useRef();
  const descriptionInputRef = useRef();
  const fileInputRef = useRef();
  const [videoLessons, setVideoLessons] = useState([{ id: 1 }]);
  const [videoDataArray, setVideoDataArray] = useState([]);
  const navigate = useNavigate();
  const onBack = () => {
    navigate("/teacher/kurs");
  };
  const addVideoLesson = (e) => {
    try {
      const title = titleInputRef.current.value;
      const description = descriptionInputRef.current.value;
      const file = fileInputRef.current.files[0];
      // if (!title || !description || !file) {
      //   toast("Iltimos", {autoClose: 3000});
      //   return 0;
      // }else 
      if(!title){
        toast("Iltimos, video nomini kiriting");
        return 0;
      }else if(!description){
        toast("Iltimos, videoga izoh bering");
        return 0;
      }else if(!file){
        toast("Iltimos, videoni kiriting");
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

  const onHandleForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("obloshka", courseImgRef.current.files[0]);
    formData.append("name", courseNameRef.current.value);
    formData.append("desc", courseDescRef.current.value);
    formData.append("narxi", 0);
    formData.append("muddati", courseMuddatiRef);
  
    for (let i = 0; i < videoDataArray.length; i++) {
      const videoData = videoDataArray[i];
      formData.append("vediosdesc", videoData.description);
      formData.append("vediosname", videoData.title);
      if (videoData.file) {
        formData.append("file", videoData.file);
      } else {
        console.error(`Missing file for video data at index ${i}`);
      }
    }
  
    try {
      const response = await axios.post("http://165.232.127.62:5001/courses/", formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  

  const onSendFunc = () => {
    navigate("/teacher/processfreedownload");
  };



  return (
    <>
    <ToastContainer autoClose={2000} />
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
                <input ref={courseNameRef} type="text" />
              </div>
              <div className={styles.input_wrap}>
                <label htmlFor="amount">Kurs haqida</label>
                <textarea ref={courseDescRef}></textarea>
              </div>
              <div className={styles.upload_div}>
                <div className={styles.input_file}>
                  <p>Muqova uchun rasm</p>
                  <input
                    ref={courseImgRef}
                    type="file"
                    placeholder="Muqova uchun rasm"
                    accept="image/*"
                  />
                </div>
                <div className={styles.videos}>
                  {videoLessons.map((lesson, index) => (
                    <div className={styles.video_download} key={lesson.id}>
                      <p key={index}>{index + 1}-dars</p>
                        <input
                          type="text"
                          placeholder="Enter video title"
                          ref={titleInputRef}
                          className={styles.video_download_input_title}
                        />
                        <input
                          type="text"
                          placeholder="Enter video description"
                          ref={descriptionInputRef}
                          className={styles.video_download_input_desc}
                        />
                        <input
                          type="file"
                          placeholder="Muqova uchun video"
                          accept="video/*"
                          ref={fileInputRef}
                        />
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
                    
                  ))}
                </div>
              </div>
              <div className={styles.extra_div}>
                <div className={styles.input_wrap}>
                  <p htmlFor="amount" className={styles.amount}>
                    Davomiylik
                  </p>
                  <input ref={courseMuddatiRef} className={styles.second} type="text" />
                </div>
              </div>
              <button
                // onClick={() => (modalRef.current.style.display = "flex")}
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
