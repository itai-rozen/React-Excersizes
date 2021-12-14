import React, { useState } from 'react'
import './changingColor.css'

class ChangingColor extends React.Component {
    constructor(){
        super()
        this.state = {currColor: '#123456', colorChangeCount: 0, radius: '0'}
    }
    getRandomColor = () => {
        const hexStr = '0123456789abcdef'
        let newColor = '#'
        for (let i = 0; i < 6; i++) newColor += hexStr.charAt(Math.floor(Math.random() * hexStr.length)) 
        return newColor
    }
    changeColorAndRadius = () => {
        this.setState((prevState) => {
            return {
                currColor: this.getRandomColor(),
                colorChangeCount: prevState.colorChangeCount + 1,
                radius: ((this.state.colorChangeCount % 5 === 0) ? '50%' : '0')
            }
        })
    }


    componentDidMount(){
        setTimeout(this.changeColorAndRadius, 500)
    }

    componentDidUpdate(){
        setTimeout(this.changeColorAndRadius, 500)
    }


    render(){
        return (
            <div className="container">
            <div className="boxxy" style={{backgroundColor: this.state.currColor,
                                           borderRadius: this.state.radius}}></div>
            </div>
        )
    }
}

export default ChangingColor