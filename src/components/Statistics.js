import React, { useEffect, useState } from 'react'
import RadarChart from '../charts/RadarChart';
import DoughnutChart from '../charts/DoughnutChart';
import axios from 'axios';
import InvestmentChart from '../charts/InvestmentChart';
import ProgressBars from '../charts/ProgressBars';
import { Redirect } from 'react-router-dom';
import Loading from './Loading';

const Statistics = () => {

    const [budgets, setBudgets] = useState({});
    const [expenses, setExpenses] = useState({});
    const [income, setIncome] = useState(0);
    const [age, setAge] = useState(0);
    const [ages, setAges] = useState([]);
    const [investment, setInvestment] = useState(0);
    const [surpassed, setSurpassed] = useState(false);
    const [finalAmt, setFinalAmt] = useState(0);
    const [yearlyReturn, setYearlyReturn] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

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

        setIsLoading(false);

        // console.log(budgets, expenses, income);
    }

    const handleClick = (e) => {
        e.preventDefault();
        return <Redirect to='/resources' />
    }

    const calculateReturn = () => {

        const newAges = [], newYearlyReturn = [];
        const savings = income - expenses.totalExpense;
        var total = savings * 0.8;

        setInvestment(total);

        if (savings < income * 0.2) {
            setSurpassed(true);
        }

        for (var i = age; i <= maxAge; i++) {
            total = (Math.round(total + (total * 0.04))) + savings * 12;
            // console.log(val);
            newAges.push(i);
            newYearlyReturn.push(total);
        }

        setFinalAmt(total);
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
            <div>
                {isLoading && <Loading />}
            </div>
            <div className="card-group mx-auto" style={{ width: '80%', height: '840px', position: 'relative' }}>
                <div className="card">
                    <div className="pl-4 pt-3" style={{ height: '450px', width: '100%', position: 'absolute' }}>
                        <DoughnutChart budgets={expenses} income={income} chartTitle="Your Expenses" />
                    </div>

                    <div className="pl-4 pt-4" style={{ height: '390px', top : '450px', width: '100%', position: 'absolute' }}>
                        <DoughnutChart budgets={budgets} income={income} chartTitle="Your Custom Budgets" />
                    </div>
                </div>

                <div className="card">
                    <div className="pl-4 pt-3" style={{ height: '450px', width: '100%', position: 'absolute' }}>
                        <RadarChart budgets={budgets} expenses={expenses} />
                    </div>
                    <div className="pl-4 pt-5" style={{ height: '390px', width: '100%',top : '450px', position: 'absolute' }}>
                        <ProgressBars expenses={expenses} income={income} />
                    </div>
                </div>
            </div>

            <div className="card mx-auto my-5" style={{ width: '70%' }}>
                <div className="card-body py-auto">
                    <h3 className="card-title" style={{backgroundColor:'184d47'}}>Let's get your money to work</h3>
                    <InvestmentChart ages={ages} yearlyReturn={yearlyReturn} investment={investment} surpassed={surpassed} finalAmt={finalAmt} handleClick={handleClick}/>
                </div>
            </div>
        </>
    )
}

export default Statistics


