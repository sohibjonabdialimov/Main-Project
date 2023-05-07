import React from 'react'
import { Navigate } from 'react-router-dom';
import { Avatar, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const { Meta } = Card;
const Cart = (props) => {
    const navigate = useNavigate()
    const { img ,name, autorId} = props.cart;
    let kursId = props.cart.kursId
    console.log(kursId)
    return (
        <div onClick={() => {
            navigate("/kurs/" + kursId)
        }}>

            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src={img}
                    />
                }

            >
                <Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                    title={name}
                    description={"jk"}
                />
            </Card>

        </div>
    )
}

export default Cart