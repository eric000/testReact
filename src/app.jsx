import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import './base.styl'
import Home from '@pages/Home.jsx'
import Login from '@pages/Login.jsx'
import Layout from '@component/Layout.jsx'

class App extends React.Component{
    render(){
        let LayoutRouter = (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/product" component={Home}/>
                    <Route path="/category" component={Home}/>
                </Switch>
            </Layout>
        )
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={ props => LayoutRouter}/>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);