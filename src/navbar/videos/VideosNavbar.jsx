import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../style.css";
function VideosNavbar() {
  return (
    <div className="videos_navbar">
      <ul>
        <li>
          <NavLink to="/teacher/course/12">1-dars. Lorem Ipsum is simply</NavLink>
        </li>
        <li>
          <NavLink to="/teacher/course/13">2-dars. Lorem Ipsum is simply</NavLink>
        </li>
        <li>
          <NavLink to="/teacher/course/14">3-dars. Lorem Ipsum is simply</NavLink>
        </li>
        <li>
          <NavLink to="/teacher/course/15">4-dars. Lorem Ipsum is simply</NavLink>
        </li>
        <li>
          <NavLink to="/teacher/course/1452">5-dars. Lorem Ipsum is simply</NavLink>
        </li>
        <li>
          <NavLink to="/teacher/course/1545">6-dars. Lorem Ipsum is simply</NavLink>
        </li>
        <li>
          <NavLink to="/teacher/course/14521">7-dars. Lorem Ipsum is simply</NavLink>
        </li>
        <li>
          <NavLink to="/teacher/course/154522">8-dars. Lorem Ipsum is simply</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default VideosNavbar;
