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
            <h1>{props.data.title}</h1>
            <p> <b>price:-</b> {props.data.price}</p>
            <p><b>description</b> {props.data.description}</p>
            <div className='container1'>
                {/* how to store cart page details to cartlist component */}
                <Button onClick={() => SetData(props.data)}>Add to Cart</Button>
                <div className={showSign ? "sign animate" : "sign"}>&#10004;</div>
            </div>
        </Col>
    )
}

export default SinglePageContain
