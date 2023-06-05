import React from "react";
import Cart from "../../components/Cart/Cart";
// import Sitebar from "../../layout/Sitebar";
import Navvedio from "../../sidebarRouters/Navvedio";
import search from "../../imgs/search.png";
import img12 from "../../imgs/main1.png";
import img13 from "../../imgs/main2.png";
import img14 from "../../imgs/main3.png";
import img15 from "../../imgs/main4.png";
import small1 from "../../imgs/teacher-home1.png";
import small2 from "../../imgs/teacher-home2.png";
import small3 from "../../imgs/teacher-home3.png";
import small4 from "../../imgs/teacher-home4.png";
import "./style.css";
function Lessons() {
  let carts = [
    {
      kursId: 12,
      img: img12,
      smallImg: small1,
      name: "Super miya",
      autorId: 14,
      author: "Davron Turdiyev",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      kursId: 13,
      img: img13,
      smallImg: small2,
      name: "Kitoblarni effectiv o'qish",
      autorId: 14,
      author: "Madina Olimova",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      kursId: 14,
      img: img14,
      smallImg: small3,
      name: "Quvnoq ingliz tili",
      autorId: 14,
      author: "Cambridge LC",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      kursId: 15,
      img: img15,
      smallImg: small4,
      name: "Inson omili yoki AI",
      autorId: 14,
      author: "MohirDev",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      kursId: 17,
      img: img14,
      smallImg: small3,
      name: "Quvnoq ingliz tili",
      autorId: 14,
      author: "Cambridge LC",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      kursId: 18,
      img: img15,
      smallImg: small4,
      name: "Inson omili yoki AI",
      autorId: 14,
      author: "MohirDev",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="main-page">
      <div className="w100 ">
        <div className="search-div">
          <input
            type="search"
            className="search-main"
            placeholder="search..."
          />
          <img src={search} alt="" />
        </div>
        <div className="fife  main-content sidebar-main-wrap_all">
          {carts.map((cart, index) => {
            return <Cart cart={cart} key={index} />;
          })}
        </div>
      </div>

      <Navvedio />
    </div>
  );
}

export default Lessons;
