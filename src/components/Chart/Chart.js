import React from "react";
import "./Chart.css";

import ChartBar from "./ChartBar";

function Chart({ calorieData }) {
  const calorieValues = calorieData.map((data) => data.value);
  const maxValue = Math.max(...calorieValues);
  return (
    <div className="chart">
      {calorieData.map((data) => (
        <ChartBar key={data.label} calorieData={data} maxValue={maxValue} />
      ))}
    </div>
  );
}

export default Chart;
