import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import AromaticOption from '../../comps/AromaticOption'; 
import Onions from '../../images/Onion.png';
import Shallots from '../../images/sha.png';
import Leeks from '../../images/leek.png';
import Garlic from '../../images/garlic.png';
import Celery from '../../images/celery.png';
import Ginger from '../../images/ginger.png';
import Carrots from '../../images/carrots.png';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function Arom() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Aromatics Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add 3-4 cups of aromatics to cook for a few minutes</p>
      </div>
      <Row className='px-5 '>
        <AromaticOption image={Onions} title="Onions" />
        <AromaticOption image={Shallots} title="Shallots" />
        <AromaticOption image={Leeks} title="Leeks" />
        <AromaticOption image={Garlic} title="Garlic" />
        <AromaticOption image={Celery} title="Celery" />
        <AromaticOption image={Ginger} title="Ginger" />
        <AromaticOption image={Carrots} title="Carrots" />
        <div className="spec1 row justify-content-center align-items-center"></div>
        <div className="spec1 row justify-content-center align-items-center"></div>

    
      </Row>
      <Link className='dec' to="/soup">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Soup
        </button>
      </Link>
    </Container>
  );
}

export default Arom;
