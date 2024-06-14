import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import Feta from '../../images/fetta.png';
import cheese from '../../images/cheese.png';
import Goat from '../../images/goat.png';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function SaladCheese() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Cheese Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Choose the right amount for you, add cheese and crumble or grate it over the salad </p>
      </div>
      <Row className='px-5 '>
        <MainGen image={Feta} title="Feta Cheese" />
        <MainGen image={cheese} title="Cheddar Cheese" />
        <MainGen image={Goat} title="Goat Cheese" />

      </Row>

      <Link className='dec' to="/salad">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Salad
        </button>
      </Link>
    </Container>
  );
}

export default SaladCheese;