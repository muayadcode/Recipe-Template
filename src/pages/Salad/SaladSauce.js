import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import MainGen from '../../comps/MainGen'; 
import Balsamic  from '../../images/Balsamic .png';
import Ranch from '../../images/ranch.png';
import Tahini from '../../images/tahini.png';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function SaladSauce() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Dressing Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Finally, drizzle your chosen dressing over the salad. Start with a small amount and add more as needed</p>
      </div>
      <Row className='px-5 '>
        <MainGen image={Balsamic } title="Balsamic Vinaigrette" />
        <MainGen image={Ranch} title="Ranch Dressing" />
        <MainGen image={Tahini} title="Lemon Tahini" />

      </Row>

      <Link className='dec' to="/salad">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Salad
        </button>
      </Link>
    </Container>
  );
}

export default SaladSauce;