import React from 'react'
import opacha from "../imgs/user-logo.png"
import "./style.css"
function TeachUserprofile() {
    let name = "Name"
    let surname = "Surname"
    return (
        <div>
            <div className='userprofile' style={{ textAlign: "center",paddingTop:15 }}>
                <img src={opacha} alt="" />
                <h2>{name + " " + surname}</h2>
            </div>
        </div>
    )
}

export default TeachUserprofile