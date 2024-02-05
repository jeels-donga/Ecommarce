import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

function Product() {
    const [product, setProduct] = useState([]);
    const [offset, setOffset] = useState(0)
    const [totalData, setTotalData] = useState(12);
    const [refresh, setRefresh] = useState(false);
    const { page } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${(page || offset) || 0}&limit=${totalData}`);
                setProduct(response.data);
                setRefresh(product);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [refresh, offset || page]);

    const ChangeNextPage = () => {
        setOffset(offset + totalData)
    }
    const ChangePreviousPage = () => {
        setOffset(offset - totalData)
    }
    const ChangePage = (e) => {
        window.history.pushState(null, null, `${e}`);
    }

    const handleChange = (e) => {
        setTotalData(e)
        setRefresh((prevRefresh) => !prevRefresh);
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
                <Button onClick={() => ChangePreviousPage()} onChange={ChangePage(offset)} disabled={(page || offset) === 0}>Previouspage</Button>
                {page || offset}
                <Button onClick={() => ChangeNextPage()} onChange={ChangePage(offset)}>nextpage</Button>
            </Container >
        </>
    )
}

export default Product
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Button, Col, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// function Product() {
//     const [product, setProduct] = useState([]);
//     const [offset, setOffset] = useState(0)
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalData, setTotalData] = useState(12);
//     const [refresh, setRefresh] = useState(false);
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${totalData}`);
//                 setProduct(response.data);
//                 setRefresh(product);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchData();
//     }, [refresh, offset]);
//     // console.log(start);

//     const ChangeNextPage = (newpage) => {
//         setCurrentPage(newpage)
//         setOffset(offset + totalData)
//         setRefresh((prevRefresh) => !prevRefresh);
//     }
//     const ChangePreviousPage = (newpage) => {
//         setCurrentPage(newpage)
//         setOffset(offset - totalData)
//         setRefresh((prevRefresh) => !prevRefresh);
//     }
//     const handleChange = (e) => {
//         setTotalData(e)
//         setRefresh((prevRefresh) => !prevRefresh);
//     }
//     return (
//         <> <Navbar expand="lg" className="bg-body-tertiary">
//             <Container>
//                 <Navbar.Brand href="/">LOGO</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
//                         <Nav.Link href="#link">Link</Nav.Link>
//                         <NavDropdown title="Page Items" id="basic-nav-dropdown">
//                             <NavDropdown.Item onClick={() => handleChange(8)}>8</NavDropdown.Item>
//                             <NavDropdown.Item onClick={() => handleChange(12)}>12</NavDropdown.Item>
//                             <NavDropdown.Item onClick={() => handleChange(18)} >18</NavDropdown.Item>
//                             <NavDropdown.Item onClick={() => handleChange(24)}>24</NavDropdown.Item>
//                         </NavDropdown>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar >
//             <Container>
//                 <h1>Products</h1>
//                 <Row>
//                     {
//                         product.map((e, i) => {
//                             return (
//                                 <Col md={3} key={i}>
//                                     <div>
//                                         <img src={e.category.image} alt="" className='w-100' />
//                                         <h6>{e.title}</h6>
//                                         <p>{e.price}</p>
//                                         <p>{e.category.name}</p>
//                                     </div>
//                                 </Col>
//                             )
//                         })}
//                 </Row>
//                 <Button onClick={() => ChangePreviousPage(currentPage - 1)} disabled={currentPage === 1}>Previouspage</Button>
//                 {currentPage}
//                 {/* <Button onClick={() => setOffset(offset + 12)}>nextpage</Button> */}
//                 <Button onClick={() => ChangeNextPage(currentPage + 1)}>nextpage</Button>
//             </Container>
//         </>
//     )
// }

// export default Product
