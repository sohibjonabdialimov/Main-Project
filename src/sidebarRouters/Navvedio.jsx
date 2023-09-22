import React, { useEffect, useState } from "react";
import "./index.css";
import homeSidebar1 from "../imgs/sidebar1.png";
import homeSidebar2 from "../imgs/sidebar2.png";
import homeSidebar3 from "../imgs/sidebar3.png";
import homeSidebar4 from "../imgs/sidebar4.png";
import prev from "../imgs/prev.svg";
import SidebarCart from "../components/SidebarCart/SidebarCart";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
function Navvedio({ modalDarslar, changeModalDars, topic }) {
  const navigate = useNavigate();

  const handleClick = () => {
    changeModalDars(false);
  };
  const [profile, setProfil] = useState({});
  const [teacherData, setTeacherData] = useState([]);
  const [save, setSave] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.ilmlar.com/usersme", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setProfil(res.data);
      });
  }, []);
  useEffect(() => {
    const fetchTeachers = async () => {
      const fetchedTeacherData = [];
      for (let i = 0; i < profile.mycurs.length; i++) {
        const response = await axios.get(
          "https://api.ilmlar.com/courses/" + profile.mycurs[i].cursId,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
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
  useEffect(() => {
    const fetchTeachers = async () => {
      const fetchedTeacherData = [];
      for (let i = 0; i < profile.savecurss.length; i++) {
        const response = await axios.get(
          "https://api.ilmlar.com/courses/" + profile.savecurss[i],
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        fetchedTeacherData.push(response.data);
      }
      setSave(fetchedTeacherData);
    };

    if (profile.teachers) {
      fetchTeachers();
    }
  }, [profile]);
  return (
    <div className="Nav sidebar-main-content">
      <div
        className={modalDarslar ? "mobile__header" : "d-none "}
        onClick={handleClick}
      >
        <div className="circle">
          <img src={prev} alt="prev" />
        </div>
        <h3>{topic}</h3>
      </div>
      <div className="mobileForPadding">
        <h2>Olingan darslar - {teacherData.length} ta</h2>
        <div className="sidebar-line"></div>
        <div className="sidebar-bought-course">
          {teacherData.map((item, index) => (
            <div
              className="cursor_class"
              key={index}
              onClick={() => {
                navigate("/student/kurs/" + item._id);
              }}
            >
              <div className="darslar-cart">
                <img
                  src={
                    "https://api.ilmlar.com" + deleteplatforma(item.obloshka)
                  }
                  alt=""
                />
                <div>
                  <p>
                    {item.Kursname.length > 12
                      ? item.Kursname.slice(0, 12) + "..."
                      : item.Kursname}
                  </p>
                  <p>
                    {item.Kursdesc.length > 15
                      ? item.Kursdesc.slice(0, 15) + "..."
                      : item.Kursdesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="saqlanganlar">Saqlanganlar - {save.length} ta</h2>
        <div className="sidebar-line"></div>
        <div className="saved_courses">
          {save.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate("/student/kurs/" + item._id);
              }}
            >
              <div className="darslar-cart">
                <img
                  src={
                    "https://api.ilmlar.com" + deleteplatforma(item.obloshka)
                  }
                  alt=""
                />
                <div>
                  <p>
                    {item.Kursname.length > 12
                      ? item.Kursname.slice(0, 12) + "..."
                      : item.Kursname}
                  </p>
                  <p>
                    {item.Kursdesc.length > 15
                      ? item.Kursdesc.slice(0, 15) + "..."
                      : item.Kursdesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navvedio;
