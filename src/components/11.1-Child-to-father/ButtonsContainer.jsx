import React from 'react'
import './ButtonsContainer.css'
import CustomButton from './components/CustomButton/CustomButton'

class ButtonsContainer extends React.Component {
    constructor(){
        super()
        this.state = { currColor: ''}
    }

    setColor = (color) => {
        this.setState({currColor: color})
        console.log(this.state.currColor)
    }

    render(){
        const colors = [{id:0,color:'blue'},{id:1,color:'magenta'},{id:2,color:'red'}]

        return (
            <>
            {
                colors.map(color => {
                    return <CustomButton 
                    key={color.id} 
                    color={color.color}
                    onChangeColor={this.setColor}
                    />
                })
            }
            <h1>color pressed: {this.state.currColor}</h1>
            </>

        )
    }
}

export default ButtonsContainer