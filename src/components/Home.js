import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardDeck } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";
import { BsPersonPlusFill } from "react-icons/bs";

const Home = () => {
    return (
        <div style={{ margin: '10px' }}>
            <div>
                <div>
                    <h3 style={{ color: '#184d47' }}>Personal finance and investing doesn't have to be intimidating.</h3>
                    <p>We can help you get started with a personalized budget and resources to fit your needs.</p>
                    <p>Our tools and resources are here to guide the beginner investor through their personal finance journey.</p>

                    {!localStorage.getItem('token') &&
                        <div>
                            <Link to="/register" title="Register">
                                <button className="btn" style={{ backgroundColor: '#184d47', color: '#fff' }}>
                                    <BsPersonPlusFill className="mb-1 " /> Let's Get Started
                            </button>
                            </Link>
                            <Link exact to="/login" title="Login">
                                <button className="btn" style={{ backgroundColor: '#184d47', color: '#fff', marginLeft: '10px' }}>
                                    <FaSignInAlt className="mb-1" /> Login
                            </button>
                            </Link>
                        </div>}
                </div>
                <hr className="my-4" />
                <br />
                <CardDeck>
                    <Card bg="success" text="white">
                        <Card.Img variant="top" src="addExpense.png" />
                        <Card.Body style={{ backgroundColor: '#184d47', textAlign: 'center' }}>
                            <Card.Text>
                                Add your expenses and reset them for the new month.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card bg="success" text="white">
                        <Card.Img variant="top" src="pie.png" />
                        <Card.Body style={{ backgroundColor: '#184d47', textAlign: 'center' }}>
                            <Card.Text>
                                Visualize your spending habits, and identify overspending.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card bg="success" text="white">
                        <Card.Img variant="top" src="bar.png" />
                        <Card.Body style={{ backgroundColor: '#184d47', textAlign: 'center' }}>
                            <Card.Text>
                                Generate a long-term investing plan based off of your excess spending.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        </div>
    )
}

export default Home
