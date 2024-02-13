import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Loading from '../Component/Loading';
import axios from 'axios';
import SinglePageContain from '../Component/SinglePageContain';
import SinglePageImg from '../Component/SinglePageImg';
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
    }, [])
    const handleChildData = (data) => {
        const TotalData = [...list, data];
        setList(TotalData);
        localStorage.setItem('Cart', JSON.stringify(TotalData));
    };
    return (
        <div>
            <Header />
            <Container>
                {productData == null ? <Loading /> :
                    <Row>
                        <SinglePageImg data={productData} subCurrentImg={subCurrentImg} setSubCurrentImg={setSubCurrentImg} />
                        <SinglePageContain data={productData} ParentData={handleChildData} />
                    </Row>
                }
            </Container>
        </div >
    )
}

export default SingleProduct
