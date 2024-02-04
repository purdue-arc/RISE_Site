import React from 'react';
import '../../Main.css';
import riseLogo from '../assets/riselogo.png' ;
import Footer from "../../Footer";
function Register() {
    return (
        <div className="landing-page">
            <header className="landing-header">
                <nav className="landing-nav">
                    <ul>
                        <a href="/" className="header-logo-link">
                            <img src={riseLogo} alt="Logo" className="header-logo"/>
                        </a>
                        <li className="nav-link"><a href="/about">ABOUT</a></li>
                        <li className="nav-link"><a href="/registration">REGISTRATION</a></li>
                        <li className="nav-link"><a href="/program">PROGRAM</a></li>
                        <li className="nav-link"><a href="/sponsorship">SPONSORSHIP</a></li>
                        <li className="nav-link"><a href="/contact">CONTACT US</a></li>
                    </ul>
                </nav>
            </header>
            <section className="padding-med"></section>
            <main className="landing-main">
                <section className="hero">
                    <h3 className="other-text">
                        REGISTRATION LINK:
                    </h3>
                    <section className="padding-small"></section>
                    <a className="hero-button" href="https://riseforms.purduearc.com">
                        REGISTER HERE!
                    </a>
                </section>
            </main>
            <section className="padding-large"></section>
            <Footer></Footer>
        </div>
    );
}

export default Register;
