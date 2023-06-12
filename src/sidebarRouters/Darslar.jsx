import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Darslar = () => {
  const navigate = useNavigate();

  const [profile, setProfil] = useState({});
  const [teacherData, setTeacherData] = useState([]);
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
          "http://165.232.127.62:5001/courses/" + profile.mycurs[i].cursId,
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

  console.log(teacherData);
  return (
    <div className="carts-wrapper">
      {teacherData.map((item, index) => (
        <div
          className="darslar-cart"
          onClick={() => {
            navigate("/student/kurs/" + item._id);
          }}
        >
          <img
            src={"http://165.232.127.62:5001" + deleteplatforma(item.obloshka)}
            alt=""
          />
          <div>
            {/* <p>{item.Kursname}</p> */}
            <p>{item.Kursdesc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Darslar;
