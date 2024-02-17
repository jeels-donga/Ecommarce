import React, { useState } from 'react'
import '../Style/Header.css'
import { Link } from 'react-router-dom'
function Header() {
    const [search, SetSerach] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='header'>
                <div className='logo'>
                    <h1> <Link to={"/"} className='a1'>LOGO</Link></h1>
                </div>
                <div className={`subheader ${isOpen ? 'active' : ''}`}>
                    <div className='menu'>
                        <ul><li><Link to={"/"} className='a1'>Home</Link></li></ul>
                    </div>
                    <div className='search'>
                        <input type="text" value={search} onChange={(e) => SetSerach(e.target.value)}
                            placeholder="Search for a product" className='input' />
                        <button className='btn1'><Link to={`/Search/${search}`} className='a1'>submit</Link></button>
                        <div className='cart'>
                            <Link to={'/SingleProduct/CartList'} className='a1'> <i className="fa fa-shopping-cart cart-icon" ></i> </Link>
                        </div>
                    </div>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <div className='Menuicon'>
                        <div className="menu-line"></div>
                        <div className="menu-line"></div>
                        <div className="menu-line"></div>
                    </div>

                </div>
            </div >
            {/* <div className='Header'>
                <div>
                    <h1> <Link to={"/"} className='a1'>LOGO</Link></h1>
                </div>
                <div className='menu-section'>
                    <ul><li><Link to={"/"} className='a1'>Home</Link></li></ul>
                </div>
                <div className='search-section'>
                  
                </div>
            </div>
            <div className='Header-rs'>
                <div className='menu1'>
                    <h1> <Link to={"/"} className='a1'>LOGO</Link></h1>
                </div>
                <div className='menu'>
                    <button></button>
                </div>
            </div>
            <div className=' Header-rs menu'>
                <div>
                    <div className='menu'>
                        <li><Link to={"/"} className='a1'>Home</Link></li>
                    </div>
                    <div className='menu'>
                        <input type="text" value={search} onChange={(e) => SetSerach(e.target.value)}
                            placeholder="Search for a product" className='input' />
                        <button className='btn1'><Link to={`/Search/${search}`} className='a1'>submit</Link></button>
                    </div>
                    <div className='menu'>
                        <Link to={'/SingleProduct/CartList'} className='a1'> <i className="fa fa-shopping-cart cart-icon" ></i> </Link>
                    </div>
                </div>

            </div> */}
        </>
    )
}

export default Header
