import React from "react";
import Cart from "../components/Cart/Cart";
import Sitebar from "../layout/Sitebar";
import Navvedio from "../sitebarRoute/Navvedio";
import { Input } from "antd";
import img12 from "../imgs/main1.png"
import img13 from "../imgs/main2.png"
import img14 from "../imgs/main3.png"
import img15 from "../imgs/main4.png"
import './style.css';
function Allvedios() {
  let carts=[
    {
      kursId:12,
      img:img12,
      name:"supermiya",
      autorId:14
    }
    ,{
      kursId:13,
      img:img13,
      name:"supermiya",
      autorId:14
    },
    {
      kursId:14,
      img:img14,
      name:"supermiya",
      autorId:14
    },
    {
      kursId:15,
      img:img15,
      name:"supermiya",
      autorId:14
    }
  ]
  return (
    <div className="main-page" >
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
          {carts.map((cart, index) => {
            return (
              <Cart cart={cart} key={index} />

            )

          })}
        </div>
      </div>

      <Navvedio />
    </div>
  );
}

export default Allvedios;
