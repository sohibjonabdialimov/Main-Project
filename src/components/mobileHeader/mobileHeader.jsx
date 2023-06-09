import React from 'react'
import search from "../../imgs/search.png";
import mobileBurger from "../../imgs/mobile-burger.svg";
import mobileMenu from "../../imgs/mobile_menu.svg";
import "./style.css";
function MobileHeader({changeModalDars,changeModal, modal,modalDarslar,type}) {
    const handleClickDarslar = () => {
        changeModalDars(!modalDarslar)
      }
      const handleClick = () => {
        changeModal(!modal)
      }
    return (
        <div className="mobile-for">
            <div className="burger" onClick={handleClick}>
                <div className="burger-box">
                    <img src={mobileBurger} alt="burger" />
                </div>

            </div>
            <div className="search-div">
                <input
                    type="button"
                    className={(type=='search')?'search-main':"d-none"}
                    placeholder="search..."
                />
                <div  className={(type=='search')?'search-img-box':"d-none"}>
                    <img src={search} alt="" />
                </div>
                <button className={(type!='search')?'search-main':"d-none"} >{type}</button>
            </div>
            <div className="burger" onClick={handleClickDarslar}>
                <div className="burger-box" >
                    <img src={mobileMenu} alt="burger" />
                </div>

            </div>
        </div>
    )
}

export default MobileHeader;