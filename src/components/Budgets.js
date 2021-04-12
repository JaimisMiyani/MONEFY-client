import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import DisplayError from './DisplayError';

const Budgets = () => {
    // useState for budgets
    const [groceries, setGroceries] = useState('');
    const [housing, setHousing] = useState('');
    const [transportation, setTransportation] = useState('');
    const [clothing, setClothing] = useState('');
    const [health, setHealth] = useState('');
    const [disretionary, setDisretionary] = useState('');
    const [education, setEducation] = useState('');
    const [communication, setCommunication] = useState('');
    const [misc, setMisc] = useState('');

    const [error, setError] = useState([]);

    const [isRegistered, setIsRegistered] = useState((localStorage.getItem('token') ? true:false));

    const handleSubmit = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                'Content-type': 'application/json',
                'token' : localStorage.getItem('token')
            }
        }
        const body = { groceries, housing, transportation, clothing, health, disretionary, education, communication, misc };

        console.log(body);

        try {
            const res = await axios.post('http://localhost:3000/api/budgets', body, config);
            console.log(res.data);
            setIsRegistered(true);
        } catch (error) {
            console.log(error.response.data.error);
            setError(error.response.data.error);
        }
    }

    if (!isRegistered) {
        return <Redirect to='/login' />
    }

    return (
        <div>
            { error && <DisplayError error={error} />}
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Groceries</label>
                    <input type='text' onChange={(e) => setGroceries(e.target.value)}></input>
                    <label>Housing</label>
                    <input type='text' onChange={(e) => setHousing(e.target.value)}></input>
                    <label>Transportation</label>
                    <input type='text' onChange={(e) => setTransportation(e.target.value)}></input>
                    <label>Clothing</label>
                    <input type='text' onChange={(e) => setClothing(e.target.value)}></input>
                    <label>Health</label>
                    <input type='text' onChange={(e) => setHealth(e.target.value)}></input>
                    <label>Disretionary</label>
                    <input type='text' onChange={(e) => setDisretionary(e.target.value)}></input>
                    <label>Education</label>
                    <input type='text' onChange={(e) => setEducation(e.target.value)}></input>
                    <label>Communication</label>
                    <input type='text' onChange={(e) => setCommunication(e.target.value)}></input>
                    <label>Misc</label>
                    <input type='text' onChange={(e) => setMisc(e.target.value)}></input>
                    
                    <input type='submit' value='Submit' />
                </form>
            </div>
        </div>
    )
}

export default Budgets

// groceries, housing, transportation, clothing, health, disretionary, education, communication, misc