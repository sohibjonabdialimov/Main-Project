import React from "react";

import { NavLink, Route, Routes } from "react-router-dom";
import Subs from "./Subs";
import Darslar from "./Darslar";
import Navobuna from "./Navobuna";
import Bodyobuna from "./Bodyobuna";

const Obuna = () => {
  return (
    <>
      <div className="Nav">
        <div className="users_subs">
          <Navobuna />
          <Bodyobuna />
        </div>
      </div>
    </>
  );
};

export default Obuna;
