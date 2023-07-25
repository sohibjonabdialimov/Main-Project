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
    axios
      .get("https://api.ilmlar.com/teacherinfo/" + teacherId)
      .then((res) => {
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
                  src={
                    "https://api.ilmlar.com" + deleteplatforma(profile.path)
                  }
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
                              deleteplatforma(profile.path)
                            }
                            alt=""
                          />
                          <p>{item.Kursdesc} Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto at soluta aut asperiores officia eligendi qui voluptate, perferendis ullam atque odio ipsam rerum cupiditate blanditiis impedit quia architecto dolores. Saepe perferendis impedit quod. Est, sequi sed iste ea quam, quod beatae blanditiis praesentium placeat, doloribus magni minus. Ullam animi, nulla voluptatum id cum cupiditate, dicta corrupti sint voluptatibus dolorem illum deserunt ratione, consequuntur iusto sit quod perspiciatis debitis non explicabo in magni autem veritatis. Voluptas nulla hic magnam rem aliquam, cum nobis vel perspiciatis odit, dignissimos est saepe tempora, animi impedit! Porro quas, suscipit eum repellat eos aut voluptatibus. Rerum natus quae ratione obcaecati reprehenderit voluptatem iusto eum nam eveniet ad placeat voluptate consequuntur commodi quidem possimus deleniti, reiciendis dicta ut voluptas dolorum perspiciatis. Sapiente, itaque maiores labore dignissimos doloremque, natus voluptas nisi cupiditate corrupti, magni quaerat. Suscipit animi consequuntur maiores ipsam distinctio, id fugit consectetur commodi reprehenderit recusandae sunt, cumque eligendi quas. Neque, modi quis quae perspiciatis sint eum, laboriosam dignissimos sapiente consequatur voluptatem tempora earum facere iste, ipsam id! Adipisci quae dolorem nemo quos cumque numquam itaque earum obcaecati dignissimos? Id quasi exercitationem laborum quia consequuntur nostrum dolore accusantium error voluptas obcaecati maxime, aliquam sequi modi inventore saepe earum ipsam asperiores ea ad omnis ab! Tenetur ullam libero maiores, quae repellat aut asperiores sunt expedita similique perspiciatis ducimus dolore tempora. Harum reprehenderit adipisci et, minima quidem eos dolore dolor sit aliquid ex delectus, fugit repudiandae sed, atque quo natus neque excepturi nostrum? Ut explicabo iusto consequatur repellat quis, minima dignissimos debitis quod ad delectus officia. Nobis, quas qui optio voluptatibus fuga facilis incidunt distinctio a, cumque explicabo atque architecto non nihil totam laborum quasi eligendi recusandae culpa perspiciatis. Non perspiciatis dolore autem iure cum. Modi voluptate esse aspernatur corporis nam facere! Harum, explicabo rerum. Repellendus repellat ducimus fuga totam pariatur nesciunt enim, laudantium perferendis inventore provident facere numquam itaque excepturi consequatur, id saepe, ex eveniet amet eligendi veritatis culpa expedita vero recusandae quibusdam! Veritatis quae ratione nostrum molestiae consequatur praesentium quisquam ipsum quod explicabo sit, unde distinctio esse eaque repellendus. Velit delectus aut quod repellendus culpa quibusdam sint. Aspernatur, assumenda. Quibusdam tempora maiores ipsum laboriosam officia esse doloribus neque soluta, explicabo, recusandae, corrupti quidem! Dicta ratione provident vitae, modi omnis earum repudiandae vero nobis cum nam delectus adipisci, ex illum inventore sunt iure possimus rerum enim quo, impedit quae sit aut. Nesciunt enim unde vero libero culpa incidunt deserunt minus maiores provident temporibus. Vero mollitia repellendus dolorem consequuntur nesciunt accusantium cupiditate perferendis porro dolorum quos nihil quae dolor numquam, quam, harum facere dolores tenetur aspernatur odio, vel aliquid praesentium quaerat doloremque. Nesciunt sunt vitae in sit consequuntur voluptatibus at asperiores distinctio incidunt voluptate? Dolor magni, minima quam ipsa iure odit numquam a explicabo, assumenda, consequatur quod! Dolore aut aspernatur, iure, esse pariatur inventore nihil recusandae totam quo dolorum nemo nostrum dicta minima nulla modi atque, fugit voluptatem nisi. Assumenda, voluptates dolorum corrupti, sunt, magni animi ipsum provident recusandae consequuntur reprehenderit cumque? Ratione perferendis consectetur, earum maiores obcaecati a.</p>
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
