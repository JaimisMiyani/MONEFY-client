import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Loading from './Loading';

const DeleteAccount = ({ onLogout }) => {
    const [isDeleted, setIsDeleted] = useState(false);

    const [isCanceled, setIsCanceled] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-type': 'application/json',
                'token': token
            }
        }

        try {
            const res = await axios.get("http://localhost:3000/api/user/deleteAccount", config);
            onLogout();
            console.log(res);
            setIsDeleted(true);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    }

    // console.log(onLogout);

    const handleCancel = (e) => {
        setIsLoading(true);
        setIsCanceled(true);
        setIsLoading(false);
    }

    if (isDeleted) {
        return <Redirect to='/' />;
    }

    if (isCanceled) {
        return <Redirect to='/editProfile' />;
    }

    return (
        <div>
            {isLoading && <Loading />}
            <div className="card col-4 my-5 mx-auto px-0 rounded-lg text-left" style={{ borderColor: '#184d47' }}>
                <div className="card-header" style={{ boxShadow: '0px 0px 10px 3px rgb(162, 150, 150) inset' }}>
                    <h4>Delete Account</h4>
                </div>

                <div className="card-body">
                    <p className="card-text">Are you sure you wish to delete your account? All stored data will be deleted.</p>
                </div>

                <div className="card-footer text-right" style={{ boxShadow: '0px 0px 10px 3px rgb(162, 150, 150) inset' }}>
                    <button className="btn" style={{backgroundColor:'#184d47', color:'#fff'}} onClick={(e) => handleCancel(e)}> Cancel </button>
                    <button className="btn btn-danger ml-2" onClick={(e) => handleDelete(e)}> Yes, Delete </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteAccount

// groceries, housing, transportation, clothing, health, disretionary, education, communication, misc