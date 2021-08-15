import React from "react";
import "./MealsList.css";

import MealItem from "./MealItem";

function MealsList({ meals }) {
  if(meals.length === 0) {
    return <p className="mealsList-error">No meals added yet</p>
  }
  
  return (
    <ul className="mealsList">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}

export default MealsList;
