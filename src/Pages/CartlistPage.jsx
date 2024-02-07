import React, { useContext, useEffect, useState } from 'react'
import Header from '../Component/Header'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Pages/CartlistPage.css'

function CartlistPage() {
    // how to cart deatils in cartlist
    // how to see cartlist from header
    // how to set every cart in Array
    const { product } = useParams();
    const [productData, setProductData] = useState([]);
    const img1 = 1;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${product}`);
                setProductData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [product]);
    console.log(product);
    console.log(productData);
    return (
        <div>
            <Header />
            <Container>
                <Row>

                    <Col className='mt-5 border'>
                        <div className='d-flex justify-content-evenly'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <img src={productData.images} alt="" className='img1' />
                            </div>
                            <div className='justify-content-center align-items-center mt-3'>
                                <h5 className='text-center'>{productData.title}</h5>
                                <p className='text-center'>price :-{productData.price}</p>
                            </div>
                            <div className='justify-content-center align-items-center mt-3'>
                                <p className='text-center'>total Itmes</p>
                                <p className='text-center'>1</p>
                            </div>
                            <div className='justify-content-center align-items-center mt-3'>
                                <p className='text-center'>total price</p>
                                <p className='text-center'>73</p>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <button>Submit</button>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <button>Delete</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div >
    )
}

export default CartlistPage
