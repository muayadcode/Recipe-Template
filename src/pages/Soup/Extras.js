import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import ExtrasOpt from '../../comps/ExtrasOpt'; 
import Pasta from '../../images/pasta.png';
import Rice from '../../images/rice.png';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function Extras() {
  return (
    <Container fluid>
      <div className="my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Extras Options</h1>
      </div>
      <div className="d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add ½ to ¾ cups of extras and simmer to cook, may need to add additional liquid if too much is soaked up</p>
      </div>
     

      <Row className='px-5'>
     
      <div className="spec2 row justify-content-center align-items-center"></div>
        <ExtrasOpt image={Rice} title="Rice" />
        <ExtrasOpt image={Pasta} title="Pasta" />
        
        <div className="spec2 row justify-content-center align-items-center"></div>
      </Row>

      
      <Link className='dec' to="/soup">
        <button className="btn mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Soup
        </button>
      </Link>
    </Container>
  );
}

export default Extras;
