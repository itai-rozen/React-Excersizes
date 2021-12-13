import React, { Component } from 'react'
import './button.styles.css'

class Button extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <button className="cards-btn">{this.props.text}</button>
        )
    }
}

export default Button
