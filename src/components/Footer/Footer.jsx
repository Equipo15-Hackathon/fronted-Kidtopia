import "./Footer.css";

export const Footer = () => {
    return (
        <div className="footer">
            <p className="copyright">© Copyright 2025</p>
            <div className="right-section">
                <a href="/contact" className="footer-link">Contact us</a>
                <a href="/docs/RGPD.pdf" className="footer-link" target="_blank" rel="noopener noreferrer">
                    RGPD
                </a>
            </div>
        </div>
    );
};

