import React from 'react'
import Header from '../Component/Header'
import { Outlet } from 'react-router-dom'

function PageLayOut() {
    return (
        <div>
            <Header />
            <Outlet />
        </div >
    )
}

export default PageLayOut
