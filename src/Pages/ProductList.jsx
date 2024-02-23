import React, { useEffect, useState } from 'react'
import Pagination from '../Component/Pagination'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Component/Header';
import '../Style/ProductList.css'
import { Button, Col, Row } from 'react-bootstrap';
function ProductList() {
    const [product, setProduct] = useState([]);
    const [limit, setLimit] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    let { page } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${(currentPage - 1) * limit}`);
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
    }, []);

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
            <Header />
            {/* <div className='container'>
                <Row>
                    <Col sm={4} xs={12} className='order-md-1 order-3 d-flex justify-content-md-start justify-content-center'>
                        <Pagination NextPage={() => ChangeNextPage(currentPage)} PreviousPage={() => ChangePreviousPage(currentPage)} Page={currentPage} />
                    </Col>
                    <Col sm={4} xs={12} className='order-1'>
                        <h1 className='text-center'>Products</h1>
                    </Col>
                    <Col sm={4} xs={12} className='order-2'>
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
            </div> */}
            {/* <div className='container'>
                <Row>
                    {product.map((e, i) => {
                        return (
                            <Col key={i} md={3} sm={4} >
                                <div className='d-flex justify-content-center'>
                                    <div className="card m-2" style={{ width: '16rem' }}>
                                        <Link to={`/Product/${e.id}`} className='link '>
                                            <div className='card-img-top'>
                                                <img src={e.images[0]} className="card-img-top img2" alt="..." />
                                            </div>
                                        </Link>
                                        <div className="card-body">
                                            <Link to={`/Product/${e.id}`} className='link '>
                                                <h5 className="card-title text-center title">{e.title}</h5>
                                            </Link>
                                            <p className="card-text text-center">Price:-{e.price}</p>

                                            <div className='sec1'>
                                                <Button className='productlist-btn'><Link to={`/Product/${e.id} `} className='link1'>More</Link></Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Col>
                        )
                    })}
                </Row>
            </div> */}
            {/* <div className='container d-flex justify-content-md-start justify-content-center' xs={12}>
                <Pagination NextPage={() => ChangeNextPage(currentPage)} PreviousPage={() => ChangePreviousPage(currentPage)} Page={currentPage} />
            </div> */}
        </div >
    )
}

export default ProductList