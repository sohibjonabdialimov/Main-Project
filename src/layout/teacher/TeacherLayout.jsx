import TeachNav from "../../navbar/teacher/TeacherNavbar";
import { Outlet } from "react-router-dom";
import "../style.css";

const TeacherLayout = () => {
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
