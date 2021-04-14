import React, { useEffect, useState } from 'react'
import RadarChart from '../charts/RadarChart';
import DoughnutChart from '../charts/DoughnutChart';
import axios from 'axios';
import InvestmentChart from '../charts/InvestmentChart';

const Statistics = () => {

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
        <>
            <div className="card-group mx-auto" style={{width:'80%', height : '770px'}}>
                <div className="card">
                    <div className="pl-4 pt-3" style={{height:'50%', width:'100%'}}>
                        <DoughnutChart budgets={expenses} income={income} chartTitle="Your Expenses" />
                    </div>

                    <div className="pl-4 pt-3" style={{height:'50%', width:'100%'}}>
                        <DoughnutChart budgets={budgets} income={income} chartTitle="Your Custom Budgets" />
                    </div>
                </div>
                
                <div className="card temp">
                    <div className="my-auto">
                        <RadarChart budgets={budgets} expenses={expenses} />
                    </div>
                </div>
            </div>

            <div className="card mx-auto my-5" style={{width:'70%', height : '650px'}}>
                <div className="card-body py-auto">
                    <h3 className="card-title">- Enter Title Here -</h3>
                    <p className="card-text">- Enter Text Here -- Enter Text Here -- Enter Text Here -- Enter Text Here -- Enter Text Here -- Enter Text Here -- Enter Text Here -- Enter Text Here -- Enter Text Here -- Enter Text Here -- Enter Text Here -- Enter Text Here -- Enter Text Here -- Enter Text Here -- Enter Text Here -- Enter Text Here -- Enter Text Here -- Enter Text Here -- Enter Text Here -</p>
                    <InvestmentChart ages={ages} yearlyReturn={yearlyReturn} />
                </div>
            </div> 
        </>
    )
}

export default Statistics


