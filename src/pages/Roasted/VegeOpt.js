import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import Broccoli from '../../images/broccoli.png';
import Carrots from '../../images/carrots.png';
import Potatoes from '../../images/Potatoes.png';
import Bell from '../../images/Peppers.png';
import Sweet from '../../images/sweetP.png';
import Sprouts from '../../images/Sprouts.png';
import Onions from '../../images/Onion.png';

import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function VegeOpt() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Vegetables Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: In a large bowl, add 3-4 cups of the selected vegetables</p>
      </div>
      <Row className='px-5 '>
        <MainGen image={Broccoli} title="Broccoli" />
        <MainGen image={Carrots} title="Carrots" />
        <MainGen image={Sprouts} title="Brussels Sprouts" />
        <MainGen image={Sweet} title="Sweet Potatoes" />
        <MainGen image={Potatoes} title="Potatoes" />
        <MainGen image={Bell} title="Bell Pepper" />
        <MainGen image={Onions} title="Onions" />
        <div className="spec1 row justify-content-center align-items-center"></div>
        <div className="spec1 row justify-content-center align-items-center"></div>

      </Row>

      <Link className='dec' to="/roasted-vegetables">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Roasted Vegetables
        </button>
      </Link>
    </Container>
  );
}

export default VegeOpt;