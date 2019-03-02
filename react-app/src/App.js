import React, { Component } from 'react';
import './App.css';
import Matrix from './Matrix';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row: 2,
      col: 2,
      ans: 0,
    };
    this.handleRowChange = this.handleRowChange.bind(this);
    this.handleColumnChange = this.handleColumnChange.bind(this);
    this.updateLargestRegion = this.updateLargestRegion.bind(this);
  }

  handleRowChange(event) {
    this.setState({row: event.target.value});
  }

  handleColumnChange(event) {
    this.setState({col: event.target.value});
  }

  updateLargestRegion(numOfCells) {
    this.setState({ans: numOfCells});
  }

  render() {
    return (
      <div className="App">

        <h1>MoneyLion - Connected Cells</h1>
        
        <label>
          Row:&nbsp;
          <input type="number" min="0" value={this.state.row} onChange={this.handleRowChange} style={{width:"50px"}} />
        </label>
        &nbsp;&nbsp;&nbsp;
        <label>
          Column:&nbsp;
          <input type="number" min="0" value={this.state.col} onChange={this.handleColumnChange} style={{width:"50px"}} />
        </label>

        <p>Number of cells in the largest region: {this.state.ans}</p>
        <hr />

        <Matrix row={this.state.row} col={this.state.col} findLargestRegion={this.updateLargestRegion} />

      </div>
    );
  }
}