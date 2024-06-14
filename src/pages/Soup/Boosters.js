import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import BoostersOP from '../../comps/BoostersOP'; 
import Liquid from '../../images/sauce.png';
import Fish from '../../images/fish.png';
import Soy from '../../images/soy.png';
import Sesame from '../../images/sesame.png';
import Miso from '../../images/miso.png';
import Lime from '../../images/lime.png';
import Basil from '../../images/basil.png';
import marjoram from '../../images/marjoram.png';
import thyme from '../../images/thyme.png';
import parsley from '../../images/parsley.png';
import Lovage from '../../images/Lovage.png';
import rosemary from '../../images/rosemary.png';
import coriander from '../../images/coriander.png';
import sage from '../../images/sage.png';
import Chilli from '../../images/chilli.png';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';


function Vegetables() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Flavour Boosters Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add 1-2 teaspoons of Flavour Boosters, start small and add more as you go!</p>
      </div>
      <Row  className='px-5 '>
        <BoostersOP image={Liquid} title="Tomato paste" />
        <BoostersOP image={Fish} title="Fish Sauce" />
        <BoostersOP image={Soy} title="Soy Sauce" />
        <BoostersOP image={Sesame} title="Sesame Oil" />
        <BoostersOP image={Miso} title="Miso Paste" />
        <BoostersOP image={Lime} title="Lime Juice" />
        <BoostersOP image={Basil} title="Herbs (Basil)" />
        <BoostersOP image={marjoram} title="Herbs (Marjoram)" />
        <BoostersOP image={thyme} title="Herbs (Thyme)" />
        <BoostersOP image={parsley} title="Herbs (Parsley)" />
        <BoostersOP image={Lovage} title="Herbs (Lovage)" />
        <BoostersOP image={rosemary} title="Herbs (Rosemary)" />
        <BoostersOP image={coriander} title="Herbs (Coriander)" />
        <BoostersOP image={sage} title="Herbs (Sage)" />
        <BoostersOP image={Chilli} title="Herbs (Chilli Peppers)" />

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

export default Vegetables;