import React, { useEffect, useState } from 'react'
import Statistics from './Statistics'

const BudgetBreakdown = () => {
    return (
        <div className="mx-5 mt-5">
            <div className="card" style={{border:'none'}}>
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item ">
                            <a className="nav-link active color1" href="./budgetBreakdown">Budget and Expense Breakdown</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link color1" href="./EditBudgets">Modify Budgets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link color1" href="./tips">Financial Tips</a>
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
