import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="container-fluid">
            <div className="footer-container">
                <ul>
                    <li className="footer-menu">Home</li>
                    <li className="footer-menu">Our Services</li>
                    <li className="footer-menu">Contact us</li>
                    <li className="footer-menu"> About us</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;