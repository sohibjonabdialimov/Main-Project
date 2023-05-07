import React from "react";
import Cart from "../components/Cart/Cart";
import Sitebar from "../layout/Sitebar";
import Navvedio from "../sitebarRoute/Navvedio";
import search from '../imgs/search.png';
import { Input } from "antd";
import './style.css';
function Allvedios() {
  return (
    <div className="main-page" >
      <div className="w100">
        {/* <Input placeholder="Basic usage" /> */}
        <div className="search-div">
          <input type="search" className="search-main" placeholder="search..." />
          <img src={search} alt="" />
        </div>
        <div
          className="fife main-content"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {/* <Cart />
          <Cart /> */}
          <Cart />
          <Cart />
          <Cart />
          <Cart />
        </div>
      </div>

      <Navvedio />
    </div>
  );
}

export default Allvedios;
