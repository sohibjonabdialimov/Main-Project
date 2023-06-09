import React from 'react'
import "./style.css";
function Comment(props) {
  return (
    <div className="mobile-for">
          <div className="burger" onClick={clickModal}>
            <div className="burger-box">
              <img src={mobileBurger} alt="burger" />
            </div>

          </div>
          <div className="search-div">

            <input
              type="search"
              className="search-main"
              placeholder="search..."
            />
            <div className="search-img-box">
              <img src={search} alt="" />
            </div>
          </div>
          <div className="burger">
            <div className="burger-box">
              <img src={mobileMenu} alt="burger" />
            </div>

          </div>
        </div>
  )
}

export default Comment;