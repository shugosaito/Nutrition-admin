import React from "react";
import "./MealItem.css";

function MealItem({ meal }) {
  const month = meal.date.getMonth() + 1;
  const date = meal.date.getDate();
  const hour = meal.date.getHours();

  return (
    <div className="mealItem">
      <div className="mealItem__date">
        <div className="mealItem__date-flexWrapper">
          <span className="mealItem__month">{`${month}月`}</span>
          <span className="mealItem__day">{`${date}日`}</span>
        </div>
        <span className="mealItem__hour">{`${hour}時`}</span>
      </div>
      <p className="mealItem__food">{meal.food}</p>
      <p className="mealItem__calorie">{`${meal.calorie} kcal`}</p>
    </div>
  );
}

export default MealItem;
