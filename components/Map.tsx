import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 900],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
  ["Bangladesh", 400],
];

export function Map() {
  const options = {
    colorAxis: {
    //   colors: ["#e7711c", "#4374e0"], // Gradient from orange to blue
      colors: ["#27cf8c"], // single color
    },
    backgroundColor: '#0F172A', // Optional: Customize the background
    datalessRegionColor: "#ccc", // Optional: Color for regions with no data
    defaultColor: "#f0f0f0", // Optional: Default region color
  };

  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width={"400px"}
      height={"400px"}
      data={data}
      options={options}
    />
  );
}
