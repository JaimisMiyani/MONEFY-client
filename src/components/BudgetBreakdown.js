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

    const maxAge = 60;

    const fetchBudgets = async (config) => {
        try {
            const res = await axios.get('http://localhost:3000/api/budgets', config);
            // console.log(res.data);
            const newBudgets = res.data.data;
            setBudgets(newBudgets);
        } catch (error) {
            console.log(error.response.data.error);
        }
    }

    const fetchExpenses = async (config) => {
        try {
            const res = await axios.get('http://localhost:3000/api/expenses', config);
            console.log(res.data);
            const newExpenses = res.data.data;
            setExpenses(newExpenses);
        } catch (error) {
            console.log(error.response.data.error);
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

        console.log(budgets, expenses, income);
    }

    const calculateReturn = () => {

        const newAges = [], newYearlyReturn = [];
        const savings = income - expenses.totalExpense;
        var total = savings;

        for (var i = age; i <= maxAge; i++) {
            total = (Math.round(total + (total*0.04))) + savings*12;
            // console.log(val);
            newAges.push(i);
            newYearlyReturn.push(total);
        }

        setAges(newAges);
        setYearlyReturn(newYearlyReturn);
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        calculateReturn();
    }, [age, income]);

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
