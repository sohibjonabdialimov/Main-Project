import React from 'react'
import { useParams } from 'react-router-dom';
function TeachUpdateonekurs() {
    const { Id } = useParams();
    console.log(Id)
    return (
        <div>{Id}
            sws
        </div>
    )
}

export default TeachUpdateonekurs;