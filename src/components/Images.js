
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Images.css';
// import mobilemain from '../images/mobilemainimg.png';
// import webmainimg from '../images/webmainimg.png';
// import webtitlemainims from '../images/webmaintitleimg.png';
// import findworld from '../images/findtheworld.png'

// const Images = () => {
//   return (

// <div className="container">
      // <div className="text-content  d-md-block">
      //   <h1 style={{
      //     fontSize: "70px",
      //     fontFamily: "Poppins",
      //     fontWeight: "bolder",
      //     color: "#182C69",
      //     marginTop:"59px",
      //     lineHeight:"70px"
      //   }}>
      //     Find the World's <br />Best <span className="gradient-text" style={{position:"relative",bottom:"11px"}}>Talents</span>
      //   </h1>
      //   <p style={{fontSize:'19px' , fontWeight:"500" , textAlign:"left", fontFamily:"inter", color:"black" ,marginLeft:"33px" }}>
      //     Explore thousands of job listings, from entry level positions to executive <br/>roles.
      //     Find your next career move or discover the perfect candidate<br></br> for your company.
      //   </p>
      // </div>
      // <div className="image-content d-xs-none d-md-block">
      //   <img src={`${process.env.PUBLIC_URL}/images/webmainimg.png`} alt="Description" />
      // </div>
//       <div className="row d-flex d-md-none justify-content-center mt-5">
//           <div className="col-12">
//             <img
//               src={mobilemain}
//               alt="workoholimage3"
//               className="img-fluid center-img"
//             />
//           </div>
//         </div>

//     </div>
    

  
//   );
// };
// export default Images;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Images.css'; // Assuming this is where your CSS is located
import mobilemain from '../images/mobilemainimg.png';
import webmainimg from '../images/webmainimg.png';

const Images = () => {
  return (
    <div className="container">
      {/* This content will be shown on desktop view */}
      <div className="text-content d-none d-md-block">
        <h1
          style={{
            fontSize: "70px",
            fontFamily: "Poppins",
            fontWeight: "bolder",
            color: "#182C69",
            marginTop: "59px",
            lineHeight: "70px",
          }}
        >
          Find the World's <br />
          Best{" "}
          <span
            className="gradient-text"
            style={{ position: "relative", bottom: "11px" }}
          >
            Talents
          </span>
        </h1>
        <p
          style={{
            fontSize: "19px",
            fontWeight: "500",
            textAlign: "left",
            fontFamily: "Inter",
            color: "black",
            marginLeft: "33px",
          }}
        >
          Explore thousands of job listings, from entry-level positions to executive
          <br />
          roles. Find your next career move or discover the perfect candidate
          <br />
          for your company.
        </p>
      </div>
      <div className="image-content d-none d-md-block">
        <img src={webmainimg} alt="Description" />
      </div>
      
      {/* This content will be shown on mobile view */}
      <div className="row d-flex d-md-none justify-content-center mt-5">
        <div className="col-12">
          <img
            src={mobilemain}
            alt="Mobile view"
            className="img-fluid center-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
