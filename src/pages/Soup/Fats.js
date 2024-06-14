import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import FatsComp from '../../comps/FatsComp'; 
import vo from '../../images/vo.png';
import co from '../../images/co.png';
import Butter from '../../images/b1.png';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function Fats() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Fat Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add 2-3 Tablespoons and heat fat in large soup pot - medium heat</p>
      </div>
      <Row className='px-5 '>
        <FatsComp image={vo} title="Vegetable Oil" />
        <FatsComp image={co} title="Coconut Oil" />
        <FatsComp image={Butter} title="Butter" />
      </Row>

      <Link className='dec' to="/soup">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Soup
        </button>
      </Link>
    </Container>
  );
}

export default Fats;