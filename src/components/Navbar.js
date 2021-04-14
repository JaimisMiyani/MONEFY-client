import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ onLogout }) => {
    return (
        <div style={{backgroundColor:'#184d47', color:'#fff'}}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className='container-fluid'>
                    <NavLink exact to='/' className="navbar-brand" style={{color:'white'}}>Revest</NavLink>
                    <ul className='navbar-nav d-flex '>
                        <li className='nav-item'>
                            <NavLink exact to='/resources' className='nav-link' style={{color:'white'}}>Investment Resources</NavLink>
                        </li>
                        {localStorage.getItem('token') ?
                            <>
                                <li className='nav-item'>
                                    <NavLink exact to='/addExpense' className='nav-link' style={{color:'white'}}>Add Expense</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink exact to='/budgetBreakdown' className='nav-link' style={{color:'white'}}>Budget Breakdown</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink exact to='/profile' className='nav-link' style={{color:'white'}}>Profile</NavLink>
                                </li>
                                <button className='btn btn-danger btn' style={{marginLeft:'7px'}} onClick={() => onLogout()}>Logout</button>
                            </>
                            : <>
                                <li className='nav-item'>
                                    <NavLink exact to='/register' className='nav-link' style={{color:'white'}}>Register</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink exact to='/login' className='nav-link' style={{color:'white'}}>Login</NavLink>
                                </li>
                            </>
                        }</ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
