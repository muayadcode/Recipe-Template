import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import parsley from '../../images/parsley.png';
import Basil from '../../images/basil.png';
import Dill from '../../images/DILL.png';


import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function SaladHerbs() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Herbs Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add ½ cup of Fresh or Powdered herbs </p>
      </div>
      <Row className='px-5 '>
        <MainGen image={parsley} title="Parsley" />
        <MainGen image={Basil} title="Basil Leaves" />
        <MainGen image={Dill} title="Dill Sprigs" />

      </Row>

      <Link className='dec' to="/salad">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Salad
        </button>
      </Link>
    </Container>
  );
}

export default SaladHerbs;