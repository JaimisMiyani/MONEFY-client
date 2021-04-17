import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { FaUserEdit } from "react-icons/fa";
import { BsPersonPlusFill } from "react-icons/bs";
import Loading from './Loading';
import DisplayError from './DisplayError';
import DisplayMessage from './DisplayMessage';


const Profile = (props) => {

    const [age, setAge] = useState(0);

    const [income, setIncome] = useState(0);

    const [message, setMessage] = useState('');

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

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
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error.response.data.error);
            setError(error.response.data.error);
        }

    }

    const fetchData = async () => {
        const config = {
            headers: {
                'Content-type': 'application/json',
                'token': localStorage.getItem('token')
            }
        };

        try {
            const res = await axios.get('http://localhost:3000/api/profile', config);
            console.log(res.data);
            localStorage.setItem('income', res.data.data.income);
            setIncome(res.data.data.income);
            setAge(res.data.data.age);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (message === 'Profile Updated!') {
        return <Redirect to='/' />
    }

    // console.log(props);

    if (props.location.aboutProps && props.location.aboutProps.isAfterRegister) {
        return (
            <div>
                <div className='centered'>
                    {isLoading && <Loading />}
                    {error && <DisplayError error={error} />}
                    {message && <DisplayMessage message={message} />}
                </div>
                <div className="card col-4 my-5 mx-auto px-0 rounded-lg text-center" style={{ borderColor: '#184d47' }}>
                    <form className="card-body" onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group col-sm text-left">
                            <h3>Tells us about yourself</h3>
                            <p>So that we can customize your plan.</p>
                        </div>

                        <div className="form-group col-sm">
                            <input className="form-control" type='number' placeholder="Age" onChange={(e) => setAge(e.target.value)} />
                        </div>

                        <div className="form-group col-sm text-left">
                            <input className="form-control" type='number' placeholder="Monthly Income" onChange={(e) => setIncome(e.target.value)} />
                        </div>

                        <div className="form-group col-sm text-left">
                            <button type='submit' className="btn btn-block btn-primary p" style={{ backgroundColor: '#184d47' }}>
                                <BsPersonPlusFill className="mb-1 text-white" />
                                <span className="text-white"> Create Account </span>
                            </button>
                        </div>

                        <div className="form-group col-sm text-left text-muted">
                            <p>Optionally, you can edit this later and <a className="p blue" href="/" style={{ color: '#184d47' }}><u>skip for now</u></a></p>
                        </div>

                    </form>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className='centered'>
                {isLoading && <Loading />}
                {error && <DisplayError error={error} />}
                {message && <DisplayMessage message={message} />}
            </div>
            <div className="card col-4 my-5 mx-auto px-0 rounded-lg text-center" style={{ borderColor: '#184d47' }}>
                <form className="card-body" onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group col-sm text-left">
                        <h3>Edit Account</h3>
                        <p>Or, <a className="p blue" href="/deleteAccount" style={{ color: '#184d47' }}><u>delete your account</u></a></p>
                    </div>

                    <div className="form-group col-sm text-left">
                        <label>Age:</label>
                        <input className="form-control" type='number' placeholder="Age" onChange={(e) => setAge(e.target.value)} value={age} />
                    </div>

                    <div className="form-group col-sm text-left">
                        <label>Monthly income:</label>
                        <input className="form-control" type='number' placeholder="Monthly Income" onChange={(e) => setIncome(e.target.value)} value={income} />
                    </div>

                    <div className="form-group col-sm text-left">
                        <button type='submit' className="btn btn-block btn-primary p" style={{ backgroundColor: '#184d47' }}>
                            <FaUserEdit className="mb-1 text-white" />
                            <span className="text-white"> Update Account </span>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Profile
