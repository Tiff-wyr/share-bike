import React,{Component} from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'

import Admin from '../views/admin'
import Home from '../views/home'
import NotMatch from '../views/notMatch'

class Router extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
           <HashRouter>
               <div>
                   <Switch>
                       <Route path="/" render={()=>
                       <Admin>
                           <Switch>
                               <Route path='/home' component={Home}></Route>
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

