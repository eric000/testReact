import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'
import './base.styl'
import Home from '@pages/Home.jsx'

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Redirect from="*" to="/"/>
        </Switch>
    </Router>,
    document.getElementById('app')
);