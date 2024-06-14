import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

import Proteins from '../images/pro.png';
import Vegetables from '../images/veg.png';
import cheese from '../images/cheese.png';
import seeds from '../images/seeds.png';
import dressing from '../images/dressing.png';
import Herbs from '../images/boos.png';
import greens from '../images/greens.png';
import serve from '../images/serve.png';

//SALAD PAGE AND Component
const ingredients = [
  {
    name: 'Add Greens',
    amount: '3-4 Cups',
    image: greens,
    alt:`img`,
    step: 'Wash your greens. Tear them into bite-sized pieces.',
    link: '/green'
  },
  {
    name: 'Add Vegetables',
    amount: '3-4 Cups',
    image: Vegetables,
    alt:`img`,
    step: 'Wash Vegetables and chop them into desired sizes.',
    link: '/SaladVegetables'
  },
  {
    name: 'Add Proteins',
    amount: '1-2 lbs',
    image: Proteins,
    alt:`img`,
    step: 'Fully cook any meat before adding.',
    link: '/SaladProtein'
  },
  {
    name: 'Add Cheese',
    amount: 'To taste',
    image: cheese,
    alt:`img`,
    step: 'Choose your cheese and crumble it over the salad.',
    link: '/SaladCheese'
  },
  {
    name: 'Add Herbs',
    amount: '1/2 Cup',
    image: Herbs,
    alt:`img`,
    step: 'Add ½ cup of herbs to your salad.',
    link:'/SaladHerbs'
  },
  {
    name: 'Add Nuts and Seeds',
    amount: '1/4 Cup',
    image: seeds,
    alt:`img`,
    step: 'Sprinkle nuts and seeds over the salad.',
    link: '/Seeds'
  },
  {
    name: 'Add Dressing',
    amount: '',
    alt:`img`,
    image: dressing,
    step: 'Finally, drizzle your chosen dressing over the salad.',
    link:'/SaladSauce'
  },
  {
    name: 'Serve',
    amount: '',
    alt:`img`,
    image: serve,
    step: 'Serve immediately and Enjoy! ',
  }
];

function Salad() {
  return (
    <Container>
      <div className="container-fluid d-flex align-items-center justify-content-center p-3">
        <h1 className='head p-3'>Salad Ingredients</h1>
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

export default Salad;
