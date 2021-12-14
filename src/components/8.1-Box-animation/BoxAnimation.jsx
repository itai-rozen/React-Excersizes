import React from 'react'
import Box from './components/Box/Box'
import './boxAnimation.css'

class BoxAnimation extends React.Component{


    render(){
        return (
            <div className="box-container">
            <Box size="50px" />        
            <Box size="100px" />        
            <Box size="70px" />        
            </div>
        )
    }
}

export default BoxAnimation