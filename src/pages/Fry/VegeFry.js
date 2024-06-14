import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import Carrots from '../../images/carrots.png';
import Peppers from '../../images/Peppers.png';
import Broccoli from '../../images/broccoli.png';
import mushrooms from '../../images/mush.png';
import Corn from '../../images/corn.png';

import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function VegeFry() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Vegetables Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: In the same skillet, add a bit more oil if needed and stir-fry 2-3 cups of the vegetables until they are crisp-tender, about 3-4 minutes</p>
      </div>
      <Row className='px-5 '>
        <MainGen image={Peppers} title="Bell Peppers" />
        <MainGen image={Carrots} title="Carrots" />
        <MainGen image={Broccoli} title="Broccoli" />
        <MainGen image={mushrooms} title="Mushrooms" />
        <MainGen image={Corn} title="Baby Corn" />
        <div className="spec1 row justify-content-center align-items-center"></div>

      </Row>

      <Link className='dec' to="/StirFry">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Fry
        </button>
      </Link>
    </Container>
  );
}

export default VegeFry;