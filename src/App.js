import React, { Component } from 'react';
import './App.css';

import Button from './Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {result: ''};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let currState = this.state.result;
    this.setState({
      result: e.target.value
    });
    console.log(currState);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My Calculator</h1>
        </header>
        <div id='input'>{this.state.result}</div>
        <Button onClick={this.handleClick} />
      </div>
    );
  }
};

export default App;
