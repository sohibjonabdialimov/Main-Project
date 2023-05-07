import React from 'react'
import Baystudy from '../sitebarRoute/Baystudy'
let money = 650000
money = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
let hisobraqam = 1234567890123456
hisobraqam = hisobraqam.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ' ')
function Hisoblar() {
    return (
        <div className="main-page" >
            <div className="w100">
                <div
                    className="fife main-content">
                    <div className='hisoblar'>
                        <h2 style={{ fontSize: 22 }}>Hisobdagi pul miqdori:</h2>
                        <p style={{ fontSize: 45 }}>{money}UZS</p>
                        <h2>Hisob raqam:</h2>
                        <p style={{ fontSize: 45 }}>{hisobraqam}</p>
                    </div>
                </div>
            </div>

            <Baystudy />
        </div>

    )
}

export default Hisoblar