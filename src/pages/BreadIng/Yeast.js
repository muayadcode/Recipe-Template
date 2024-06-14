import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 

import active from '../../images/active.png';

import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function Yeast() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Yeast Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: In large bowl combine 680g of water and 15 ml of yeast. Stir to dissolve </p>
      </div>
      <Row className='px-5 '>
        <MainGen image={active} title="Active Dry Yast" />

      </Row>

      <Link className='dec' to="/bread">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Bread
        </button>
      </Link>
    </Container>
  );
}

export default Yeast;