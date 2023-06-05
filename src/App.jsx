import "./App.css";
import React from "react";
// import Start from "./start";
import { Route, Routes } from "react-router-dom";
import Baykurs from "./kurslar/Baykurs";
// import Kurss from "./kurslar/Kurss";
// import Profile from "./mainRouters/profile/Profile.student";
import Subs from "./sidebarRouters/Subs";
import Darslar from "./sidebarRouters/Darslar";
import TeacherInfo from "./mainRouters/TeacherInfo";
// import TeacherStart from "./teacher/TeacherStart";
// import TeachAllvedios from "./teacher/MainRoute/allVideos/Allvedios";
import TeachSeekurs from "./teacher/MainRoute/Seekurs";
// import TeachVediosinonekurs from "./teacher/MainRoute/Vediosinonekurs";
// import TeachHisoblar from "./teacher/MainRoute/Hisoblar";
// import TeachHisoblarpulyichish from "./teacher/MainRoute/pulYechishForm/Hisoblarpulyichish";
import TeachPulyichishok from "./teacher/MainRoute/moneyProcess/Pulyichishok";
// import TeachKurss from "./teacher/kurslar/Kurss";
// import TeachCreatekurs from "./teacher/MainRoute/downloadCourses/Createkurs";
// import TeachFreekurs from "./teacher/MainRoute/freeCourseDownload/Freekurs";
// import TeachMoneykurs from "./teacher/MainRoute/paidCouseDownload/Moneykurs";
import TeachUpdatekurs from "./teacher/MainRoute/Updatekurs";
// import Statistik from "./teacher/MainRoute/Statistik";
import TeachUpdateonekurs from "./teacher/MainRoute/Updateonekurs";
// import TeachProfile from "./teacher/MainRoute/profile/Profile";
// import Begen from "./Begin";
import TeachEditProfile from "./teacher/MainRoute/editProfile/TeachEditProfile";
import StudentLayout from "./layout/student/StudentLayout";
import Lessons from "./mainRouters/lessons/Lessons.student";
import Balance from "./mainRouters/balance/Balance.student";
import Begin from "./Begin";
import AboutCourseInfo from "./kurslar/AboutCourseInfo";
import Profile from "./mainRouters/profile/Profile.student";
import CourseStatistic from "./teacher/MainRoute/courseStatistic/CourseStatistic";
import TeacherLayout from "./layout/teacher/TeacherLayout";
import LessonsTeacher from "./teacher/MainRoute/Lessons/LessonsTeacher";
import TakingMoney from "./teacher/MainRoute/takingMoney/TakingMoney";
import PaidCourseDownload from "./teacher/MainRoute/paidCouseDownload/PaidCourseDownload";
import FreeCourseDownload from "./teacher/MainRoute/freeCourseDownload/FreeCourseDownload";
import TeacherProfile from "./teacher/MainRoute/profile/TeacherProfile";
import LessonsStatistic from "./teacher/MainRoute/LessonsStatistic";
import SelectDownloadCourse from "./teacher/MainRoute/selectDownloadCourse/SelectDownloadCourse";
import TeacherBalance from "./teacher/MainRoute/teacherBalance/TeacherBalance";
import StudentProfileEdit from "./teacher/pages/studentProfileEdit/StudentProfileEdit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<Lessons />} />
          <Route path="hisoblar" element={<Balance />} />
          <Route path="Kurs/olinganlar" element={<Baykurs />} />
          <Route path="kurs/:kursId" element={<AboutCourseInfo />} />
          <Route path="profile" element={<Profile />}>
            <Route index element={<Subs />} />
            <Route path="subs" element={<Subs />} />
            <Route path="darslar" element={<Darslar />} />
          </Route>
          <Route path="teacherinfo" element={<TeacherInfo />} />
        </Route>

        <Route path="/editprofil" element={<StudentProfileEdit />} />
        <Route path="/editteacherprofile" element={<TeachEditProfile />} />

        <Route path="/teacher" element={<TeacherLayout />}>
          <Route index element={<LessonsTeacher />} />
          <Route path="darslar" element={<LessonsTeacher />} />
          <Route path="seekurs:kursId" element={<TeachSeekurs />} />
          {/* <Route path="vediosinonekurs" element={<TeachVediosinonekurs />} /> */}
          <Route path="hisoblar" element={<TeacherBalance />} />

          <Route path="Kurs/:id" element={<AboutCourseInfo />} />
          <Route path="kurs/" element={<SelectDownloadCourse />} />
          <Route path="update/kurs/" element={<TeachUpdatekurs />} />
          <Route path="statistic" element={<LessonsStatistic />} />
          <Route path="profile" element={<TeacherProfile />} />
        </Route>
        <Route path="kurs/free" element={<FreeCourseDownload />} />
        <Route path="kurs/money" element={<PaidCourseDownload />} />
        <Route
          path="hisoblar/pulyichish"
          element={<TakingMoney />}
        />
        <Route path="hisoblar/pulyichish/ok" element={<TeachPulyichishok />} />
        <Route path="teacher/statistic/:course" element={<CourseStatistic />} />
        <Route
          path="teacher/update/kurs/:id"
          element={<TeachUpdateonekurs />}
        />
        <Route path="/" element={<Begin />} />
      </Routes>
    </>
  );
}

export default App;
