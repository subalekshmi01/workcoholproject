
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import mobilemain from '../images/mobilemainimg.png';
import webmainimg from '../images/webmainimg.png';

const Images = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* This content will be shown on desktop view */}
        <div className="col-md-6 d-none d-md-block">
          <h1
            style={{
              fontSize: '70px',
              fontFamily: 'Poppins',
              fontWeight: 'bolder',
              color: '#182C69',
              marginTop: '59px',
              lineHeight: '70px',
              textAlign:"left"
            }}
          >
            Find the World's <br />
            Best{' '}
            <span
              className="gradient-text"
              style={{
                background: 'linear-gradient(to right, #01F5A4, #2B85FE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                position: 'relative',
                bottom: '11px',
              }}
            >
              Talents
            </span>
          </h1>
          <p
            style={{
              fontSize: '19px',
              fontWeight: '500',
              textAlign: 'left',
              fontFamily: 'Inter',
              color: 'black',
              marginLeft: '33px',
            }}
          >
            Explore thousands of job listings, from entry-level positions to executive
            <br />
            roles. Find your next career move or discover the perfect candidate
            <br />
            for your company.
          </p>
        </div>
        <div className="col-md-6 d-none d-md-block">
          <img
            src={webmainimg}
            alt="Description"
            className="img-fluid"
            style={{ marginTop: '-66px' }}
          />
        </div>

        {/* This content will be shown on mobile view */}
        <div className="col-12 d-md-none text-center mt-5">
          <img
            src={mobilemain}
            alt="Mobile view"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
