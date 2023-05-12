import "./MainPage.css"
import React from 'react'
import { Route,Routes } from "react-router-dom";
import TeachAllvedios from "../MainRoute/Allvedios";
import TeachProfile from "../MainRoute/Profile";
import TeachHisoblar from "../MainRoute/Hisoblar";
import TeachSeekurs from "../MainRoute/Seekurs";
import TeachVediosinonekurs from "../MainRoute/Vediosinonekurs";
import TeachHisoblarpulyichish from "../MainRoute/Hisoblarpulyichish";
import TeachPulyichishok from "../MainRoute/Pulyichishok";
import TeachFreekurs from "../MainRoute/Freekurs";
import TeachMoneykurs from "../MainRoute/Moneykurs";
import TeachUpdatekurs from "../MainRoute/Updatekurs";
import TeachKurss from "../kurslar/Kurss";
import TeachCreatekurs from "../MainRoute/Createkurs";
import TeachUpdateonekurs from "../MainRoute/Updateonekurs";
function TeachMainPage() {
    return (
        <div className="homepage">
            <Routes>
                <Route path="/" element={<TeachAllvedios />}/>
                <Route path="/seekurs:kursId" element={<TeachSeekurs />}/>
                <Route path="/vediosinonekurs" element={<TeachVediosinonekurs />}/>
                <Route path="/hisoblar" element={<TeachHisoblar />} />
                <Route path="/hisoblar/pulyichish" element={<TeachHisoblarpulyichish />} />
                <Route path="/hisoblar/pulyichish/ok" element={<TeachPulyichishok />} />
                <Route path="/Kurs/:id" element={<TeachKurss />} />
                <Route path="/kurs/" element={<TeachCreatekurs />} />
                <Route path="/kurs/free" element={<TeachFreekurs />} />
                <Route path="/kurs/money" element={<TeachMoneykurs />} />
                <Route path="/update/kurs/" element={<TeachUpdatekurs />} />
                <Route path="/update/kurs/:Id" element={<TeachUpdateonekurs />} />
                <Route path="/profile" element={<TeachProfile />} />
            </Routes>
        </div>
    )
}

export default TeachMainPage