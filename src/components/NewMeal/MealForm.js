import React, { useState } from "react";
import "./MealForm.css";

import MealFormAlert from "./MealFormAlert";

function MealForm({ saveMealData, stopEditing }) {
  //control each input value
  const [inputs, setInputs] = useState({ food: "", calorie: "", date: "" });

  //check whether each input has value or not
  const [alert, setAlert] = useState(false);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!inputs.food || !inputs.calorie || !inputs.date) {
      setAlert("true");
      return; //これがないとフォームが送信されてしまう→実行タイミングの問題？
    }

    saveMealData({
      food: inputs.food,
      calorie: inputs.calorie,
      date: new Date(inputs.date), //why need new Date?????
    });
    setInputs({ food: "", calorie: "", date: "" });
  };

  const alertHandler = () => {
    setAlert(false);
  };

  return (
    <div className="newMeal__wrapper">
      {alert && <MealFormAlert alertHandler={alertHandler} />}

      {!alert && (
        <form className="newMeal__form" method="POST" onSubmit={submitHandler}>
          <div className="newMeal__container">
            <label className="newMeal__label" htmlFor="food">
              Food
            </label>
            <input
              className="newMeal__input"
              type="text"
              name="food"
              value={inputs.food}
              onChange={inputHandler}
            />
          </div>
          <div className="newMeal__container">
            <label className="newMeal__label" htmlFor="calorie">
              Calorie
            </label>
            <input
              className="newMeal__input"
              type="number"
              min="0"
              step="1"
              name="calorie"
              value={inputs.calorie}
              onChange={inputHandler}
            />
          </div>

          <div className="newMeal__container">
            <label className="newMeal__label" htmlFor="date">
              Date
            </label>
            <input
              className="newMeal__input"
              type="date"
              min="2021-01-01"
              max="2021-12-31"
              name="date"
              value={inputs.date}
              onChange={inputHandler}
            />
          </div>

          <div className="newMeal__actions">
            <button
              className="newMeal__actions-cancel"
              type="button"
              onClick={stopEditing}
            >
              ×
            </button>
            <button className="newMeal__actions-add" type="submit">
              Add New Meal
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default MealForm;
