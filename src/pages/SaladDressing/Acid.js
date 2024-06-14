import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import lime from '../../images/lime.png';
import Lemon from '../../images/LEMON.png';
import WhiteV from '../../images/WV.png';
import RiceV from '../../images/Rv.png';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function Acid() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Acid Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add ¼ cup of acid </p>
      </div>
      <Row className='px-5 '>
        <MainGen image={Lemon} title="Lemon Juice" />
        <MainGen image={lime} title="Lime Juice" />
        <MainGen image={RiceV} title="Rice Vinegar" />
        <MainGen image={WhiteV} title="White Vinegar" />
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

export default Acid;