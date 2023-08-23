import React, { useEffect, useState } from 'react'
import opacha from "../../imgs/user-logo.png"
import "./style.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function deleteplatforma(url) {
  try {
    if (url.includes("platforma")) {
      url = url.split("/")
      let res = ""
      for (let i = 2; i < url.length; i++) {
        res += "/" + url[i]
      }
      return (res)
    }
    return "" + url
  } catch (error) {
    console.log(error)
  }
}
function TeachUserprofile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    axios.get("https://api.ilmlar.com/teacherme/", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }).then((res) => {
      setProfile(res.data)
    })
  }, [])
  return (
    <div>
      <div className='userprofile' style={{ textAlign: "center", paddingTop: 15 }}>
        <img src={"https://api.ilmlar.com" + deleteplatforma(profile.path)} alt="" />
        <h2>{profile.fullname}</h2>
      </div>
    </div>
  )
}

export default TeachUserprofile