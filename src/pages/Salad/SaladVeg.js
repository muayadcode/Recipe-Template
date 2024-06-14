import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import Cucumbers from '../../images/Cucumbers.png';
import Tomatoes from '../../images/tom.png';
import peppers from '../../images/Peppers.png';
import Carrots from '../../images/carrots.png';
import Onion from '../../images/Onion.png';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function SaladVeg() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Vegetables Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add 3-4 cups of vegetables, prepare your vegetables by washing them and chopping them into desired sizes. Add them to the salad bowl </p>
      </div>
      <Row className='px-5 '>
        <MainGen image={Cucumbers} title="Cucumbers" />
        <MainGen image={Tomatoes} title="Tomatoes" />
        <MainGen image={peppers} title="Bell peppers" />
        <MainGen image={Carrots} title="Carrots"/>
        <MainGen image={Onion} title="Onions" />
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

export default SaladVeg;