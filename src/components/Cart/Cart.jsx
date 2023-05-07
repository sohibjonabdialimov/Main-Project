import React from 'react'
import { Navigate } from 'react-router-dom';
import { Avatar, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const { Meta } = Card;
const Cart = (props) => {
    const navigate = useNavigate()
    let kursId=props.kursId
    console.log(kursId)
    return (
        <div onClick={()=>{
            navigate("/kurs/"+kursId)
        }}>
            {/* <Link to="/kurs/"> */}
                <Card
                    style={{ width: 300 }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }

                >
                    <Meta
                        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
                {/* </Link> */}
        </div>
    )
}

export default Cart