import React, { useState } from "react";
import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.items.map((datapoint) => datapoint.value);
  let totalMaximum = 0;
  for (let item of dataPointValues) totalMaximum += Number(item);
  return (
    <div className="chart">
      {props.items.map((item) => {
        return (
          <ChartBar
            key={item.label}
            value={item.value}
            label={item.label}
            maxValue={totalMaximum}
          />
        );
      })}
    </div>
  );
};
export default Chart;
