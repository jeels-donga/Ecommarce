import React, { useState } from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
function Header(props) {
    const sendDataToParent = (limit) => {
        props.sendData(limit);
    };
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to={"/"}>LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Page Items" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => sendDataToParent(8)}>8</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => sendDataToParent(12)}>12</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => sendDataToParent(18)} >18</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => sendDataToParent(24)}>24</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        {/* how to tranfer if from the product1 */}
                        <Link to={'/Cart/CartList/:product?'}> <FaShoppingCart /></Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar >


        </>
    )
}

export default Header
