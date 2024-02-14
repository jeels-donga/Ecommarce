import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import '../Style/CartlistPage.css'
import { Button, Col, Container, Row } from 'react-bootstrap';
import CartCount from '../Component/CartCount';

function CartlistPage() {
    const [data, setData] = useState([]);
    const [dataFromChild, setDataFromChild] = useState(0);
    const [NewPrice, setNewPrice] = useState(0);
    const [ButtonId, setButtonId] = useState(0);
    useEffect(() => {
        const DataAdd = localStorage.getItem('Cart');
        if (DataAdd) {
            setData(JSON.parse(DataAdd));
        }

    }, []);

    const DataDelete = (i) => {
        let prearr = [...data];
        prearr.splice(i, 1)
        setData(prearr)
        localStorage.setItem('Cart', JSON.stringify(prearr));
    }
    const handleDataFromChild = (count, id) => {
        setButtonId(id);
        setDataFromChild(count);
        setNewPrice(count * data[id].price);
    };
    return (
        <div>
            <Header />
            <div className='cart-main-div'>
                {
                    data.map((e, i) => {
                        return (
                            <div>
                                <div className='container'>
                                    <div className='div1'>
                                        <img src={e.images[1]} alt="" className='img1' />
                                    </div>
                                    <div className='div1'>
                                        <h3 className='text-center'>{e.title}</h3>
                                    </div>
                                    <div className='div1'>
                                        <p className='text-center'>price :-{e.price}</p>
                                    </div>
                                    <div className='div1'>
                                        <div>
                                            <div className='div'>
                                                <span className='text-center'>total-items</span>
                                            </div>
                                            <div >
                                                <CartCount sendDataToParent={handleDataFromChild} id={i} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='div1'>
                                        <div>
                                            <div className='div'>
                                                <span className='text-center'>total price</span>
                                            </div>
                                            <div className='div'>
                                                <span className='text-center'>{ButtonId === i && NewPrice !== 0 ? NewPrice : e.price}</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div>
                                        <button className='btn1'>Submit</button>
                                    </div>
                                    <div>
                                        <Button onClick={() => DataDelete(i)} className='btn1'>Delete</Button>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
            {/* <Container>
                <Row>
                    <Col >
                        {data.map((e, i) => {
                            return (
                                <div className='border mt-3' key={i}>
                                    <Row className='p-2' >
                                        <Col className='d-flex justify-content-center align-items-center align-self-center '>
                                            <img src={e.images[1]} alt="" className='img1' />
                                        </Col>
                                        <Col className='d-flex justify-content-center align-items-center align-self-center '>
                                            <h6 className='text-center'>{e.title}</h6>
                                        </Col>
                                        <Col className='d-flex justify-content-center align-items-center align-self-center '>
                                            <p className='text-center'>price :-{e.price}</p>
                                        </Col>
                                        <Col className='d-flex justify-content-center align-items-center align-self-center '>
                                            <p className='text-center'>total-items</p>
                                            <CartCount sendDataToParent={handleDataFromChild} id={i} />
                                        </Col>
                                        <Col className='d-flex justify-content-center align-items-center align-self-center '>
                                            <p className='text-center'>total price</p>
                                            <p className='text-center'>{ButtonId === i && NewPrice !== 0 ? NewPrice : e.price}</p>
                                        </Col>
                                        <Col className='d-flex justify-content-center align-items-center align-self-center '>
                                            {/* <Button>Submit</Button> */}
            {/* </Col> */}
            {/* <Col className='d-flex justify-content-center align-items-center align-self-center '> */}
            {/* <Button onClick={() => DataDelete(i)}>Delete</Button> */}
            {/* </Col> */}
            {/* </Row > */}
            {/* </div > */}
            {/* ) */}
            {/* })} */}
            {/* </Col > */}
            {/* </Row > */}
            {/* </Container > * /} */}

        </div >
    )
}

export default CartlistPage
