/*
 * @Author: hanzejian hanzejian1998@163.com
 * @Date: 2023-07-29 11:14:53
 * @LastEditors: hanzejian hanzejian1998@163.com
 * @LastEditTime: 2023-07-29 12:07:34
 * @FilePath: /react-project/src/01-base/07-数组与对象的修改.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      subTitle: 'subTitle',
      obj1: {
        a: 1,
        b:2
      },
      list1: [1, 2, 3],
      obj2: {
        a: 1,
        b:2
      },
      list2: [1, 2, 3]
    }
  }
  /**
   * @description: 修改对象
   * @return {*}
   */
  onClickModifyObjByWrongWay = () => {
    const { obj1 } = this.state;
    obj1.a = new Date().getTime();
    console.log(obj1.a, 'obj1.a')
    console.log(this.state)
    // 其实直接修改obj1的值也能更新成功的，但是官方不推荐这么做
    this.setState({obj1});
  }
  /**
   * @description: 修改数组
   * @return {*}
   */
  onClickModifyArrayByWrongWay = () => {
    const { list1 } = this.state;
    // 直接修改数组里某项的值也能更新成功，但官方不推荐这么做
    list1[0] = new Date().getTime();
    console.log(list1 === this.state.list)
    this.setState({ list1 }, () => console.log(this.state.list1, 'list'));
  }
  /**
   * @description: 修改对象
   * @return {*}
   */  
  onClickModifyObjByCorrectWay = () => {
    let a = new Date().getTime();
    let obj2 = Object.assign({}, this.state.obj2, { a })
    this.setState({obj2});
    console.log('amend添加')
  }
  /**
   * @description: 修改数组
   * @return {*}
   */  
  onClickModifyArrayByCorrectWay = () => {
    let list2 = [...this.state.list2];
    list2[0] = new Date().getTime();
    this.setState({ list2 });
  }
  render() {
    const { obj1, list1, obj2, list2 } = this.state;
    return (
      <div>
        <h1>更新对象与数组的错误写法，但是没有报错</h1>
        <div>
          <button onClick={this.onClickModifyObjByWrongWay}>点击改变对象{obj1.a}</button>
          <button onClick={this.onClickModifyArrayByWrongWay}>点击改变数组</button>
          <ul>
            {
              list1.map((item, index) => 
                <li key={index}>{item}</li>
              )
            }
          </ul>
        </div>
        <h1>更新对象与数组的正确写法</h1>
        <div>
          <button onClick={this.onClickModifyObjByCorrectWay}>点击改变对象{obj2.a}</button>
          <button onClick={this.onClickModifyArrayByCorrectWay}>点击改变数组</button>
          <ul>
            {
              list2.map((item, index) => 
                <li key={index}>{item}</li>
              )
            }
          </ul>
        </div>
      </div>
    )
  }
}
