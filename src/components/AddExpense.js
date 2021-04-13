import React, { useState } from 'react'
import axios from 'axios'
import DisplayError from './DisplayError';

const AddExpense = () => {
    // useState for budgets
    const [expense, setExpense] = useState('groceries');

    const [value, setValue] = useState('');

    const [error, setError] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                'Content-type': 'application/json',
                'token' : localStorage.getItem('token')
            }
        }
        const body = {expense, value};

        console.log(body, expense);

        try {
            const res = await axios.put('http://localhost:3000/api/expenses/addExpense', body, config);
            console.log(res.data);
        } catch (error) {
            console.log(error.response.data.error);
            setError(error.response.data.error);
        }
    }

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

export default AddExpense

// groceries, housing, transportation, clothing, health, disretionary, education, communication, misc