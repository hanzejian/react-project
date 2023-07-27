import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Center1 from './secondRouter/Center1'
import Center2 from './secondRouter/Center2'

export default class Center extends Component {
  render() {
    return (
      <div>
        <h1>Center</h1>
        <Switch>
          <Route path="/center1" component={Center1} exact></Route>
          <Route path="/center2" component={Center2}></Route>
        </Switch>
      </div>
    )
  }
}
