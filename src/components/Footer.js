
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import addressIcon from '../images/webadd.png';
import emailIcon from '../images/webemai.png';
import websiteIcon from '../images/webad.png';
import mobileAddressIcon from '../images/mobad.png';
import mobileEmailIcon from '../images/mobemail.png';
import mobileWebsiteIcon from '../images/mobad.png';
import googleplay from '../images/Google Play.svg';
import appstore from '../images/App Store.svg';
import Googlemap from './Googlemap';

const Footer = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleAddressClick = () => {
    setIsMapOpen(true);
  };

  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-info">
          <div className="footer-info-item">
            <img src={addressIcon} alt="Address Icon" className="footer-info-icon desktop-icon" />
            <img src={mobileAddressIcon} alt="Mobile Address Icon" className="footer-info-icon mobile-icon" />
            <div className="footer-info-text">
              <h4 className="footer-info-title">Address</h4>
              <address className="footer-info-content" >
                <Link to=""style={{textDecoration:"none",color: "#8896AB"}} onClick={handleAddressClick}>
                  WorkGency Tech Private Limited<br />
                  Tidel Park, Module 115 D, North Block<br />
                  First Floor, Rajiv Gandhi Salai,<br />
                  Taramani, Chennai - 6000113
                </Link>
              </address>
            </div>
          </div>
          <div className="footer-info-item emailbody">
            <img src={emailIcon} alt="Email Icon" className="footer-info-icon desktop-icon" />
            <img src={mobileEmailIcon} alt="Mobile Email Icon" className="footer-info-icon mobile-icon" />
            <div className="footer-info-text">
              <h4 className="footer-info-title">Email</h4>
              <p className="footer-info-content " > <Link to="/" style={{textDecoration:"none" ,color: "#8896AB"}}>apply@workcohol.com</Link> </p>
            </div>
          </div>
          <div className="footer-info-item websitebody">
            <img src={websiteIcon} alt="Website Icon" className="footer-info-icon desktop-icon" />
            <img src={mobileWebsiteIcon} alt="Mobile Website Icon" className="footer-info-icon mobile-icon" />
            <div className="footer-info-text">
              <h4 className="footer-info-title">Website</h4>
              <p className="footer-info-content " style={{ color: "#8896AB" }}> <Link to="/" style={{textDecoration:"none", color: "#8896AB" }}>www.workcohol.com</Link> </p>
            </div>
          </div>
       
        <div className="footer-info-right gogleimg">
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src={googleplay} alt="Google Play Icon" className="footer-icon-img" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src={appstore} alt="App Store Icon" className="footer-icon-img" />
          </a>
        </div>
        </div>
      </div>

      {/* {isMapOpen && <Googlemap />} */}

      <hr className="footer-divider" />
      <div className="footer-bottom-content">
        <ul className="footer-list">
          <li className="footer-list-item" style={{ color: "#8896AB" }}>© 2021 Workcohol. All rights reserved.</li>
          <li className="footer-list-item" style={{ color: "#8896AB" }}>
            <Link to="" style={{textDecoration:"none",color: "#8896AB"}}>Terms & Conditions</Link>
          </li>
          <li className="footer-list-item" style={{ color: "#8896AB" }}>
            <Link to="" style={{textDecoration:"none",color: "#8896AB"}}>Privacy Policy</Link>
          </li>
        </ul>

        <div className="social-icons">
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="footer-icon" style={{ color: "#8896AB", cursor: "pointer" }} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="footer-icon" style={{ color: "#8896AB", cursor: "pointer" }} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="footer-icon" style={{ color: "#8896AB", cursor: "pointer" }} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-icon" style={{ color: "#8896AB" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;











// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Footer.css';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import addressIcon from '../images/webadd.png';
// import emailIcon from '../images/webemai.png';
// import websiteIcon from '../images/webad.png';
// import mobileAddressIcon from '../images/mobad.png';
// import mobileEmailIcon from '../images/mobemail.png';
// import mobileWebsiteIcon from '../images/mobad.png';
// import googleplay from '../images/Google Play.svg';
// import appstore from '../images/App Store.svg';
// import Googlemap from './Googlemap';

// const Footer = () => {
//   const [isMapOpen, setIsMapOpen] = useState(false);

//   const handleAddressClick = () => {
//     setIsMapOpen(true);
//   };

//   return (
//     <div className="footer-container">
//       <div className="footer-content">
//         <div className="footer-info">
//           <div className="footer-info-item">
//             <img src={addressIcon} alt="Address Icon" className="footer-info-icon desktop-icon" />
//             <img src={mobileAddressIcon} alt="Mobile Address Icon" className="footer-info-icon mobile-icon" />
//             <div className="footer-info-text">
//               <h4 className="footer-info-title">Address</h4>
//               <address className="footer-info-content" >
//                 <Link to="/googlemap"style={{textDecoration:"none",color: "#8896AB"}} onClick={handleAddressClick}>
//                   WorkGency Tech Private Limited<br />
//                   Tidel Park, Module 115 D, North Block<br />
//                   First Floor, Rajiv Gandhi Salai,<br />
//                   Taramani, Chennai - 6000113
//                 </Link>
//               </address>
//             </div>
//           </div>
//           <div className="footer-info-item emailbody">
//             <img src={emailIcon} alt="Email Icon" className="footer-info-icon desktop-icon" />
//             <img src={mobileEmailIcon} alt="Mobile Email Icon" className="footer-info-icon mobile-icon" />
//             <div className="footer-info-text">
//               <h4 className="footer-info-title">Email</h4>
//               <p className="footer-info-content " > <Link to="/" style={{textDecoration:"none" ,color: "#8896AB"}}>apply@workcohol.com</Link> </p>
//             </div>
//           </div>
//           <div className="footer-info-item websitebody">
//             <img src={websiteIcon} alt="Website Icon" className="footer-info-icon desktop-icon" />
//             <img src={mobileWebsiteIcon} alt="Mobile Website Icon" className="footer-info-icon mobile-icon" />
//             <div className="footer-info-text">
//               <h4 className="footer-info-title">Website</h4>
//               <p className="footer-info-content " style={{ color: "#8896AB" }}> <Link to="/" style={{textDecoration:"none", color: "#8896AB" }}>www.workcohol.com</Link> </p>
//             </div>
//           </div>
       
//         <div className="footer-info-right gogleimg">
//           <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
//             <img src={googleplay} alt="Google Play Icon" className="footer-icon-img" />
//           </a>
//           <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
//             <img src={appstore} alt="App Store Icon" className="footer-icon-img" />
//           </a>
//         </div>
//         </div>
//       </div>

//       {/* {isMapOpen && <Googlemap />} */}

//       <hr className="footer-divider" />
//       <div className="footer-bottom-content">
//         <ul className="footer-list">
//           <li className="footer-list-item" style={{ color: "#8896AB" }}>© 2021 Workcohol. All rights reserved.</li>
//           <li className="footer-list-item" style={{ color: "#8896AB" }}>
//             <Link to="/terms" style={{textDecoration:"none",color: "#8896AB"}}>Terms & Conditions</Link>
//           </li>
//           <li className="footer-list-item" style={{ color: "#8896AB" }}>
//             <Link to="/privacy" style={{textDecoration:"none",color: "#8896AB"}}>Privacy Policy</Link>
//           </li>
//         </ul>

//         <div className="social-icons">
//           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//             <FaFacebook className="footer-icon" style={{ color: "#8896AB", cursor: "pointer" }} />
//           </a>
//           <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//             <FaTwitter className="footer-icon" style={{ color: "#8896AB", cursor: "pointer" }} />
//           </a>
//           <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//             <FaInstagram className="footer-icon" style={{ color: "#8896AB", cursor: "pointer" }} />
//           </a>
//           <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin className="footer-icon" style={{ color: "#8896AB" }} />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;





