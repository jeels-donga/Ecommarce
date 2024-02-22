import React, { useState } from 'react'
import '../Style/Header.css'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap';
function Header() {
    const [search, SetSerach] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <h4><Link to={"/"} className='a1'>LOGO</Link></h4>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Row className='w-100'>
                            <Col md={6} xs={12}>
                                <div className='d-flex justify-content-center'>
                                    <ul className="navbar-nav  mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Link</a>
                                        </li>
                                    </ul>
                                </div>

                            </Col>
                            <Col md={6} xs={12}>
                                <div className='d-md-flex d-block justify-content-evenly'>
                                    <div className='d-flex justify-content-center'>
                                        <form className="d-flex form1" role="search">
                                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                            <button className="btn btn-outline-primary" type="submit">Search</button>
                                        </form>
                                    </div>

                                    <div className='d-flex justify-content-center'>
                                        <div className='cart mt-2'>
                                            <Link to={'/SingleProduct/CartList'} className='a1'> <i className="fa fa-shopping-cart cart-icon" ></i> </Link>
                                        </div>
                                    </div>

                                </div>

                            </Col>
                        </Row>


                    </div>
                </div>
            </nav >
            {/* <div className='header'>
                <div className='logo'>
                    <h1> <Link to={"/"} className='a1'>LOGO</Link></h1>
                </div>
                <div className={`subheader ${isOpen ? 'active' : ''}`}>
                    <div className='menu'>
                        <ul><li><Link to={"/"} className='a1 a2'>Home</Link></li></ul>
                    </div>
                    <div className='search'>
                        <input type="text" value={search} onChange={(e) => SetSerach(e.target.value)}
                            placeholder="Search for a product" className='input' />
                        <button className='btn1'><Link to={`/Search/${search}`} className='a1'>submit</Link></button>
                        <div className='cart'>
                            <Link to={'/SingleProduct/CartList'} className='a1'> <i className="fa fa-shopping-cart cart-icon" ></i> </Link>
                        </div>
                    </div>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <div className='Menuicon'>
                        <div className="menu-line"></div>
                        <div className="menu-line"></div>
                        <div className="menu-line"></div>
                    </div>

                </div>
            </div > */}
        </>
    )
}

export default Header
