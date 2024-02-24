import React, { useEffect, useState } from 'react'
import '../Style/CartlistPage.css'
import { Col, Container, Row } from 'react-bootstrap';
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
        console.log(dataFromChild);
    };
    return (
        <div>
            {/* <Header /> */}
            <Container>
                {data.map((e, i) => {
                    return (
                        <div key={i}>
                            <div className='border mt-5'>
                                <Row>
                                    <Col md={2} xs={12} className='div1'>
                                        <img src={e.images[1]} alt="" className='img1' />
                                    </Col>
                                    <Col md={2} xs={12} className='div1'>
                                        <h3 className='text-center'>{e.title}</h3>
                                    </Col>
                                    <Col md={2} xs={12} className='div1'>
                                        <p className='text-center'>price :-{e.price}</p>
                                    </Col>
                                    <Col md={2} xs={12} className='div1'>
                                        <div className='div1'>
                                            <div className='counter'>
                                                <div className='div'>
                                                    <span className='text-center'>total-items</span>
                                                </div>
                                                <div >
                                                    <CartCount sendDataToParent={handleDataFromChild} id={i} />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={2} xs={12} className='div1'>
                                        <div className='div1'>
                                            <div className='counter'>
                                                <div className='div'>
                                                    <span className='text-center'>total price</span>
                                                </div>
                                                <div className='div'>
                                                    <span className='text-center'>{ButtonId === i && NewPrice !== 0 ? NewPrice : e.price}</span>
                                                </div>
                                            </div>

                                        </div>
                                    </Col>
                                    <Col md={2} xs={12}>
                                        <div className='div1'>
                                            <button onClick={() => DataDelete(i)} className='btn1'>Delete</button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    )
                })}
            </Container >
        </div >
    )
}

export default CartlistPage
