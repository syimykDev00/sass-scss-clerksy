import React from 'react';
import headerLogo from './../../assets/img/headerLogo.svg';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <section id="header">
            <div className="container">
                <div className="header">
                    <img src={headerLogo} alt="img"/>
                    <div className="header--group">
                        <nav className="header--group__navbar">
                            <NavLink to={''}><a>Log In</a></NavLink>
                            <NavLink to={''}><a>844-332-6440</a></NavLink>
                        </nav>
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;