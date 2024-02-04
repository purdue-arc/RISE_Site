import React from 'react';
import '../../Main.css';
import riseLogo from '../assets/riselogo.png' ;
import arcLogo from '../assets/arclogo.png' ;
import purdueMessage from '../assets/purdue_message.png' ;
import Footer from "../../Footer";

function Contact() {
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
                    <h3 className="other-text">CONTACT US</h3>
                </section>
            </main>
            <section className="padding-large"></section>
            <div className="landing-adjust">
                <div className="content-container">
                    <section className="table-section">
                    <table>
                        <tbody>
                        <tr>
                            <td>Cell 1</td>
                            <td>Cell 2</td>
                        </tr>
                        <tr>
                            <td>Cell 3</td>
                            <td>Cell 4</td>
                        </tr>
                        </tbody>
                    </table>
                    </section>
                    {/*<div className="content-container">
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
                </div>*/}
                </div>
            </div>
            <section className="padding-large"></section>
            <Footer></Footer>
        </div>
    )
        ;
}

export default Contact;
