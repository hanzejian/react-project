import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Nowplaying from './films/Nowplaying'
import ComingSoon from './films/ComingSoon'
export default class Films extends Component {
  render() {
    return (
      <div>
        <div style={{ height: '200px', background: 'yellow' }}>大轮播</div>
        <div>导航栏</div>
        {/* 路由配置 嵌套路由 */}
        <Route path="/films/nowplaying" component={Nowplaying}></Route>
        <Route path="/films/comingsoon" component={ComingSoon}></Route>
        <Redirect from="films" to="/films/nowplaying"></Redirect>
      </div>
    )
  }
}
