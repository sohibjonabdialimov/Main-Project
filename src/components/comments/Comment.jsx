import React from 'react'
import "./style.css";
function Comment(props) {
  console.log(props?.commint?.text);
  return (
    <div className='commit__div'>
      efwed
      {/* {
        props?.commint?.text && <p>{props?.commint?.text}</p>
      } */}
        <p>ok</p>
        {/* <span>{props.commint.username}</span>
        <img src={props.commint.avatar} alt="" /> */}
    </div>
  )
}

export default Comment;