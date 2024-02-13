import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Pagination from '../Component/Pagination'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Component/Header';
import '../Style/ProductList.css'
function Product1() {
    const [product, setProduct] = useState([]);
    const [limit, setLimit] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    let { page } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products?limit=${limit}`);
                setProduct(response.data.products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        const storedData = localStorage.getItem('limit');
        if (storedData) {
            setLimit(JSON.parse(storedData));
        }

        fetchData();
    }, [currentPage, limit]);

    useEffect(() => {

        if (!isNaN(page)) {
            page = Number(page);
        } else {
            page = 1;
        }

        if (page !== 1 && currentPage !== page) {
            setCurrentPage(page)
        }

        // const storedData = localStorage.getItem('limit');
        // if (storedData) {
        //     // console.log(storedData);
        //     setLimit(JSON.parse(storedData));
        //     console.log(limit);
        // }
    }, []);

    const ChangeNextPage = (page) => {
        window.history.pushState(null, null, `${page + 1}`);
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
            <Header />
            <Container>
                <Row>

                    <Col><Pagination NextPage={() => ChangeNextPage(currentPage)} PreviousPage={() => ChangePreviousPage(currentPage)} Page={currentPage} /></Col>
                    <Col><h1 className='text-center'>Products</h1></Col>
                    <Col>
                        <div className='d-flex justify-content-end mt-3'>
                            <select id="cars" onChange={receiveDataFromChild}>
                                <option value="12" >12</option>
                                <option value="8">8</option>
                                <option value="18" >18</option>
                                <option value="24" >24</option>
                            </select>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        product.map((e, i) => {
                            return (
                                <Col md={3} key={i}>
                                    <div className="card product-div m-2"  >
                                        <img src={e.images[1]} className="card-img-top product-div1" alt="..." />
                                        <div className="card-body row justify-content-evenly">
                                            <div className='d-flex align-items-end'>
                                                <h6 className="card-title">{e.title}</h6>
                                            </div>
                                            <div className='d-flex align-items-end'>
                                                <p className="card-text">Price:-{e.price}</p>
                                            </div>
                                            <div className='d-flex align-items-end'>
                                                <Button className='productlist-btn'><Link to={`/Product/${e.id} `} className='Link'>More</Link></Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
                <Pagination NextPage={() => ChangeNextPage(currentPage)} PreviousPage={() => ChangePreviousPage(currentPage)} Page={currentPage} />
            </Container >
        </div >
    )
}

export default Product1