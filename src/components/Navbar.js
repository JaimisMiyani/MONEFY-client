import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ onLogout }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container-fluid'>
                <NavLink exact to='/' className="navbar-brand">Revest</NavLink>
                <ul className='navbar-nav d-flex '>
                    <li className='nav-item'>
                        <NavLink exact to='/investmentResources' className='nav-link'>Investment Resources</NavLink>
                    </li>
                    {localStorage.getItem('token') ?
                        <>
                            <li className='nav-item'>
                                <NavLink exact to='/addExpense' className='nav-link'>Add Expense</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink exact to='/budgets' className='nav-link'>Budget Breakdown</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink exact to='/profile' className='nav-link'>Profile</NavLink>
                            </li>
                            <button onClick={() => onLogout()}>Logout</button>
                        </>
                        : <>
                            <li className='nav-item'>
                                <NavLink exact to='/register' className='nav-link'>Register</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink exact to='/login' className='nav-link'>Login</NavLink>
                            </li>
                        </>
                    }</ul>
            </div>
        </nav>
    )
}

export default Navbar
