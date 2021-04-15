import React from 'react'

const Resources = () => {
    return (
        <div className="mx-5 my-3">
            <div className="card">
                <div style={{margin:'10px'}}>
                    <h2 style={{ color: '#184d47'}}>Let's get you known about Investment in India. Why Investing is Important & Where to Invest?</h2>
                    <p>Investing is allocating money towards assets in the hope of making your future better. Investments are made with the view of earning returns, which grows your amount invested to a higher sum.</p>
                    <h4 style={{ color: '#184d47'}}>Why Should You Invest?</h4>
                    <p>Investing is essential to achieve your goals. It is the only way to make your future better. By making investments, you are also saving and accumulating a corpus for a rainy day. Apart from that, making regular investments forces you to set aside a sum regularly, thereby helping you instil a sense of financial discipline in the long run. </p>
                    <h4 style={{ color: '#184d47'}}>Types of Investments</h4>
                    <table className='table'>
                        <tr>
                            <th scope='col'>Parameter</th>
                            <th scope='col'>Active Investment</th>
                            <th scope='col'>Passive Investment</th>
                        </tr>
                        <tr>
                            <td>Suitability</td>
                            <td>Individuals with an in-depth understanding of finances</td>
                            <td>Everyone</td>
                        </tr>
                        <tr>
                            <td>Cost of investment</td>
                            <td>Higher as you frequently trade securities (mostly equities) in your portfolio</td>
                            <td>Lower as you buy and hold securities for a longer period</td>
                        </tr>
                        <tr>
                            <td>Risk involved</td>
                            <td>Higher as you frequently buy and sell securities</td>
                            <td>Lower as you hold securities for a longer time</td>
                        </tr>
                        <tr>
                            <td>Return potential</td>
                            <td>Higher</td>
                            <td>Lower</td>
                        </tr>
                    </table>
                    <p>You have to choose to adopt either an active or passive strategy after you have assessed your requirements and risk tolerance level. </p>
                    <h4 style={{ color: '#184d47'}}>Popular Investment Options in India</h4>
                    <p>You have numerous investment options to choose from. However, you have to ensure that you are investing in only those options that fall under your risk tolerance and serve your requirements. The following are the top 7 investment options in India:
                    <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>Direct Equity</li>
                            <li className='list-group-item'>Mutual Funds</li>
                            <li className='list-group-item'>Fixed Deposits</li>
                            <li className='list-group-item'>Recurring Deposits</li>
                            <li className='list-group-item'>Public Provident Fund</li>
                            <li className='list-group-item'>Employee Provident Fund</li>
                            <li className='list-group-item'>National Pension System</li>
                        </ul>
                    </p>
                    <h4 style={{ color: '#184d47'}}>Which Investment Option Should You Choose?</h4>
                    <p>Since there are numerous investment vehicles, it is normal for an investor to get stuck when selecting one. If you are new to investing, then it is likely that you are not sure as to where you should invest your money. Making the wrong investment choice can lead to financial losses, which you would not want. Hence, we recommend that you base your investment decisions on the following parameters:
                    <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>Age</li>
                            <li className='list-group-item'>Goal</li>
                            <li className='list-group-item'>Profile</li>
                        </ul>
                    </p>
                    <table className='table'>
                        <tr>
                            <th scope='col'>Investment</th>
                            <th scope='col'>Type</th>
                            <th scope='col'>Return Potential</th>
                            <th scope='col'>Potential to beat Inflation</th>
                            <th scope='col'>Risk Involved</th>
                        </tr>
                        <tr>
                            <td>Direct Equity</td>
                            <td>Active</td>
                            <td>Very High</td>
                            <td>Very High</td>
                            <td>High</td>
                        </tr>
                        <tr>
                            <td>Mutual Funds</td>
                            <td>Both Active and Passive</td>
                            <td>Moderately High</td>
                            <td>Very High</td>
                            <td>High</td>
                        </tr>
                        <tr>
                            <td>Fixed Deposits</td>
                            <td>Passive</td>
                            <td>Moderately Low</td>
                            <td>High</td>
                            <td>No risk</td>
                        </tr>
                        <tr>
                            <td>Recurring Deposits</td>
                            <td>Passive</td>
                            <td>Moderately Low</td>
                            <td>Low</td>
                            <td>No risk</td>
                        </tr>
                        <tr>
                            <td>Public Provident Fund</td>
                            <td>Passive</td>
                            <td>High</td>
                            <td>Low</td>
                            <td>No risk</td>
                        </tr>
                        <tr>
                            <td>Employees’ Provident Fund</td>
                            <td>Passive</td>
                            <td>High</td>
                            <td>Moderately High</td>
                            <td>No risk</td>
                        </tr>
                        <tr>
                            <td>National Pension System</td>
                            <td>Both Active and Passive</td>
                            <td>Moderately High</td>
                            <td>Moderately High</td>
                            <td>Moderate</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Resources
