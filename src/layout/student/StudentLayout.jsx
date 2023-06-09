import { Outlet } from "react-router-dom";
import "../style.css";
import StudentNavbar from "../../navbar/student/StudentNavbar";

function StudentLayout() {
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
