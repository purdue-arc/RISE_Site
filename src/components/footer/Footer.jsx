import React from 'react';
import './Footer.css'; // Link to your stylesheet
import footerLogoStrip from '../assets/logo_strip.png'; // Import your combined image asset for the white bar
import instagramIcon from '../assets/arclogo.png'; // Import your Instagram icon
import linkedinIcon from '../assets/arclogo.png'; // Import your LinkedIn icon

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
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src={instagramIcon} alt="Instagram" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img src={linkedinIcon} alt="LinkedIn" />
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
