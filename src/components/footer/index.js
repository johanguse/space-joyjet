import React from 'react';
import './_footer.scss';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="footer-content">
                        © {new Date().getFullYear()} Created by Joyjet Digital Space Agency
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;