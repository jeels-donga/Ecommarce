import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="">LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Page Items" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to={"/pageitems/8"} >8</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/pageitems/12"} >12</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/pageitems/18"} >18</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/pageitems/24"} >24</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container >
            </Navbar >
        </>
    )
}

export default Header
