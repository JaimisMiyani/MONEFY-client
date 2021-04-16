import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayError from './DisplayError';
import DisplayMessage from './DisplayMessage';
import { NavLink } from 'react-router-dom'
import { RiContactsBookUploadLine } from 'react-icons/ri';

const DeleteAccount = () => {
    const [isDelete, setIsDelete] = useState(false);

    // const logout = () => {
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('userName');
    //     localStorage.removeItem('userEmail');
    //     console.log("Account Deleted Successfully");
    //     localStorage.clear();
    // }
    
    const handleDelete = async (e) => {
        e.preventDefault();    

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-type': 'application/json',
                'token' : token,
            }
        }

        try {
            console.log("coming in try catch")
            const res = await axios.get("http://localhost:3000/api/user/deleteAccount", config);
            console.log("after try catch", res)
        } catch(error){
            console.log("error in try catch")
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
                <form onSubmit={(e) => handleDelete(e)}>
                    <button className="btn btn-danger ml-2" type="submit"> Yes, Delete </button>
                </form>
            </div> 
        </div>
    )
}

export default DeleteAccount

// groceries, housing, transportation, clothing, health, disretionary, education, communication, misc
