import React, {Component} from 'react'
import {HashRouter, Route, Switch,Redirect} from 'react-router-dom'

import Admin from '../views/admin'
import Home from '../views/home'
import NotMatch from '../views/notMatch'
import Order from '../views/order'
import Bar from '../views/bar'
import Pie from '../views/pie'
import MapDetail from '../views/mapDetail'



class Router extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        {/*<Route path="/map" compontent={MapDetail}></Route>*/}
                        <Route path="/admin" render={() =>
                            <Admin>
                                <Switch>
                                    <Route path='/admin/home' component={Home}></Route>
                                    <Route path='/admin/order' component={Order}></Route>
                                    <Route path='/admin/bar' component={Bar}></Route>
                                    <Route path='/admin/pie' component={Pie}></Route>
                                    <Route component={NotMatch}></Route>
                                </Switch>
                            </Admin>
                        }/>
                        {/*<Route component={MapDetail}></Route>*/}
                        <Route component={NotMatch}></Route>

                    </Switch>
                </div>
            </HashRouter>
        )

    }
}

export default Router

