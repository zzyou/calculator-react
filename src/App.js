import React, { Component } from 'react';
import './App.css';

import Button from './Button';
import calculation from './calculation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {result: ''};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (/[0-9]/.test(e.target.value)) {
      this.setState({
        result: this.state.result.concat(e.target.value)
      });
    }
    
    else {
      this.setState(
        calculation(e.target.value, this.state.result)
      );
    }
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">
            Welcome to My Calculator
          </h1>
        </header>

        <div id="input">
          {this.state.result}
        </div>

        <Button onClick={this.handleClick} />

      </div>
    );
  }
};

export default App;
