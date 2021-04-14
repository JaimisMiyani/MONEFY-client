import React, { useState, useEffect } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

const Profile = () => {

    const [age, setAge] = useState(0);

    const [income, setIncome] = useState(0);

    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-type': 'application/json',
                'token': localStorage.getItem('token')
            }
        };

        const body = { age, income };

        try {
            const res = await axios.put('http://localhost:3000/api/profile', body, config);
            console.log(res.data);
            setMessage('Profile Updated!');
        } catch (error) {
            console.log(error.response.data.error);
        }

    }

    const fetchData = async () => {
        const config = {
            headers: {
                'Content-type': 'application/json',
                'token': localStorage.getItem('token')
            }
        };

        // console.log(config);

        try {
            const res = await axios.get('http://localhost:3000/api/profile', config);
            console.log(res.data);
            setIncome(res.data.data.income);
            setAge(res.data.data.age);
        } catch (error) {
            console.log(error.response.data.error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if(message === 'Profile Updated!') {
        return <Redirect to='/' /> 
    }

    return (
        <div style={{margin:'10px'}}>
            <div>
                <p className='p-3'>Here you can set your income and age so that we can calculate your return accordingly.</p>
            </div>
            <div className='centered'>
                <div className='card text-dark mb-3' style={{ backgroundColor: '#d6efc7' }}>
                    <div className='card-body'>
                        <table>
                            <tr>
                                <td><label>Age</label></td>
                                <td><input type='number' value={age} onChange={(e) => setAge(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td><label>Income</label></td>
                                <td><input type='number' value={income} onChange={(e) => setIncome(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <td colSpan='2' style={{ textAlign: 'center' }}><button className='btn' style={{ backgroundColor: '#184d47', color: '#fff' }} onClick={(e) => handleSubmit(e)}>Submit</button></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className='centered'>
                <button className='btn btn-danger'>Delete this Account</button>
            </div>
        </div>
    )
}

export default Profile
