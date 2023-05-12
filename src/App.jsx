import "./App.css";
import React, { useEffect } from "react";
import Nav from "./pages/Nav";
// import MainPage from "./pages/MainPage";
import Start from "./start";
import Taxrirlash from "./Taxrirlash";
import { Route, Routes, useNavigate } from "react-router-dom";
import Allvedios from "./MainRoute/Allvedios";
import Hisoblar from "./MainRoute/Hisoblar";
import Baykurs from "./kurslar/Baykurs";
import Kurss from "./kurslar/Kurss";
import Profile from "./MainRoute/Profile";
import Subs from "./sitebarRoute/Subs";
import Darslar from "./sitebarRoute/Darslar";
import TeacherInfo from "./MainRoute/TeacherInfo";
function App() {
  const navigate = useNavigate();
  // useEffect(() => {
  //   navigate('/student/');
  // }, []);

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
      </Routes>
    </>
  );
}

export default App;
