import React, { useState } from 'react'
import '../Style/Header.css'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap';
function Header() {
    const [search, SetSerach] = useState('');

    return (
        <>
            <Navbar expand="lg" >
                <Container>
                    <Navbar.Brand href="/">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ms-auto' >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                        <Nav>
                            <div></div>
                            <div className='d-flex justify-content-center'>
                                <form className="d-flex form1" role="search">
                                    <input className="form-control me-2" type="search" value={search} onChange={(e) => SetSerach(e.target.value)} placeholder="Search" aria-label="Search" />
                                    <button className="search" type="submit"> <Link to={`/Search/${search}`} className='a1'>Search</Link></button>
                                </form>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <div className='cart mt-2'>
                                    <Link to={'/SingleProduct/CartList'} className='a1'> <i className="fa fa-shopping-cart cart-icon" ></i> </Link>
                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
