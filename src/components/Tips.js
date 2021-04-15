import React from 'react'
import { NavLink } from 'react-router-dom'

const Tips = () => {
    return (
        <div className="mx-5 mt-5">
            <div className="card" style={{border:'none'}}>
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item ">
                            <NavLink exact to='./budgetBreakdown' className="nav-link color1">Budget and Expense Breakdown</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to='./EditBudgets' className="nav-link color1">Modify Budgets</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to='./tips' className="nav-link active color1">Financial Tips</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <div className="mx-auto" style={{ border : '1px solid black' }}>
                        <h5 className='shadow-sm m-2 p-3 rounded h5tag'>Top tips for choosing investments</h5>
                        <p className='shadow-none m-2 p-3 rounded ptag'>Use these tips and key steps to help find an investment that’s right for you.</p>
                        <h3 className='shadow m-2 p-3 rounded h3tag'>1. Review your needs and goals</h3>
                        <p className='shadow-none m-2 p-3 rounded ptag'>It’s well worth taking the time to think about what you really want from your investments. Knowing yourself, your needs and goals and Your appetite for risk is a good start, so start by filling in a Money fact find.</p>
                        <h3 className='shadow m-2 p-3 rounded h3tag'>2. Consider how long you can invest</h3>
                        <p className='shadow-none m-2 p-3 rounded ptag'>Think about how soon you need to get your money back. Time frames vary for different goals and will affect the type of risks you can take on. For example:
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item' style={{ backgroundColor: '#d6efc7' }}>If you’re saving for a house deposit and hoping to buy in a couple of years, investments such as shares or funds will not be suitable because their value goes up or down. Stick to cash savings accounts like Cash ISAs.</li>
                                <li className='list-group-item' style={{ backgroundColor: '#d6efc7' }}>If you’re saving for your pension in 25 years’ time, you can ignore short-term falls in the value of your investments and focus on the long term. Over the long term, investments other than cash savings accounts tend to give you a better chance of beating inflation and reaching your pension goal.</li>
                            </ul>
                        </p>
                        <h3 className='shadow m-2 p-3 rounded h3tag'>3. Make an investment plan</h3>
                        <p className='shadow-none m-2 p-3 rounded ptag'>Once you’re clear on your needs and goals – and have assessed how much risk you can take – draw up an investment plan. This will help you identify the types of product that could be suitable for you. A good rule of thumb is to start with low risk investments such as Cash ISAs. Then, add medium-risk investments like unit trusts if you’re happy to accept higher volatility. Only consider higher risk investments once you’ve built up low and medium-risk investments. Even then, only do so if you are willing to accept the risk of losing the money you put into them.</p>
                        <h3 className='shadow m-2 p-3 rounded h3tag'>4. Diversify</h3>
                        <p className='shadow-none m-2 p-3 rounded ptag'>It’s a basic rule of investing that to improve your chance of a better return you have to accept more risk. But you can manage and improve the balance between risk and return by spreading your money across different investment types and sectors whose prices don’t necessarily move in the same direction – this is called diversifying. It can help you smooth out the returns while still achieving growth, and reduce the overall risk in your portfolio.</p>
                        <h3 className='shadow m-2 p-3 rounded h3tag'>5. Decide how hands-on to be</h3>
                        <p className='shadow-none m-2 p-3 rounded ptag'>Investing can take up as much or as little of your time as you’d like:
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item' style={{ backgroundColor: '#d6efc7' }}>If you want to be hands-on and enjoy making investment decisions, you might want to consider buying individual shares – but make sure you understand the risks.</li>
                                <li className='list-group-item' style={{ backgroundColor: '#d6efc7' }}>If you don’t have the time or inclination to be hands-on – or if you only have a small amount of money to invest – then a popular choice is investment funds, such as unit trusts and Open Ended Investment Companies (OEICs). With these, your money is pooled with that of lots of other investors and used to buy a wide spread of investments.</li>
                                <li className='list-group-item' style={{ backgroundColor: '#d6efc7' }}>If you’re unsure about the types of investment you need, or which investment funds to choose, get financial advice.</li>
                            </ul>
                        </p>
                        <h3 className='shadow m-2 p-3 rounded h3tag'>6. Check the charges</h3>
                        <p className='shadow-none m-2 p-3 rounded ptag'>If you buy investments, like individual shares, direct, you will need to use a stockbroking service and pay dealing charges. If you decide on investment funds, there are charges, for example to pay the fund manager. And, if you get financial advice, you will pay the adviser for this. Whether you’re looking at stockbrokers, investment funds or advisers, the charges vary from one firm to another. Ask any firm to explain all their charges so you know what you will pay, before committing your money. While higher charges can sometimes mean better quality, always ask yourself if what you’re being charged is reasonable and if you can get similar quality and pay less elsewhere.</p>
                        <h3 className='shadow m-2 p-3 rounded h3tag'>7. Investments to avoid</h3>
                        <p className='shadow-none m-2 p-3 rounded ptag'>Avoid high-risk products unless you fully understand their specific risks and are happy to take them on. Only consider higher risk products once you’ve built up money in low and medium-risk investments. And some investments are Usually best avoided altogether.</p>
                        <h3 className='shadow m-2 p-3 rounded h3tag'>8. Review periodically – but don’t ‘stock-watch’</h3>
                        <p className='shadow-none m-2 p-3 rounded ptag'>Regular reviews – say, once a year – will ensure that you keep track of how your investments are performing and adjust your savings as necessary to reach your goal. You will get regular statements to help you do this. Find out more below. However, don’t be tempted to act every time prices move in an unexpected direction. Markets rise and fall all the time and, if you’re a long-term investor, you can just ride out these fluctuations</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tips


{/*     

         

*/}