import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import cilantro  from '../../images/cilantroD.png';
import seeds from '../../images/smseed.png';
import Onion from '../../images/chopped.png';


import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function FryGarn() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Garnish Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add 1-2 Tablespoons of your preferred garnish</p>
      </div>
      <Row className='px-5 '>
        <MainGen image={seeds} title="Sesame Seeds" />
        <MainGen image={cilantro } title="Chopped Cilantro " />
        <MainGen image={Onion } title="Sliced Green Onions " />

      </Row>

      <Link className='dec' to="/StirFry">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Fry
        </button>
      </Link>
    </Container>
  );
}

export default FryGarn;