import { Outlet, useNavigate } from "react-router-dom";
import "../style.css";
import StudentNavbar from "../../navbar/student/StudentNavbar";
import { useEffect } from "react";

function StudentLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate("/login");
    }
  }, [])
  return (
    <>
      <div className="app-content">
        <div className="studentNavbar-box">

        <StudentNavbar />
        </div>
        <div className="homepage">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default StudentLayout;
