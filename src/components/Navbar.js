// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav, Button } from 'react-bootstrap';
// import { FaBars } from 'react-icons/fa';
// import './Navbar.css';
// import mobiletitle from '../images/mobiletitleimg.png'
// import mobilehandburg from '../images/mobilehandburgimg.png'
// import webtitle from '../images/webtitleimg.png';

// const NavBar = () => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <Navbar bg="rose" expand="lg" expanded={expanded}>
//       <Navbar.Brand href="/">
//         <img
//           src={webtitle}
//           alt="Title Image"
//           className="d-none d-lg-block"
//         />
//         <img
//           src={mobiletitle}
//           alt="Title Image Mobile"
//           className="d-lg-none "
//         />
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}>
//         {/* <FaBars /> */}
//         <img src={mobilehandburg}/>
//       </Navbar.Toggle>
//       <Navbar.Collapse id="basic-navbar-nav " style={{color:" #556987"}}>
//         <Nav className="mx-auto">
//           <Nav.Link href="" className='text-primary'>Programs</Nav.Link>
//           <Nav.Link href="" className='text-primary'>About Us</Nav.Link>
//           <Nav.Link href="" className='text-primary'>Careers</Nav.Link>
//           <Nav.Link href="" className='text-primary'>Resources</Nav.Link>
//         </Nav>
//         <Nav>
//           {/* <Button  className="login-signup-btn">Login</Button>
//           <Button  className="login-signup-btn">Sign Up</Button> */}
//           <button  className="login-signup-btn fs-5 " style={{fontWeight:"500"}}>Login</button>
//           <button  className="login-signup-btn fs-5" style={{fontWeight:"500"}}>Sign Up</button>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default NavBar;










import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
import mobiletitle from '../images/mobiletitleimg.png'
import mobilehandburg from '../images/mobilehandburgimg.png'
import webtitle from '../images/webtitleimg.png';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="rose" expand="lg" expanded={expanded}>
      <Navbar.Brand href="/">
        <img
          src={webtitle}
          alt="Title Image"
          className="d-none d-lg-block"
        />
        <img
          src={mobiletitle}
          alt="Title Image Mobile"
          className="d-lg-none "
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}>
        {/* <FaBars /> */}
        <img src={mobilehandburg}/>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav " style={{color:" #556987"}}>
        <Nav className="mx-auto">
          <Nav.Link href="" className='text-primary'>Programs</Nav.Link>
          <Nav.Link href="" className='text-primary'>About Us</Nav.Link>
          <Nav.Link href="" className='text-primary'>Careers</Nav.Link>
          <Nav.Link href="" className='text-primary'>Resources</Nav.Link>
        </Nav>
        <Nav>
          {/* <Button  className="login-signup-btn">Login</Button>
          <Button  className="login-signup-btn">Sign Up</Button> */}
          <button  className="login-signup-btn fs-5 " style={{fontWeight:"500"}}>Login</button>
          <button  className="login-signup-btn fs-5" style={{fontWeight:"500"}}>Sign Up</button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

