import React from 'react';
import './Footer.css'; // Link to your stylesheet
import instagramIcon from './components/assets/insta.png'; // Import your Instagram icon
import linkedinIcon from './components/assets/linkedin.png'; // Import your LinkedIn icon
import footerLogoStrip from './components/assets/logo_strip.png'; // Import your combined image asset for the white bar

function Footer() {
    return (
        <div>
            <footer className="landing-footer">
                <div className="footer-top">
                    <img src={footerLogoStrip} alt="Sponsor Logos" className="footer-logos" />
                </div>
                <div className="footer-bottom">
                    <div className="follow-us">
                        <span className="follow-text">Follow Us</span>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/purdue.arc/" target="_blank" rel="noopener noreferrer">
                                <img src={instagramIcon} width="30px" height="30px" alt=" Instagram" />
                            </a>
                            <a href="https://www.linkedin.com/company/purdue-arc/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedinIcon} width="30px" height="30px" alt="LinkedIn" />
                            </a>
                        </div>
                        <span className="rise2-text">#RISE2</span>
                    </div>

                </div>
            </footer>
        </div>
    );
}

export default Footer;
