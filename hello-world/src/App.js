import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }
  onSubmit = () => {
  	
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
        <form onSubmit={this.onSubmit}>
	        <input
	          value={this.state.input}
	          onChange={this.handleChange}
	        />

	        <input
	          value={this.state.input}
	          onChange={this.handleChange}
	        />
	        <button>Enter!</button>
	    </form>
      </div>
    );
  }
}

export default App;
