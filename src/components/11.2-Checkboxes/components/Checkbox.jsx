import React from 'react'
import './Checkbox.css'
class Checkbox extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const {id, content, checkStatus} = this.props
        return (
            <div className='checkbox'>
            <label className="check-label" htmlFor={id}>{content}</label>
            <input className="check-input" type="checkbox" name="" defaultChecked={checkStatus} id={id} />
            </div>
        )
    }
}

export default Checkbox