import React from 'react'
import obuna1 from "../imgs/obuna1.png";
import obuna2 from "../imgs/obuna2.png";
import obuna3 from "../imgs/obuna3.png";
import obuna4 from "../imgs/obuna4.png";
import obuna5 from "../imgs/obuna5.png";
import obuna6 from "../imgs/obuna6.png";
import obuna7 from "../imgs/obuna7.png";
import darslar1 from "../imgs/darslar1.png";
import darslar2 from "../imgs/darslar2.png";
const Darslar = () => {
  let me = [
    {
      type: 0,
      name: "name",
      surname: "surname",
      username: "username",
      email: "username@email.com",
      subscibe: [
        {
          userId: 12,
          name: "Guljahon Shermatova",
          what: "Ingliz tili",
          avatar: obuna1,
        },
        {
          userId: 13,
          name: "Mavjuda Olimova",
          what: "Matematika",
          avatar: obuna2,
        },
        {
          userId: 14,
          name: "Sevara Temirova",
          what: "O'zbek tili",
          avatar: obuna3,
        },
        {
          userId: 15,
          name: "Mahmud Soliyev",
          what: "Fizika",
          avatar: obuna4,
        },
        {
          userId: 16,
          name: "Everest English",
          what: "Ingliz tili",
          avatar: obuna5,
        },
        {
          userId: 17,
          name: "Mavjuda Olimova",
          what: "Matematika",
          avatar: obuna6,
        },
        {
          userId: 18,
          name: "Davron Turdiyev",
          what: "Mnemonika",
          avatar: obuna7,
        },
      ],
      darslar: [
        {
          img: darslar1,
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          img: darslar2,
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          img: darslar1,
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          img: darslar2,
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          img: darslar1,
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          img: darslar2,
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          img: darslar1,
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          img: darslar2,
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          img: darslar1,
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          img: darslar2,
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          img: darslar1,
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          img: darslar2,
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
      ]
    },
  ];
  return (
    <div className="carts-wrapper">
      {me[0].darslar.map((item) => (
        <div className="darslar-cart">
          <img src={item.img} alt="" />
          <div>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Darslar