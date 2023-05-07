import React from 'react'
import Cart from '../components/Cart/Cart'
import Sitebar from '../layout/Sitebar'
import Navvedio from '../sitebarRoute/Navvedio'
function Allvedios() {
    return (
        <div style={{ display: "flex"}}>
            <div className='fife' style={{ display: "flex", flexWrap: "wrap",justifyContent:"space-around"}}>
                <Cart />
                <Cart />
                <Cart />
                <Cart />
            </div>

            <Navvedio />
        </div>

    )
}

export default Allvedios