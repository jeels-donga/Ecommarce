import React from 'react'
import '../Style/Pagination.css'
function Pagination(props) {

    return (
        <div className='m-2'>
            <button onClick={() => props.PreviousPage(props.Page)} disabled={props.Page === 1} className='btn1 m-1'>{"<-"}</button>
            {props.Page}
            <button onClick={() => props.NextPage(props.Page)} disabled={props.Page === ""} className='btn1 m-1'>{"->"}</button>
        </div>
    )
}

export default Pagination
