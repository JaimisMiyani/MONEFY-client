import React, { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import EditBudgets from './components/EditBudgets';
import PrivateRoute from './components/routing/PrivateRoute';
import Navbar from './components/Navbar';
import AddExpense from './components/AddExpense';
import EditProfile from './components/EditProfile';
import axios from 'axios';
import BudgetBreakdown from './components/BudgetBreakdown';
import Resources from './components/Resources';
import Tips from './components/Tips';
import Statistics from './components/Statistics';
import DeleteAccount from './components/DeleteAccount';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [user, setUser] = useState({
    auth: {
      user: {}
    }
  })

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    localStorage.clear()
    setUser({ auth: { user: {} } });
  };

  const login = (user) => {
    setUser({ auth: { user } });
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
        console.log(res);
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
        <Navbar onLogout={logout}/>
      </div>
      <Switch>
        <Route path="/register" exact render={() => <Register onLogin={login} />} />
        <Route path="/login" exact render={() => <Login onLogin={login} />} />
        <Route path="/resources" exact render={() => <Resources />} />
        <PrivateRoute path="/editBudgets" exact component={EditBudgets} />
        <PrivateRoute path="/addExpense" exact component={AddExpense} />
        <PrivateRoute path="/editProfile" exact component={EditProfile} />
        <PrivateRoute path="/budgetBreakdown" exact component={BudgetBreakdown} />
        <PrivateRoute path="/tips" exact component={Tips} />
        <PrivateRoute path="/statistics" exact component={Statistics} />
        <PrivateRoute path="/deleteAccount" exact component={DeleteAccount} onLogout={logout}/>
        <Route path="/" exact render={() => <Home />} />
      </Switch>
    </Router>
  );
}

export default App;
