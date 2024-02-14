import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import '../Style/CartCount.css'

function CartCount(props) {
    const [count, setCount] = useState(1)
    const sendData = (count, i) => {
        setCount(count)
        props.sendDataToParent(count, i);
    };


    return (
        <div className='count' key={props.id}>
            <button className='m' onClick={() => sendData(count - 1, props.id)} disabled={count === 1}>-</button>
            <p className='m1'>{count}</p>
            <button className='m' onClick={() => sendData(count + 1, props.id)}>+</button>
        </div >
    )
}

export default CartCount
