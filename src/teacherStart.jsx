import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./teacher/pages/Nav";

const TeacherStart = () => {
  return (
    <>
      <div className="app-content">
        <Nav />
        <div className="homepage">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default TeacherStart;
