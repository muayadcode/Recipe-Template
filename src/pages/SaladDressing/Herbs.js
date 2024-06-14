import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import rosemary from '../../images/rosemary.png';
import garlic from '../../images/garlic.png';
import thyme from '../../images/thyme.png';
import Peppers from '../../images/Peppers.png';
import Cumin from '../../images/cumin.png';
import Chili from '../../images/cpowder.png';
import White from '../../images/Wpep.png';
import Ginger from '../../images/ginger.png';
import Onion from '../../images/Onion.png';
import Poppy from '../../images/Pseeds.png';

import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function Herbs() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Herbs Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add Fresh or Powdered herbs to taste </p>
      </div>
      <Row className='px-5 '>
        <MainGen image={garlic} title="Garlic" />
        <MainGen image={rosemary} title="Rosemary" />
        <MainGen image={thyme} title="Thyme" />
        <MainGen image={Peppers} title="Pepper" />
        <MainGen image={Cumin} title="Cumin" />
        <MainGen image={Chili} title="Chili Powder" />
        <MainGen image={White} title="White Pepper" />
        <MainGen image={Ginger} title="Ginger" />
        <MainGen image={Onion} title="Onion" />
        <MainGen image={Poppy} title="Poppy Seeds" />
        <div className="spec1 row justify-content-center align-items-center"></div>
        <div className="spec1 row justify-content-center align-items-center"></div>
      </Row>

      <Link className='dec' to="/Salad-Dressing">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Dressing 
        </button>
      </Link>
    </Container>
  );
}

export default Herbs;