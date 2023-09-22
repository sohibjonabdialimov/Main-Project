import React, { memo, useEffect, useState } from "react";
import Comminets from "../sidebarRouters/commentsList/CommentsList";
import Darslar from "../sidebarRouters/Darslar";
import { useParams } from "react-router-dom";
import "./style.css";
import Obuna from "../sidebarRouters/Obuna";
import Subs from "../sidebarRouters/Subs";
import axios from "axios";
import Loader from "../loader/Loader";

function TeacherInfo() {
  const [profile, setProfil] = useState({});
  const [teacherData, setTeacherData] = useState([]);
  const [teacherInfo, setTeacherInfo] = useState([]);
  const { teacherId } = useParams();
  const [subs, setSubs] = useState([]);
  const [subsBool, setSubsBool] = useState(false);
  const [loader, setLoader] = useState(false);

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
    axios.get("https://api.ilmlar.com/teacherinfo/" + teacherId).then((res) => {
      setTeacherData(res.data.mekurs);
      setProfil(res.data);
    });
  }, [teacherId]);

  //   useEffect(() => {
  //     const fetchTeachers = async () => {
  //       const fetchedTeacherData = [];
  //       for (let i = 0; i < profile.teachers.length; i++) {
  //         const response = await axios.get(
  //           "https://api.ilmlar.com/teacherinfo/" + profile.teachers[i]
  //         );
  //         if(response.status === 200){
  //             console.log(response.data);
  //             fetchedTeacherData.push(response.data);
  //         }
  //       }
  //       setTeacherData(fetchedTeacherData);
  //     };

  //     if(profile.teachers) {
  //         fetchTeachers();
  //     }
  // }, [profile]);

  useEffect(() => {
    axios
      .get("https://api.ilmlar.com/usersme", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setSubs(res.data.teachers);
      });
  }, []);
  useEffect(() => {
    for (let i = 0; i < subs.length; i++) {
      if (subs[i] == teacherId) {
        setSubsBool(true);
      }
    }
  }, [subs]);

  // useEffect(() => {
  //   async function fetchFunction() {
  //     const fetchedTeacherData = [];
  //     for (let i = 0; i < teacherData.length; i++) {
  //       await axios
  //         .get("https://api.ilmlar.com/courses/" + teacherData[i], {
  //           headers: {
  //             Authorization: localStorage.getItem("token"),
  //           },
  //         })
  //         .then((res) => {
  //           console.log(res);
  //           fetchedTeacherData.push(res.data);
  //           setTeacherInfo([...fetchedTeacherData]);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     }
  //   }
  //   if(teacherData.length > 0){
  //     fetchFunction();
  //   }

  // }, []);

  const fetchTeachersFunc = async () => {
    const fetchedTeacherData = [];
    setLoader(true);
    for (let i = 0; i < teacherData.length; i++) {
      const response = await axios.get(
        "https://api.ilmlar.com/courses/" + teacherData[i],
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (response.status === 200) {
        fetchedTeacherData.push(response.data);
      }
    }
    setLoader(false);
    setTeacherInfo(fetchedTeacherData);
  };
  useEffect(() => {
    if (teacherData.length > 0) {
      fetchTeachersFunc();
    }
  }, [teacherData]);

  function saveObuna(id) {
    axios
      .post(
        "https://api.ilmlar.com/users/obuna",
        {
          teacher_Id: id,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="main-page">
        <div className="w100 main_lesson mobile_none">
          <div className="fife main-content extra_class">
            {loader ? (
              <Loader />
            ) : (
              <div className="my_subs">
                <img
                  className="teacher_img"
                  src={"https://api.ilmlar.com" +profile.path}
                  alt=""
                />
                <h2>{profile.fullname}</h2>
                <p>{profile.obunachilar} ta obunachi</p>
                {subsBool ? (
                  <button
                    onClick={() => {
                      setSubsBool(false);
                      saveObuna(teacherId);
                    }}
                  >
                    Obunadan chiqish 
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setSubsBool(true);
                      saveObuna(teacherId);
                    }}
                  >
                    Obuna bo'lish
                  </button>
                )}

                <div className="my_subs_desc1">
                  <p>{profile.bio}</p>
                </div>
                <div className="my_subs_desc2">
                  <p>Joylashuv: {profile.joylashuv}</p>
                  <p>
                    Havola:{" "}
                    <a href={profile.boglashlink}>{profile.boglashlink}</a>
                  </p>
                </div>
                <div className="my_subs_desc">
                  <p>Kurslar soni: {profile?.mekurs?.length}</p>
                </div>
                <h4>Kurslar</h4>
                <div className="my_subs_line"></div>
                <div>
                  {teacherInfo.length != 0 ? (
                    teacherInfo.map((item, index) => {
                      return (
                        <div key={item._id} className="courses_list">
                          <img
                            src={
                              "https://api.ilmlar.com" +
                              deleteplatforma(item.obloshka)
                            }
                            alt=""
                          />
                          <div className="teacherinfo_courses" style={{position:"relative"}}>
                            <h5 style={{paddingLeft:"10px"}}>{item.Kursname}</h5>
                            <br />
                            <p>{item.Kursdesc} </p> 
                            {/* style={{position:"absolute", top:"15px", left:"-10px"}} */}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <h2 className="empty_course_desc">Hozircha kurslar yo'q</h2>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="darslar_wrapper Nav">
          <h3>Mening obunalarim</h3>
          <div className="line"></div>
          <Subs />
        </div>
      </div>
    </>
  );
}

export default memo(TeacherInfo);
