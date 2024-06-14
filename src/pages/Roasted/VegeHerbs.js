import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import Rosemary from '../../images/rosemary.png';
import Thyme from '../../images/thyme.png';
import Paprika  from '../../images/pap.png';


import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function VegeHerbs() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Herbs / Spices Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add 1 Tablespoon and toss vegetables with selected herbs and spices</p>
      </div>
      
      <Row className='px-5 '>
        <MainGen image={Rosemary} title="Rosemary" />
        <MainGen image={Thyme} title="Thyme" />
        <MainGen image={Paprika } title="Paprika" />

      </Row>

      <Link className='dec' to="/roasted-vegetables">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Roasted Vegetables
        </button>
      </Link>
    </Container>
  );
}

export default VegeHerbs;