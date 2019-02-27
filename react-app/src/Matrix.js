import React, { Component } from 'react';
import './App.css';

export default class Matrix extends Component {
    
    createTable() {
        let table = [], cells = [];
        for(var i=0; i<this.props.row; i++) {
            for(var j=0; j<this.props.col; j++) {
                cells.push(<td key={j}></td>);
            }
            table.push(<tr key={i}>{cells}</tr>);
            cells = [];
        }
        return table;
    }

    render() {
        console.log('render matrix');
        return (
            <div className="Matrix">
                <table align="center">
                    <tbody>
                        {this.createTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}