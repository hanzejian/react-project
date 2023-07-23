/**
 * 从react的包当中引入了React，只要你写Reat.js组件就必须引入React
 * 因为React里有一种语法叫 jsx ，要写JSX，就必须引入React
 */
import React from 'react'
/**
 * ReactDOM里有一个render方法，功能就是把组件渲染并构造DOM树，
 * 然后插入到页面上某个特定的元素上
 */
import ReactDOM from 'react-dom'
import App from './01-base/05-ref应用';
ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(
//   // （标签名，属性，子节点）
//   ("div", { id: "aaa", className: "bbb" }, '111'),
//   document.getElementById('root')
// );