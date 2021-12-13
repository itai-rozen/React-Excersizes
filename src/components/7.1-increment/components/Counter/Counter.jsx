import React from "react";
import './counter.css'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { counter: 0 }
        this.increment = this.increment.bind(this)
    }

    increment() {
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        return (
            <div className="counter-container">
                <button className="increment-btn" onClick={this.increment}>increment</button>
                <span className="counter">{this.state.counter}</span>
            </div>
        )
    }
}

export default Counter