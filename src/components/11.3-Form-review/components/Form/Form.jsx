import React from 'react'
import './Form.css'

class Form extends React.Component {
    constructor(props){
        super(props)
    }

    submitForm = e => {
        e.preventDefault()
        this.props.editInputs('isSubmit', true)   
    }


    render(){
        return (
            <form onSubmit={ this.submitForm} onChange={e => this.props.editInputs(e.target.id,e.target.value)} className='user-form' >
                <label htmlFor="fName">First Name: </label>
                <input type="text" name="" id="fName" />
                <label htmlFor="lName">Last Name:</label>
                <input type="text" name="" id="lName" />
                <label htmlFor="ageRange">Age:</label>
                <select name="" id="ageRange">
                    <option value="0-15">0-15</option>
                    <option value="16-30">16-30</option>
                    <option value="31-40">31-40</option>
                    <option value="over 40">over 40</option>
                </select>
                <label htmlFor="freeText">free Text</label>
                <textarea name="" id="freeText" cols="30" rows="10"></textarea>
                <input id="isSubmit" type="submit" value="Submit" />
            </form>
        )
    }
}

export default Form