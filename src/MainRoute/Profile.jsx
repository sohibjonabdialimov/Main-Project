import React from "react";
import Obuna from "../sitebarRoute/Obuna";
import opacha from "../imgs/big-logo.png";
import Userprofile from "../components/userprofile";

function Profile() {
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
          name: "",
          surname: "",
          email: "",
        },
        {
          userId: 13,
          name: "",
          surname: "",
          email: "",
        },
        {
          userId: 14,
          name: "",
          surname: "",
          email: "",
        },
        {
          userId: 15,
          name: "",
          surname: "",
          email: "",
        },
        {
          userId: 16,
          name: "",
          surname: "",
          email: "",
        },
        {
          userId: 17,
          name: "",
          surname: "",
          email: "",
        },
      ],
    },
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
        <div className="profile-content">
          <img src={opacha} alt="" />
          <h1>{me[0].name + " " + me[0].surname}</h1>
          <div className="profile-content-para">
            <p>Username: {me[0].username}</p>
            <p>Email: {me[0].email}</p>
          </div>
          <div className="profile-buttons">
            <button>Video darslar</button>
            <button>Kursni olish</button>
          </div>
        </div>
      </div>
      <Obuna />
    </div>
  );
}

export default Profile;
