import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import DisplayError from './DisplayError';

const Expenses = () => {
    // useState for budgets
    const [expense, setExpense] = useState('');
    const [value, setValue] = useState('');

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
        const body = {expense, value};

        console.log(body);

        try {
            const res = await axios.put('http://localhost:3000/api/expenses', body, config);
            console.log(res.data);
            setIsRegistered(true);
        } catch (error) {
            if(error.response.data.error === "Expenses are not defined yet ..."){
                const config1 = {
                    headers: {
                        'Content-type': 'application/json',
                        'token' : localStorage.getItem('token')
                    }
                }
                const groceries=0, housing=0, transportation=0, clothing=0, health=0, disretionary=0, education=0, communication=0, misc=0
                const new_body = {groceries, housing, transportation, clothing, health, disretionary, education, communication, misc}
                
                console.log(new_body)

                try {
                    const res = await axios.post('http://localhost:3000/api/expenses', new_body, config1);
                } catch (error) {
                    console.log("here", error.response.data.error);
                }
                await axios.put('http://localhost:3000/api/expenses', body, config)
            }
            // setError(error.response.data.error);
        }
    }

    // if (!isRegistered) {
    //     return <Redirect to='/login' />
    // }

    return (
        <div>
            { error && <DisplayError error={error} />}
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <select name="expenses" id="expenses" onChange={(e) => setExpense(e.target.value)}>
                        <option value="groceries" defaultValue>Groceries</option>
                        <option value="housing">Housing</option>
                        <option value="transportation">Transportation</option>
                        <option value="clothing">Clothing</option>
                        <option value="health">Health</option>
                        <option value="disretionary">Disretionary</option>
                        <option value="education">Education</option>
                        <option value="communication">Communication</option>
                        <option value="misc">Misc</option>
                    </select>
                    <input type="number" onChange={(e) => setValue(e.target.value)}></input>
                    <input type='submit' value='Add Expense' />
                </form>
            </div>
        </div>
    )
}

export default Expenses

// groceries, housing, transportation, clothing, health, disretionary, education, communication, misc