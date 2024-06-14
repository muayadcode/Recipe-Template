import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import LiquidOpt from '../../comps/LiquidOpt'; 
import Chicken  from '../../images/chick.png';
import Beef from '../../images/beef.png';
import water from '../../images/water.png';
import sauce from '../../images/sauce.png';
import milk from '../../images/milk.png';
import cmilk from '../../images/cmilk.png';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

function Liquid() {
  return (
    <Container>
      <div className="container-fluid my-3 d-flex align-items-center justify-content-center p-3">
        <h1 className='head'>Liquid Options</h1>
      </div>
      <div className="container-fluid d-flex align-items-center justify-content-center py-4">
        <p className='heads'>Prepare: Add 6-8 cups of base liquid and bring to a boil</p>
      </div>
      <Row className='px-5 '>
        <LiquidOpt image={Chicken} title="Prepared Chicken" />
        <LiquidOpt image={Beef} title="Beef / Vegetable stock" />
        <LiquidOpt image={water} title="Water" />
        <LiquidOpt image={sauce} title="Tomato Sauce" />
        <LiquidOpt image={milk} title="Milk" />
        <LiquidOpt image={cmilk} title="Coconut Milk" />

    
      </Row>

      <Link className='dec' to="/soup">
        <button className="btn  mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Soup
        </button>
      </Link>
    </Container>
  );
}

export default Liquid;
