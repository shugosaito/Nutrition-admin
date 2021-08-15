import React, { useState } from "react";
import "./Meals.css";

import MealsFilter from "./MealsFilter";
import MealsList from "./MealsList";
import MealsChart from "./MealsChart";

function Meals({ meals }) {
  //getMonth() based on 0
  //stringに変形しないとうまくfilteringできないため
  const presentMonth = (new Date().getMonth() + 1).toString(); 
  const [month, setMonth] = useState(presentMonth);

  const monthFilterHandler = (selectedMonth) => {
    setMonth(selectedMonth);
  };

  //create an array for filtered meals
  const filteredMeals = meals.filter((meal) => {
    const filteredMonth = meal.date.getMonth() + 1;
    return filteredMonth.toString() === month;
  });

  return (
    <div className="meals">
      <MealsFilter month={month} monthFilterHandler={monthFilterHandler} />
      <MealsList meals={filteredMeals} />
      <MealsChart meals={filteredMeals} />
    </div>
  );
}

export default Meals;
