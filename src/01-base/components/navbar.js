import React, { Component } from 'react'

export default class Navbar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      /**
       * state中的变量赋值为props的变量，只是初始化了值而已，
       * 后续props的变化不会影响state中subTitle的值
       */
      subTitle: this.props.subTitle
    }
  }
  render() {
    const { title } = this.props;
    const { subTitle } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
      </div>
      
    )
  }
}
