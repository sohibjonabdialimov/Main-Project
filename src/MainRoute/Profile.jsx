import React from 'react'
import Obuna from '../sitebarRoute/Obuna';
import opacha from "../imgs/big-logo.png"
import Userprofile from '../components/userprofile';

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
    let name = "name"
    let surname = "surname"
    let username = "username"
    let email = "username@email.com"

    return (
        <div className='main-page'>
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