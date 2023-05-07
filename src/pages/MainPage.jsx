import "./MainPage.css"
import React from 'react'
import { Input, Space } from "antd";
import { Route,Routes } from "react-router-dom";
import Allvedios from "../MainRoute/Allvedios";
import Hisoblar from "../MainRoute/Hisoblar";
import Profile from "../MainRoute/Profile";
import TeacherInfo from "../MainRoute/TeacherInfo";
import Baykurs from "../kurslar/Baykurs";
import Kurss from "../kurslar/Kurss";
const { Search } = Input;
function MainPage() {
    return (
        <div className="homepage">
            <Routes>
                <Route path="/" element={<Allvedios />}></Route>
                <Route path="/hisoblar" element={<Hisoblar />} />
                <Route path="/Kurs/olinganlar" element={<Baykurs />} />
                <Route path="/kurs/" element={<Kurss />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/teacherinfo" element={<TeacherInfo />} />
            </Routes>
        </div>
    )
}

export default MainPage