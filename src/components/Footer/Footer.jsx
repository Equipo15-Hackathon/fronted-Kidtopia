import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
    return (
        <div className="footer">
            <p className="copyright">© Copyright 2025</p>
            <div className="right-section">
                <Link to="/contact" className="footer-link">Contact us</Link>
                <a href="/docs/RGPD.pdf" className="footer-link" target="_blank" rel="noopener noreferrer">
                    RGPD
                </a>
            </div>
        </div>
    );
};

