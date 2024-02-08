import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import '../Style/CartlistPage.css'
import { Button, Col, Container, Row } from 'react-bootstrap';

function CartlistPage() {
    // how to cart deatils in cartlist
    // how to see cartlist from header
    // how to set every cart in Array
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const [count, setCount] = useState(1);
    const [index, setIndex] = useState()
    useEffect(() => {

        const DataAdd = localStorage.getItem('Cart');
        if (DataAdd) {
            setData(JSON.parse(DataAdd));
        }
        const DataDelete = localStorage.getItem('delete');
        if (DataDelete) {
            setData(JSON.parse(DataDelete));
        }
    }, []);

    const UpdateData = (id) => {
        setList(data[id])
        setIndex(id)
        const newData = { ...list };
        newData.count = count;
        setList(newData);
        let prearr = [...data];
        prearr.splice(index, 1)
        console.log(list);
        setData(prearr)
    }
    console.log(data);
    const DataDelete = (i) => {
        let prearr = [...data];
        prearr.splice(i, 1)
        setData(prearr)
        localStorage.setItem('delete', JSON.stringify(prearr));
    }


    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col >
                        {data.map((e, i) => {
                            return (
                                <div className='border mt-3' key={i}>
                                    <Row className='p-2' >
                                        <Col className='d-flex justify-content-center align-items-center align-self-center '>
                                            <img src={e.images} alt="" className='img1 ' />
                                        </Col>
                                        <Col className='d-flex justify-content-center align-items-center align-self-center '>
                                            <h6 className='text-center'>{e.title}</h6>
                                        </Col>
                                        <Col className='d-flex justify-content-center align-items-center align-self-center '>
                                            <p className='text-center'>price :-{e.price}</p>
                                        </Col>
                                        <Col className='d-flex justify-content-center align-items-center align-self-center '>
                                            <p className='text-center'>total-items</p>
                                            <div className='d-flex justify-content-center'>
                                                <Button className='m-1' onClick={() => UpdateData(i)}>-</Button>
                                                <p className='text-center m-2'>{count}</p>
                                                <Button className='m-1' onClick={() => UpdateData(i)}>+</Button>
                                            </div>
                                        </Col>
                                        <Col className='d-flex justify-content-center align-items-center align-self-center '>
                                            <p className='text-center'>total price</p>
                                            <p className='text-center'>{e.price}</p>
                                        </Col>
                                        <Col className='d-flex justify-content-center align-items-center align-self-center '>
                                            <Button>Submit</Button>
                                        </Col>
                                        <Col className='d-flex justify-content-center align-items-center align-self-center '>
                                            <Button onClick={() => DataDelete(i)}>Delete</Button>
                                        </Col>
                                    </Row>
                                </div>
                            )
                        })}
                    </Col>
                </Row>
            </Container>

        </div >
    )
}

export default CartlistPage
