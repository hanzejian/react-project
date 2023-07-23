import React, { Component } from 'react';
import Navbar from "./components/navbar";

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      subTitle: 'subTitle'
    }
  }
  onTitleInput = (e) => {
    this.setState({ title: e.target.value })
  }
  onSubTitleInput = (e) => {
    this.setState({ subTitle: e.target.value })
  }
  render() {
    const { title, subTitle } = this.state;
    return (
      <div>
        <label htmlFor="title">大标题：</label>
        <input
          id="title"
          type="text"
          value={title}
          onInput={this.onTitleInput}
        />
        <label htmlFor="subTitle">子标题：</label>
        <input
          id="subTitle"
          type="text"
          value={subTitle}
          onInput={this.onSubTitleInput}
        />
        <Navbar
          title={title}
          subTitle={subTitle}
        ></Navbar>
      </div>
    )
  }
}
