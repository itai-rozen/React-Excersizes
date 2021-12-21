import React from 'react'
import './textArea.css'

class TextArea extends React.Component {
    constructor(props){
        super(props)

        this.textAreaInput = React.createRef()
    }

    handleCopy = () => {
        this.textAreaInput.select()
        document.execCommand('copy') 
    }

    render(){
        return (
            <div className="area-container">
            <textarea ref={input => this.textAreaInput = input} name="" id="" cols="30" rows="10"></textarea>
            <button onClick={() => this.handleCopy()}>copy</button>
            </div>
            )
    }
}

export default TextArea