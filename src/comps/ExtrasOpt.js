import React from 'react';

const ExtrasOpt = ({ image, title }) => {
  return (
    <div className="ing row justify-content-center align-items-center">
      <div className="col-md-5 py-3 text-center">
        <img src={image} alt={`${title} `} className="img-fluid Soup" />
      </div>
      <div className="col-md-7 mob">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default ExtrasOpt;
