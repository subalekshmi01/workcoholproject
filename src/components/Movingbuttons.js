

import React from 'react';
import './Movingbuttons.css';

const Movingbuttons = () => {
  const buttonLabels = [
    "Blockchain",
    "Team work",
    "UX Design",
    "Cloud Computing",
    "Sales",
    "Analytical Reasoning",
    "Work Ethic",
    "Communication",
    "Project Management",
    "Leadership"
  ];

  return (
    <div className="container-fluid " style={{background:" #FAF6EB"}}>
      {/* Desktop view */}
      <div className="row d-none d-md-flex justify-content-center ml-0">
        <div className="col-12">
          <div className="moving-buttons-container">
            <div className="moving-buttons">
              {buttonLabels.map((label, index) => (
                <button key={index} className="btn-custom">
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="row d-flex d-md-none justify-content-center">
        <div className="col-12">
          <div className="moving-buttons-container">
            <div className="moving-buttons">
              {buttonLabels.slice(0, 5).map((label, index) => (
                <button key={index} className="btn-custom">
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="moving-buttons-container mt-2">
            <div className="moving-buttons">
              {buttonLabels.slice(5).map((label, index) => (
                <button key={index} className="btn-custom">
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movingbuttons;
