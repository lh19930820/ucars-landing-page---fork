import React from 'react';
import Contact from './contact/Contact';
import './Header.css';
import Navbar from './navbar/Navbar';

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <Contact />
                <Navbar />
            </div>
        </header>
    )
}

export default Header