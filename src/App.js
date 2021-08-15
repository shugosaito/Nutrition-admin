import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import NewMeal from "./components/NewMeal/NewMeal";

function App() {
  //comes from user's input
  const [meals, setMeals] = useState([]);

  //add new meal to the array
  const addMeal = (meal) => {
    setMeals((prevValue) => [...prevValue, meal]);
  };

  return (
    <div className="App">
      <Header />
      <NewMeal addMeal={addMeal} />
      <Meals meals={meals} />
    </div>
  );
}

export default App;
