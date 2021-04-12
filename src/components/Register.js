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
