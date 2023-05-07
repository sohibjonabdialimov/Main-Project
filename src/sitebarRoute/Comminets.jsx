import React from "react";
import Commint from "../components/commint";

const Comminets = (props) => {
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

export default Comminets;
