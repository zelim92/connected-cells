import React, { Component } from 'react';
import Cell from './Cell';

export default class Matrix extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: [],
            matrix: [],
        };
        this.updateMatrixValue = this.updateMatrixValue.bind(this);
    }

    /* Initialises HTML table and matrix representation */
    componentDidMount() {
        this.setState({
            table: this.initTable(this.props.row, this.props.col),
            matrix: this.initMatrix(this.props.row, this.props.col),
        })
    }

    /* Captures the change in inputs of columns and rows and updates the largest region */
    componentDidUpdate(prevProps) {
        if((this.props.row !== prevProps.row) || (this.props.col !== prevProps.col)) {
            this.setState({
                table: this.initTable(this.props.row, this.props.col),
                matrix: this.updateMatrixSize(this.props.row, this.props.col),
            }, () => {
                let cpMatrix = JSON.parse(JSON.stringify(this.state.matrix));
                this.findLargestRegion(cpMatrix);
            });
        }
    }

    /* Initialises HTML table of matrix */
    initTable(row, col) {
        var table = [], cells = [];
        for(var i=0; i<row; i++) {
            for(var j=0; j<col; j++) {
                cells.push(<td key={j}><Cell x={i} y={j} updateMatrix={this.updateMatrixValue} /></td>);
            }
            table.push(<tr key={i}>{cells}</tr>);
            cells = [];
        }
        return table;
    }

    /* Initialises array representation of matrix */
    initMatrix(row, col) {
        var matrix = new Array(row);
        for(var i=0; i<row; i++) {
            matrix[i] = new Array(col);
        }
        return matrix;
    }

    /* Update matrix dimension based on new inputs */
    updateMatrixSize(row, col) {
        var matrix = this.state.matrix;
        if(row > matrix.length) {
            matrix.push([]);
        } else {
            matrix.length = row;
        }
        for(var j in matrix) {
            matrix[j].length = col;
        }
        return matrix;
    }

    /* Update matrix contents based on filled/unfilled cell events */
    updateMatrixValue(x, y, value) {
        var matrix = this.state.matrix;
        matrix[x][y] = value;
        this.setState({matrix}, () => {
            let cpMatrix = JSON.parse(JSON.stringify(this.state.matrix));
            this.findLargestRegion(cpMatrix);
        });
    }

    /* Run a search on each cell of the matrix to find the biggest connected region */
    findLargestRegion(matrix) {
        var count = 0;
        for(var x=0; x<matrix.length; x++) {
            for(var y=0; y<matrix[0].length; y++) {
                count = Math.max(count, this.DFS(matrix, x, y))
            }
        }
        this.props.findLargestRegion(count);
    }

    /* Depth First Search for connecting cells from origin */
    DFS(matrix, x, y) {
        if(x < 0 || y < 0 || x >= matrix.length || y >= matrix[0].length)      
            return 0;
        if(matrix[x][y] !== 1)
            return 0;
        
        matrix[x][y] = 0;
        return 1 + this.DFS(matrix, x-1, y-1) +
                   this.DFS(matrix, x-1, y) +
                   this.DFS(matrix, x-1, y+1) +
                   this.DFS(matrix, x, y-1) +
                   this.DFS(matrix, x, y+1) +
                   this.DFS(matrix, x+1, y-1) +
                   this.DFS(matrix, x+1, y) +
                   this.DFS(matrix, x+1, y+1);
    }

    render() {
        return (
            <div className="Matrix">
                <table align="center">
                    <tbody>
                        {this.state.table}
                    </tbody>
                </table>
            </div>
        )
    }
}