import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function CartCount(props) {
    const [count, setCount] = useState(1)
    const sendData = (count, i) => {
        setCount(count)
        props.sendDataToParent(count, i);
    };


    return (
        <div className='d-flex justify-content-center' key={props.id}>
            <Button className='m-1' onClick={() => sendData(count - 1, props.id)} disabled={count === 1}>-</Button>
            <p className='text-center m-2'>{count}</p>
            <Button className='m-1' onClick={() => sendData(count + 1, props.id)}>+</Button>
        </div >
    )
}

export default CartCount
