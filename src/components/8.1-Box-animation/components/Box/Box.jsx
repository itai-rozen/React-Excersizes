import React from 'react'
import './box.css'

class Box extends React.Component{
    constructor(props){
        super(props)
        this.state = {animationClass: ''}
    }


    componentDidMount(){
        setTimeout(() => {
            this.setState((prevSate) => {
                return { animationClass : 'enter-animation' }
            })
        }, 1000)
    }
    componentDidUpdate(){
        setTimeout(() => {
            this.setState((prevSate) => {
                return { animationClass : '' }
            })
        }, 4000)
    }

    render(){
        const {size} = this.props
        return (
            <div style={{width:size, height:size}} className={`animated-box `+ this.state.animationClass}></div>
        )
    }
}

export default Box