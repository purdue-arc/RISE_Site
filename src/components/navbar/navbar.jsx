import React from 'react';
import './App.css';
import riseLogo from './assets/riselogo.png';
import Footer from './Footer';

function Navbar() {
    return (
        <div className="landing-page">
            <header className="landing-header">
                <nav className="landing-nav">
                    <ul>
                        <li className="nav-item">
                            <a href="/" className="header-logo-link">
                                <img src={riseLogo} alt="Logo" className="header-logo" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="about" className="nav-link">
                                ABOUT
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="registration" className="nav-link">
                                REGISTRATION
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="program" className="nav-link">
                                PROGRAM
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="sponsorship" className="nav-link">
                                SPONSORSHIP
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="contact-us" className="nav-link">
                                CONTACT US
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            {/* Additional content goes here */}
            {/* For example, you can include the content from your broken code */}
            <div>
                {/* Your additional content goes here */}
            </div>
            {/* Example of including the Footer component */}
            <Footer />
        </div>
    );
}

export default Navbar;
