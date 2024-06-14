import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

import veg from '../images/veg.png';
import arom from '../images/arom.png';
import pro from '../images/pro.png';
import Boo from '../images/boos.png';
import sauce from '../images/sauce.png';
import fats from '../images/fats.png';
import exrea from '../images/extra.png';
import Garnish from '../images/garnish.png';

//SOUP PAGE AND Component

const ingredients = [
  {
    name: 'Fats',
    amount: '2-3 Tablespoons',
    image: fats,
    alt:`img`,
    step: 'Heat fat in large soup pot.',
    link: '/fats'
  },
  {
    name: 'Aromatics',
    amount: '3-4 Cups',
    image: arom,
    alt:`img`,
    step: 'Add aromatics, cook briefly.',
    link: '/aromatics'
  },
  {
    name: 'Vegetables',
    amount: '2-3 Cups',
    image: veg,
    alt:`img`,
    step: 'Add vegetables to cook for a few minutes.',
    link: '/vegetables'
  },
  {
    name: 'Protein',
    amount: '1-2 lbs',
    image: pro,
    alt:`img`,
    step: 'Fully cook any meat before adding.',
    link: '/protein'
  },
  {
    name: 'Flavour Boosters',
    amount: '1-2 Teaspoons',
    image: Boo,
    alt:`img`,
    step: 'Add Flavour boosters to the mix.',
    link: '/boosters'
  },
  {
    name: 'Liquid',
    amount: '6-8 Cups',
    image: sauce,
    alt:`img`,
    step: 'Add Base liquid and boil.',
    link: '/liquid'
  },
  {
    name: 'Extras',
    amount: '1/2 to 3/4 Cups',
    image: exrea,
    alt:`img`,
    step: 'Add extras and simmer to cook.',
    link: '/extras'
  },
  {
    name: 'Garnish',
    amount: 'To taste',
    image: Garnish,
    alt:`img`,
    step: 'Add your favourite garnish.',
    link: '/garnish'
  }
];

function Ingredients() {
  return (
    <Container>
      <div className="container-fluid d-flex align-items-center justify-content-center p-2">
        <h1 className='head p-3'>Soup Ingredients</h1>
      </div>
      <div className="container-fluid d-flex py-4 align-items-center justify-content-center py-4">
        <p className='heads'>Ingredients / Steps are listed in order</p>
      </div>
      <Row className='px-5 '>
        {ingredients.map((ingredient, index) => (
          <Link key={index} className={`spec ${!ingredient.link && 'no-hover'}`} to={ingredient.link}>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-5 py-3 text-center">
                <img src={ingredient.image} alt={`${ingredient.name} ${ingredient.alt}`} className="img-fluid Soup" />
              </div>
              <div className="col-md-7 mob">
                <h1>{index + 1}. Add {ingredient.name}</h1>
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

export default Ingredients;
