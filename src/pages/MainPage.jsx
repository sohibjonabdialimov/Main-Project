import "./MainPage.css"
import React from 'react'
import { Input, Space } from "antd";
import { Outlet, Route,Routes } from "react-router-dom";
import Allvedios from "../MainRoute/Allvedios";
import Profile from "../MainRoute/Profile";
import TeacherInfo from "../MainRoute/TeacherInfo";
import Baykurs from "../kurslar/Baykurs";
import Kurss from "../kurslar/Kurss";
import Hisoblar from "../MainRoute/Hisoblar";
import Subs from "../sitebarRoute/Subs";
import Darslar from "../sitebarRoute/Darslar";
function MainPage() {
    return (
        <div className="homepage">
            {/* <Routes>
                <Route path="/" element={<Allvedios />}></Route>
                <Route path="/hisoblar" element={<Hisoblar />} />
                <Route path="/Kurs/olinganlar" element={<Baykurs />} />
                <Route path="/kurs/:kursId" element={<Kurss />} />
                <Route path="/profile" element={<Profile />} >
                    <Route index element={<Subs />} />
                    <Route path="subs" element={<Subs />} />
                    <Route path="darslar" element={<Darslar />} />
                </Route>
                <Route path="/teacherinfo" element={<TeacherInfo />} />
            </Routes> */}
        </div>
    )
}

export default MainPage