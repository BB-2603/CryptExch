import React from "react";
import "./Footer.css"; // Import the CSS file for styling
import { SiBlockchaindotcom } from "react-icons/si";


const Footer = () => (
    <div className="footer-container">
        <div className="footer-section">
            {/* Logo section */}
            <div className="logo-container">
                {/* Uncomment the image tag if you decide to use it */}
                <SiBlockchaindotcom size={55} />
            </div>
            <div className="logo">CryptExch</div>
            {/* Navigation section */}
            <div className="navigation-container">
                <p className="nav-item">Market</p>
                <p className="nav-item">Exchange</p>
                <p className="nav-item">Tutorials</p>
                <p className="nav-item">Wallets</p>
            </div>
        </div>

        {/* Contact information section */}
        <div className="contact-container">
            <p className="contact-info">Come join us and hear for the unexpected miracle</p>
            <p className="contact-info contact-email">info@kryptomastery.com</p>
        </div>

        {/* Divider section */}
        <div className="divider-line"></div>

        {/* Footer text section */}
        <div className="footer-text">
            <p className="footer-text-left">@kryptomastery2022</p>
            <p className="footer-text-right">All rights reserved</p>
        </div>
    </div>
);

export default Footer;
