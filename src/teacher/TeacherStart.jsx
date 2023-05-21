import React from "react";
import TeachNav from "./pages/Nav";
import { Outlet } from "react-router-dom";

const TeacherStart = () => {
  return (
    <div className="app-content">
      <TeachNav />
      <div className="teacherHomePage">
        <Outlet />
      </div>
    </div>
  );
};

export default TeacherStart;
