import React from 'react'

class FormReview extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const {fName,lName,ageRange,freeText, editInputs} = this.props
        return (
            <div className='form-review-container'>
            <div>{fName}</div>
            <div>{lName}</div>
            <div>{ageRange}</div>
            <div>{freeText}</div>
            <button onClick={() => editInputs('isSubmit',false)}>Back to form</button>
            <button onClick={() => editInputs('isReviewed',true)}>Submit</button>
            </div>
        )
    }
}

export default FormReview