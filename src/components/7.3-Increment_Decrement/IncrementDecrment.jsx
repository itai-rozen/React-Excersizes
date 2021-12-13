import React from 'react'
import './incrementDecrement.css'

class InrementDecrement extends React.Component {
    constructor(props) {
        super(props)
        this.state = { number: 0, labelColor: '' }
        this.updateNumber = this.updateNumber.bind(this)
    }
    updateNumber(e){
        const operator = e.target.textContent
        if (this.state.number >= -10 || this.state.number <= 10){
            if (operator === '+') this.setState({number: this.state.number+1})
            else this.setState({number: this.state.number-1})
            if (this.state.number > 0) this.setState({labelColor: 'green'})
            else if (this.state.number < 0) this.setState({labelColor: 'red'})
            else  this.setState({labelColor: 'black'})
        }
        else return
    }
    render() {
        return (
            <>
                <div className="buttons-container">
                    <button onClick={this.updateNumber} >+</button>
                    <button onClick={this.updateNumber}>-</button>
                </div>
                <div className="label">
                <p className={'para '+ this.state.labelColor}>{this.state.number}</p>
                </div>
            </>
        )
    }
}

export default InrementDecrement