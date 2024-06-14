import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

import Proteins from '../images/pro.png';
import Vegetables from '../images/veg.png';
import arom from '../images/arom.png';
import pasta from '../images/pastars.png';
import garnish from '../images/frygarn.png';
import sauce from '../images/sauces.png';
import oil from '../images/vo.png';
import serve from '../images/fry.png';

//STIR FRY PAGE AND Component
const ingredients = [
  {
    name: 'Add Oil',
    amount: '1 Tablespoon ',
    image: oil,
    alt:`img`,
    step: 'Heat oil in a large skillet over medium-high heat.',
    link: '/OilFry'
  },

  {
    name: 'Add Proteins',
    amount: '1-2 lbs',
    image: Proteins,
    alt:`img`,
    step: 'Add the sliced protein and cook until browned.',
    link: '/ProtFry'
  },

  {
    name: 'Add Vegetables',
    amount: '2-3 Cups',
    image: Vegetables,
    alt:`img`,
    step: 'Cook vegetables until they are crisp-tender.',
    link: '/VegeFry'
  },
  {
    name: 'Add Aromatics',
    amount: '2-3 Cups',
    image: arom,
    alt:`img`,
    step: 'Add Aromatics. Stir-fry for about 30 seconds.',
    link: '/FryArom'
  },
  {
    name: 'Add Sauce',
    amount: '1/4 Cup',
    image: sauce,
    alt:`img`,
    step: 'Whisk together the sauce ingredients and add.',
    link:'/SauceFry'
  },
  {
    name: 'Add Noodles / Rice ',
    amount: '(optional)',
    image: pasta,
    alt:`img`,
    step: 'Serve the stir-fry hot over cooked noodles, rice.',
    link: '/RiceFry'
  },
  {
    name: 'Add Garnish',
    amount: 'To Taste',
    alt:`img`,
    image: garnish,
    step: 'Add your preferred garnish.',
    link:'/FryGarn'
  },
  {
    name: 'Serve',
    amount: '',
    alt:`img`,
    image: serve,
    step: 'Serve immediately and Enjoy! ',
  }
];

function Fry() {
  return (
    <Container>
      <div className="container-fluid d-flex align-items-center justify-content-center p-3">
        <h1 className='head p-3'>Stir Fry Ingredients</h1>
      </div>
      <div className="container-fluid d-flex py-4 align-items-center justify-content-center py-4">
        <p className='heads'>Ingredients / Steps are listed in order</p>
      </div>
      <Row className='px-5 '>
        {ingredients.map((ingredient, index) => (
          <Link key={index} className={`spec ${!ingredient.link && 'no-hover'}`} to={ingredient.link}>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-5 py-3 text-center">
                <img src={ingredient.image} alt= {`${ingredient.name} ${ingredient.alt}`} className="img-fluid Soup" />
              </div>
              <div className="col-md-7 mob">
                <h1>{index + 1}.  {ingredient.name}</h1>
                <p>{ingredient.amount}</p>
                <p className='steps'>{ingredient.step}</p>
              </div>
            </div>
          </Link>
        ))}

        <div className="spec1 row justify-content-center align-items-center"></div>

      </Row>
      <Link className='dec' to="/">
        <button className="btn mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Home
        </button>
      </Link>
    </Container>
  );
}

export default Fry;
