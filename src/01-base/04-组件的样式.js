import React, { Component } from 'react'
import './css/01-index.css' // 导入css文件，有webpack的支持

export default class App extends Component {
  render() {
    var myname = "kerwin"
    // 驼峰式
    var obj = {
        backgroundColor: 'yellow',
        fontSize: '30px'
    }
    return (
      <div>
        {10 + 20} - {myname}
        {10 > 20 ? 'aaa' : 'bbb'}

        <div style={obj}>1111111</div>
        <div style={{ backgroundColor: "red" }}>2222222</div>
        <div className='active'>333333</div>
      </div>
    )
  }
}
