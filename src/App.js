import React, {useState} from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Budgets from './components/Budgets';
import PrivateRoute from './components/routing/PrivateRoute';
import Logout from './components/Logout';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/register" exact render={() => <Register />}/>
        <Route path="/login" exact render={() => <Login />}/>
        <PrivateRoute path="/budgets" exact component={Budgets}/>
        <PrivateRoute path="/logout" exact component={Logout}/>
        <Route path="/" exact render={() => <Home />}/>
      </Switch>
    </Router>
  );
}

export default App;
