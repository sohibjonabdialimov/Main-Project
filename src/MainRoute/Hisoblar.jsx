import React from 'react'
import Baystudy from '../sitebarRoute/Baystudy'
let money =650000
money=money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
let hisobraqam=1234567890123456
hisobraqam= hisobraqam.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ' ')
function Hisoblar() {
    return (
        <div className='main-page'>
            <div className='fife'>
                <p style={{fontSize:22}}>Hisobdagi pul miqdori:</p>
                <p style={{fontSize:45}}>{money}UZS</p>
                <p>Hisob raqam:</p>
                <p style={{fontSize:45}}>{hisobraqam}</p>
            </div>
            <Baystudy />
        </div>
    )
}

export default Hisoblar