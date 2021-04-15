import React from 'react'
import { ProgressBar } from "react-bootstrap"

const ProgressBars = ({expenses, income}) => {

    const calculateFixed = () => {
        return (expenses.totalExpense - expenses.misc + expenses.disretionary + expenses.communication );
    }

    const leftover = Math.max(income - expenses.totalExpense, 0);
    const fixed = calculateFixed();
    const flexible = expenses.totalExpense - fixed;
    const fixedPercent = Math.round((fixed/(income*0.5))*100);
    const flexiblePercent = Math.round((flexible/(income*0.3))*100);
    const savingsPercent = Math.round((leftover/(income*0.2))*100);

    return (
        <div>
            <h3>The 50/30/20 breakdown</h3>
            <p>Fixed Expenses - ${fixed} out of ${(income * 0.5)}</p>
            <ProgressBar style={{ width: '90%' }} now={fixedPercent} variant={fixedPercent < 100 ? "success" : "danger"} animated label={`${fixedPercent}%`} />
            <br />
            <p>Flexible Expenses - ${flexible} out of ${(income * 0.3)}</p>
            <ProgressBar now={flexiblePercent} style={{ width: '54%' }} variant={flexiblePercent < 100 ? "success" : "danger"} animated label={`${flexiblePercent}%`} />
            <br />
            <p>Leftover Savings - ${leftover} out of ${(income * 0.2)}</p>
            <ProgressBar now={savingsPercent} style={{ width: '36%' }} variant={savingsPercent < 100 ? "warning" : "success"} animated label={`${savingsPercent}%`} />
        </div>
    )
}

export default ProgressBars
