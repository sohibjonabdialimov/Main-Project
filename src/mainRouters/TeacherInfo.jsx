import React, { memo, useEffect, useState } from "react";
import Comminets from "../sidebarRouters/commentsList/CommentsList";
import Darslar from "../sidebarRouters/Darslar";
import { useParams } from "react-router-dom";
import "./style.css";
import Obuna from "../sidebarRouters/Obuna";
import Subs from "../sidebarRouters/Subs";
import avatar from "../imgs/edit_user.png";
import axios from "axios";

function TeacherInfo() {
  const [profile, setProfil] = useState({});
  const [teacherData, setTeacherData] = useState([]);
  const { teacherId } = useParams();

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
      .get("http://165.232.127.62:5001/teacherinfo/" + teacherId)
      .then((res) => {
        setProfil(res.data);
      });
  }, [teacherId]);
//   useEffect(() => {
//     const fetchTeachers = async () => {
//       const fetchedTeacherData = [];
//       for (let i = 0; i < profile.teachers.length; i++) {
//         const response = await axios.get(
//           "http://165.232.127.62:5001/teacherinfo/" + profile.teachers[i]
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
// console.log(teacherData);
const obj = [
    {
        id: 1,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuS8AimFv-GUOXPAeo6uz-2YIl9btD5P2xzA&usqp=CAU",
        desc: "loremwee Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ut perferendis impedit repellat ipsa vero debitis voluptatem eum cupiditate expedita." 
    },
    {
        id: 2,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuS8AimFv-GUOXPAeo6uz-2YIl9btD5P2xzA&usqp=CAU",
        desc: "loremwee Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ut perferendis impedit repellat ipsa vero debitis voluptatem eum cupiditate expedita." 
    },
    {   
        id: 3,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuS8AimFv-GUOXPAeo6uz-2YIl9btD5P2xzA&usqp=CAU",
        desc: "loremwee Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ut perferendis impedit repellat ipsa vero debitis voluptatem eum cupiditate expedita." 
    },
]

// useEffect(() => {
//     const fetchTeachers = async () => {
//       const fetchedTeacherData = [];
//       for (let i = 0; i < profile.mycurs.length; i++) {
//         const response = await axios.get(
//           "http://165.232.127.62:5001/courses/" + profile.mycurs[i].cursId,
//           {
//             headers: {
//               Authorization: localStorage.getItem("token"),
//             },
//           }
//         );
//         console.log(response.data);
//         fetchedTeacherData.push(response.data);
//       }
//       setTeacherData(fetchedTeacherData);
//     };

//     if (profile.teachers) {
//       fetchTeachers();
//     }
//   }, []);
  return (
    <>
      <div className="main-page">
        <div className="w100 main_lesson mobile_none">
          <div className="fife main-content">
            <div className="my_subs w100">
              <img className="teacher_img" src={"http://165.232.127.62:5001" + deleteplatforma(profile.path)} alt="" />
              <h2>{profile.fullname}</h2>
              <p>{profile.obunachilar} ta obunachi</p>
              <button>Obunadan chiqish</button>
              <div className="my_subs_desc1">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.{" "}
                </p>
              </div>
              <div className="my_subs_desc2">
                <p>Joylashuv: Tashkent, Uzbekistan </p>
                <p>Havola: <a href={profile.boglashlink}>{profile.boglashlink}</a></p>
              </div>
              <div className="my_subs_desc">
                <p>Kurslar soni: {profile?.mekurs?.length}</p>
              </div>
              <h4>Kurslar</h4>
              <div className="my_subs_line"></div>
              <div>
              {
                obj.map(item => {
                   return (
                    <div key={item.id} className="courses_list">
                    <img src={item.img} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id pariatur, provident vitae, harum possimus eum assumenda fugit commodi, distinctio facere quasi tempore! Eaque, tempore facere alias laboriosam quaerat quibusdam eveniet.</p>
                </div>
                   )
                })
              }
              </div>
           
            </div>
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
