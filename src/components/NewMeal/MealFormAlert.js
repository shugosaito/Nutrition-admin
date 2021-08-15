import React from "react";
import "./MealFormAlert.css";

function MealFormAlert({ alertHandler }) {
  return (
    <div className="alert">
      <div className="alert-bg">
        <p className="alert__message">Please Fill out Everything!!!</p>
        <button className="alert__button" onClick={alertHandler}>
          Back
        </button>
      </div>
    </div>
  );
}

export default MealFormAlert;
