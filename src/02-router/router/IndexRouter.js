import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'

export default class IndexRouter extends Component {
  render() {
    return (
      <HashRouter>
          <Route path="/films" component={Films}></Route>
          <Route path="/cinemas" component={Cinemas}></Route>
          <Route path="/center" component={Center}></Route>
      </HashRouter>
    )
  }
}
