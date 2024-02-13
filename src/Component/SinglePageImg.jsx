import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import '../Style/SinglePageImg.css'
import SinglePic from './SinglePic';

function SinglePageImg(props) {
    const SetChildData = (id) => {
        props.setSubCurrentImg(id);
    }
    return (
        <Col>
            <div className='d-flex'>
                <div className='me-3 mt-3'>
                    {props.data.images.map((e, i) => {
                        return (
                            <div key={i}>
                                <SinglePic images={e} id={i} SetParentData={SetChildData} />
                            </div>
                        )
                    })}
                </div>
                < img src={props.data.images[props.subCurrentImg]} alt="" className='products-img m-3' />
            </div>
        </Col>
    )
}

export default SinglePageImg
