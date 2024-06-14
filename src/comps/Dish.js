import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTopOnPageChange from './ScrollToTopOnPageChange'; // Import the ScrollToTopOnPageChange component


//HOME COMP 
function DishItem({ imageSrc, altText, dishName, dishRoute }) {
  return (
    <>
      <ScrollToTopOnPageChange /> {/* Include ScrollToTopOnPageChange component */}
      <Link className='dec ingD row justify-content-center align-items-center my-5' to={dishRoute}>
      <div className="col-md-5 py-3 text-center">
        <img src={imageSrc} alt={`${altText} `} className="img-fluid imDs" />
      </div>
      <div className="col-md-7 mob">
        <h1>{dishName}</h1>
      </div>
      </Link>
    </>
  );
}

export default DishItem;
