// About.js
import React from 'react';
import Footer from '../../Footer';
import '../../Main.css';
import AboutRise from "../about-rise/AboutRise";
import riseLogo from '../assets/riselogo.png';
function About() {
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
                {/* Existing About section */}
                <section className="hero">
                    <h3 className="other-text">ABOUT</h3>
                    <section className="padding-small"></section>
                    {/*<button className="hero-button"><a style={{color:"#ffffff", textDecoration: "none"}} href="registration">REGISTER YOUR INTEREST</a></button>*/}
                </section>
            </main>
            <section className="padding-large"></section>

            {/* New AboutRISE section */}
            <AboutRise />
            <section className="padding-large"></section>
            <Footer />
        </div>
    );
}

export default About;
