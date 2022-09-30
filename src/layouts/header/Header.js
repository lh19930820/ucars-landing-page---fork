import React from 'react';
import Contact from './contact/Contact';
import './Header.css';
import Navbar from './navbar/Navbar';

const Header = () => {
    return (
        <header className='header'>
            <Contact />
            <Navbar />
        </header>
    )
}

export default Header