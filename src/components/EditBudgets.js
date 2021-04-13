import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayError from './DisplayError';

const EditBudgets = () => {
    // useState for budgets
    const [groceries, setGroceries] = useState(0);
    const [housing, setHousing] = useState(0);
    const [transportation, setTransportation] = useState(0);
    const [clothing, setClothing] = useState(0);
    const [health, setHealth] = useState(0);
    const [disretionary, setDisretionary] = useState(0);
    const [education, setEducation] = useState(0);
    const [communication, setCommunication] = useState(0);
    const [misc, setMisc] = useState(0);

    const [error, setError] = useState('');

    const handleSubmit = async (e, budget, value) => {

        e.preventDefault();

        const config = {
            headers: {
                'Content-type': 'application/json',
                'token' : localStorage.getItem('token')
            }
        }
        const body = { budget, value };

        console.log(body);

        try {
            const res = await axios.put('http://localhost:3000/api/budgets', body, config);
            console.log(res.data);
        } catch (error) {
            console.log(error.response.data.error);
            setError(error.response.data.error);
        }
    }

    const fetchData = async () => {
        const config = {
            headers: {
                'Content-type': 'application/json',
                'token' : localStorage.getItem('token')
            }
        }

        try {
            const res = await axios.get('http://localhost:3000/api/budgets', config);
            console.log(res.data);
            setGroceries(res.data.data.groceries);
            setHousing(res.data.data.housing);
            setTransportation(res.data.data.transportation);
            setClothing(res.data.data.clothing);
            setHealth(res.data.data.health);
            setDisretionary(res.data.data.disretionary);
            setEducation(res.data.data.education);
            setCommunication(res.data.data.communication);
            setMisc(res.data.data.misc);
        } catch (error) {
            console.log(error.response.data.error)
            setError(error.response.data.error);
        }
    };

    useEffect(() => {
        fetchData();
    },[]);

    return (
        <div>
            { error && <DisplayError error={error} />}
            <div>
                <form>
                    <label>Groceries</label>
                    <input type='text' value={groceries} onChange={(e) => setGroceries(e.target.value)}></input>
                    <button onClick={(e)=> handleSubmit(e, 'groceries', groceries)}>Update</button><br/>
                    <label>Housing</label>
                    <input type='text' value={housing} onChange={(e) => setHousing(e.target.value)}></input>
                    <button onClick={(e)=> handleSubmit(e, 'housing', housing)}>Update</button><br/>
                    <label>Transportation</label>
                    <input type='text' value={transportation} onChange={(e) => setTransportation(e.target.value)}></input>
                    <button onClick={(e)=> handleSubmit(e, 'transportation', transportation)}>Update</button><br/>
                    <label>Clothing</label>
                    <input type='text' value={clothing} onChange={(e) => setClothing(e.target.value)}></input>
                    <button onClick={(e)=> handleSubmit(e, 'clothing', clothing)}>Update</button><br/>
                    <label>Health</label>
                    <input type='text' value={health} onChange={(e) => setHealth(e.target.value)}></input>
                    <button onClick={(e)=> handleSubmit(e, 'health', health)}>Update</button><br/>
                    <label>Disretionary</label>
                    <input type='text' value={disretionary} onChange={(e) => setDisretionary(e.target.value)}></input>
                    <button onClick={(e)=> handleSubmit(e, 'disretionary', disretionary)}>Update</button><br/>
                    <label>Education</label>
                    <input type='text' value={education} onChange={(e) => setEducation(e.target.value)}></input>
                    <button onClick={(e)=> handleSubmit(e, 'education', education)}>Update</button><br/>
                    <label>Communication</label>
                    <input type='text' value={communication} onChange={(e) => setCommunication(e.target.value)}></input>
                    <button onClick={(e)=> handleSubmit(e, 'communication', communication)}>Update</button><br/>
                    <label>Misc</label>
                    <input type='text' value={misc} onChange={(e) => setMisc(e.target.value)}></input>
                    <button onClick={(e)=> handleSubmit(e, 'misc', misc)}>Update</button><br/>
                </form>
            </div>
        </div>
    )
}

export default EditBudgets

// groceries, housing, transportation, clothing, health, disretionary, education, communication, misc