import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import peanuts from '../../images/pea.png';
import Seeds from '../../images/seeds.png';
import Avocado from '../../images/avo.png';
import Yogurt from '../../images/youg.png';
import cilantro from '../../images/cilantro.png';
import parsley from '../../images/parsley.png';
import Cheese from '../../images/cheese.png';
import croutons from '../../images/croutons.png';
import salt from '../../images/salt.png';

import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function Garnish() {
  return (
    <Container fluid>
      <div className="my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Garnish Options</h1>
      </div>
      <div className="d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add your favourite Garnish and Serve !</p>
      </div>
     

      <Row className='px-5'>
     
        <MainGen image={peanuts} title="Chopped Peanuts" />
        <MainGen image={Seeds} title="Nuts and Seeds" />
        <MainGen image={Avocado} title="Sliced Avocado" />
        <MainGen image={Yogurt} title="Yogurt /Sour Cream" />
        <MainGen image={cilantro} title="Cilantro" />
        <MainGen image={parsley} title="Parsley" />
        <MainGen image={Cheese} title="Shredded Cheese" />
        <MainGen image={croutons} title="Croutons" />
        <MainGen image={salt} title="Salt /Pepper" />
        
        
      </Row>

      
      <Link className='dec' to="/soup">
        <button className="btn mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Soup
        </button>
      </Link>
    </Container>
  );
}

export default Garnish;
