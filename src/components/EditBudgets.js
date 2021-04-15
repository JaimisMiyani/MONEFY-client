import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayError from './DisplayError';
import DisplayMessage from './DisplayMessage';
import { NavLink } from 'react-router-dom'

const EditBudgets = () => {
    // useState for budgets
    const [groceries, setGroceries] = useState({ value: 0, isUpdated: false });
    const [housing, setHousing] = useState({ value: 0, isUpdated: false });
    const [transportation, setTransportation] = useState({ value: 0, isUpdated: false });
    const [clothing, setClothing] = useState({ value: 0, isUpdated: false });
    const [health, setHealth] = useState({ value: 0, isUpdated: false });
    const [disretionary, setDisretionary] = useState({ value: 0, isUpdated: false });
    const [education, setEducation] = useState({ value: 0, isUpdated: false });
    const [communication, setCommunication] = useState({ value: 0, isUpdated: false });
    const [misc, setMisc] = useState({ value: 0, isUpdated: false });

    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e, budget, data) => {

        e.preventDefault();

        const config = {
            headers: {
                'Content-type': 'application/json',
                'token': localStorage.getItem('token')
            }
        }
        const body = { budget, value: data.value };

        console.log(body);

        try {
            const res = await axios.put('http://localhost:3000/api/budgets', body, config);
            console.log(res.data);
            setMessage(capitalizeFirstLetter(`${budget} updated!`));
            setError('');
        } catch (error) {
            // console.log(error.response.data.error);
            setError(error.response.data.error);
            setMessage('');
        }
    }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const fetchData = async () => {
        const config = {
            headers: {
                'Content-type': 'application/json',
                'token': localStorage.getItem('token')
            }
        }

        try {
            const res = await axios.get('http://localhost:3000/api/budgets', config);
            console.log(res.data);
            setGroceries({ value: res.data.data.groceries, isUpdated: false });
            setHousing({ value: res.data.data.housing, isUpdated: false });
            setTransportation({ value: res.data.data.transportation, isUpdated: false });
            setClothing({ value: res.data.data.clothing, isUpdated: false });
            setHealth({ value: res.data.data.health, isUpdated: false });
            setDisretionary({ value: res.data.data.disretionary, isUpdated: false });
            setEducation({ value: res.data.data.education, isUpdated: false });
            setCommunication({ value: res.data.data.communication, isUpdated: false });
            setMisc({ value: res.data.data.misc, isUpdated: false });
        } catch (error) {
            console.log(error.response.data.error)
            setError(error.response.data.error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="mx-5 mt-5">
            <div className="card" style={{border:'none'}}>
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item ">
                            <NavLink exact to='./budgetBreakdown' className="nav-link addBorder color1">Budget and Expense Breakdown</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to='./EditBudgets' className="nav-link addBorder active color1">Modify Budgets</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to='./tips' className="nav-link addBorder color1">Financial Tips</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <div className="mx-auto" style={{border : '1px solid black'}}>
                        <div>
                            <p className='shadow-none mx-2 mt-2 p-3 rounded'>From here you can set your budgets. A budget is basically an estimation of revenue and expenses over a specified future period of time and is usually compiled and re-evaluated on a periodic basis.</p>
                        </div>
                        <div className='centered'>
                            {error && <DisplayError error={error} />}
                            {message && <DisplayMessage message={message} />}
                        </div>
                        <div className='centered'>
                            <div className='card text-dark mb-3' style={{ backgroundColor: '#d6efc7' }}>
                                <div className='card-header setShadow' style={{ backgroundColor: '#96bb7c' }}>Budgets</div>
                                <div className='card-body'>
                                    <table>
                                        <tr style={{border:'none'}}>
                                            <td><label>Groceries</label></td>
                                            <td><input type='text' value={groceries.value} onChange={(e) => setGroceries({ ...groceries, value: e.target.value })}></input></td>
                                            <td style={{textAlign:'center'}}><button className='btn btn-success btn-sm' onClick={(e) => {
                                                handleSubmit(e, 'groceries', groceries);
                                                setGroceries({ ...groceries, isUpdated: true });
                                            }}>{groceries.isUpdated ? 'Updated' : 'Update'}</button></td>
                                        </tr>
                                        <tr style={{border:'none'}}>
                                            <td><label>Housing</label></td>
                                            <td><input type='text' value={housing.value} onChange={(e) => setHousing({ ...housing, value: e.target.value })}></input></td>
                                            <td style={{textAlign:'center'}}><button className='btn btn-success btn-sm' onClick={(e) => {
                                                handleSubmit(e, 'housing', housing);
                                                setHousing({ ...housing, isUpdated: true });
                                            }}>{housing.isUpdated ? 'Updated' : 'Update'}</button>
                                            </td>
                                        </tr>
                                        <tr style={{border:'none'}}>
                                            <td><label>Transportation</label></td>
                                            <td><input type='text' value={transportation.value} onChange={(e) => setTransportation({ ...transportation, value: e.target.value })}></input></td>
                                            <td style={{textAlign:'center'}}><button className='btn btn-success btn-sm' onClick={(e) => {
                                                handleSubmit(e, 'transportation', transportation);
                                                setTransportation({ ...transportation, isUpdated: true });
                                            }}>{transportation.isUpdated ? 'Updated' : 'Update'}</button>
                                            </td>
                                        </tr>
                                        <tr style={{border:'none'}}>
                                            <td><label>Clothing</label></td>
                                            <td><input type='text' value={clothing.value} onChange={(e) => setClothing({ ...clothing, value: e.target.value })}></input></td>
                                            <td style={{textAlign:'center'}}><button className='btn btn-success btn-sm' onClick={(e) => {
                                                handleSubmit(e, 'clothing', clothing);
                                                setClothing({ ...clothing, isUpdated: true });
                                            }}>{clothing.isUpdated ? 'Updated' : 'Update'}</button>
                                            </td>
                                        </tr>
                                        <tr style={{border:'none'}}>
                                            <td><label>Health</label></td>
                                            <td><input type='text' value={health.value} onChange={(e) => setHealth({ ...health, value: e.target.value })}></input></td>
                                            <td style={{textAlign:'center'}}><button className='btn btn-success btn-sm' onClick={(e) => {
                                                handleSubmit(e, 'health', health);
                                                setHealth({ ...health, isUpdated: true });
                                            }}>{health.isUpdated ? 'Updated' : 'Update'}</button><br /></td>
                                        </tr>
                                        <tr style={{border:'none'}}>
                                            <td><label>Disretionary</label></td>
                                            <td><input type='text' value={disretionary.value} onChange={(e) => setDisretionary({ ...disretionary, value: e.target.value })}></input></td>
                                            <td style={{textAlign:'center'}}><button className='btn btn-success btn-sm' onClick={(e) => {
                                                handleSubmit(e, 'disretionary', disretionary);
                                                setDisretionary({ ...disretionary, isUpdated: true });
                                            }}>{disretionary.isUpdated ? 'Updated' : 'Update'}</button></td>
                                        </tr>
                                        <tr style={{border:'none'}}>
                                            <td><label>Education</label></td>
                                            <td><input type='text' value={education.value} onChange={(e) => setEducation({ ...education, value: e.target.value })}></input></td>
                                            <td style={{textAlign:'center'}}><button className='btn btn-success btn-sm' onClick={(e) => {
                                                handleSubmit(e, 'education', education);
                                                setEducation({ ...education, isUpdated: true });
                                            }}>{education.isUpdated ? 'Updated' : 'Update'}</button></td>
                                        </tr>
                                        <tr style={{border:'none'}}>
                                            <td><label>Communication</label></td>
                                            <td><input type='text' value={communication.value} onChange={(e) => setCommunication({ ...communication, value: e.target.value })}></input></td>
                                            <td style={{textAlign:'center'}}><button className='btn btn-success btn-sm' onClick={(e) => {
                                                handleSubmit(e, 'communication', communication);
                                                setCommunication({ ...communication, isUpdated: true });
                                            }}>{communication.isUpdated ? 'Updated' : 'Update'}</button></td>
                                        </tr>
                                        <tr style={{border:'none'}}>
                                            <td><label>Misc</label></td>
                                            <td><input type='text' value={misc.value} onChange={(e) => setMisc({ ...misc, value: e.target.value })}></input></td>
                                            <td style={{textAlign:'center'}}><button className='btn btn-success btn-sm' onClick={(e) => {
                                                handleSubmit(e, 'misc', misc);
                                                setMisc({ ...misc, isUpdated: true });
                                            }}>{misc.isUpdated ? 'Updated' : 'Update'}</button></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default EditBudgets

// groceries, housing, transportation, clothing, health, disretionary, education, communication, misc
