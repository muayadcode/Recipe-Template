import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import ProteinOpt from '../../comps/ProteinOpt'; 
import Tofu  from '../../images/Tofu.png';
import beans from '../../images/beans.png';
import Meat from '../../images/meat.png';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function Protein() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Protein Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add 1-2 lbs of Protein, Remember to fully cook any meat before adding to soup</p>
      </div>
      <Row className='px-5 '>
        <ProteinOpt image={beans} title="Beans" />
        <ProteinOpt image={Tofu} title="Tofu" />
        <ProteinOpt image={Meat} title="Meat" />

    
      </Row>

      <Link className='dec' to="/soup">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Soup
        </button>
      </Link>
    </Container>
  );
}

export default Protein;
