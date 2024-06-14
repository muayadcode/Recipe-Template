import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import Jasmine from '../../images/rice.png';
import rice from '../../images/cookedRc.png';
import Quinoa from '../../images/Quinoa.png';


import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function RiceFey() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Noodles / Rice Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Serve the stir-fry hot over 2-3 cups of cooked noodles, rice, or quinoa if desired</p>
      </div>
      <Row className='px-5 '>
        <MainGen image={rice} title="Cooked Rice Noodles" />
        <MainGen image={Jasmine} title="Cooked Jasmine Rice" />
        <MainGen image={Quinoa} title="Cooked Quinoa" />

      </Row>

      <Link className='dec' to="/StirFry">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Fry
        </button>
      </Link>
    </Container>
  );
}

export default RiceFey;