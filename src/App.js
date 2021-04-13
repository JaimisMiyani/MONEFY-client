import React, { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import EditBudgets from './components/EditBudgets';
import PrivateRoute from './components/routing/PrivateRoute';
import Navbar from './components/Navbar';
import AddExpense from './components/AddExpense';
import Profile from './components/Profile';
import axios from 'axios';
import BudgetBreakdown from './components/BudgetBreakdown';

function App() {

  const [user, setUser] = useState({
    auth: {
      userId: {}
    }
  })

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.clear()
    setUser({ auth: { user: {} } });
  };

  const login = (user) => {
    setUser({ auth: { user: user._id } });
  };

  const checkIfAlreadyLoggedIn = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const config = {
        headers: {
          'Content-type': 'application/json',
          'token': token
        }
      }

      try {
        const res = await axios.get('http://localhost:3000/api/user/getUserId', config);
        console.log(res.data);
        setUser({ auth: { user: res.data.userId } });
      } catch (error) {
        console.log(error.response.data.error);
      }
    }
  }

  useEffect(() => {
    checkIfAlreadyLoggedIn();
  }, []);


  return (
    <Router>
      <div>
        <Navbar onLogout={logout} />
      </div>
      <Switch>
        <Route path="/register" exact render={() => <Register />} />
        <Route path="/login" exact render={() => <Login onLogin={login} />} />
        <PrivateRoute path="/editBudgets" exact component={EditBudgets} />
        <PrivateRoute path="/addExpense" exact component={AddExpense} />
        <PrivateRoute path="/profile" exact component={Profile} />
        <PrivateRoute path="/budgetBreakdown" exact component={BudgetBreakdown} />
        <Route path="/" exact render={() => <Home />} />
      </Switch>
    </Router>
  );
}

export default App;
