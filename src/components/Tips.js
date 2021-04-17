import React from 'react'

const Tips = () => {
    return (
        <div className="mx-2 mt-3" >
            <div className="card" >
                <div className="card-body">
                    <div className="mx-auto">
                        <div style={{ margin: '2px' }}>
                            <h2 style={{ color: 'white', backgroundColor:'#184d47' }} className="shadow-sm p-2 rounded centered">Notes on Saving and Planning</h2>
                            <h3 style={{ color: '#184d47' }} className="pt-5">How much should you have in your savings account as an emergency fund?</h3>
                            <p>The general rule of thumb would be to have 3 months of income on hand in case of emergency. For you, this would mean having ₹{0.3 * localStorage.getItem('income')} on hand. Once you have that emergency fund established, you can then feel more comfortable putting a higher percentage of your monthly savings into investments.</p>
                            <h3 style={{ color: '#184d47' }} >Why not put it all in savings?</h3>
                            <h5 style={{ color: '#184d47' }}>Inflation:</h5>
                            <p>While savings accounts are often the lowest risk option, the average inflation rate over the last 10 years has sat at about 1.3%. For 2019, the inflation rate was at 2.3%. While many bank accounts may pay out an interest rate based off of how much you have in your account, often times it doesn't even keep up with inflation! This means every year that goes by, your money could be worth less and less unless you take the proper steps to grow your savings.</p>
                            <h5 style={{ color: '#184d47' }}>Diversification:</h5>
                            <p>This applies to putting all of your money exclusively in any 1 type of strategy. Expect the unexpected. As the saying goes, you never want to put all of your eggs in one basket. Life is unpredictable and anything could happen tomorrow. You want to make sure your savings are spred across an array of financial options, that way if the unexpected happens, you wont be as volnerable to financial losses.</p>
                            <h5 style={{ color: '#184d47' }}>Opportunity Cost:</h5>
                            <p>The fact is, there are several well established and historic ways to grow your savings. Whether its realestate, stocks, or bonds, if you are letting these options pass you by and leaving your hard earned money to sit there, you have an opporunity cost of missing out on the potential gians.</p>
                            <p>None of this is to say that investing is a guarenteed financial gain, and these different financial avenues all carry a bit of a learning curve, and intrinsic risk. It is important that you understand what you are giving your money and trust into, and this requires research, speaking with a professional, and having a solid understanding of your financial goals and motivations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tips