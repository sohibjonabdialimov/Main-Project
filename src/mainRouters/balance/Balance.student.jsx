import React, { useState } from 'react'
import Baystudy from '../../sidebarRouters/boughtLessons/BoughtLessons';
import "./style.css";
import "../style.css";
import MobileHeader from '../../components/mobileHeader/mobileHeader';
import Navvedio from '../../sidebarRouters/Navvedio';
import StudentNavbar from '../../navbar/student/StudentNavbar';
let money = 650000
money = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
let hisobraqam = 1234567890123456
hisobraqam = hisobraqam.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ' ')
function Balance() {

    let [modal, setModal] = useState(false)
    let [modalDarslar, setModalDarslar] = useState(false)
    const changeModal = (value) => {
        setModal(value)
    }

    const changeModalDars = (value) => {
        setModalDarslar(value)
    }
    return (
        <div className="main-page" >
            <div className={modal ? "def modal-navbar" : "def yoq"} >
                <StudentNavbar changeModal={changeModal} modal={modal} />
            </div>
            <div className={(modal || modalDarslar) ? "blur w100 main_lesson mobile_none" : "w100 main_lesson mobile_none"}>
                <MobileHeader changeModalDars={changeModalDars} changeModal={changeModal} modal={modal} modalDarslar={modalDarslar} type={'Hisob balansi'} />
                <div
                    className="fife main-content">
                    <div className='hisoblar'>
                        <p className='hisoblar_header'>Hisobdagi pul miqdori:</p>
                        <p className='hisoblar_number'>{money}UZS</p>
                        <p className='hisoblar_header'>Hisob raqam:</p>
                        <p className='hisoblar_number'>XXXX XXXX XXXX XXXX</p>
                    </div>
                </div>
            </div>

            <Baystudy />
            <div className={modalDarslar ? "defDars modalDarslar" : "defDars yoq"} >
                <Baystudy modalDarslar={modalDarslar} changeModalDars={changeModalDars} />
            </div>
        </div>

    )
}

export default Balance;