// import { Dropdown } from 'booststrap/dist/js/bootstrap.bundle'
import React from 'react'
import { Col, Row, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../Style/Categorys.css"

function Categorys() {
    return (
        <div className='container-fluid '>
            <Row>
                <Col>
                    <div className='d-flex justify-content-center mt-2'>
                        <Dropdown>
                            <Dropdown.Toggle variant="pagination-btn" className='pagination-btn2' id="dropdown-basic">
                                Digital Gegets
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1"><Link className='a1' to={'/category/smartphones'}>smartphones</Link></Dropdown.Item>
                                <Dropdown.Item href="#/action-2"><Link className='a1' to={'/category/laptops'}>laptops</Link></Dropdown.Item>
                                <Dropdown.Item href="#/action-3"><Link className='a1' to={'/category/lighting'}>lighting</Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Col>
                <Col>
                    <div className='d-flex justify-content-center mt-2'>
                        <Dropdown>
                            <Dropdown.Toggle variant="pagination-btn" className='pagination-btn2' id="dropdown-basic">
                                Mens Wear
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1"><Link className='a1' to={'/category/mens-shirts'}>mens-shirts</Link></Dropdown.Item>
                                <Dropdown.Item href="#/action-2"><Link className='a1' to={'/category/mens-shoes'}>mens-shoes</Link></Dropdown.Item>
                                <Dropdown.Item href="#/action-3"><Link className='a1' to={'/category/mens-watches'}>mens-watches</Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                </Col>
                <Col>
                    <div className='d-flex justify-content-center mt-2' >
                        <Dropdown>
                            <Dropdown.Toggle variant="pagination-btn" className='pagination-btn2' id="dropdown-basic">
                                Women Wear
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1"><Link className='a1' to={'/category/womens-dresses'}>womens-dresses</Link></Dropdown.Item>
                                <Dropdown.Item href="#/action-2"><Link className='a1' to={'/category/womens-shoes'}>womens-shoes</Link></Dropdown.Item>
                                <Dropdown.Item href="#/action-3"><Link className='a1' to={'/category/womens-watches'}>womens-watches</Link></Dropdown.Item>
                                <Dropdown.Item href="#/action-4"><Link className='a1' to={'/category/womens-bags'}>womens-bags</Link></Dropdown.Item>
                                <Dropdown.Item href="#/action-5"><Link className='a1' to={'/category/womens-jewellery'}>womens-jewellery</Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                </Col>
                <Col>

                    <div className='d-flex justify-content-center mt-2'>
                        <Dropdown >
                            <Dropdown.Toggle variant="pagination-btn" className='pagination-btn2' button id="dropdown-basic">
                                furniture
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1"><Link className='a1' to={'/category/furniture'}>furniture</Link></Dropdown.Item>
                                <Dropdown.Item href="#/action-2"><Link className='a1' to={'/category/home-decoration'}>home-decoration</Link></Dropdown.Item>
                                <Dropdown.Item href="#/action-3"><Link className='a1' to={'/category/womens-watches'}>womens-watches</Link></Dropdown.Item>
                                <Dropdown.Item href="#/action-4"><Link className='a1' to={'/category/womens-bags'}>womens-bags</Link></Dropdown.Item>
                                <Dropdown.Item href="#/action-5"><Link className='a1' to={'/category/womens-jewellery'}>womens-jewellery</Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                </Col>
                <Col>
                    <div className='d-flex justify-content-center mt-2'>
                        <button className='pagination-btn'> <Link className='a1' to={'/category/tops'}>tops</Link></button>
                    </div>
                </Col>
                <Col>
                    <div className='d-flex justify-content-center mt-2'>
                        <button className='pagination-btn'><Link className='a1' to={'/category/sunglasses'}>sunglasses</Link></button>
                    </div>
                </Col>
                <Col>
                    <div className='d-flex justify-content-center mt-2'>
                        <button className='pagination-btn'><Link className='a1' to={'/category/automotive'}>automotive</Link></button>
                    </div>
                </Col>
                <Col>
                    <div className='d-flex justify-content-center mt-2'>
                        <button className='pagination-btn'><Link className='a1' to={'/category/motorcycle'}>motorcycle</Link></button>
                    </div>
                </Col>
                <Col>
                    <div className='d-flex justify-content-center mt-2'>
                        <button className='pagination-btn'><Link className='a1' to={'/category/skincare'}>skincare</Link></button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Categorys
