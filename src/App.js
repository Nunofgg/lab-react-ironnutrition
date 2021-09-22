import logo from './logo.svg';
import './App.css';
import foodsJSON from "./foods.json";
import React, {useState} from "react";
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsJSON);

  const addFood = (newFood) => setFoods([...foods, newFood]);
  const deleteFood = (name) => setFoods(foods.filter((food) => food.name !== name));


  return (
    <div className="App">
      <h1>Add Food Entry</h1>
      <AddFoodForm addFood={addFood} className="addFoodForm" />
      
      <h1>Food List</h1>
      {foods.map((food) => {
        return <FoodBox food={food} deleteFood={deleteFood}/>;
      })}
      {foods.length === 0 && <h2>Oooops! There is no more content.</h2>}
    </div>
  );
}

export default App;
