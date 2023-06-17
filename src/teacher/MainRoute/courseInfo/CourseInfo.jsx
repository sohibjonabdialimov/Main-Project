import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./courseInfo.css";
import VideosNavbar from "../../../navbar/videos/VideosNavbar";

import video_player from "../../../imgs/video_player.png";
import VideoInformation from "../../components/videoInformation/VideoInformation";
import axios from "axios";

function deleteplatforma(url) {
  try {
    if (url.includes("platforma")) {
      const parts = url.split("/");
      const s = parts.slice(2).join("/");
      // console.log(s);
      return s; // Remove the first 3 segments of the URL
    }
    console.log(url);
    return url;
  } catch (error) {
    console.log(error);
    return url;
  }
}

function CourseInfo() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [courseData, setCourseData] = useState([]);
  const [courseIndex, setCourseIndex] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState({});
  const onBack = () => {
    navigate("/teacher/darslar");
  };

  useEffect(() => {
    axios
      .post(
        "http://165.232.127.62:5001/courseone/me",
        { cursId: courseId },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setCourseData(res.data.vedios);
        setSelectedVideo(res.data.vedios[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [courseId]);

  const handleVideoSelection = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="app-content">
      <div className="course_info">
        <button onClick={onBack} className="back">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <div className="videos_navbar video_information_scroll">
          <ul className="videos_navbar">
            {courseData.map((course, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedVideo(course);
                  setCourseIndex(index + 1);
                }}
              >
                {index + 1}-dars. {course.nomi}
              </li>
            ))}
          </ul>
        </div>
        <div className="video_information video_information_scroll">
          <div className="img_div">
            <video
              src={`http://165.232.127.62:5001/${deleteplatforma(
                selectedVideo.orni
              )}`}
              alt=""
              disablePictureInPicture
              playbackRate={3}
              controls
              controlsList="nodownload"
            />
          </div>
          <div className="video_information_content">
            <h3>
              {courseIndex} - dars. {selectedVideo.nomi} Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quod aut adipisci cum nisi
              veritati
            </h3>
            <p>{selectedVideo.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseInfo;
