import React, { useContext, useEffect, useState } from 'react'
import Header from '../Component/Header'
import Context from '../Component/Context';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../Pages/Cart.css'
import { Link, } from 'react-router-dom';
function Cart() {

    const { data } = useContext(Context);
    // how to set data for the localStorage to cart in everyrefersh
    // or
    // how to store permenet in context data
    return (
        <div>
            <Header />


            <Container>
                <Row>
                    <Col>
                        <div className='d-flex'>
                            <div className='me-3 mt-3'>
                                {data.images.map((e, i) => {
                                    return (
                                        <div key={i}>
                                            <img src={e} alt="" className='products-img1 m-1' />
                                        </div>
                                    )
                                })}
                            </div>
                            <img src={data.images[1]} alt="" className='products-img m-3' />
                        </div>
                    </Col>
                    <Col>
                        <h1>{data.title}</h1>
                        <p> <b>price:-</b> {data.price}</p>
                        <p><b>description</b> {data.description}</p>

                        <div>
                            <Button className='m-1' >-</Button>
                            {/* {count} */}
                            1
                            <Button className='m-1'>+</Button>
                        </div>
                        <div>
                            {/* how to store cart page details to cartlist component */}
                            <Button ><Link to={`/Cart/CartList/${data.id}`} className='Link'>Add to Cart</Link></Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cart
