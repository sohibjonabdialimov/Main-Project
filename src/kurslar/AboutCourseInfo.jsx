import React, { useEffect, useState } from "react";
import CommentsList from "../sidebarRouters/commentsList/CommentsList";
import { useParams } from "react-router-dom";
import teacher1 from "../imgs/teacher-home1.png";
import teacher2 from "../imgs/teacher-home2.png";
import teacher3 from "../imgs/teacher-home3.png";
import teacher4 from "../imgs/teacher-home4.png";
import imgs1 from "../imgs/main1.png";
import imgs2 from "../imgs/main2.png";
import imgs3 from "../imgs/main3.png";
import imgs4 from "../imgs/main4.png";
import izohlar1 from "../imgs/izohlar1.png";
import izohlar2 from "../imgs/izohlar2.png";
import izohlar3 from "../imgs/izohlar3.png";
import izohlar4 from "../imgs/izohlar4.png";
import save from "../imgs/save.png";
import coin from "../imgs/coin.png";
import heart from "../imgs/heart.png";
import "./index.css";
import MobileHeader from "../components/mobileHeader/mobileHeader";
import StudentNavbar from "../navbar/student/StudentNavbar";
import Baystudy from "../sidebarRouters/boughtLessons/BoughtLessons";
import Navvedio from "../sidebarRouters/Navvedio";
import axios from "axios";
function AboutCourseInfo() {
  let [modal, setModal] = useState(false);
  let [modalDarslar, setModalDarslar] = useState(false);
  const changeModal = (value) => {
    setModal(value);
  };

  const changeModalDars = (value) => {
    setModalDarslar(value);
  };
  const [kurs, setKurs] = useState({})
  const [teacher, setTeacher] = useState({});
  const { kursId } = useParams();
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
  useEffect(() => {
    axios.get("http://165.232.127.62:5001/courses/" + kursId, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then((res) => {
      setKurs(res.data)
      axios.get("http://165.232.127.62:5001/teacherinfo/" + res.data.teacherId).then((res) => {
        setTeacher(res.data)
      })
    })
  }, [])

  console.log(kurs)
  let a = [
    {
      kursId: "64806a1f502810fdb36a1713",
      img: imgs1,
      avatar: teacher1,
      name: "supermiya",
      author: "Davron Turdiyev",
      aboutCource:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever more",
      priceCourse: 125000,
      bought: 1950,
      davomiyligi: "3 oy",
      autorId: 14,
      commints: [
        {
          username: "nargiza",
          text: "lorem assalomu alaykum",
          avatar: izohlar1,
        },
        {
          username: "nargiza",
          text: "lorem assalomu alaykum",
          avatar: izohlar2,
        },
        {
          username: "nargiza",
          text: "lorem assalomu alaykum",
          avatar: izohlar3,
        },
        {
          username: "ahmatjon",
          text: "lorem assalomu alaykum. chwdcsdbhcsbdjcsdcjsdcbshdc  hescj edhc",
          avatar: izohlar4,
        },
      ],
    },
    {
      kursId: 13,
      img: imgs2,
      name: "Kitob o'qish ilmi",
      avatar: teacher2,
      author: "Madina Olimova",
      aboutCource:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
      priceCourse: 0,
      bought: 10256,
      davomiyligi: "1 oy",
      autorId: 14,
      commints: [
        {
          username: "nargiza",
          text: "lorem assalomu alaykum",
          avatar: izohlar1,
        },
        {
          username: "nargiza",
          text: "lorem assalomu alaykum",
          avatar: izohlar2,
        },
        {
          username: "nargiza",
          text: "lorem assalomu alaykum",
          avatar: izohlar3,
        },
        {
          username: "ahmatjon",
          text: "lorem assalomu alaykum. chwdcsdbhcsbdjcsdcjsdcbshdc  hescj edhc",
          avatar: izohlar4,
        },
      ],
    },
    {
      kursId: 14,
      img: imgs3,
      name: "Quvnoq ingliz tili",
      author: "Cambridge LC",
      aboutCource:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      priceCourse: 100000,
      bought: 4256,
      davomiyligi: "3 oy",
      avatar: teacher3,
      autorId: 14,
      commints: [
        {
          username: "nargiza",
          text: "lorem assalomu alaykum",
          avatar: izohlar1,
        },
        {
          username: "nargiza",
          text: "lorem assalomu alaykum",
          avatar: izohlar2,
        },
        {
          username: "nargiza",
          text: "lorem assalomu alaykum",
          avatar: izohlar3,
        },
        {
          username: "ahmatjon",
          text: "lorem assalomu alaykum. chwdcsdbhcsbdjcsdcjsdcbshdc  hescj edhc",
          avatar: izohlar4,
        },
      ],
    },

    {
      kursId: 15,
      img: imgs4,
      name: "Inson omili yoki AI",
      author: "MohirDev",
      aboutCource:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
      priceCourse: 100000,
      bought: 4256,
      davomiyligi: "3 oy",
      avatar: teacher4,
      autorId: 14,
      commints: [
        {
          username: "nargiza",
          text: "lorem assalomu alaykum",
        },
        {
          username: "nargiza",
          text: "lorem assalomu alaykum",
        },
        {
          username: "nargiza",
          text: "lorem assalomu alaykum",
        },
      ],
    },
  ];
  let img,
    name,
    autorId,
    commints,
    author,
    bought,
    aboutCource,
    priceCourse,
    davomiyligi,
    avatar;

  for (let i = 0; i < a.length; i++) {
    if (a[i].kursId == kursId) {
      img = a[i].img;
      author = a[i].author;
      aboutCource = a[i].aboutCource;
      priceCourse = a[i].priceCourse
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      bought = a[i].bought.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      davomiyligi = a[i].davomiyligi;
      avatar = a[i].avatar;
      name = a[i].name;
      autorId = a[i].autorId;
      commints = a[i].commints;
    }
  }




  return (
    <div className="main__course-buy">
      <div className="every__cource-info sidebar-main-wrap w100">

        <div className={modal ? "def modal-navbar" : "def yoq"}>
          <StudentNavbar changeModal={changeModal} modal={modal} />
        </div>
        <div
          className={
            modal || modalDarslar
              ? "blur sidebar-main-wrap mobile_none"
              : "sidebar-main-wrap mobile_none"
          }
        >
          <MobileHeader
            changeModalDars={changeModalDars}
            changeModal={changeModal}
            modal={modal}
            modalDarslar={modalDarslar}
            type={"Hisob balansi"}
          />
          <div
            className="every__cource-bigImg"
            style={{ backgroundImage: `url(${"http://165.232.127.62:5001" + deleteplatforma(kurs.obloshka)})` }}
          ></div>

          <div className="every__cource-desc">
            <div className="every__cource-header">
              <div className="every__cource-title">
                <img src={"http://165.232.127.62:5001" + deleteplatforma(teacher.path)} alt="" />
                <h3>{teacher.fullname}</h3>
              </div>
              <div className="every__cource-nav">
                <img src={save} alt="" />
                <img src={coin} alt="" />
                <img src={heart} alt="" />
              </div>
            </div>
            <div className="every__cource-name">
              <p>Kurs nomi: {kurs.Kursname}</p>
            </div>
            <div className="every__cource-about">
              <p>Kurs haqida: {kurs.Kursname}</p>
            </div>
            <div className="every__cource-num">
              <p className="every__cource-para">
                Kurs narxi: {kurs.narxi} so'm
              </p>
              <p className="every__cource-para">Olingan: {kurs.subs}</p>
              <p className="every__cource-para">Davomiyligi: {kurs.muddati}oy</p>
            </div>
            <div className="every__course-buttons">
              <button>Video darslar</button>
              <button>Kursni olish</button>
            </div>
          </div>
        </div>
        <div className="mobileForedit">
          <CommentsList commints={commints} />
        </div>
        <div
          className={modalDarslar ? "defDars modalDarslar aa" : "defDars yoq"}
        >
          <CommentsList
            modalDarslar={modalDarslar}
            changeModalDars={changeModalDars}
            commints={commints}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutCourseInfo;
