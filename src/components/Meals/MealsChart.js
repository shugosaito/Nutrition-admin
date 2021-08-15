import React from "react";
import "./MealsChart.css";

import Chart from "../Chart/Chart";

function MealsChart({ meals }) {
  const mealsCalorieData = [
    { label: 1, value: 0 },
    { label: 2, value: 0 },
    { label: 3, value: 0 },
    { label: 4, value: 0 },
    { label: 5, value: 0 },
    { label: 6, value: 0 },
    { label: 7, value: 0 },
    { label: 8, value: 0 },
    { label: 9, value: 0 },
    { label: 10, value: 0 },
    { label: 11, value: 0 },
    { label: 12, value: 0 },
    { label: 13, value: 0 },
    { label: 14, value: 0 },
    { label: 15, value: 0 },
    { label: 16, value: 0 },
    { label: 17, value: 0 },
    { label: 18, value: 0 },
    { label: 19, value: 0 },
    { label: 20, value: 0 },
    { label: 21, value: 0 },
    { label: 22, value: 0 },
    { label: 23, value: 0 },
    { label: 24, value: 0 },
    { label: 25, value: 0 },
    { label: 26, value: 0 },
    { label: 27, value: 0 },
    { label: 28, value: 0 },
    { label: 29, value: 0 },
    { label: 30, value: 0 },
    { label: 31, value: 0 },
  ];

  for (const meal of meals) {
    const mealDay = meal.date.getDate() - 1;
    mealsCalorieData[mealDay].value = meal.calorie;
  }
  console.log(mealsCalorieData);

  return <Chart calorieData={mealsCalorieData} />;
}

export default MealsChart;
