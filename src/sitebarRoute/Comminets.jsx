import React from 'react'
import Commint from '../components/commint'

const Comminets = (props) => {
    console.log(props)
    const commints = props.commints
    return (
        <div className='Nav'>Comminets
            {
                commints.map((commint, index) => {
                    return (
                        <Commint commint={commint} key={index} />

                    )

                })
            }
        </div>
    )
}

export default Comminets