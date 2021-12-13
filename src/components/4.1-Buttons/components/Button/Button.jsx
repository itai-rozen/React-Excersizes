import React from 'react'
import './button.styles.css'

class Button extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        // const {style, text} = this.props
        return (
            <button className="buttons-btn" style={(this.props.style)}>{this.props.text}</button>
        );
    }
}

export default Button