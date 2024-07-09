import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import addressIcon from '../images/webadd.png';
import emailIcon from '../images/webemai.png';
import websiteIcon from '../images/webad.png';
import mobileAddressIcon from '../images/mobad.png';
import mobileEmailIcon from '../images/mobemail.png';
import mobileWebsiteIcon from '../images/mobad.png';
import googleplay from '../images/Google Play.svg';
import appstore from '../images/App Store.svg';
import './Footer.css';

const Footer = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleAddressClick = () => {
    setIsMapOpen(true);
  };

  return (
    <div className="container-fluid bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-start">
          {/* Address */}
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="d-flex align-items-start">
              <img src={addressIcon} alt="Address Icon" className="desktop-icon me-2" />
              <img src={mobileAddressIcon} alt="Mobile Address Icon" className="mobile-icon me-2" />
              <div>
                <h5 className="mb-1 text-start">Address</h5>
                <address className="mb-0 text-start" style={{ color: '#8896AB'}}>
                  <Link to="#" onClick={handleAddressClick} className="text-decoration-none text-reset">
                    WorkGency Tech Private Limited<br />
                    Tidel Park, Module 115 D, North Block<br />
                    First Floor, Rajiv Gandhi Salai,<br />
                    Taramani, Chennai - 6000113
                  </Link>
                </address>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="d-flex align-items-start">
              <img src={emailIcon} alt="Email Icon" className="desktop-icon me-2" />
              <img src={mobileEmailIcon} alt="Mobile Email Icon" className="mobile-icon me-2" />
              <div>
                <h5 className="mb-1 text-start">Email</h5>
                <p className="mb-0 text-start" style={{ color: '#8896AB'}}>
                  <Link to="/" className="text-decoration-none text-reset">apply@workcohol.com</Link>
                </p>
              </div>
            </div>
          </div>

          {/* Website */}
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="d-flex align-items-start">
              <img src={websiteIcon} alt="Website Icon" className="desktop-icon me-2" />
              <img src={mobileWebsiteIcon} alt="Mobile Website Icon" className="mobile-icon me-2" />
              <div>
                <h5 className="mb-1 text-start">Website</h5>
                <p className="mb-0 text-start" style={{ color: '#8896AB'}}>
                  <Link to="/" className="text-decoration-none text-reset" >www.workcohol.com</Link>
                </p>
              </div>
            </div>
          </div>
        {/* </div> */}

        {/* Google Play and App Store Buttons */}
        {/* <div className="row mt-4"> */}
        <div className="col-md-4 footer-images-right">
          <div className="d-flex flex-column align-items-end">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="mb-3">
              <img src={googleplay} alt="Google Play Icon" className="store-icon" />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src={appstore} alt="App Store Icon" className="store-icon" />
            </a>
          </div>
        </div>
        {/* </div> */}
        </div>
        </div>

        <hr className="my-4 full-width-hr" />

        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <ul className="list-unstyled mb-0 d-flex flex-column flex-md-row justify-content-center justify-content-md-start">
              <li className="me-3 mb-2 mb-md-0" style={{ color: '#8896AB', fontSize: '14px' }}>© 2021 Workcohol. All rights reserved.</li>
              <li className="me-3 mb-2 mb-md-0">
                <Link to="/" style={{ textDecoration: 'none', color: '#8896AB', fontSize: '14px' }}>Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/" style={{ textDecoration: 'none', color: '#8896AB', fontSize: '14px' }}>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center justify-content-md-end">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted me-3">
                <FaFacebook style={{ color: '#8896AB', fontSize: '20px', cursor: 'pointer' }} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted me-3">
                <FaTwitter style={{ color: '#8896AB', fontSize: '20px', cursor: 'pointer' }} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted me-3">
                <FaInstagram style={{ color: '#8896AB', fontSize: '20px', cursor: 'pointer' }} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted">
                <FaLinkedin style={{ color: '#8896AB', fontSize: '20px' }} />
              </a>
            </div>
          </div>
        </div>
      

      {/* {isMapOpen && <Googlemap />} */}
    </div>
  );
};

export default Footer;
