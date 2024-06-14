import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

import Melted from '../images/meltOil.png';
import Yeast from '../images/yeast.png';
import sweet from '../images/sweet.png';
import Flour from '../images/flour.png';
import salt from '../images/s1.png';
import water from '../images/water.png';
import bread from '../images/breadC.png';
import shape from '../images/shape.png';
import bake from '../images/bake.png';


//BREAD PAGE AND Component


const ingredients = [
  {
    name: 'Add Water, Room temp',
    amount: '680 g',
    image: water,
    alt:`img`,
    step: 'In large bowl combine water and yeast. Stir to dissolve.',
  },
  {
    name: 'Add Yeast',
    amount: '15 ml',
    image: Yeast,
    alt:`img`,
    step: 'In large bowl combine water and yeast. Stir to dissolve.',
    link: '/yeast'
  },
  {
    name: 'Add Oil / Melted Butter',
    amount: '50 g',
    image: Melted,
    alt:`img`,
    step: 'Stir in oil / butter and maple syrup / honey till dissolved.',
    link: '/BreadOil'
  },
  {
    name: 'Add Maple Syrup / Honey',
    amount: '30 ml',
    image: sweet,
    alt:`img`,
    step: 'Stir in oil / butter and maple syrup / honey till dissolved.',
    link: '/HoneyBread'
  },
  {
    name: 'Add Flour',
    amount: '1000 g',
    image: Flour,
    alt:`img`,
    step: 'Add flour and salt and mix till a dough forms.',
    link: '/flour'

  },
  {
    name: 'Add Table Salt',
    amount: '20 g',
    image: salt,
    alt:`img`,
    step: 'Add flour and salt and mix till a dough forms.',
  },
  {
    name: 'Cover',
    amount: '',
    image: bread,
    alt:`img`,
    step: 'Cover and let sit at room temp until doubled in size.',
  },
  {
    name: 'Shape',
    amount: '',
    image: shape,
    alt:`img`,
    step: 'Shape into desired shape. Dough can be stored in fridge up to 2 weeks.',

  
  },
  {
    name: 'Bake',
    amount: '',
    image: bake,
    alt:`img`,
    step: 'Preheat the oven to 350 F. Bake bread for about 30-33 minutes.',
  }
];

function Bread() {
  return (
    <Container>
      <div className="container-fluid d-flex align-items-center justify-content-center p-3">
        <h1 className='head p-3'>Bread Ingredients</h1>
      </div>
      <div className="container-fluid d-flex py-4 align-items-center justify-content-center py-4">
        <p className='heads'>Ingredients are listed in order</p>
      </div>
      <Row className='px-5 '>
        {ingredients.map((ingredient, index) => (
          <Link key={index} className={`spec ${!ingredient.link && 'no-hover'}`} to={ingredient.link}>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-5 py-3 text-center">
                <img src={ingredient.image} alt={`${ingredient.name} ${ingredient.alt}`} className="img-fluid Soup" />
              </div>
              <div className="col-md-7 mob">
                <h1>{index + 1}. {ingredient.name}</h1>
                <p>{ingredient.amount}</p>
                <p className='steps'>{ingredient.step}</p>
              </div>
            </div>
          </Link>
        ))}
      </Row>
      <Link className='dec' to="/">
        <button className="btn mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Home
        </button>
      </Link>
    </Container>
  );
}

export default Bread;
