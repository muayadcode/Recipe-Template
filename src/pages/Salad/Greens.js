import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import Lettuce from '../../images/lettuce.png';
import Spinach from '../../images/spinach.png';
import Arugula from '../../images/argu.png';
import Romaine from '../../images/rom.png';
import Kale from '../../images/kale.png';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function Greens() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Greens Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add 3-4 cups of greens, wash and dry your greens thoroughly. Tear them into bite-sized pieces and place them in a large salad bowl </p>
      </div>
      <Row className='px-5 '>
        <MainGen image={Lettuce} title="Lettuce" />
        <MainGen image={Spinach} title="Spinach" />
        <MainGen image={Arugula} title="Arugula" />
        <MainGen image={Romaine} title="Romaine Lettuce"/>
        <MainGen image={Kale} title="Kale" />
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

export default Greens;