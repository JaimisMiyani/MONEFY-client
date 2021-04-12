import React from 'react';
import { Radar } from "react-chartjs-2";

const options = {
    maintainAspectRatio: true,
    aspectRatio: 1.2,
    title: {
        display: true,
        text: "Comparison btw Budgets and Expenses",
        fontSize: 20,
    },
    animation: {
        duration: 3000
    }
};

export default function RadarChart({ budgets, expenses }) {

    // console.log(budgets, expenses);

    // console.log(budgets);

    const data = {
        labels: ['groceries', 'housing', 'transportation', 'clothing', 'health', 'disretionary', 'education', 'communication', 'misc'],

        datasets: [
            {
                label: "Budget",
                backgroundColor: 'rgba(25, 300, 0, 0.3)',
                data: [budgets.groceries, budgets.housing, budgets.transportation, budgets.clothing, budgets.health, budgets.disretionary, budgets.education, budgets.education, budgets.communication, budgets.misc]
            },
            {
                label: "Expense",
                backgroundColor: 'rgba(300, 0, 0, 0.3)',
                data: [expenses.groceries, expenses.housing, expenses.transportation, expenses.clothing, expenses.health, expenses.disretionary, expenses.education, expenses.education, expenses.communication, expenses.misc]
            }
        ],
    };
    return (
        <>
            <Radar height={null} width={null} data={data} options={options} />
        </>
    );
}