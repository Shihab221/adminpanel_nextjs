import React from "react";
import { Chart } from "react-google-charts";
const GoogleChartComponent =()=>{
    const data = [
        ["Task", "Hours per Day"],
        ["Work", 9],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
      ];
    
      const options = {
        title: "My Daily Activities",
      };
      return (
        <div>
            <h4>Order Region</h4>
            <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"400px"}
          height={"400px"}
        />
        </div>
        
      );
    }

export default GoogleChartComponent;