import React, { useContext, useEffect, useState } from 'react'
import Header from '../Component/Header'
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../Style/SingleProduct.css'
import { useParams } from 'react-router-dom';
import Loading from '../Component/Loading';
import axios from 'axios';
function Cart() {
    const { id } = useParams();
    const [productData, setProductData] = useState(null);
    const [list, setList] = useState([]);
    const [currentImage, setCurrentImage] = useState(null);
    const [showSign, setShowSign] = useState(false);

    useEffect(() => {

        axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then(response => setProductData(response.data))
            .catch(error => console.error('Error fetching data', error))
        const storedObjects = localStorage.getItem('Cart');
        if (storedObjects) {
            setList(JSON.parse(storedObjects));
        }
    }, [])

    const AddData = (NewData) => {
        setShowSign(!showSign);
        const TotalData = [...list, NewData];
        setList(TotalData);
        localStorage.setItem('Cart', JSON.stringify(TotalData));
    }

    const ChangeImage = (id) => {
        console.log(productData);
        setCurrentImage(productData.images[id])
    }
    // how to set data for the localStorage to cart in everyrefersh
    // or
    // how to store permenet in context data
    // console.log(productData);
    return (
        <div>
            <Header />
            <Container>
                {productData == null ? <Loading /> :
                    <Row>
                        <Col>
                            <div className='d-flex'>
                                <div className='me-3 mt-3'>
                                    {productData.images.map((e, i) => {
                                        return (
                                            <div key={i}>
                                                <img src={e} alt="" onClick={() => { ChangeImage(i) }} className='products-img1 m-1' />
                                            </div>
                                        )
                                    })}
                                </div>
                                {currentImage === null ? <img src={productData.images[1]} alt="" className='products-img m-3' /> : <img src={currentImage} alt="" className='products-img m-3' />}

                            </div>
                        </Col>
                        <Col>
                            <h1>{productData.title}</h1>
                            <p> <b>price:-</b> {productData.price}</p>
                            <p><b>description</b> {productData.description}</p>
                            <div className='container1'>
                                {/* how to store cart page details to cartlist component */}
                                <Button onClick={() => AddData(productData)}>Add to Cart</Button>
                                <div className={showSign ? "sign animate" : "sign"}>&#10004;</div>
                            </div>
                        </Col>
                    </Row>
                }
            </Container>
        </div >
    )
}

export default Cart
