import React from 'react'
import './incrementDecrement.css'

class InrementDecrement extends React.Component {
    constructor(props) {
        super(props)
        this.state = { number: 0, labelColor: 'black' }
        this.updateNumber = this.updateNumber.bind(this)
    }
    updateNumber(e){
        const operator = e.target.textContent
        if (this.state.number >= -10 || this.state.number <= 10){
            if (operator === '+') this.setState((prevState) => {return({number: prevState.number+1})})
            else this.setState((prevState) => {return {number: prevState.number-1}})
            this.setState((prevState) => {
                if (prevState.number > 0) return ({labelColor:'red'})
                else if (prevState.number < 0) return ({labelColor:'green'})
                else return ({labelColor:'black'})
            })
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