import React from 'react'
import { Button } from 'react-bootstrap'
function Pagination(props) {

    return (
        <div className='m-2'>
            <Button onClick={() => props.PreviousPage(props.Page)} disabled={props.Page === 1}>{"<-"}</Button>
            {props.Page}
            <Button onClick={() => props.NextPage(props.Page)} disabled={props.Page === ""}>{"->"}</Button>
        </div>
    )
}

export default Pagination
