import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import vo from '../../images/vo.png';

import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function OilFry() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Oil Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Heat 1 tablespoon of oil in a large skillet or wok over medium-high heat</p>
      </div>
      <Row className='px-5 '>
        <MainGen image={vo} title="Vegetable Oil" />

      </Row>

      <Link className='dec' to="/StirFry">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Fry
        </button>
      </Link>
    </Container>
  );
}

export default OilFry;