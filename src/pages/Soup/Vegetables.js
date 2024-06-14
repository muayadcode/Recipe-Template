import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import VegComp from '../../comps/VegComp'; 
import zucchini from '../../images/zucchini.png';
import Peppers from '../../images/Peppers.png';
import peas from '../../images/peas.png';
import beans from '../../images/beans.png';
import kale from '../../images/kale.png';
import spinach from '../../images/spinach.png';
import broccoli from '../../images/broccoli.png';
import cauliflower from '../../images/cauliflower.png';
import Potatoes from '../../images/Potatoes.png';
import SweetP from '../../images/sweetP.png';
import Turnip from '../../images/Turnip.png';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';


function Vegetables() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Vegetables Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add 3-4 cups of vegetables to cook for a few minutes, being mindful
         of what will take longer or shorter to cook and how big a "bite size" is for you</p>
      </div>
      <Row  className='px-5 '>
        <VegComp image={zucchini} title="Zucchini" />
        <VegComp image={Peppers} title="Bell Peppers" />
        <VegComp image={peas} title="Peas" />
        <VegComp image={beans} title="Beans" />
        <VegComp image={kale} title="Kale" />
        <VegComp image={spinach} title="Spinach" />
        <VegComp image={broccoli} title="Broccoli" />
        <VegComp image={cauliflower} title="Cauliflower" />
        <VegComp image={Potatoes} title="Potatoes" />
        <VegComp image={Turnip} title="Turnip" />
        <VegComp image={SweetP} title="Sweet Potatoes" />
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