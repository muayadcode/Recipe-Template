import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import Ginger from '../../images/ginger.png';
import Onion from '../../images/Gonion.png';

import Garlic from '../../images/mincedG.png';

import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function FryArom() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Aromatics Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Push the vegetables to the side of the skillet and add the minced garlic and ginger. Stir-fry for about 30 seconds until fragrant</p>
      </div>
      <Row className='px-5 '>
        <MainGen image={Garlic} title="Minced Garlic" />
        <MainGen image={Ginger} title="Ginger" />
        <MainGen image={Onion} title="Green Onions" />

      </Row>

      <Link className='dec' to="/StirFry">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Fry
        </button>
      </Link>
    </Container>
  );
}

export default FryArom;