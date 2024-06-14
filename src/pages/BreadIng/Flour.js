import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 

import BreadF from '../../images/BreadF.png';
import purpose from '../../images/AllPurpose.png';

import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function Flour() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Flour Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add 1000g of flour and 20g of salt and mix till a dough forms. The sough should be tacky but not sloppy or dry</p>
      </div>
      <Row className='px-5 '>
        <div className="spec2 row justify-content-center align-items-center"></div>

        <MainGen image={BreadF} title="Bread Flour" />
        <MainGen image={purpose} title="All-Purpose Flour" />
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

export default Flour;