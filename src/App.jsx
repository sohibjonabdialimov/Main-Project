import "./App.css";
import React from "react";
import Start from "./start";
import Taxrirlash from "./Taxrirlash";
import { Route, Routes } from "react-router-dom";
import Allvedios from "./MainRoute/Allvedios";
import Hisoblar from "./MainRoute/Hisoblar";
import Baykurs from "./kurslar/Baykurs";
import Kurss from "./kurslar/Kurss";
import Profile from "./MainRoute/Profile";
import Subs from "./sitebarRoute/Subs";
import Darslar from "./sitebarRoute/Darslar";
import TeacherInfo from "./MainRoute/TeacherInfo";
import TeacherStart from "./teacher/TeacherStart";
import TeachAllvedios from "./teacher/MainRoute/barchaVideolar/Allvedios";
import TeachSeekurs from "./teacher/MainRoute/Seekurs";
import TeachVediosinonekurs from "./teacher/MainRoute/Vediosinonekurs";
import TeachHisoblar from "./teacher/MainRoute/Hisoblar";
import TeachHisoblarpulyichish from "./teacher/MainRoute/pulYechishForm/Hisoblarpulyichish";
import TeachPulyichishok from "./teacher/MainRoute/moneyProcess/Pulyichishok";
import TeachKurss from "./teacher/kurslar/Kurss";
import TeachCreatekurs from "./teacher/MainRoute/downloadCourses/Createkurs";
import TeachFreekurs from "./teacher/MainRoute/freeCourseDownload/Freekurs";
import TeachMoneykurs from "./teacher/MainRoute/paidCouseDownload/Moneykurs";
import TeachUpdatekurs from "./teacher/MainRoute/Updatekurs";
import Statistik from "./teacher/MainRoute/Statistik";
import TeachUpdateonekurs from "./teacher/MainRoute/Updateonekurs";
import TeachProfile from "./teacher/MainRoute/Profile";
import Begen from "./begen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/student" element={<Start />}>
          <Route index element={<Allvedios />} />
          <Route path="hisoblar" element={<Hisoblar />} />
          <Route path="Kurs/olinganlar" element={<Baykurs />} />
          <Route path="kurs/:kursId" element={<Kurss />} />
          <Route path="profile" element={<Profile />}>
            <Route index element={<Subs />} />
            <Route path="subs" element={<Subs />} />
            <Route path="darslar" element={<Darslar />} />
          </Route>
          <Route path="teacherinfo" element={<TeacherInfo />} />
        </Route>

        <Route path="/editprofil" element={<Taxrirlash />} />

        <Route path="/teacher" element={<TeacherStart />}>
          <Route index element={<TeachAllvedios />} />
          <Route path="darslar" element={<TeachAllvedios />} />
          <Route path="seekurs:kursId" element={<TeachSeekurs />} />
          <Route path="vediosinonekurs" element={<TeachVediosinonekurs />} />
          <Route path="hisoblar" element={<TeachHisoblar />} />

          <Route path="Kurs/:id" element={<TeachKurss />} />
          <Route path="kurs/" element={<TeachCreatekurs />} />
          <Route path="update/kurs/" element={<TeachUpdatekurs />} />
          <Route path="statistic" element={<Statistik />} />
          <Route path="update/kurs/:Id" element={<TeachUpdateonekurs />} />
          <Route path="profile" element={<TeachProfile />} />
        </Route>
        <Route path="kurs/free" element={<TeachFreekurs />} />
        <Route path="kurs/money" element={<TeachMoneykurs />} />
        <Route
          path="hisoblar/pulyichish"
          element={<TeachHisoblarpulyichish />}
        />
        <Route path="hisoblar/pulyichish/ok" element={<TeachPulyichishok />} />

        <Route path="/" element={<Begen />} />
      </Routes>
    </>
  );
}

export default App;
