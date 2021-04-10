import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const body = { name, email, password };

        console.log(body);

        try {
            const res = await axios.post('http://localhost:3000/api/user/register', body, config);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Name</label>
                <input type='text' onChange={(e) => setName(e.target.value)}></input>
                <label>Email</label>
                <input type='text' onChange={(e) => setEmail(e.target.value)}></input>
                <label>Password</label>
                <input type='text' onChange={(e) => setPassword(e.target.value)}></input>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}

export default Register
