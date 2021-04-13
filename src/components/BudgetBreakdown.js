import React, { useEffect, useState } from 'react'
import RadarChart from '../charts/RadarChart';
import DoughnutChart from '../charts/DoughnutChart';
import axios from 'axios';
import InvestmentChart from '../charts/InvestmentChart';

const BudgetBreakdown = () => {

    const [budgets, setBudgets] = useState({});
    const [expenses, setExpenses] = useState({});
    const [income, setIncome] = useState(0);
    const [age, setAge] = useState(0);
    const [ages, setAges] = useState([]);
    const [yearlyReturn, setYearlyReturn] = useState([]);

    const fetchBudgets = async (config) => {
        try {
            const res = await axios.get('http://localhost:3000/api/budgets', config);
            // console.log(res.data);
            const newBudgets = res.data.data;
            setBudgets(newBudgets);
        } catch (error) {
            if (error.response.data.error === "Budgets are not defined yet ...") {

                const body = { groceries: 0, housing: 0, transportation: 0, clothing: 0, health: 0, disretionary: 0, education: 0, communication: 0, misc: 0 };

                try {
                    const res = await axios.post('http://localhost:3000/api/budgets', body, config);
                    console.log(res);
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
            console.log(res.data);
            const newExpenses = res.data.data;
            setExpenses(newExpenses);
        } catch (error) {
            if (error.response.data.error === "Expenses are not defined yet ...") {

                const body = { groceries: 0, housing: 0, transportation: 0, clothing: 0, health: 0, disretionary: 0, education: 0, communication: 0, misc: 0 };

                try {
                    const res = await axios.post('http://localhost:3000/api/expenses', body, config);
                    console.log(res);
                } catch (error) {
                    console.log(error.response.data.error);
                }
            }
            else {
                console.log(error.response.data.error);
            }
        }
    }

    const fetchProfile = async (config) => {

        const body = { age, income };

        try {
            const res = await axios.get('http://localhost:3000/api/profile', config);
            console.log(res.data);
            setAge(res.data.data.age);
            setIncome(res.data.data.income);
        } catch (error) {
            console.log(error.response.data.error);
            if (error.response.data.error === 'Profile is not defined yet ...') {
                try {
                    const res = await axios.post('http://localhost:3000/api/profile', body, config);
                    console.log(res);
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

        await fetchBudgets(config);

        await fetchExpenses(config);

        await fetchProfile(config);

        calculateReturn();

        console.log(budgets, expenses, income);
    }

    const calculateReturn = () => {

        const newAges = [], newYearlyReturn = [];

        for (var i = age; i <= 60; i++) {
            newAges.push(i);
            const val = (income - expenses.totalExpense) * ((Math.pow(1 + 0.04, (i - age) * 12) - 1) / 0.04);
            console.log(val);
            newYearlyReturn.push(val);
        }

        setAges(newAges);
        setYearlyReturn(newYearlyReturn);

        // console.log(ages, yearlyReturn);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <RadarChart budgets={budgets} expenses={expenses} />
            <DoughnutChart budgets={budgets} income={income} chartTitle="Budgets" />
            <DoughnutChart budgets={expenses} income={income} chartTitle="Expenses" />
            <InvestmentChart ages={ages} yearlyReturn={yearlyReturn} />
        </div>
    )
}

export default BudgetBreakdown
