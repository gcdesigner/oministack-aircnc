import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import New from './pages/New'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route exact path="/new" component={New} />
                <Route path="/new/:id" component={New} />
            </Switch>
        </BrowserRouter>
    )
}