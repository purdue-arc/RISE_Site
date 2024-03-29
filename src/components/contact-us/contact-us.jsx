import React from 'react';
import '../../Main.css';
import riseLogo from '../assets/riselogo.png' ;
import arcLogo from '../assets/arclogo.png' ;
import purdueMessage from '../assets/purdue_message.png' ;
import Footer from "../../Footer";
import './contact-us.css'



function MemberTable() {
    return (
        <div className="member-table">
            <div className="member-row">
                <span className="member-name">Revanth Senthil</span>
                <span className="member-role">ARC Vice President</span>
                <span className="member-email contact-email">senthilr@purdue.edu</span>
            </div>
            {/* Repeat the member-row div for each member */}
            <div className="member-row">
                <span className="member-name">Aytaj Aslani</span>
                <span className="member-role">ARC Treasurer</span>
                <span className="member-email contact-email">aaslanli@purdue.edu</span>
            </div>
            <div className="member-row">
                <span className="member-name">Vijay Muthukumar</span>
                <span className="member-role">RISE Director</span>
                <span className="member-email contact-email">vmuthuku@purdue.edu</span>
            </div>
            <div className="member-row">
                <span className="member-name">Haddy Alchaer</span>
                <span className="member-role">ARC President</span>
                <span className="member-email contact-email">halchaer@purdue.edu</span>
            </div>
            <div className="member-row">
                <span className="member-name">Mouli Sangita</span>
                <span className="member-role">ARC Operations Chair</span>
                <span className="member-email contact-email">msangita@purdue.edu</span>
            </div>
        </div>
    );
}





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
            <section className="padding-med"></section>
            <main className="landing-main">
                <div className="other-text">CONTACT US</div>
                <section className="padding-large"></section>
            </main>

            <div className="grid-container">
                <header className="header">
                    <div className = "Title" style={{ color: 'white' }}>
                        GENERAL INQUIRIES
                    </div>
                </header>
                <main className="main-content">
                    <a href="mailto:autonomy@purdue.edu" className = "Title contact-email"
                         style={{color: '#3871c1', fontSize: '3vw' }}>
                            autonomy@purdue.edu

                    </a>
                </main>
                <aside className="side-bar">
                    <div className = "Title" style={{ color: '#3871c1' }}>
                        COMMITTEE
                        CONTACTS
                    </div>
                </aside>
                <footer className="footer">
                    <div className="Title"
                         style={{color: 'white', fontSize: '1vw'}}>
                        <MemberTable/>
                    </div>
                </footer>
            </div>
            <Footer></Footer>
        </div>
    )
        ;
}

export default Contact;