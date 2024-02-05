import React from 'react';
import '../../Main.css';
import riseLogo from '../assets/riselogo.png' ;
import arcLogo from '../assets/arclogo.png' ;
import purdueMessage from '../assets/purdue_message.png' ;
import Footer from "../../Footer";

function Contact() {
    return (
        <div className="landing-adjust">
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
            <main className="landing-adjust">
                <div className="content-container-grey">
                    <h1 className="title">CONTACT RISE!</h1>
                    <div className="item-row left-image">
                        <img src="https://i.imgur.com/H0i31s4.png"/>
                        <p>
                            autonomy@purdue.edu
                        </p>
                    </div>
                    <div className="item-row right-image">
                        <img src="https://i.imgur.com/sPnrw98.png"/>
                        <p>
                            Revanth Senthil (ARC Vice President),
                            senthilr@purdue.edu
                            Aytaj Aslani (ARC treasurer),
                            aaslanli@purdue.edu
                            Vijay Muthukumar (Rise Director),
                            vmuthuku@purdue.edu
                            Haddy Alchaer (ARC President),
                            halchaer@purdue.edu
                            Mouli Sangita (ARC Operations Chair),
                            msangita@purdue.edu
                        </p>
                    </div>
                </div>

            </main>
            <section className="padding-large"></section>
            <Footer></Footer>
        </div>
    );
}

export default Contact;