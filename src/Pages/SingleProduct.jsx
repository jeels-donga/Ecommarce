import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../Component/Loading';
import '../Style/SinglePageImg.css'
import axios from 'axios';
import SinglePageContain from '../Component/SinglePageContain';
import SinglePageImg from '../Component/SinglePageImg';
import '../Style/SingleProduct.css'
import { Col, Row } from 'react-bootstrap';
function SingleProduct() {
    const { id } = useParams();
    const [productData, setProductData] = useState(null);
    const [list, setList] = useState([]);
    const [subCurrentImg, setSubCurrentImg] = useState(0)

    useEffect(() => {
        axios.get(` https://dummyjson.com/products/${id}`)
            .then(response => {
                setProductData(response.data)
            })
            .catch(error => console.error('Error fetching data', error))
        const storedObjects = localStorage.getItem('Cart');
        if (storedObjects) {
            setList(JSON.parse(storedObjects));
        }
    }, [id])
    const handleChildData = (data) => {
        const TotalData = [...list, data];
        setList(TotalData);
        localStorage.setItem('Cart', JSON.stringify(TotalData));
    };
    return (
        <div>
            <div className='container mt-3'>
                {productData == null ? <Loading /> :
                    <Row>
                        <Col md={6} xs={12}>
                            <SinglePageImg data={productData} subCurrentImg={subCurrentImg} setSubCurrentImg={setSubCurrentImg} />
                        </Col>
                        <Col md={6} xs={12}>
                            <SinglePageContain data={productData} ParentData={handleChildData} />
                        </Col>
                    </Row>
                }
            </div>
        </div >
    )
}

export default SingleProduct
