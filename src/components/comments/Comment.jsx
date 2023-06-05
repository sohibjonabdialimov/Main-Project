import React from 'react'
import "./style.css";
function Comment(props) {
  return (
    <div className='commit-div'>
        <p>{props.commint.text}</p>
        <span>{props.commint.username}</span>
        <img src={props.commint.avatar} alt="" />
    </div>
  )
}

export default Comment;