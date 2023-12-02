import React from 'react';
import './App.css'; // Link to your stylesheet
import riseLogo from './assets/riselogo.png' ;
import arcLogo from './assets/arclogo.png' ;
import purdueMessage from './assets/purdue_message.png' ;
function App() {
    return (
        <div className="landing-page">
            <header className="landing-header">
                <nav className="landing-nav">
                    <ul>
                        <a href="/" className="header-logo-link">
                            <img src={riseLogo} alt="Logo" className="header-logo" />
                        </a>
                        <li className = "nav-link"><a href="about">ABOUT</a></li>
                        <li className = "nav-link"><a href="registration">REGISTRATION</a></li>
                        <li className = "nav-link"><a href="program">PROGRAM</a></li>
                        <li className = "nav-link"><a href="sponsorship">SPONSORSHIP</a></li>
                        <li className = "nav-link"><a href="contact-us">CONTACT US</a></li>
                    </ul>
                </nav>
            </header>

            <main className="landing-main">
                <section className="top-logos">
                    <img src={arcLogo} alt="Logo" className="top-logo" />
                    <img src={purdueMessage} alt="Logo" className="top-logo" />
                </section>
                <section className="hero">
                    <h2 className = "name-text">
                        ROBOTICS AND INTELLIGENCE SYSTEMS EXPO
                    </h2>
                    <h1 className="hero-text">
                        R. I. <span className="hero-number">2</span>. E.
                    </h1>
                    <p className="hero-date">March 30th, 2024</p>
                    <p className="hero-location">Hosted at Purdue University</p>
                    <button className="hero-button">REGISTER YOUR INTEREST</button>
                </section>
            </main>

            {/* Add footer if needed */}
        </div>
    );
}

export default App;
