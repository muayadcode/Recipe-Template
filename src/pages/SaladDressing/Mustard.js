import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import Dijon from '../../images/dijon.png';
import Whole from '../../images/whole.png';
import Yellow from '../../images/yellow.png';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function Mustard() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Mustard Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add 1 Tablespoon of Mustard </p>
      </div>
      <Row className='px-5 '>
        <MainGen image={Dijon} title="Dijon" />
        <MainGen image={Whole} title="Whole Grain" />
        <MainGen image={Yellow} title="Yellow Mustard" />

      </Row>

      <Link className='dec' to="/Salad-Dressing">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Dressing 
        </button>
      </Link>
    </Container>
  );
}

export default Mustard;