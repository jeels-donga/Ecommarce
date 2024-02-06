import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

function Product1() {
    const [product, setProduct] = useState([]);
    const [limit, setLimit] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    let { page } = useParams();

    if (!isNaN(page)) {
        page = Number(page);
    } else {
        page = 1;
    }

    if (page !== 1 && currentPage !== page) {
        setCurrentPage(page)
    }

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

    }, [currentPage]);

    const ChangeNextPage = (page) => {
        window.history.pushState(null, null, `${page + 1}`);
        setCurrentPage(page + 1);
    }
    const ChangePreviousPage = (page) => {
        window.history.pushState(null, null, `${page - 1}`);
        setCurrentPage(page - 1);

    }


    const handleChange = (e) => {
        setLimit(e)
    }
    return (
        <> <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Page Items" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => handleChange(8)}>8</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleChange(12)}>12</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleChange(18)} >18</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleChange(24)}>24</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
            <Container>
                <h1>Products</h1>
                <Button onClick={() => ChangePreviousPage(currentPage)} disabled={currentPage === 1}>Previouspage</Button>
                {currentPage}
                <Button onClick={() => ChangeNextPage(currentPage)} disabled={currentPage === ""}>nextpage</Button>
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
            </Container >
        </>
    )
}

export default Product1