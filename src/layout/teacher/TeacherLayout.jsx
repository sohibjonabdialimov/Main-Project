import TeachNav from "../../navbar/teacher/TeacherNavbar";
import { Outlet, useNavigate } from "react-router-dom";
import "../style.css";
import { useEffect } from "react";

const TeacherLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate("/teacherlogin");
    }
  }, [])
  return (
    <div className="app-content">
      <TeachNav />
      <div className="teacherHomePage">
        <Outlet />
      </div>
    </div>
  );
};

export default TeacherLayout;
