import React from 'react';
import './Model.css';

const Model = ({ children, onClose }) => {
  return (
    <div className="model-overlay">
      <div className="model">
        <button className="model-close-button" onClick={onClose}>Close</button>
        <div className="model-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Model;
