import React from 'react'
import './Navbar.css';
import logoPC from 'assets/images/logo/ucars_logo_main.svg';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <a href="#" className='logo'><img src={logoPC} alt="logo" /></a>
            <ul className='navbar-list'>
                <li className='navbar__item'><a href="#" className='navbar__link'>New Cars</a></li>
                <li className='navbar__item'><a href="#" className='navbar__link'>Used Cars</a></li>
                <li className='navbar__item'><a href="#" className='navbar__link'>Reviews</a></li>
                <li className='navbar__item'><a href="#" className='navbar__link'>News</a></li>
                {/* <li className='navbar__item'><a href="#" className='navbar__link btn--primary'>Login</a></li> */}
            </ul>
            <button className='navbar__btn btn--primary u-border-radius-md'>Login</button>
        </nav>
    )
}

export default Navbar