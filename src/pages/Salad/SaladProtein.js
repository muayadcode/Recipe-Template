import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import eggs from '../../images/eggs.png';
import chicken from '../../images/chick.png';
import Beans from '../../images/beans.png';
import Tofu from '../../images/Tofu.png';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function SaladProtein() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Protein Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add 1-2 lbs of protein, If using proteins like chicken or tofu, cook them according to your preference, then slice or cube them and add to the salad </p>
      </div>

      <Row className='px-5 '>
        <MainGen image={chicken} title="Grilled Chicken Breast" />
        <MainGen image={eggs} title="Hard-boiled eggs" />
        <MainGen image={Tofu} title="Tofu" />
        <MainGen image={Beans} title="Beans" />
        <div className="spec1 row justify-content-center align-items-center"></div>
        <div className="spec1 row justify-content-center align-items-center"></div>
      </Row>

      <Link className='dec' to="/salad">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Salad
        </button>
      </Link>
    </Container>
  );
}

export default SaladProtein;