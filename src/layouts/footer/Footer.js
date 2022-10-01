import React from 'react';
import './Footer.scss';
import carBuyerLogoPc from 'assets/images/logo/carbuyer_logo_footer_pc.svg';
import ucarLogo from 'assets/images/logo/ucars_logo_main.svg';
import phoneIcon from 'assets/images/icons/phone.svg';
import envelopeIcon from 'assets/images/icons/envelope.svg';
import markerIcon from 'assets/images/icons/marker.svg';
import instaIcon from 'assets/images/icons/insta.svg';
import fbIcon from 'assets/images/icons/fb.svg';
import airplaneIcon from 'assets/images/icons/airplane.svg';
import inIcon from 'assets/images/icons/in.svg';
import youtubeIcon from 'assets/images/icons/youtube.svg';


const Footer = () => {
    return (
        <footer className='l-footer'>
            <div className="container">
                <div className='top'>
                    <div className='contact'>
                        <img src={carBuyerLogoPc} alt="" />
                        <ul>
                            <li className='contact__item'><img className='contact__icon' src={markerIcon} alt="" width="11" />71 Ayer Rajah Crescent, #06-14, Singapore 139951</li>
                            <li className='contact__item'><img className='contact__icon' src={phoneIcon} alt="" width="12" />+65 8808 7905</li>
                            <li className='contact__item'><img className='contact__icon' src={envelopeIcon} alt="" width="13" />hello@carbuyer.com.sg</li>
                        </ul>
                    </div>
                    <div className='menu'>
                        <span className='u-fw-600'>About</span>
                        <ul>
                            <li className='menu__item'><a href="#">About Us</a></li>
                            <li className='menu__item'><a href="#">Contact Us</a></li>
                            <li className='menu__item'><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className='menu'>
                        <span className='u-fw-600'>Services</span>
                        <ul>
                            <li className='menu__item'><a href="#">Buy Used Cars</a></li>
                            <li className='menu__item'><a href="#">Buy New Cars</a></li>
                            <li className='menu__item'><a href="#">Be a Dealer with UCARS</a></li>
                        </ul>
                    </div>
                    <div className='menu'>
                        <span className='u-fw-600'>Resources</span>
                        <ul>
                            <li className='menu__item'><a href="#">News</a></li>
                            <li className='menu__item'><a href="#">Sell My Car</a></li>
                            <li className='menu__item'><a href="#">COE Prices</a></li>
                        </ul>
                    </div>
                    <div className='subscription'>
                        <span>Get the <a href="#" className='u-text-red'>latest</a> automotive news sent to your inbox!</span>
                        <form action="#" className='p-sub-form'>
                            <input type="email" placeholder='Enter your email' className='p-sub-form__input' />
                            <button type='submit' className='btn--primary p-sub-form__btn'>Subscribe</button>
                        </form>
                        <div className='socials-box'>
                            <span>Follow us</span>
                            <ul>
                                <li><a href="#"><img src={instaIcon} alt="" /></a></li>
                                <li><a href="#"><img src={fbIcon} alt="" /></a></li>
                                <li><a href="#"><img src={airplaneIcon} alt="" /></a></li>
                                <li><a href="#"><img src={inIcon} alt="" /></a></li>
                                <li><a href="#"><img src={youtubeIcon} alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='legal'>
                        {/* <span className='u-fw-600'>Legal</span> */}
                        <ul>
                            <li className='legal__item'><a href="#" className='legal__link'>Advertising Terms and Conditions</a></li>
                            <li className='legal__item'><a href="#" className='legal__link'>Platform Terms and Conditions</a></li>
                            <li className='legal__item'><a href="#" className='legal__link'>Privacy Policy</a></li>
                        </ul>
                        <div className='copyright'>
                            <p>© 2022. All rights reserved.</p>
                        </div>
                    </div>
                    <div className='ownership'>
                        <a href="#"><img src={ucarLogo} alt="" width="55"/></a>
                        CarBuyer Pte Ltd and the CarBuyer Singapore brand are wholly owned by UCARS Pte Ltd
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer