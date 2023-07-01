import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function deleteplatforma(url) {
  try {
    if (url.includes("platforma")) {
      url = url.split("/");
      let res = "";
      for (let i = 2; i < url.length; i++) {
        res += "/" + url[i];
      }
      return res;
    }
    return "/" + url;
  } catch (error) {
    console.log(error);
  }
}

const TeachEditProfile = () => {
  const [image, setImage] = useState(null);
  const [profile, setProfile] = useState([]);

  const fullnameRef = useRef(null);
  const mutahasislikRef = useRef(null);
  const bioRef = useRef(null);
  const joylashuvRef = useRef(null);
  const boglashlinkRef = useRef(null);
  const usernameRef = useRef(null);
  const userimgRef = useRef(null);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    const imageUrl = URL.createObjectURL(selectedImage);
    setImage(imageUrl);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", fullnameRef.current.value);
    formData.append("mutahasislik", mutahasislikRef.current.value);
    formData.append("bio", bioRef.current.value);
    formData.append("joylashuv", joylashuvRef.current.value);
    formData.append("boglashlink", boglashlinkRef.current.value);
    formData.append("username", usernameRef.current.value);
    formData.append("file", userimgRef.current.files[0]);
    
    axios
      .put("http://165.232.127.62:5001/teacher/", formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        navigate("/teacher/profile");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get("http://165.232.127.62:5001/teacherme/", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setProfile(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const onBack = () => {
    navigate(-1);
  };

  return (
    <div className="app-content">
      <div className={styles.edit_student_profile}>
        <button onClick={onBack} className={styles.back}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <div className={styles.imgs_div}>
          <img
            src={image || "http://165.232.127.62:5001" + deleteplatforma(profile.path)}
            alt=""
          />
          <input type="file" ref={userimgRef} onChange={handleImageChange} />
        </div>
        <form onSubmit={(e) => onHandleSubmit(e)} className={styles.form}>
          <div className={styles.input_wrap}>
            <input
              ref={fullnameRef}
              defaultValue={profile.fullname}
              type="text"
              placeholder="ism"
            />
          </div>
          <input
            ref={mutahasislikRef}
            type="text"
            defaultValue={profile.mutahasislik}
            placeholder="mutaxassislik"
          />
          <input
            ref={bioRef}
            type="text"
            defaultValue={profile.bio}
            placeholder="bio"
          />
          <div className={styles.input_wrap}>
            <input
              ref={joylashuvRef}
              type="text"
              defaultValue={profile.joylashuv}
              placeholder="joylashuv"
            />
            <input
              ref={boglashlinkRef}
              type="text"
              placeholder="havola"
              defaultValue={profile.boglashlink}
            />
          </div>
          <div className={styles.input_wrap}>
            <input
              ref={usernameRef}
              type="text"
              placeholder="username"
              defaultValue={profile.username}
            />
          </div>
          <button type="submit">Saqlash</button>
        </form>
      </div>
    </div>
  );
};

export default TeachEditProfile;