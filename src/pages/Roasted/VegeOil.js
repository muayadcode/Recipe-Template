import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import Olive from '../../images/OLIVE.png';
import Avocado from '../../images/avoc.png';
import Coconut from '../../images/co.png';


import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function VegeOil() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Oil Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add ¼ cup of oil and drizzle the selected oil over the vegetables and toss until evenly coated</p>
      </div>
      <Row className='px-5 '>
        <MainGen image={Olive} title="Olive Oil " />
        <MainGen image={Avocado} title="Avocado Oil " />
        <MainGen image={Coconut} title="Coconut Oil" />

      </Row>

      <Link className='dec' to="/roasted-vegetables">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Roasted Vegetables
        </button>
      </Link>
    </Container>
  );
}

export default VegeOil;