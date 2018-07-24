import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: ''
    };

    this.onChange = this.onChange.bind(this);
  }
  const onChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hi there!
        </p>
        <input
          value={this.state.input}
          onChange={this.onChange}
        />
        <button>Enter!</button>
      </div>
    );
  }
}

export default App;
