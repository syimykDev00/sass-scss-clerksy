import React from 'react';
import footerLogo from './../../assets/img/footerLogo.svg'
import { FaFacebookF } from "react-icons/fa";
import {NavLink} from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoIonic } from "react-icons/io";


const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer--groupOne">
                        <img src={footerLogo} alt="img"/>
                        <h1>A people company.</h1>
                        <div className="footer--groupOne__icons">
                            <NavLink to={'https://www.facebook.com/?locale=ru_RU'}>
                                <a>
                                    <FaFacebookF />
                                </a>
                            </NavLink>
                            <NavLink to={'https://x.com/?lang=ru'}>
                                <a>
                                    <FaTwitter />
                                </a>
                            </NavLink>
                            <NavLink to={'https://ru.linkedin.com/'}>
                                <a>
                                    <FaLinkedin />
                                </a>
                            </NavLink>
                            <NavLink to={''}>
                                <a>
                                    <IoLogoIonic />
                                </a>
                            </NavLink>
                        </div>
                    </div>
                    <div className="footer--line"></div>
                    <div className="footer--groupTwo">
                        <p>© 2020 Clerksy, Inc. Clerksy is a registered trademark of Clerksy, Inc.</p>
                        <nav className="footer--groupTwo__navbar">
                            <NavLink to={''}><a>Privacy Policy</a></NavLink>
                            <NavLink to={''}><a>Terms of Service</a></NavLink>
                            <NavLink to={''}><a>GDPR</a></NavLink>
                            <NavLink to={''}><a>Careers</a></NavLink>
                            <NavLink to={''}><a>Press Kit</a></NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;