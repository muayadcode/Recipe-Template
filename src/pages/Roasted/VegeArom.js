import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import Garlic from '../../images/mincedG.png';
import Onion from '../../images/Gonion.png';
import Shallots  from '../../images/sha.png';


import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function VegeArom() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Aromatics Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add 1-2 cups of the chosen aromatics to the vegetables</p>
      </div>
      <Row className='px-5 '>
        <MainGen image={Garlic} title="Minced Garlic" />
        <MainGen image={Onion} title="Green Onions" />
        <MainGen image={Shallots } title="Shallots" />

      </Row>

      <Link className='dec' to="/roasted-vegetables">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Roasted Vegetables
        </button>
      </Link>
    </Container>
  );
}

export default VegeArom;