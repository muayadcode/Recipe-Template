import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import Teriyaki from '../../images/TER.png';
import hoisin from '../../images/hoi.png';
import Soy from '../../images/soy.png';

import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function SauceFry() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Sauce Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: In a small bowl add ¼ cup and whisk together the sauce ingredients (soy sauce/teriyaki sauce/hoisin sauce)</p>
      </div>
      <Row className='px-5 '>
        <MainGen image={Soy} title="Soy Sauce" />
        <MainGen image={Teriyaki} title="Teriyaki Sauce" />
        <MainGen image={hoisin} title="Hoisin Sauce" />

      </Row>

      <Link className='dec' to="/StirFry">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Fry
        </button>
      </Link>
    </Container>
  );
}

export default SauceFry;