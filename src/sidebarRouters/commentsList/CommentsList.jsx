import React from "react";
import Commint from "../../components/comments/Comment";
import prev from '../../imgs/prev.svg';

import "./style.css";

function CommentsList ({modalDarslar,changeModalDars,commints}) {
  const handleClick = () => {
    changeModalDars(false)
  }
  return (
    <div className="Nav commit">
        <div className={(modalDarslar)?"mobile__header":'d-none '} onClick={handleClick}>
         <div className="circle">
         <img src={prev} alt="prev" />
         </div>
         <h3>Darslar</h3>
         
      </div>
      <h2>Izohlar</h2>
      {commints.map((commint, index) => {
        return <Commint commint={commint} key={index} />;
      })}
    </div>
  );
};

export default CommentsList;
