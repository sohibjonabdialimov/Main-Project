import React from 'react'

function Commint(props) {
    console.log(props)
  return (
    <div style={{padding:20}}>
        <p>{props.commint.text}</p>
        <strong>{props.commint.username}</strong>
    </div>
  )
}

export default Commint