import React from 'react'
import '../Style/SinglePageImg.css'
import SinglePic from './SinglePic';
import { Col, Row } from 'react-bootstrap';

function SinglePageImg(props) {
    const SetChildData = (id) => {
        props.setSubCurrentImg(id);
    }
    // console.log(props.data.images);
    return (
        // <div></div>
        // <div className='image'>
        //     <div className='imges1'>
        //         {props.data.images.map((e, i) => {
        //             return (
        //                 <div key={i}>
        //                     <SinglePic images={e} id={i} SetParentData={SetChildData} isBorder={props.subCurrentImg === i ? true : false} />
        //                 </div>
        //             )
        //         })}
        //     </div>
        //     <div className='product-img-box'>
        //         < img src={props.data.images[props.subCurrentImg]} alt="" className='products-img m-3' />
        //     </div>

        // </div >
        <Row>
            <Col sm={2} className='order-sm-0 order-1'>
                <div className='d-sm-block d-flex justify-content-center'>
                    {props.data.images.map((e, i) => {
                        return (
                            <div key={i}>
                                <SinglePic images={e} id={i} SetParentData={SetChildData} isBorder={props.subCurrentImg === i ? true : false} />
                            </div>
                        )
                    })}
                </div>
            </Col>
            <Col className='order-0'>
                < img src={props.data.images[props.subCurrentImg]} alt="" className='products-img m-3 ' />
            </Col>
        </Row>
    )
}

export default SinglePageImg
