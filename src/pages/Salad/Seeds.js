import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import Almonds from '../../images/almond.png';
import Sunflower from '../../images/sun.png';
import Walnuts from '../../images/walnuts.png';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function Seeds() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Nuts and Seeds Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add ¼ cup of nuts and seeds over the salad for added crunch and flavor </p>
      </div>
      <Row className='px-5 '>
        <MainGen image={Almonds} title="Sliced Almonds" />
        <MainGen image={Sunflower} title="Sunflower Seeds" />
        <MainGen image={Walnuts} title="Walnuts" />

      </Row>

      <Link className='dec' to="/salad">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Salad
        </button>
      </Link>
    </Container>
  );
}

export default Seeds;