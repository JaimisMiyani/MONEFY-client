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
                    <Tab eventKey="home" title="Budget and Investment Breakdown" tabClassName="addBorder">
                        <div className="card-body">
                            <Statistics />
                        </div>
                    </Tab>
                    <Tab eventKey="budgets" title="Modify Budgets" tabClassName="addBorder">
                        <div className="card-body">
                            <EditBudgets />
                        </div>
                    </Tab>
                    <Tab eventKey="tips" title="Financial Tips" tabClassName="addBorder">
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