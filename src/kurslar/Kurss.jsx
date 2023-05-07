import React from 'react'
import Comminets from '../sitebarRoute/Comminets'
import { useNavigate, useParams } from 'react-router-dom';
import img12 from "../imgs/big-main1.png"
import img13 from "../imgs/big-main2.png"
import img14 from "../imgs/big-main3.png"
import img15 from "../imgs/big-main1.png"
import img16 from "../imgs/big-main2.png"
function Kurss() {
  const { kursId } = useParams();
  let a=[
    {
      kursId:12,
      img:img12,
      name:"supermiya",
      autorId:14
    }
    ,{
      kursId:13,
      img:img13,
      name:"supermiya",
      autorId:14
    },
    {
      kursId:14,
      img:img14,
      name:"supermiya",
      autorId:14
    },
    {
      kursId:15,
      img:img15,
      name:"supermiya",
      autorId:14
    },
    {
      kursId:16,
      img:img16,
      name:"supermiya",
      autorId:14
    }
  ]
  let img;
  let name
  let autorId
  for(let i=0;i<a.length;i++){
    if(a[i].kursId==kursId){
      img=a[i].img
      name=a[i].name
      autorId=a[i].autorId
    }
  }
  return (
    <div style={{ display: "flex" }}>
      <div className='fife'>
        <img src={img} alt="" />
        <p>{name}</p>
      </div>
      <Comminets />
    </div>

  )
}

export default Kurss