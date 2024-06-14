// Home.js
import React from 'react';
import { Row } from 'react-bootstrap';
import soup from '../images/soup.png';
import saladDress from '../images/dressing.png';
import bread from '../images/bread.png';
import fry from '../images/fry.png';
import salad from '../images/salad.png';
import Roasted from '../images/roasted.png';
import cover from '../images/cover.png'; // Import the cover image
import DishItem from '../comps/Dish'; // Import the DishItem component



//MAIN HOME PAGE


function Home() {
  // Define an array of dish objects with their corresponding routes
  const dishes = [
    { imageSrc: soup, altText: 'Soup img' , dishName: 'Soup', dishRoute: '/soup' },
    { imageSrc: salad, altText: 'Salad img' , dishName: 'Salad', dishRoute: '/salad' },
    { imageSrc: saladDress, altText: 'Salad Dressing img', dishName: 'Salad Dressing ', dishRoute: '/Salad-Dressing' },
    { imageSrc: bread, altText: 'bread img', dishName: 'Bread', dishRoute: '/bread' },
    { imageSrc: fry, altText: 'fry img', dishName: 'Stir Fry', dishRoute: '/StirFry' },
    { imageSrc: Roasted, altText: 'Roasted img', dishName: 'Roasted Vegetables', dishRoute: '/roasted-vegetables' },
  ];

  return (
    <div>
    
      <div className="banner-container">
        <img src={cover} alt="Cover img" className="cover" />
      </div>
      <Row className='row1 px-5 my-5'>
        {/* Map over the dishes array and render DishItem component for each dish */}
        {dishes.map((dish, index) => (
          <DishItem
            key={index}
            imageSrc={dish.imageSrc}
            altText={dish.altText}
            dishName={dish.dishName}
            dishRoute={dish.dishRoute}
          />
        ))}
      </Row>
    </div>
  );
}

export default Home;
