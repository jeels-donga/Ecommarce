import React, { useEffect, useState } from 'react'

function SinglePic(props, sendDataToParent) {
    const [clicked, setClicked] = useState(false);


    const sendData = (id) => {
        props.sendDataToParent(id);
        setClicked(true);
    };

    return (
        <>
            <div key={props.id}>
                <img src={props.images} alt="" onClick={() => { sendData(props.id) }} className={`products-img1 m-1 ${clicked ? 'images' : ''}`} />
            </div >
        </>

    )
}

export default SinglePic
