import React, { Component } from 'react';
import PropsType from "prop-types";

export default class Navbar extends Component {
  static propTypes = {
    title: PropsType.string,
    subTitle: PropsType.string,
    thirdTitle: PropsType.oneOf(['1', '2', '3'])
  }
  static defaultProps = {
    title: 'title',
    subTitle: 'subTitle'
  }
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
    console.log(PropsType, 'PropsType')
    const { title, thirdTitle } = this.props;
    const { subTitle } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
        <h3>oneOf:{thirdTitle}</h3>
      </div>
    )
  }
}
