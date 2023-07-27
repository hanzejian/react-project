import React, { Component } from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import NotFound from '../views/NotFound'

export default class IndexRouter extends Component {
  render() {
    return (
      <HashRouter>
          <Switch>
            <Route path="/films" component={Films}></Route>
            <Route path="/cinemas" component={Cinemas}></Route>
            <Route path="/center" component={Center}></Route>

            {/* 重定向，模糊匹配 */}
            {/* <Redirect from="/" to="/films"></Redirect> */}

            {/* 重定向，exact精准匹配 */}
            <Redirect from="/" to="/films" exact></Redirect>
            <Route component={NotFound}></Route>
          </Switch>
      </HashRouter>
    )
  }
}
