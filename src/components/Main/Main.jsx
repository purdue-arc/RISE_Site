import React from 'react';
import Footer from "../../Footer";
import '../../Main.css';
import arcLogo from '../assets/arclogo.png';
import purdueMessage from '../assets/purdue_message.png';
import riseLogo from '../assets/riselogo.png';
import rise2 from '../assets/2_4.png';
function Main() {
    return (
        <div className="landing-page">
            <header className="landing-header">
                <nav className="landing-nav">
                    <ul>
                        <a href="/" className="header-logo-link">
                            <img src={riseLogo} alt="Logo" className="header-logo" />
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
                <section className="top-logos">
                    <img src={arcLogo} alt="Logo" className="top-logo" />
                    <img src={purdueMessage} alt="Logo" className="top-logo" />
                </section>
                <section className="hero">
                    <h2 className="name-text">
                        ROBOTICS AND INTELLIGENCE SYSTEMS EXPO
                    </h2>
                    <h1 className="hero-text">
                        R. I. <img src={rise2} className="hero-number" alt="rise2"></img>. E.
                    </h1>
                    <p className="hero-date">March 30th, 2024</p>
                    <p className="hero-location">Hosted at Purdue University</p>
                    <section className="padding-small"></section>
                    <button className="hero-button"><a style={{ color: "#ffffff", textDecoration: "none" }}
                        href="/registration">REGISTER YOUR INTEREST</a></button>
                </section>
            </main>
            <section className="padding-large"></section>
            <div className="greybox">

                <p className="info-packet-text">
                    Created by the Autonomous Robotics Club (ARC) in partnership with the Institute for Networks,
                    Optimization, and Control (ICON), the Robotics and Intelligent Systems Expo (RISE) aims to be on the
                    frontier of showcasing innovation in the fields of robotics and autonomy. RISE's primary goal is to
                    immerse attendees in the dynamic world of robotics and AI, showcasing the vast opportunities in
                    these domains and igniting interest among students and faculty. This is achieved through robotics
                    demonstrations, enlightening presentations, and engaging networking sessions. Hosted at Purdue
                    University, RISE will showcase the cutting-edge research and technology developed by the students
                    and faculty at one of the top engineering institutions in the country.
                </p>
                <div className="padding-small"></div>
                <button className="hero-button-2"><a style={{ color: "#3871c1", textDecoration: "none" }}
                    href="/about">INFORMATION PACKET</a></button>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Main;
