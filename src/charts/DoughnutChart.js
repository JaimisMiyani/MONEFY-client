import React from 'react';
import { Doughnut } from "react-chartjs-2";
  
export default function DoughnutChart({ budgets, income, chartTitle }) {

  const options = {
    maintainAspectRatio: true,
    aspectRatio: 1.6,
    centerText: {
      display: true,
      text: {income},
    //   fontSize : 10,
      backgroundColor : '#00ff00'
    },
    legend: {
      position: "left",
    },
    title: {
      display: true,
      text: chartTitle,
      fontSize: 20,
    },
    hover: {
      mode: "nearest",
      intersect: false,
    },
    tooltips: {
      custom: false,
      mode: "nearest",
      intersect: false,
    },
    animation: {
      duration: 3000
    }
  };

//   console.log("hello")
//   console.log("income", income)

  const data = {

    labels: ['groceries', 'housing', 'transportation', 'clothing', 'health', 'disretionary', 'education', 'communication', 'misc'],

    datasets: [
        {
            label: "Budget",
            backgroundColor: ["#18eda4",'#6c0ef0', '#f5776c', '#c973c9', '#ed072a', '#e6c78e', '#55a7e6', '#993300', '#b38f00'],
            hoverBackgroundColor: ["#19ffaf", '#a463ff', '#ff695c', '#ed8eed', '#ff0329', '#fcdca2', '#63b4f2', '#cc4400', '#e6b800'],
            data: [budgets.groceries, budgets.housing, budgets.transportation, budgets.clothing, budgets.health, budgets.disretionary, budgets.education, budgets.communication, budgets.misc]
        },
    ],
  };

  return (
    <div style={{ position: 'relative'}}>
        <Doughnut data={data} options={options} width={null} height={null}/>
        <div style={{ position: 'absolute', width: '100%', top: '55%', left: 70, textAlign: 'center', lineHeight: '20px', fontSize : '20px'}}>
            <span><b>
                {income}&#x20B9;
            </b></span>
        </div>
    </div>
    // <>
    //     <Doughnut height={null} width={null} data={data} options={options} />
    // </>
  );
}