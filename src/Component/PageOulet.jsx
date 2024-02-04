import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function PageOulet() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default PageOulet
