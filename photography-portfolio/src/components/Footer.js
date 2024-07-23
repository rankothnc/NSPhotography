import React from "react";
import "../assets/styles/footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <div>
                    <i className="fas fa-map-marker-alt"></i>
                    <p>Dambulla, Sri Lanka</p>
                </div>
                <div>
                    <i className="fas fa-envelope"></i>
                    <p> nuwan.pri@gmail.com</p>
                </div>
                <div>
                    <i className="fas fa-phone"></i>
                    <p> +94 71 123 2345</p>
                </div>
            </div>
            <div className="social-media">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            </div>
        </footer>
    );
};

export default Footer;
