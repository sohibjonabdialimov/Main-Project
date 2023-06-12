import React, { useEffect, useState } from 'react'
import "./style.css"
import axios from 'axios'
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
    else { return url }

  } catch (error) {
    console.log(error)
  }
}
function Userprofile() {
  const [profile, setProfil] = useState({})
  useEffect(() => {
    axios.get("http://165.232.127.62:5001/usersme", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then((res) => {
      setProfil(res.data)

    })
  }, [])
  return (
    <div>
      <div className='userprofile' style={{ textAlign: "center", paddingTop: 15 }}>
        <img src={"http://165.232.127.62:5001" + deleteplatforma(profile.path)} alt="" />
        <h2>{profile.fullname}</h2>
      </div>
    </div>
  )
}

export default Userprofile;