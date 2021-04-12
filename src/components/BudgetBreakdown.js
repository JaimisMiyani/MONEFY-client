import React, { useEffect, useState } from 'react'
import RadarChart from '../charts/RadarChart';
import axios from 'axios';

const BudgetBreakdown = () => {

    const [budgets, setBudgets] = useState({});
    const [expenses, setExpenses] = useState({});

    const fetchBudgets = async (config) => {
        try {
            const res = await axios.get('http://localhost:3000/api/budgets', config);
            console.log(res.data);
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
                    console.log("here", error.response.data.error);
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
            console.log(res.data);
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

    const fetchData = async () => {
        const config = {
            headers: {
                'Content-type': 'application/json',
                'token': localStorage.getItem('token')
            }
        };

        fetchBudgets(config);

        fetchExpenses(config);

        console.log(budgets, expenses);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <RadarChart budgets={budgets} expenses={expenses} />
        </div>
    )
}

export default BudgetBreakdown
