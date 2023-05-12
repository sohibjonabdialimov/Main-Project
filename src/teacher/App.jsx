import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import TeachAllvedios from "./MainRoute/Allvedios";
import TeachSeekurs from "./MainRoute/Seekurs";
import TeachVediosinonekurs from "./MainRoute/Vediosinonekurs";
import TeachHisoblar from "./MainRoute/Hisoblar";
import TeachHisoblarpulyichish from "./MainRoute/Hisoblarpulyichish";
import TeachPulyichishok from "./MainRoute/Pulyichishok";
import TeachKurss from "./kurslar/Kurss";
import TeachCreatekurs from "./MainRoute/Createkurs";
import TeachFreekurs from "./MainRoute/Freekurs";
import TeachMoneykurs from "./MainRoute/Moneykurs";
import TeachUpdateonekurs from "./MainRoute/Updateonekurs";
import TeachProfile from "./MainRoute/Profile";
import TeacherStart from "./TeacherStart";
import TeachUpdatekurs from "./MainRoute/Updatekurs";
import Statistik from "./MainRoute/Statistik";
function App() {
  return (
    <>
      {/* <div className="app-content">

        <Nav />
        <MainPage />

      </div> */}
      <Routes>
        <Route path="/teacher" element={<TeacherStart />}>
          <Route index element={<TeachAllvedios />} />
          <Route path="seekurs:kursId" element={<TeachSeekurs />} />
          <Route path="vediosinonekurs" element={<TeachVediosinonekurs />} />
          <Route path="hisoblar" element={<TeachHisoblar />} />
          <Route
            path="hisoblar/pulyichish"
            element={<TeachHisoblarpulyichish />}
          />
          <Route
            path="hisoblar/pulyichish/ok"
            element={<TeachPulyichishok />}
          />
          <Route path="Kurs/:id" element={<TeachKurss />} />
          <Route path="kurs/" element={<TeachCreatekurs />} />
          <Route path="kurs/free" element={<TeachFreekurs />} />
          <Route path="kurs/money" element={<TeachMoneykurs />} />
          <Route path="update/kurs/" element={<TeachUpdatekurs />} />
          <Route path="statistic" element={<Statistik />} />
          <Route path="update/kurs/:Id" element={<TeachUpdateonekurs />} />
          <Route path="profile" element={<TeachProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
