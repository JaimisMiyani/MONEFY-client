import React, { useEffect, useState } from 'react'
import Statistics from './Statistics'
import { NavLink } from 'react-router-dom'

const BudgetBreakdown = () => {
    return (
        <div className="mx-5 mt-5">
            <div className="card" style={{border:'none'}}>
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item ">
                            <NavLink exact to='./budgetBreakdown' className="nav-link active color1">Budget and Expense Breakdown</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to='./EditBudgets' className="nav-link color1">Modify Budgets</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to='./tips' className="nav-link color1">Financial Tips</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <Statistics />
                </div>
            </div>
        </div>
    )
}

export default BudgetBreakdown
