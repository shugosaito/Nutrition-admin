import React, { useState } from "react";
import "./NewMeal.css";

import MealForm from "./MealForm";

function NewMeal({ addMeal }) {
  const [isEditing, setIsEditing] = useState(false);

  const saveMealData = (newData) => {
    const inputData = {
      ...newData,
      id: Date.now().toString(),
    };
    addMeal(inputData);
    setIsEditing(false);
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="newMeal">
      {!isEditing && (
        <button className="newMeal__edit" onClick={startEditing}>
          Add New Meal
        </button>
      )}
      {isEditing && (
        <MealForm saveMealData={saveMealData} stopEditing={stopEditing} />
      )}
    </div>
  );
}

export default NewMeal;
