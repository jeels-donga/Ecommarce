import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
function Home() {
    const [product, setProduct] = useState([]);
    const [offset, setOffset] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const [totalData, setTotalData] = useState(12);
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${totalData}`);
                setProduct(response.data);
                setRefresh(product);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [refresh, offset]);

    const ChangeNextPage = (newpage) => {
        setCurrentPage(newpage)
        setOffset(offset + 12)
        setRefresh((prevRefresh) => !prevRefresh);
    }
    const ChangePreviousPage = (newpage) => {
        setCurrentPage(newpage)
        setOffset(offset - 12)
        setRefresh((prevRefresh) => !prevRefresh);
    }
    return (
        <>
            <Container>
                <h1>Products</h1>
                <Row>
                    {
                        product.map((e, i) => {
                            return (
                                <Col md={3} key={i}>
                                    <div>
                                        <img src={e.category.image} alt="" className='w-100' />
                                        <h6>{e.title}</h6>
                                        <p>{e.price}</p>
                                        <p>{e.category.name}</p>
                                    </div>
                                </Col>
                            )
                        })}
                </Row>
                <Button onClick={() => ChangePreviousPage(currentPage - 1)} disabled={currentPage === 1}>Previouspage</Button>
                {currentPage}
                {/* <Button onClick={() => setOffset(offset + 12)}>nextpage</Button> */}
                <Button onClick={() => ChangeNextPage(currentPage + 1)}>nextpage</Button>
            </Container>
        </>
    )
}

export default Home
