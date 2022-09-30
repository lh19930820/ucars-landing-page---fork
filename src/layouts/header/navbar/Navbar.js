import React from 'react'
import './Navbar.scss';
import logoPC from 'assets/images/logo/ucars_logo_main.svg';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className='navbar__nav'>
                    <a href="#" className='logo pc'><img src={logoPC} alt="logo" /></a>
                    {/* <a href="#" className='logo sp'><img src={logoPC} alt="logo" /></a> */}
                    <ul className='navbar-list'>
                        <li className='navbar__item'><a href="#" className='navbar__link'>New Cars</a></li>
                        <li className='navbar__item'><a href="#" className='navbar__link'>Used Cars</a></li>
                        <li className='navbar__item'><a href="#" className='navbar__link'>Reviews</a></li>
                        <li className='navbar__item'><a href="#" className='navbar__link'>News</a></li>
                        {/* <li className='navbar__item'><a href="#" className='navbar__link btn--primary'>Login</a></li> */}
                    </ul>
                    <button className='navbar__btn btn--primary u-border-radius-md'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar