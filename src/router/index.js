import React, {Component} from 'react'
import {HashRouter, Route, Switch,Redirect} from 'react-router-dom'

import Admin from '../views/admin'
import Home from '../views/home'
import NotMatch from '../views/notMatch'
import Order from '../views/order'


class Router extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route path="/" render={() =>
                            <Admin>
                                <Redirect  from="/" to="/admin"></Redirect>
                                <Switch>
                                    <Route path='/admin/home' component={Home}></Route>
                                    <Route path='/admin/order' component={Order}></Route>
                                    <Route component={NotMatch}></Route>
                                </Switch>
                            </Admin>
                        }/>
                        <Route component={NotMatch}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )

    }
}

export default Router

