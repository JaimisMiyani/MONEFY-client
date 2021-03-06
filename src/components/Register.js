import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import DisplayError from './DisplayError';
import { BsPersonPlusFill } from "react-icons/bs";
import Loading from './Loading';


const Register = ({ onLogin }) => {

    const [email, setEmail] = useState('');

    const [name, setName] = useState('');

    const [password, setPassword] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState('');

    const [isRegistered, setIsRegistered] = useState((localStorage.getItem('token') ? true : false));

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setError('');

        if (password !== confirmPassword) {
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

            // setting default value to expenses, budgets and profile...
            const body1 = { email, password };
            const res1 = await axios.post('http://localhost:3000/api/user/login', body1, config);
            const token = res1.data.token;
            const userId = res1.data.userId;

            // Profile
            const commanConfig = {
                headers: {
                    'Content-type': 'application/json',
                    'token': token
                }
            }
            const age = 20, income = 100000;
            const body2 = { age, income };
            const res2 = await axios.post('http://localhost:3000/api/profile', body2, commanConfig);

            // Budget
            let groceries = 21268, housing = 12179, transportation = 10634, clothing = 4778, health = 3143, disretionary = 3592, education = 2842, communication = 1500, misc = 10621
            const body3 = { groceries, housing, transportation, clothing, health, disretionary, education, communication, misc };
            const res3 = await axios.post('http://localhost:3000/api/budgets', body3, commanConfig);

            // Expenses
            groceries = 0; housing = 0; transportation = 0; clothing = 0; health = 0; disretionary = 0; education = 0; communication = 0; misc = 0;
            let totalExpense = 0;
            const body4 = { groceries, housing, transportation, clothing, health, disretionary, education, communication, misc, totalExpense };
            const res4 = await axios.post('http://localhost:3000/api/expenses', body4, commanConfig);

            localStorage.setItem('token', token);
            localStorage.setItem('userName', name);
            localStorage.setItem('userEmail', email);
            onLogin({ _id: userId, userName: name });
            setIsRegistered(true);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            setError(error.response.data.error);
        }
    }

    if (isRegistered && localStorage.getItem('token')) {
        return <Redirect to={{ pathname: '/editProfile', aboutProps: { isAfterRegister: true } }} />;
    }

    return (
        <div>
            <div className='centered'>
                {error && <DisplayError error={error} />}
                {isLoading && <Loading />}
            </div>
            <div className="card col-4 my-5 mx-auto px-0 rounded-lg text-center" style={{ borderColor: '#184d47' }}>
                <form className="card-body" onSubmit={(e) => handleSubmit(e)} >
                    <div className="form-group col-sm text-left">
                        <h3>Create Account</h3>
                        <p>Already have an account? <a className="p blue" href="/login" style={{ color: '#184d47' }}><u>sign in</u></a></p>
                    </div>

                    <div className="form-group col-sm">
                        <input className="form-control" placeholder="Name" type='text' onChange={(e) => setName(e.target.value)}></input>
                    </div>

                    <div className="form-group col-sm">
                        <input className="form-control" type='email' placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                    </div>

                    <div className="form-group col-sm text-left">
                        <input className="form-control" type='password' placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                    </div>

                    <div className="form-group col-sm text-left">
                        <input className="form-control" type='password' placeholder="Password Confirmation" onChange={(e) => setConfirmPassword(e.target.value)}></input>
                    </div>

                    <div className="form-group col-sm text-left">
                        <button type='submit' className="btn btn-block p" style={{ backgroundColor: '#184d47' }}>
                            <BsPersonPlusFill className="mb-1 text-white" />
                            <span className="text-white"> Register</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Register
