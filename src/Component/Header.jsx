import React, { useState } from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
function Header() {

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
                        </Nav>
                        {/* how to tranfer if from the product1 */}
                        <Link to={'/SingleProduct/CartList'}> <FaShoppingCart /></Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar >


        </>
    )
}

export default Header
