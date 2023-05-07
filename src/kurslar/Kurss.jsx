import React from 'react'
import Comminets from '../sitebarRoute/Comminets'
import { useNavigate, useParams } from 'react-router-dom';

function Kurss() {
  const { kursId } = useParams();

  return (
    <div style={{ display: "flex" }}>
      <div className='fife'>
        <div>{kursId}</div>
      </div>
      <Comminets />
    </div>

  )
}

export default Kurss