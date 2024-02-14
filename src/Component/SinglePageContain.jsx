import React, { useState } from 'react'
import { Button, Col } from 'react-bootstrap'
import '../Style/SinglePageContain.css'

function SinglePageContain(props) {
    const [showSign, setShowSign] = useState(false);
    const SetData = (data) => {
        console.log(data);
        setShowSign(!showSign);
        props.ParentData(data);
    }
    return (
        <Col>
            <div>
                <h1>{props.data.title}</h1>
                <p> <b>Price:-</b> {props.data.price}</p>
                <p><b>Description</b> {props.data.description}</p>
                <p><b>Rating</b> {props.data.rating}</p>
                <p><b>Brand</b> {props.data.brand}</p>
                <p><b>Category</b> {props.data.category}</p>
                <div className='container1'>
                    <Button onClick={() => SetData(props.data)} className='button'>Add to Cart</Button>
                    <div className={showSign ? "sign animate" : "sign"}>&#10004;</div>
                </div>
            </div>

        </Col>
    )
}

export default SinglePageContain
