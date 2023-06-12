import React, { useEffect, useState } from "react";
import "./style.css";
import homeSidebar1 from "../../imgs/sidebar1.png";
import homeSidebar2 from "../../imgs/sidebar2.png";
import prev from '../../imgs/prev.svg';

import SidebarCart from "../../components/SidebarCart/SidebarCart";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function deleteplatforma(url) {
  try {
    if (url.includes("platforma")) {
      url = url.split("/")
      let res = ""
      for (let i = 2; i < url.length; i++) {
        res += "/" + url[i]
      }
      return (res)
    }
    return "/" + url
  } catch (error) {
    console.log(error)
  }
}
function Baystudy({ modalDarslar, changeModalDars, topic }) {
  const navigate = useNavigate();

  const handleClick = () => {
    changeModalDars(false)
  }
  const [profile, setProfil] = useState({});
  const [teacherData, setTeacherData] = useState([]);
  const [save, setSave] = useState([]);
  useEffect(() => {
    axios
      .get("http://165.232.127.62:5001/usersme", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setProfil(res.data);
      });
  }, []);
  useEffect(() => {
    const fetchTeachers = async () => {
      const fetchedTeacherData = [];
      for (let i = 0; i < profile.mycurs.length; i++) {
        const response = await axios.get(
          "http://165.232.127.62:5001/courses/" + profile.mycurs[i].cursId, {
          headers: {
            Authorization: localStorage.getItem("token"),
          }
        }
        );
        fetchedTeacherData.push(response.data);
      }
      setTeacherData(fetchedTeacherData);
    };

    if (profile.teachers) {
      fetchTeachers();
    }
  }, [profile]);
  return (
    <div className="Nav sidebar-main-content">
      <div className={(modalDarslar) ? "mobile__header" : 'd-none '} onClick={handleClick}>
        <div className="circle">
          <img src={prev} alt="prev" />
        </div>
        <h3>{topic}</h3>

      </div>
      <div className="mobileForPadding">
        <h2>Sotib olingan darslar - {teacherData.length} ta</h2>
        <div className="sidebar-line"></div>
        <div className="sidebar-bought-course">
          {teacherData.map((item, index) => (
            <div className="darslar-cart" onClick={() => {
              navigate("/student/kurs/" + item._id);
              console.log(item)
            }} >
              <img
                src={"http://165.232.127.62:5001" + deleteplatforma(item.obloshka)}
                alt=""
              />
              <div>
                <p>{item.Kursname}</p>
                <p>{item.Kursdesc}</p>
              </div>
            </div>
          ))}

        </div>


      </div>
    </div>
  );
};

export default Baystudy;
