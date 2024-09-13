import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);
  const filteredFoodList = !category || category === "All"
  ? food_list
  : food_list.filter(item=>item.category === category);

  return (
    <div className='food-display' id='food-display'>
      <div className='top'><h2>Top Dishes Near You</h2></div>
      <div className='food-display-list'>
      {filteredFoodList.map(item => (
        <FoodItem key={item._id} id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image} />
      ))}
      </div>
    </div>
  );
}

export default FoodDisplay