import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import DisplayError from './DisplayError';
import { FaSignInAlt } from "react-icons/fa";
import DisplayMessage from './DisplayMessage';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const [isAuthenticated, setIsAuthenticated] = useState((localStorage.getItem('token') ? true : false));

    const handleSubmit = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const body = { email, password };

        // console.log(body);

        try {
            const res = await axios.post('http://localhost:3000/api/user/login', body, config);
            

            const config1 = {
                headers: {
                    'Content-type': 'application/json',
                    'token': res.data.token
                }
            }
            const res1 = await axios.get('http://localhost:3000/api/user/getUserName', config1);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userName', res1.data.userName);
            localStorage.setItem('email', res1.data.userEmail);
            setIsAuthenticated(true);
            onLogin({ _id: res.data._id, userName: res1.data.userName });
        } catch (error) {
            console.log(error.response.data.error);
            setError(error.response.data.error);
        }
    }

    if (isAuthenticated) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <div className='centered'>
                { error && <DisplayError error={error} />}
            </div>
            <div className="card col-4 my-5 mx-auto px-0 rounded-lg text-center" style={{ borderColor: '#184d47' }}>
                <form className="card-body" onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group col-sm text-left">
                        <h3>Welcome Back</h3>
                        <p>Don't have an account? <a className="p blue" href="/register" style={{ color: '#184d47' }}><u>sign up</u></a></p>
                    </div>

                    <div className="form-group col-sm">
                        <input className="form-control" type='email' placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                    </div>

                    <div className="form-group col-sm text-left">
                        <input className="form-control" type='password' placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                    </div>

                    <div className="form-group col-sm text-left">
                        <button type='submit' className="btn btn-block btn-primary p" style={{ backgroundColor: '#184d47' }}>
                            <FaSignInAlt className="mb-1 text-white" />
                            <span className="text-white"> Submit</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
