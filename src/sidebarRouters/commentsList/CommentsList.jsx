import React, { useEffect, useRef } from "react";
import Commint from "../../components/comments/Comment";
import prev from "../../imgs/prev.svg";
import sent from "../../imgs/sent.svg";
const cursId=(window.location.pathname.split('/').at(-1))
import "./style.css";
import axios from "axios";

function CommentsList({ modalDarslar, changeModalDars, commints }) {
  const handleClick = () => {
    changeModalDars(false);
  };
  function sendIzoh(e) {
    e.preventDefault()
    console.log()
    axios
    .post('https://api.ilmlar.com/courses/commint', {
      cursId: cursId,
      text:izohref.current.value
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token"),
      },
    })
    .then((response) => {
      
    })
    .catch((error) => {
      console.log('Xatolik yuz berdi: ', error);
    });
  }
  const izohref = useRef();
  return (
    <div className="Nav commit">
      <div
        className={modalDarslar ? "mobile__header" : "d-none "}
        onClick={handleClick}
      >
        <div className="circle">
          <img src={prev} alt="prev" />
        </div>
        <h3>Darslar</h3>
      </div>
      <h2>Izohlar</h2>
      {commints?.map((commint, index) => {
        return <Commint commint={commint} key={index} />;
      })}
      <div className="writing_comment">
        <form
          action=""
          onSubmit={(e) => {
            sendIzoh(e);
          }}
        >
          <input ref={izohref} type="text" placeholder="Izoh yozing..." />
          <button type="submit">
            <img src={sent} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default CommentsList;
