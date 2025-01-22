import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaGooglePlusG } from 'react-icons/fa'; // Import icons
import FooterImage from '../assets/image/Footerlogo.png'
const Footer = () => {
    return (
        <footer className="bg-primary text-white py-5 "> {/* Primary background, white text, padding */}
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="d-flex align-items-center mb-3"> {/* Align logo and text vertically */}
                            {/* Replace with your actual logo */}
                            <img
                                src={FooterImage} // Placeholder logo
                                alt="Kids Education Logo"
                                className="me-2" // Add margin to the right of the logo

                            />

                        </div>
                        <p>Pizza ipsum dolor sit amet buffalo. Deep dolor roll melted bacon Bianca pan bacon pineapple Aussie. Mayo rib sauce Hawaiian meatball.</p>
                    </div>
                    <div className="col-md-4">
                        <h5 className="mb-3">About School</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">Home</a></li>
                            <li><a href="#" className="text-white text-decoration-none">About</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Facilities</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Admission</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5 className="mb-3">Keep In Touch</h5>
                        <div className="d-flex"> {/* Use flexbox for horizontal alignment */}
                            <a href="#" className="btn btn-light rounded-circle me-2" style={{ backgroundColor: '#3b5998', color: 'white' }}> {/* Facebook */}
                                <FaFacebookF />
                            </a>
                            <a href="#" className="btn btn-light rounded-circle me-2" style={{ backgroundColor: '#e1306c', color: 'white' }}> {/* Instagram */}
                                <FaInstagram />
                            </a>
                            <a href="#" className="btn btn-light rounded-circle me-2" style={{ backgroundColor: '#00acee', color: 'white' }}> {/* Twitter */}
                                <FaTwitter />
                            </a>
                            <a href="#" className="btn btn-light rounded-circle" style={{ backgroundColor: '#dd4b39', color: 'white' }}> {/* Google Plus */}
                                <FaGooglePlusG />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;