import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Pagination from '../Component/Pagination'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Component/Header';
import '../Pages/Product1.css'
function Product1() {
    const [product, setProduct] = useState([]);
    const [limit, setLimit] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const [receivedData, setReceivedData] = useState('');
    let { page } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${currentPage * limit}&limit=${limit}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

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

        const storedData = localStorage.getItem('products');
        if (storedData) {
            setLimit(JSON.parse(storedData));
        }
    }, []);

    const ChangeNextPage = (page) => {
        window.history.pushState(null, null, `${page + 1}`);
        setCurrentPage(page + 1);
    }
    const ChangePreviousPage = (page) => {
        window.history.pushState(null, null, `${page - 1}`);
        setCurrentPage(page - 1);
    }
    const receiveDataFromChild = (limit) => {
        setReceivedData(limit);
        localStorage.setItem('products', JSON.stringify(limit));
        window.history.pushState(null, null, `${1}`);
        setLimit(limit)
        setCurrentPage(1);
    };

    return (
        <div>
            <Header sendData={receiveDataFromChild} />
            <Container>
                <h1 className='text-center'>Products</h1>
                <Pagination NextPage={() => ChangeNextPage(currentPage)} PreviousPage={() => ChangePreviousPage(currentPage)} Page={currentPage} />
                <Row>
                    {
                        product.map((e, i) => {
                            return (
                                <Col md={3} key={i}>
                                    <div className='product-div'>
                                        <img src={e.category.image} alt="" className='w-100 product-div1' />
                                        <h6 className='text-center'>{e.title}</h6>
                                        <p className='text-center'>Price:-{e.price}</p>
                                        <p className='text-center'>Category:-{e.category.name}</p>
                                        <div className='d-flex justify-content-center p-2'>
                                            <Button><Link to={`/Cart/${e.id}`} className='Link'>More</Link></Button>
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
