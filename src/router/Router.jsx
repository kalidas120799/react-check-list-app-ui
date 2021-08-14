import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import Home from "../pages/home/Home"
import Recycle from "../pages/recycle/Recycle"
import Login from "../pages/login/Login"
import Mytodo from '../pages/todo/Mytodo'
import Logout from '../pages/logout/Logout'
import { checkLogin } from "../auth"
export default class Router extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/home" render={() => (
                        checkLogin() ? < Home /> : <Redirect to="/" />
                    )} />
                    <Route exact path="/mytodo/:todoid" render={() => (
                        checkLogin() ? < Mytodo /> : <Redirect to="/" />
                    )} />
                    <Route exact path="/recycle" render={() => (
                        checkLogin() ? < Recycle /> : <Redirect to="/" />
                    )} />
                    <Route exact path="/logout" render={() => (
                        checkLogin() ? < Logout /> : <Redirect to="/" />
                    )} />
                </Switch>
            </React.Fragment>
        )
    }
}
