import React from 'react'
import opacha from "../imgs/user-logo.png"
function Userprofile() {
    let name = "name"
    let surname = "surname"
    let username = "username"
    let email = "username@email.com"
    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <img src={opacha} alt="" />
                <h2>{name + " " + surname}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Userprofile