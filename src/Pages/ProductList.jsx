import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Pagination from '../Component/Pagination'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Component/Header';
import '../Style/ProductList.css'
// import SingleProduct from './SingleProduct';
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

        const storedData = localStorage.getItem('limit');
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
        localStorage.setItem('limit', JSON.stringify(limit));
        window.history.pushState(null, null, `${1}`);
        setLimit(limit)
        setCurrentPage(1);
    };

    // console.log(data);
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
                                    <div className="card product-div m-2"  >
                                        <img src={e.images} className="card-img-top product-div1" alt="..." />
                                        <div className="card-body row justify-content-evenly">
                                            <h6 className="card-title">{e.title}</h6>
                                            <p className="card-text">Price:-{e.price}</p>
                                            {/* <a className="btn btn-primary" as={Link} to={`/Product/${e.id}`}  >More</a> */}
                                            <Button ><Link to={`/Product/${e.id}`} className='Link'>More</Link></Button>
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
