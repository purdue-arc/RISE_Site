import React from 'react';
import '../../Main.css';
import TierList from "./tier-list/TierList"
import riseLogo from '../assets/riselogo.png' ;
import arcLogo from '../assets/arclogo.png' ;
import purdueMessage from '../assets/purdue_message.png' ;
import Footer from "../../Footer";
function Sponsor() {
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
                <div className="other-text">SPONSORSHIP</div>
            </main>
            <section className="padding-large"></section>
            <TierList/>
            <Footer></Footer>
        </div>
    );
}

export default Sponsor;
