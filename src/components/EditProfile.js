import React, { useState, useEffect } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import { FaUserEdit } from "react-icons/fa";

const EditProfile = ( ) => {

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
            console.log("in edit profile")
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
        // <>
        // <div style={{margin:'10px'}}>
        //     <div>
        //         <p className='p-3'>Here you can set your income and age so that we can calculate your return accordingly.</p>
        //     </div>
        //     <div className='centered'>
        //         <div className='card text-dark mb-3' style={{ backgroundColor: '#d6efc7' }}>
        //             <div className='card-body'>
        //                 <table>
        //                     <tr>
        //                         <td><label>Age</label></td>
        //                         <td></td>
        //                     </tr>
        //                     <tr>
        //                         <td><label>Income</label></td>
        //                         <td><input type='number' onChange={(e) => setIncome(e.target.value)} /></td>
        //                     </tr>
        //                     <tr>
        //                         <td colSpan='2' style={{ textAlign: 'center' }}><button className='btn' style={{ backgroundColor: '#184d47', color: '#fff' }} onClick={(e) => handleSubmit(e)}>Submit</button></td>
        //                     </tr>
        //                 </table>
        //             </div>
        //         </div>
        //     </div>
        //     <div className='centered'>
        //         <button className='btn btn-danger'>Delete this Account</button>
        //     </div>
        // </div>

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
// </>
    )
}

export default EditProfile