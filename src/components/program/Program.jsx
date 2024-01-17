import React from 'react';
import '../../Main.css';
import riseLogo from '../assets/riselogo.png' ;
import arcLogo from '../assets/arclogo.png' ;
import purdueMessage from '../assets/purdue_message.png' ;
import Footer from "../../Footer";
function Program() {
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
                    <button className="hero-button"><a style={{color:"#ffffff", textDecoration: "none"}} href="registration">REGISTER YOUR INTEREST</a></button>
                </section>
            </main>
            <section className="padding-large"></section>

            {/* New AboutRISE section */}
            <main className="landing-main">
                <div className="bg-blue-100 p-10">
                    <h1 className="text-4xl font-bold text-center mb-6">ABOUT RISE</h1>
                    <div className="flex flex-col items-center gap-6">
                        <img src="../assets/program1.png" alt="Description1" className="mb-6"/>
                        <p className="text-lg mb-6">
                            {/* Content */}
                        </p>
                        <img src="../assets/program1.png" alt="Description2" className="mb-6"/>
                        <p className="text-lg mb-6">
                            {/* Content */}
                        </p>
                        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded">INITIAL RISE ARTICLE
                        </button>
                    </div>
                </div>
            </main>
            <section className="padding-large"></section>
            <Footer/>
        </div>
    );
}

export default Program;
