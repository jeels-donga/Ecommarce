import React from 'react'
import '../Style/Header.css'
import { Link } from 'react-router-dom'
function Header() {

    return (
        <>
            <div className='Header'>
                <div className='Sub-Header'>
                    <h1 className='logo'> <Link to={"/"} className='a1'>LOGO</Link></h1>
                </div>
                <div className='Sub-Header'>
                    <ul><li><Link to={"/"} className='a1'>Home</Link></li></ul>
                </div>
                <div className='Sub-Header'>
                    <div className='cart'>
                        <Link to={'/SingleProduct/CartList'} className='a1'> <i className="fa fa-shopping-cart cart-icon" ></i> </Link>
                    </div>

                </div>
            </div >


        </>
    )
}

export default Header
