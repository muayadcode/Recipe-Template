import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import Maple from '../../images/MAPLE.png';
import Honey from '../../images/honey.png';
import Agave from '../../images/agave.png';
import Simple from '../../images/simple.png';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function Sweet() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Sweetener Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add 1 Tablespoon of Sweetener </p>
      </div>
      <Row className='px-5 '>
        <MainGen image={Maple} title="Maple Syrup" />
        <MainGen image={Honey} title="Honey" />
        <MainGen image={Agave} title="Agave Syrup" />
        <MainGen image={Simple} title="Simple Syrup" />
        <div className="spec1 row justify-content-center align-items-center"></div>
        <div className="spec1 row justify-content-center align-items-center"></div>
      </Row>

      <Link className='dec' to="/Salad-Dressing">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Dressing 
        </button>
      </Link>
    </Container>
  );
}

export default Sweet;