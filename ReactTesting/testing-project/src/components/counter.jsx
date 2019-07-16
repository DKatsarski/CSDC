import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.UpdateCount = this.UpdateCount.bind(this)
        this.UpdateDiscount = this.UpdateDiscount.bind(this)

        this.state = {
            count: 0,
        };
    }

    UpdateCount() {
        this.setState({
            count: this.state.count + 1
        });
    }

    UpdateDiscount() {
        this.setState({
            count: this.state.count - 1
        });
    }
    render() {
        let { count } = this.state;

        return (
            <div>
                <span>{count}</span>
                <br />
                <button onClick={this.UpdateCount}>+</button>
                <button onClick={this.UpdateDiscount}>-</button>
            </div>
        );
    }
}

export default Counter;