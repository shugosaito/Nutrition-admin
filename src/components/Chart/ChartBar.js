import React from "react";
import "./ChartBar.css";

function ChartBar({ calorieData, maxValue }) {
  let barWidth = "0%";

  if (maxValue > 0) {
    barWidth = Math.round((calorieData.value / maxValue) * 100) + "%";
  }

  return (
    <div className="chartBar">
      <label className="chartBar__label">{calorieData.label}</label>
      <div className="chartBar__inner">
        <span
          className="chartBar__content"
          style={{ width: barWidth }}
        ></span>
      </div>
    </div>
  );
}

export default ChartBar;
