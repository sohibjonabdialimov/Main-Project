import React, { useState } from "react";
import prev from '../../imgs/prev.svg'

function VideosNavbar(props) {
  const { courseData, handleVideoSelection, handleCourseIndex ,changeModal, modal} = props;
  const [modalClass, setModalClass] = useState("");

  const handleClick = () => {
    changeModal(false);
  };

  return (
    <div
      className={
        modalClass == "qaytish"
          ? " videos_navbar video_information_scroll qaytish"
          : "videos_navbar video_information_scroll"
      }
    >
      <div className={modal ? "circle" : "d-none circle"} onClick={handleClick}>
        <img src={prev} alt="prev" />
      </div>
      <ul className="">
        {courseData.map((course, index) => (
          <li
            key={index}
            onClick={() => {
              handleVideoSelection(course);
              handleCourseIndex(index + 1);
            }}
          >
            {index + 1}-dars. {course.nomi}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideosNavbar;
