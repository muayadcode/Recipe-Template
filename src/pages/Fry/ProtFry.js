import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import Tofu from '../../images/Tofu.png';
import chicken from '../../images/chiB.png';
import Shrimp  from '../../images/shrimp.png';

import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function ProtFry() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Protein Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add 1-2 lbs of the sliced protein to the skillet and cook until browned and cooked through. Remove from the skillet and set aside</p>
      </div>
      <Row className='px-5 '>
        <MainGen image={chicken} title="Chicken Breast" />
        <MainGen image={Tofu} title="Tofu" />
        <MainGen image={Shrimp} title="Shrimp" />

      </Row>

      <Link className='dec' to="/StirFry">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Fry
        </button>
      </Link>
    </Container>
  );
}

export default ProtFry;