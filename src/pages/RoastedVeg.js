import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

import Vegetables from '../images/veg.png';
import arom from '../images/arom.png';
import salt from '../images/salt.png';
import Herbs from '../images/boos.png';
import oil from '../images/vo.png';
import oven from '../images/OVEN.png';
import Spread from '../images/spread.png';
import serve from '../images/roasted.png';
import roastedoven from '../images/roastedoven.png';

//Roasted Veg PAGE AND Component
const ingredients = [


  {
    name: 'Add Vegetables',
    amount: '3-4 Cups',
    image: Vegetables,
    alt:`img`,
    step: 'In a large bowl, clean and add vegetables.',
    link: '/vegetable-options'
  },

  {
    name: 'Add Oil',
    amount: '1/4 Cup',
    image: oil,
    alt:`img`,
    step: 'add oil over the vegetables and toss until evenly coated.',
    link: '/Vegetable-Oil'
  },


  {
    name: 'Add Aromatics',
    amount: '1-2 Cups',
    image: arom,
    alt:`img`,
    step: 'Add chosen aromatics to the vegetables.',
    link: '/Vegetable-Aromatics'
  },
  
  {
    name: 'Add Herbs/ Spices',
    amount: '1 Tablespoon',
    image: Herbs,
    alt:`img`,
    step: 'Toss vegetables with selected herbs and spices.',
    link:'/Vegetable-Herbs'
  },
  {
    name: 'Add Salt and Pepper',
    amount: '1 Teaspoon',
    image: salt,
    alt:`img`,
    step: 'Sprinkle over the vegetables and toss again.',
    link: '/salt-pepper'
  },
  {
    name: 'Preheat Oven',
    amount: '',
    alt:`img`,
    image: oven,
    step: 'Preheat your oven to 400°F and line a baking sheet.',
  },

  {
    name: 'Spread',
    amount: '',
    alt:`img`,
    image: Spread,
    step: 'Spread the seasoned vegetables on the baking sheet.',
  },

  {
    name: 'Roast',
    amount: '',
    alt:`img`,
    image: roastedoven,
    step: 'Place in the oven and roast the vegetables for 25-30 minutes.',
  },
  {
    name: 'Serve',
    amount: '',
    alt:`img`,
    image: serve,
    step: 'Remove the roasted vegetables from the oven and enjoy !',
  },
];

function RoastedVeg() {
  return (
    <Container>
      <div className="container-fluid d-flex align-items-center justify-content-center p-3">
        <h1 className='head p-3'>Roasted Vegetables Ingredients</h1>
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



      </Row>
      <Link className='dec' to="/">
        <button className="btn mt-3">
          <ArrowLeftCircleFill color="#FFFF" size={30} className="me-2 arrow" /> Back to Home
        </button>
      </Link>
    </Container>
  );
}

export default RoastedVeg;
