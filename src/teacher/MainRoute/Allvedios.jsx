import React from "react";
import TeachCart from "../components/Cart/Cart";
import search from "../imgs/search.png";
import img12 from "../imgs/main1.png";
import img13 from "../imgs/main2.png";
import img14 from "../imgs/main3.png";
import img15 from "../imgs/main4.png";
import "./style.css";
function TeachAllvedios() {
  let carts = [
    {
      kursId: 12,
      img: img12,
      name: "Super miya",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      kursId: 13,
      img: img13,
      name: "Kitoblarni effectiv o'qish",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      kursId: 14,
      img: img14,
      name: "Quvnoq ingliz tili",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      kursId: 15,
      img: img15,
      name: "Inson omili yoki AI",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="main-page">
      <div className="w100">
        <div className="search-div">
          <input
            type="search"
            className="search-main"
            placeholder="search..."
          />
          <img src={search} alt="" />
        </div>
        <div className="fife main-content">
          {carts.map((cart, index) => {
            return <TeachCart cart={cart} key={index} />;
          })}
        </div>
      </div>

    </div>
  );
}

export default TeachAllvedios;
