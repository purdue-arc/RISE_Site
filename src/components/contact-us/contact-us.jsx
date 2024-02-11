import React from 'react';
import '../../Main.css';
import riseLogo from '../assets/riselogo.png' ;
import arcLogo from '../assets/arclogo.png' ;
import purdueMessage from '../assets/purdue_message.png' ;
import Footer from "../../Footer";
import './contact-us.css'



function MemberTable() {
    return (
        <table className="my-table">
            <tbody>
            <tr>
                <td>Revanth Senthil (ARC Vice President)</td>
            </tr>
            <tr>
                <td>senthilr@purdue.edu</td>
            </tr>
            <tr>
                <td>Aytaj Aslani (ARC treasurer)</td>
            </tr>
            <tr>
                <td>aaslanli@purdue.edu</td>
            </tr>
            <tr>
                <td>Vijay Muthukumar (Rise Director)</td>
            </tr>
            <tr>
                <td>vmuthuku@purdue.edu</td>
            </tr>
            <tr>
                <td>Haddy Alchaer (ARC President)</td>
            </tr>
            <tr>
                <td>halchaer@purdue.edu</td>
            </tr>
            <tr>
                <td>Mouli Sangita (ARC Operations Chair)</td>
            </tr>
            <tr>
                <td>msangita@purdue.edu</td>
            </tr>
            </tbody>
        </table>
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
                <div className="other-text">SPONSORSHIP</div>
                <section className="padding-large"></section>
            </main>

            <div className="grid-container">
                <header className="header">
                    <div className = "Title" style={{ color: 'white' }}>
                        GENERAL INQUIRIES
                    </div>
                </header>
                <main className="main-content">
                    <div className = "Title"
                         style={{ color: '#3871c1', fontSize: '3vw' }}>
                            autonomy@purdue.edu
                    </div>
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