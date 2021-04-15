import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { FaUserEdit } from "react-icons/fa";
import { BsPersonPlusFill } from "react-icons/bs";


const Profile = (props) => {

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

    if (message === 'Profile Updated!') {
        return <Redirect to='/' />
    }

    // console.log(props);

    if (props.location.aboutProps && props.location.aboutProps.isAfterRegister) {
        return (
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
        )
    }

    return (
        <div className="card col-4 my-5 mx-auto px-0 rounded-lg text-center" style={{borderColor:'#184d47'}}>
            <form className="card-body" onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group col-sm text-left">
                    <h3>Edit Account</h3>
                    <p>Or, <a className="p blue" href="/deleteAccount" style={{ color: '#184d47' }}><u>delete your account</u></a></p>
                </div>

                <div className="form-group col-sm">
                    <input className="form-control" type='number' placeholder="Age" onChange={(e) => setAge(e.target.value)} />
                </div>

                <div className="form-group col-sm text-left">
                    <input className="form-control" type='number' placeholder="Monthly Income" onChange={(e) => setIncome(e.target.value)} />
                </div>

                <div className="form-group col-sm text-left">
                    <button type='submit' className="btn btn-block btn-primary p" style={{backgroundColor:'#184d47'}}>
                        <FaUserEdit className="mb-1 text-white"/>
                        <span className="text-white"> Update Account </span>
                    </button>
                </div>
                
            </form>
        </div>
    )
}

export default Profile
