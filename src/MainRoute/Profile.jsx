import React from 'react'
import Obuna from '../sitebarRoute/Obuna';
import opacha from "../imgs/big-logo.png"
import Userprofile from '../components/userprofile';

function Profile() {
    let name = "name"
    let surname = "surname"
    let username = "username"
    let email = "username@email.com"

    return (
        <div style={{ display: "flex" }}>
            <div className='fife' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                
                    <div style={{ textAlign: "center" }}>
                        <img src={opacha} alt="" />
                        <h2>{name + " " + surname}</h2>
                        <p>{username}</p>
                        <p>{email}</p>
                    </div>
                
            </div>
            <Obuna />
        </div>
    )
}

export default Profile