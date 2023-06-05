import React from "react";
import Commint from "../../components/comments/Comment";
import "./style.css";

const CommentsList = (props) => {
  const commints = props.commints;
  return (
    <div className="Nav commit">
      <h2>Izohlar</h2>
      {commints.map((commint, index) => {
        return <Commint commint={commint} key={index} />;
      })}
    </div>
  );
};

export default CommentsList;
