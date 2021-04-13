import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import DisplayError from './DisplayError';

const Register = () => {

    const [email, setEmail] = useState('');

    const [name, setName] = useState('');

    const [password, setPassword] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState([]);

    const [isRegistered, setIsRegistered] = useState((localStorage.getItem('token') ? true:false));

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password !== confirmPassword) {
            setError('Passwords don\'t match.');
            return;
        }

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const body = { name, email, password };

        console.log(body);

        try {
            const res = await axios.post('http://localhost:3000/api/user/register', body, config);
            console.log(res.data);
            setIsRegistered(true);

            // setting default value to expenses, budgets and profile...
            const body1 = { email, password };
            const res1 = await axios.post('http://localhost:3000/api/user/login', body1, config);
            const token = res1.data.token;

            // Profile
            const commanConfig = {
                headers: {
                    'Content-type': 'application/json',
                    'token' : token
                }
            }
            const age = 20, income = 100000;
            const body2 = { age, income };
            const res2 = await axios.post('http://localhost:3000/api/profile', body2, commanConfig);

            // Budget
            let groceries=21268, housing=12179, transportation=10634, clothing=4778, health=3143, disretionary=3592, education=2842, communication=1500, misc=10621
            const body3 = {groceries, housing, transportation, clothing, health, disretionary, education, communication, misc};
            const res3 = await axios.post('http://localhost:3000/api/budgets', body3, commanConfig);

            // Expenses
            groceries=0; housing=0; transportation=0; clothing=0; health=0; disretionary=0; education=0; communication=0; misc=0;
            let totalExpense=0;
            const body4 = {groceries, housing, transportation, clothing, health, disretionary, education, communication, misc, totalExpense };
            const res4 = await axios.post('http://localhost:3000/api/expenses', body4, commanConfig);

        } catch (error) {
            console.log(error.response.data.error);
            setError(error.response.data.error);
        }        
    }
    
    if (isRegistered) {
        return <Redirect to='/login' />
    }

    return (
        <div>
            { error && <DisplayError error={error} />}
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Name</label>
                    <input type='text' onChange={(e) => setName(e.target.value)}></input>
                    <label>Email</label>
                    <input type='email' onChange={(e) => setEmail(e.target.value)}></input>
                    <label>Password</label>
                    <input type='password' onChange={(e) => setPassword(e.target.value)}></input>
                    <label>Confirm Password</label>
                    <input type='password' onChange={(e) => setConfirmPassword(e.target.value)}></input>
                    <input type='submit' value='Submit' />
                </form>
            </div>
        </div>

    )
}

export default Register
