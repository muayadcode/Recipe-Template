import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

import Sweetener from '../images/sweet.png';
import acid from '../images/acid.png';
import Boo from '../images/boos.png';
import salt from '../images/s1.png';
import Mustard from '../images/mustard.png';
import fats from '../images/vo.png';
import Dressing from '../images/dressing.png';

//SALAD DRESSING PAGE AND Component
const ingredients = [
  {
    name: 'Add Oil',
    amount: '1/4 Cup',
    image: fats,
    alt:`img`,
    step: 'Add 1/4 Cup of Oil.',
    link: '/oil'
  },
  {
    name: 'Add Acid',
    amount: '1/4 Cup',
    image: acid,
    alt:`img`,
    step: 'Add 1/4 Cup of Acid.',
    link: '/acid'
  },
  {
    name: 'Add Sweetener',
    amount: '1 Tablespoon',
    image: Sweetener,
    alt:`img`,
    step: 'Add 1 Tablespoon of Sweetener.',
    link: '/sweetener'
  },
  {
    name: 'Add Fresh / Powdered Herbs',
    amount: 'To taste',
    image: Boo,
    alt:`img`,
    step: 'Add Fresh or Powdered herbs to taste.',
    link: '/herbs'
  },
  {
    name: 'Add Salt',
    amount: '1 Teaspoon',
    image: salt,
    alt:`img`,
    step: 'Add 1 Teaspoon of Salt.',
  },
  {
    name: 'Add Mustard',
    amount: '1 Tablespoon',
    image: Mustard,
    alt:`img`,
    step: 'Add 1 Tablespoon of Mustard.',
    link: '/mustard'
  },
  {
    name: 'Shake',
    amount: '',
    alt:`img`,
    image: Dressing,
    step: 'Shake Well and Serve over your salad',

   
   
  }
];

function IngredientSalad() {
  return (
    <Container>
      <div className="container-fluid d-flex align-items-center justify-content-center p-3">
        <h1 className='head p-3'>Salad Dressing Ingredients</h1>
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

export default IngredientSalad;
