import "./App.css";
import React from "react";
import Nav from "./pages/Nav";
import { Outlet } from "react-router-dom";

function Start() {
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
}

export default Start;
