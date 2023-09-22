import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Subs = () => {
  const navigate = useNavigate();
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
      return "" + url;
    } catch (error) {
      console.log(error);
    }
  }

  const [profile, setProfil] = useState({});
  const [teacherData, setTeacherData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.ilmlar.com/usersme", {
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
      for (let i = 0; i < profile.teachers.length; i++) {
        const response = await axios.get(
          "https://api.ilmlar.com/teacherinfo/" + profile.teachers[i]
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
    <div className="carts-wrapper">
      {teacherData.map((item, index) => (
        <div
          className="obunalar-cart"
          key={index}
          onClick={() => {
            navigate("/student/teacherinfo/" + item._id);
          }}
          
        >
          <img
            src={"https://api.ilmlar.com" + deleteplatforma(item.path)}
            alt=""
          />
          <div>
            <p>{item?.fullname}</p>
            <span>{item?.bio}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Subs;
