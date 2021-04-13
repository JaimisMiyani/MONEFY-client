import React, { useEffect, useState } from 'react'
import RadarChart from '../charts/RadarChart';
import DoughnutChart from '../charts/DoughnutChart';
import axios from 'axios';

const BudgetBreakdown = () => {

    const [budgets, setBudgets] = useState({});
    const [expenses, setExpenses] = useState({});
    const [income, setIncome] = useState(0);

    const fetchBudgets = async (config) => {
        try {
            const res = await axios.get('http://localhost:3000/api/budgets', config);
            // console.log(res.data);
            const newBudgets = res.data.data;
            delete newBudgets.userId;
            delete newBudgets.__v;
            delete newBudgets._id;
            setBudgets(newBudgets);
        } catch (error) {
            if (error.response.data.error === "Budgets are not defined yet ...") {

                const body = { groceries: 0, housing: 0, transportation: 0, clothing: 0, health: 0, disretionary: 0, education: 0, communication: 0, misc: 0 };

                try {
                    const res = await axios.post('http://localhost:3000/api/budgets', body, config);
                } catch (error) {
                    console.log(error.response.data.error);
                }
            }
            else {
                console.log(error.response.data.error);
            }
        }
    }

    const fetchExpenses = async (config) => {
        try {
            const res = await axios.get('http://localhost:3000/api/expenses', config);
            // console.log(res.data);
            const newExpenses = res.data.data;
            delete newExpenses.userId;
            delete newExpenses.__v;
            delete newExpenses._id;
            setExpenses(newExpenses);
        } catch (error) {
            if (error.response.data.error === "Expenses are not defined yet ...") {

                const body = { groceries: 0, housing: 0, transportation: 0, clothing: 0, health: 0, disretionary: 0, education: 0, communication: 0, misc: 0 };

                try {
                    const res = await axios.post('http://localhost:3000/api/expenses', body, config);
                } catch (error) {
                    console.log(error.response.data.error);
                }
            }
            else {
                console.log(error.response.data.error);
            }
        }
    }

    const fetchIncome = async (config) => {
        try {
            const res = await axios.get('http://localhost:3000/api/profile', config);
            // console.log(res.data);
            const newIncome = res.data.data.income;
            setIncome(newIncome)
        } catch (error) {
            console.log("Error is here")
            console.log(error.response.data.error);
        }
    }

    const fetchData = async () => {
        const config = {
            headers: {
                'Content-type': 'application/json',
                'token': localStorage.getItem('token')
            }
        };

        fetchBudgets(config);

        fetchExpenses(config);

        fetchIncome(config);

        console.log(budgets, expenses, income);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <RadarChart budgets={budgets} expenses={expenses} />
            <DoughnutChart budgets={budgets} income={income} chartTitle="Budgets"/>
            <DoughnutChart budgets={expenses} income={income} chartTitle="Expenses"/>
        </div>
    )
}

export default BudgetBreakdown
