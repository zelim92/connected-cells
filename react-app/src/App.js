import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Matrix from './Matrix';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row: 2,
      col: 2,
    };

    this.handleRowChange = this.handleRowChange.bind(this);
    this.handleColumnChange = this.handleColumnChange.bind(this);
  }

  handleRowChange(event) {
    this.setState({row: event.target.value});
  }

  handleColumnChange(event) {
    this.setState({col: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <h1>MoneyLion - Connected Cells</h1>
        
        <label>
          Row:&nbsp;
          <input type="number" value={this.state.row} onChange={this.handleRowChange} style={{width:"50px"}} />
        </label>
        &nbsp;&nbsp;&nbsp;
        <label>
          Column:&nbsp;
          <input type="number" value={this.state.col} onChange={this.handleColumnChange} style={{width:"50px"}} />
        </label>
        <hr />

        <Matrix row={this.state.row} col={this.state.col} />
          

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
