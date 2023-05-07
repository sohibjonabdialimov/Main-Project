import React from "react";
import Cart from "../components/Cart/Cart";
import Sitebar from "../layout/Sitebar";
import Navvedio from "../sitebarRoute/Navvedio";
import { Input } from "antd";
import './style.css';
function Allvedios() {
  return (
    <div style={{ display: "flex" }}>
      <div className="w100">
        <Input placeholder="Basic usage" />
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
          <Cart kursId={12}/>
          <Cart kursId={13}/>
          <Cart kursId={14}/>
          <Cart kursId={15}/>
        </div>
      </div>

      <Navvedio />
    </div>
  );
}

export default Allvedios;
