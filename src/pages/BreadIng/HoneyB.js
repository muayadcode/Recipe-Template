import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 

import Honey from '../../images/honey.png';
import Maple from '../../images/MAPLE.png';

import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function HoneyB() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Maple Syrup/Honey Options </h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Stir in 50g of oil(or butter) and 30ml of maple syrup(or honey) till disolved </p>
      </div>
      <Row className='px-5 '>
        <div className="spec2 row justify-content-center align-items-center"></div>

        <MainGen image={Honey} title="Honey" />
        <MainGen image={Maple} title="Maple Syrup" />
        <div className="spec2 row justify-content-center align-items-center"></div>

      </Row>

      <Link className='dec' to="/bread">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Bread
        </button>
      </Link>
    </Container>
  );
}

export default HoneyB;