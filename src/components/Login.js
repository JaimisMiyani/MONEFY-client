import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import DisplayError from './DisplayError';

const Login = () => {
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [error, setError] = useState([]);

    const [isAuthenticated, setIsAuthenticated] = useState((localStorage.getItem('token') ? true:false));

    const handleSubmit = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const body = { email, password };

        console.log(body);

        try {
            const res = await axios.post('http://localhost:3000/api/user/login', body, config);
            console.log(res.data);
            localStorage.setItem('token', res.data.token);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error.response.data.error);
            setError(error.response.data.error);
        }
    }

    if (isAuthenticated) {
        return <Redirect to='/' />
    }

    return (
        <div>
            { error && <DisplayError error={error} />}
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Email</label>
                    <input type='email' onChange={(e) => setEmail(e.target.value)}></input>
                    <label>Password</label>
                    <input type='password' onChange={(e) => setPassword(e.target.value)}></input>
                    <input type='submit' value='Submit' />
                </form>
            </div>
        </div>

    )
}

export default Login
