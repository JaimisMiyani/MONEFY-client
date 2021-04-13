import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Profile = () => {

    const [age, setAge] = useState(0);

    const [income, setIncome] = useState(0);

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
        } catch (error) {
            console.log(error.response.data.error);
            if (error.response.data.error === 'Profile is not defined yet ...') {
                try {
                    const res = await axios.post('http://localhost:3000/api/profile', body, config);
                    console.log(res);
                } catch (error) {
                    console.log(error.response.data.error);
                }
            }
            else {
                console.log(error.response.data.error);
            }
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

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Age</label>
                <input type='number' value={age} onChange={(e) => setAge(e.target.value)} />
                <label>Income</label>
                <input type='number' value={income} onChange={(e) => setIncome(e.target.value)} />
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default Profile
