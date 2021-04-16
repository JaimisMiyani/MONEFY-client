import React, { useState } from 'react'
import axios from 'axios'
import DisplayError from './DisplayError';
import DisplayMessage from './DisplayMessage'
import Loading from './Loading';
import { RiAddCircleLine, RiEditCircleFill } from "react-icons/ri";

const AddExpense = () => {
    // useState for budgets
    const [expense, setExpense] = useState('groceries');

    const [value, setValue] = useState('');

    const [error, setError] = useState('');

    const [message, setMessage] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        setIsLoading(true);
        const config = {
            headers: {
                'Content-type': 'application/json',
                'token': localStorage.getItem('token')
            }
        }
        const body = { expense, value };

        console.log(body, expense);

        try {
            const res = await axios.put('http://localhost:3000/api/expenses/addExpense', body, config);
            setMessage(capitalizeFirstLetter(`${expense} added!`));
            setError('');
            setIsLoading(false);
            console.log(res.data);
        } catch (error) {
            setMessage('');
            setIsLoading(false);
            console.log(error.response.data.error);
            setError(error.response.data.error);
        }
    }

    const handleReset = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                'Content-type': 'application/json',
                'token': localStorage.getItem('token')
            }
        }
        const body = { expense, value };

        console.log(body, expense);

        try {
            const res = await axios.put('http://localhost:3000/api/expenses/reset', body, config);
            setMessage('Expenses reset!');
            setError('');
            setIsLoading(false);
            console.log(res.data);
        } catch (error) {
            setMessage('');
            setIsLoading(false);
            console.log(error.response.data.error);
            setError(error.response.data.error);
        }
    }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div style={{ margin: '10px' }}>
            <div className='centered'>
                {error && <DisplayError error={error} />}
                {message && <DisplayMessage message={message} />}
                {isLoading && <Loading />}
            </div>
            <div className='centered'>
                <div className="card col-5 my-5 mx-auto px-0 rounded-lg text-center" style={{ borderColor: '#184d47' }}>
                    <form className="card-body" onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group col-sm text-left">
                            <h3 style={{color :'#184d47'}}>Add Expenses</h3>
                            <p>Add your expenses from here as you make any and go to Budget Breakdown to review your budget and expense.</p>
                        </div>

                        <div className="form-group col-sm text-left w-10">
                            <select className="form-control" name="expenses" id="expenses" onChange={(e) => setExpense(e.target.value)}>
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
                        </div>

                        <div className="form-group col-sm text-left">
                            <input className="form-control" type="number" placeholder="Enter expense here" onChange={(e) => setValue(e.target.value)}></input>
                        </div>

                        <div className="form-group col-sm text-left">
                            <button type='submit' className="btn btn-block btn-primary p" style={{ backgroundColor: '#184d47' }}>
                                <RiAddCircleLine className="mb-1 text-white" />
                                <span className="text-white"> Add Expense</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='centered'>
                <form onSubmit={(e) => handleReset(e)}>
                    <div className="form-group col-sm text-left">
                        <button type='submit' className="btn btn-block btn-danger p text-white">
                            <RiEditCircleFill className="mb-1" />
                            <span> Reset Expenses</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddExpense

// groceries, housing, transportation, clothing, health, disretionary, education, communication, misc