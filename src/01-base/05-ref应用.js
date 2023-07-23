import React, { Component } from 'react'

class Child extends Component {
  render () {
    return (
      <input type="text" />
    )
  }
}

export default class App extends Component {
  myref = React.createRef();
  render() {
    return (
      <div>
        <Child ref={this.myref}/>
        <button onClick={() => console.log(this.myref.current)}>点击</button>
      </div>
    )
  }
}
