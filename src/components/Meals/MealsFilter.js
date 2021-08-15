import React from "react";
import "./MealsFilter.css";

function MealsFilter({ month, monthFilterHandler }) {
  //monthFilterHandlerには引数が必要なため、この関数でワンクッション置いている
  const filterChangeHandler = (e) => {
    monthFilterHandler(e.target.value);
  };

  return (
    <div className="mealsFilter">
      <lable className="mealsFilter__label" htmlFor="month">Select Month</lable>
      <select value={month} onChange={filterChangeHandler}>
        <option name="month" value="1">
          1
        </option>
        <option name="month" value="2">
          2
        </option>
        <option name="month" value="3">
          3
        </option>
        <option name="month" value="4">
          4
        </option>
        <option name="month" value="5">
          5
        </option>
        <option name="month" value="6">
          6
        </option>
        <option name="month" value="7">
          7
        </option>
        <option name="month" value="8">
          8
        </option>
        <option name="month" value="9">
          9
        </option>
        <option name="month" value="10">
          10
        </option>
        <option name="month" value="11">
          11
        </option>
        <option name="month" value="12">
          12
        </option>
      </select>
    </div>
  );
}

export default MealsFilter;
