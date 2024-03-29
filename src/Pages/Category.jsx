import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Pagination from '../Component/Pagination';
import Categorys from '../Component/Categorys';

function Category() {
    const [product, setProduct] = useState([]);
    const [limit, setLimit] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    let { categorys } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products/category/${categorys}`);
                setProduct(response.data.products);
                console.log(response.data.products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        const storedData = localStorage.getItem('limit');
        if (storedData) {
            setLimit(JSON.parse(storedData));
        }

        fetchData();
    }, [categorys, currentPage, limit]);
    const ChangeNextPage = (page) => {
        window.history.pushState(null, null, `${page + 1} `);
        setCurrentPage(page + 1);
    }
    const ChangePreviousPage = (page) => {
        window.history.pushState(null, null, `${page - 1} `);
        setCurrentPage(page - 1);
    }
    const receiveDataFromChild = (e) => {
        localStorage.setItem('limit', JSON.stringify(e.target.value));
        window.history.pushState(null, null, `${1} `);
        setLimit(e.target.value)
        setCurrentPage(1);
    };
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={4} md={5} sm={6} xs={12} className=' order-md-0 order-3 d-flex justify-content-md-start justify-content-center'>
                        <Pagination NextPage={() => ChangeNextPage(currentPage)} PreviousPage={() => ChangePreviousPage(currentPage)} Page={currentPage} />
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12} className=' order-md-1 order-0'>
                        <h1 className='text-center'>Products</h1>
                    </Col>
                    <Col lg={4} md={3} sm={6} xs={12} className=' order-md-2 order-1'>
                        <div className='d-flex justify-content-md-end justify-content-center align-items-center mt-3'>
                            <select id="cars" className='select' onChange={receiveDataFromChild}>
                                <option value="12" >12</option>
                                <option value="8">8</option>
                                <option value="18" >18</option>
                                <option value="24" >24</option>
                            </select>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Categorys />
            <Container>
                <Row>
                    {product.map((e, i) => {
                        return (
                            <Col lg={3} md={4} sm={6} xs={12} key={i}>
                                <div className='d-flex justify-content-center'>
                                    <Card style={{ width: '18rem' }} className='box' >
                                        <Card.Img variant="top" src={e.images[0]} className='img' />
                                        <Card.Body >
                                            <Card.Title className='text-center title'>{e.title}</Card.Title>
                                            <Card.Text className='text-center'>Price:-{e.price}</Card.Text>
                                            <div className='d-flex justify-content-center'>
                                                <Button className='productlist-btn'><Link to={`/Product/${e.id} `} className='link1'>More</Link></Button>
                                                {/* <Button></Button> */}
                                            </div>

                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
            <Container>
                <div className='d-flex justify-content-md-start justify-content-center' xs={12}>
                    <Pagination NextPage={() => ChangeNextPage(currentPage)} PreviousPage={() => ChangePreviousPage(currentPage)} Page={currentPage} />
                </div>
            </Container>

        </div >
    )
}

export default Category
