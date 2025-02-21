import React from "react";
import { Chart } from "react-google-charts";
const GoogleChartComponent =()=>{
    const data = [
        ["Region", "Hours per Day"],
        ["Dhaka", 9],
        ["Khulna", 2],
        ["Madaripur", 2],
        ["Jhenaidah", 2],
        ["Faridpur", 7],
      ];
    
      const options = {
        title: "Order Region by district",
      };
      return (
        <div className=" px-2">
            <h4 className="text-gray-900 text-xl dark:text-gray-300 py-2">Order Region</h4>
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