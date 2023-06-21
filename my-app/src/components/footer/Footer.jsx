import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">
                    Nico Abdala
                </h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#qualy" className="footer__link">Qualification</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.instagram.com/nicoabdala22" className="footer__social-link" target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/nicoabdala22" className="footer__social-link" target="_blank">
                        <i class="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://www.twitter.com/nicoabdaladev" className="footer__social-link" target="_blank">
                        <i class="bx bxl-twitter"></i>
                    </a>
                    <a href="https://www.github.com/nicoabdala" className="footer__social-link" target="_blank">
                        <i class="bx bxl-github"></i>
                    </a>
                </div>

                <span className="footer__copy">Nico Abdala Portfolio. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer
