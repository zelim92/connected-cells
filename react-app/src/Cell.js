import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: props.x,
            y: props.y,
            btnFilled: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    /* handleClick fires a callback to update the matrix belief state */
    handleClick() {
        this.setState({btnFilled: !this.state.btnFilled}, () => {
            this.props.updateMatrix(this.state.x, this.state.y, this.state.btnFilled ? 1 : '');
        });
    }
    
    render() {
        let btnClass = this.state.btnFilled ? 'btn-filled' : 'btn-default';
        let btnValue = this.state.btnFilled ? 1 : 0;
        return (
            <button className={btnClass} onClick={this.handleClick}>{btnValue}</button>
        )
    }
}