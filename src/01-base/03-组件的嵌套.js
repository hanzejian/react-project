import React, { Component } from 'react'

class Child extends Component {
    render () {
        return <div>child</div>
    }
}

class Navbar extends Component {
    click = () => {
        console.log(111)
        console.log(this.props, 'this.props')
    }
    render () {
        return <div onClick={this.click}>
            navbar
            <Child onClick={this.click}></Child>
            { this.props.children }
        </div>
    }
}

function Swiper ()  {
    return <div>swiper</div>
}

const Tabbar = () => <div>tabbar</div>

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
            <h1>123</h1>
            <h1>456</h1>
        </Navbar>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    )
  }
}
