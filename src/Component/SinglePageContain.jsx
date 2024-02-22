import React, { useState } from 'react'
import { Button, Col } from 'react-bootstrap'
import '../Style/SinglePageContain.css'

function SinglePageContain(props) {
    const [showSign, setShowSign] = useState(false);
    const SetData = (data) => {
        // console.log(data);
        setShowSign(!showSign);
        props.ParentData(data);
    }
    return (
        <Col>
            <div>
                <h1 className='text-sm-start text-center'>{props.data.title}</h1>
                <p className='text-sm-start text-center'> <b>Price:-</b> {props.data.price}</p>
                <p className='text-sm-start text-center'><b>Description</b> {props.data.description}</p>
                <p className='text-sm-start text-center'><b>Rating</b> {props.data.rating}</p>
                <p className='text-sm-start text-center'><b>Brand</b> {props.data.brand}</p>
                <p className='text-sm-start text-center'><b>Category</b> {props.data.category}</p>
                <div className='container1'>
                    <Button onClick={() => SetData(props.data)} >Add to Cart</Button>
                    <div className={showSign ? "sign animate" : "sign"}>&#10004;</div>
                </div>
            </div>

        </Col >
    )
}

export default SinglePageContain
