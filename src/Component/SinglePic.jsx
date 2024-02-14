import React, { useState } from 'react'

function SinglePic(props) {

    const sendData = (id) => {
        props.SetParentData(id);

    };
    // console.log(props.isBorder);
    return (
        <>
            <div key={props.id}>
                <img src={props.images} alt="" onClick={() => { sendData(props.id) }} className={`products-Sub-img m-1 currentimg ${props.isBorder === true ? "current" : 'current1 '}`} />
            </div >
        </>
    )
}

export default SinglePic