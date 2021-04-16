import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route render={() => !localStorage.getItem('token') ? 
            <Redirect to='/' /> : <Component { ...rest } />
        } />
    )
}

export default PrivateRoute
