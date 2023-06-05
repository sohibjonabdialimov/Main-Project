import { Outlet } from "react-router-dom";
import "../style.css";
import StudentNavbar from "../../navbar/student/StudentNavbar";

function StudentLayout() {
  return (
    <>
      <div className="app-content">
        <StudentNavbar />
        <div className="homepage">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default StudentLayout;
