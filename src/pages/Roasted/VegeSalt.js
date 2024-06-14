import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import salt from '../../images/s1.png';
import pepper from '../../images/blackP.png';


import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function VegeSalt() {
  
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Salt / Pepper Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add 1 Tablespoon and sprinkle salt and pepper over the vegetables and toss again to distribute the seasoning evenly</p>
      </div>
      <Row className='px-5 '>
      <div className="spec2 row justify-content-center align-items-center"></div>
        <MainGen image={salt} title="Salt" />
        <MainGen image={pepper} title="Black Pepper" />
        <div className="spec2 row justify-content-center align-items-center"></div>
      </Row>

      <Link className='dec' to="/roasted-vegetables">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Roasted Vegetables
        </button>
      </Link>
    </Container>
  );
}

export default VegeSalt;