import React, { useEffect, useState } from 'react'
import Statistics from './Statistics'
import EditBudgets from './EditBudgets'
import Tips from './Tips'
import { Tabs, Tab } from "react-bootstrap";

const BudgetBreakdown = () => {
    return (
        <div className="mx-5 mt-5">
            <div className="card" style={{ border: 'none' }}>
                <Tabs defaultActiveKey="home">
                    <Tab eventKey="home" title="Budget and Investment Breakdown" >
                        <div className="card-body">
                            <Statistics />
                        </div>
                    </Tab>
                    <Tab eventKey="budgets" title="Modify Budgets">
                        <div className="card-body">
                            <EditBudgets />
                        </div>
                    </Tab>
                    <Tab eventKey="tips" title="Financial Tips">
                        <div className="card-body">
                            <Tips/>
                        </div>
                    </Tab>
                </Tabs>

            </div>
        </div>
    )
}

export default BudgetBreakdown
