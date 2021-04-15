import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayError from './DisplayError';
import DisplayMessage from './DisplayMessage';
import { NavLink } from 'react-router-dom'

const DeleteAccount = () => {
    const handleDelete = async (e) => {
        e.preventDefault();

        const email = localStorage.getItem('userEmail');
        const body = { email };

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        console("in the delete account");

        try {
            const res = await axios.put("http://localhost:3000/api/user/deleteAccount", body, config);
        } catch(error){
            console.log(error);
        }
    }

    return (
        <div className="card col-4 my-5 mx-auto px-0 rounded-lg text-left" style={{ borderColor: '#184d47' }}>
            <div className="card-header" style={{boxShadow:'0px 0px 10px 3px rgb(162, 150, 150) inset'}}>
                <h4>Delete Account</h4>
            </div>

            <div className="card-body">
                <p className="card-text">Are you sure you wish to delete your account? All stored data will be deleted.</p>
            </div>   

            <div className="card-footer text-right" style={{boxShadow:'0px 0px 10px 3px rgb(162, 150, 150) inset'}}>
                <button className="btn btn-secondary" type="submit"> cancle </button>
                <button className="btn btn-danger ml-2" type="submit" onSubmit={(e) => handleDelete(e)}> Yes, Delete </button>
            </div> 
        </div>
    )
}

export default DeleteAccount

// groceries, housing, transportation, clothing, health, disretionary, education, communication, misc
