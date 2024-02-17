import React from 'react'
import '../Style/Pagination.css'
function Pagination(props) {

    return (
        <div className='m-2'>
            <button onClick={() => props.PreviousPage(props.Page)} disabled={props.Page === 1} className='pagination-btn m-1'>Previous</button>
            {props.Page}
            <button onClick={() => props.NextPage(props.Page)} disabled={props.Page === ""} className='pagination-btn1 m-1'>Next</button>
        </div>
    )
}

export default Pagination
