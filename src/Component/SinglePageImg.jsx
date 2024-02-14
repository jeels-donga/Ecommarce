import React from 'react'
import '../Style/SinglePageImg.css'
import SinglePic from './SinglePic';

function SinglePageImg(props) {
    const SetChildData = (id) => {
        props.setSubCurrentImg(id);
    }
    console.log(props.data.images);
    return (
        // <Col>
        //     <div className='d-flex'>
        //         <div className='me-3 mt-3'>
        //             {props.data.images.map((e, i) => {
        //                 console.log(props.subCurrentImg);
        //                 console.log(i);
        //                 return (
        //                     <div key={i}>
        //                         <SinglePic images={e} id={i} SetParentData={SetChildData} isBorder={props.subCurrentImg === i ? true : false} />
        //                     </div>
        //                 )
        //             })}
        //         </div>
        //         < img src={props.data.images[props.subCurrentImg]} alt="" className='products-img m-3' />
        //     </div>
        // </Col>
        <div className='image'>
            <div>
                {props.data.images.map((e, i) => {
                    console.log(props.subCurrentImg);
                    console.log(i);
                    return (
                        <div key={i}>
                            <SinglePic images={e} id={i} SetParentData={SetChildData} isBorder={props.subCurrentImg === i ? true : false} />
                        </div>
                    )
                })}
            </div>
            <div>
                < img src={props.data.images[props.subCurrentImg]} alt="" className='products-img m-3' />
            </div>

        </div >
    )
}

export default SinglePageImg
