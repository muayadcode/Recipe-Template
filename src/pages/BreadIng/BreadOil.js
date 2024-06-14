import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 

import oil from '../../images/vo.png';
import Canola from '../../images/cano.png';
import butter from '../../images/b1.png';

import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

//BREAD OIL COMP

function BreadOil() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Oil/Butter Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Stir in 50g of oil(or butter) and 30ml of maple syrup(or honey) till disolved </p>
      </div>
      <Row className='px-5 '>
        <MainGen image={oil} title="Vegetable Oil" />
        <MainGen image={Canola} title="Canola Oil" />
        <MainGen image={butter} title="Melted Butter" />
      </Row>

      <Link className='dec' to="/bread">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Bread
        </button>
      </Link>
    </Container>
  );
}

export default BreadOil;