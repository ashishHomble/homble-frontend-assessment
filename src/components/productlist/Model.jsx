import React from 'react';

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
