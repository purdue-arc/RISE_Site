import React from 'react';
import '../../Main.css';
import riseLogo from '../assets/riselogo.png' ;
<<<<<<< HEAD
import Footer from "../../Footer";
function Register() {
=======
import arcLogo from '../assets/arclogo.png' ;
import purdueMessage from '../assets/purdue_message.png' ;
import Footer from "../../Footer";
function Registration() {
>>>>>>> dd34295e05bea10ea764a1d2803904cc7a30d133
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
                    <section className = "padding-small"></section>
                    <button className="hero-button"><a style={{color:"#ffffff", textDecoration: "none"}}href="https://riseforms.purduearc.com">REGISTER HERE!</a></button>
                </section>
            </main>
            <section className = "padding-large"></section>
            <Footer></Footer>
        </div>
    );
}

export default Register;
