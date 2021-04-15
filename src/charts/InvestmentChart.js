import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Redirect } from 'react-router-dom';

const InvestmentChart = ({ ages, yearlyReturn, investment, surpassed, finalAmt, handleClick }) => {

  const options = {
    maintainAspectRatio: true,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            // width: 150,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Investment Growth",
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

  const data = {
    labels: ages.map((age) => `${age}`),

    datasets: [
      {
        label: "Investment Worth Each Year",
        backgroundColor: "#18eda4",
        hoverBackgroundColor: "#19ffaf",
        data: yearlyReturn.map((amount) => amount),
      },
    ],
  };

  const adjustedInvestment = () => {
    if (surpassed) return (<>exceeded several budgets. After calculating any excess spending and factoring in any surpluses, we have identified an investible excess of roughly {investment}</>)

    return (<>stayed very close to your budgets! After calculating any excess spending and savings surplus, we have identified an investible excess of roughly {investment}</>)
  }

  return (
    <div>
      <p><br />We have determined that this month you have {adjustedInvestment()} If you were to cut back and invest that excess in a low risk index fund every month, it could grow to a {finalAmt} return by the time you turn 60. </p>
      <Bar width={400} height={200} data={data} options={options} /><br />
      <p>Ready to learn more about investing? For more information on this graph - click below! We’ve also got you covered with our handpicked guides and resources! </p>
      <button className="btn btn-success p" onClick={(e) => handleClick(e)}>Investment Resources</button>
    </div>
  )
}

export default InvestmentChart
