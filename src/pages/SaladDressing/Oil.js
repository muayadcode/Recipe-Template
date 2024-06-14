import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import Olive from '../../images/OLIVE.png';
import Canola from '../../images/cano.png';
import Avocado from '../../images/avoc.png';
import Grape from '../../images/grape.png';
import Hazelnut from '../../images/hazel.png';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function Oil() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Oil Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add ¼ cup of Oil </p>
      </div>
      <Row className='px-5 '>
        <MainGen image={Olive} title="Olive Oil" />
        <MainGen image={Hazelnut} title="Hazelnut Oil" />
        <MainGen image={Grape} title="Grape Seed Oil" />
        <MainGen image={Avocado} title="Avocado Oil" />
        <MainGen image={Canola} title="Canola Oil" />
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

export default Oil;