import React from "react";
import opacha from "../imgs/big-logo.png";

function TeachProfile() {

    let me = [
        {
            type: 0,
            name: "name",
            surname: "surname",
            username: "username",
            email: "username@email.com",
            subscibe: [
                {
                    userId: 12,
                    name:"",
                    surname:"",
                    email:""
                },
                {
                    userId: 13,
                    name:"",
                    surname:"",
                    email:""
                },{
                    userId: 14,
                    name:"",
                    surname:"",
                    email:""
                },{
                    userId: 15,
                    name:"",
                    surname:"",
                    email:""
                },{
                    userId: 16,
                    name:"",
                    surname:"",
                    email:""
                },{
                    userId: 17,
                    name:"",
                    surname:"",
                    email:""
                },
            ]
        }
    ];
    

  return (
    <div className="main-page">
      <div
        className="fife w100"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img src={opacha} alt="" />
          <h2>{me[0].name + " " + me[0].surname}</h2>
          <p>{me[0].username}</p>
          <p>{me[0].email}</p>

        </div>
      </div>
    </div>
  );
}

export default TeachProfile;
