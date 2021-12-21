import React from 'react'
import './form.css'

class Form extends React.Component {
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }


    render(){
        return (
            <form>
                <input ref={this.inputRef} type="text" />
            </form>
        )
    }

}

export default Form