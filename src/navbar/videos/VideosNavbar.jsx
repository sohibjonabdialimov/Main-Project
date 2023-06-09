import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../style.css";
function VideosNavbar() {
  return (
    <div className="videos_navbar">
      <ul>
        <li>
          <NavLink to="darslar">1-dars. Lorem Ipsum is simply</NavLink>
        </li>
        <li>
          <NavLink to="hisoblar">2-dars. Lorem Ipsum is simply</NavLink>
        </li>
        <li>
          <NavLink to="kurs">3-dars. Lorem Ipsum is simply</NavLink>
        </li>
        <li>
          <NavLink to="statistic">4-dars. Lorem Ipsum is simply</NavLink>
        </li>
        <li>
          <NavLink to="update/kurs">5-dars. Lorem Ipsum is simply</NavLink>
        </li>
        <li>
          <NavLink to="profile">6-dars. Lorem Ipsum is simply</NavLink>
        </li>
        <li>
          <NavLink to="profile">7-dars. Lorem Ipsum is simply</NavLink>
        </li>
        <li>
          <NavLink to="profile">8-dars. Lorem Ipsum is simply</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default VideosNavbar;
