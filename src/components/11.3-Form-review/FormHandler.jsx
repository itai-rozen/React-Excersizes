import React from 'react'
import Form from './components/Form/Form'
import FormReview from './components/FormReview/FormReview'
import './FormHandler.css'

class FormHandler extends React.Component {
    constructor() {
        super()
        this.state = { fName: '', lName: '', ageRange: '0-15', freeText: '', isSubmit: false, isReviewed: false }
    }


    updateFormInputs = (fieldId, content) => {
        this.setState(() => {
            return {
                [fieldId]: content
            }
        })

    }

    submitForm = (event, fieldId, content) => {
        event.preventDefault()
        this.updateFormInputs(fieldId, content)
    }


    render() {
        return (
            <div className='form-handler-container'>
                {((this.state.isSubmit)&&(!this.state.isReviewed)) && <FormReview 
                    fName={this.state.fName}
                    lName={this.state.lName}
                    ageRange={this.state.ageRange}
                    freeText={this.state.freeText}
                    editInputs={this.updateFormInputs}
                />}
                {(this.state.isSubmit) || <Form editInputs={this.updateFormInputs} />}
                {((this.state.isSubmit) && (this.state.isReviewed)) && <h1>Submitted successfully!</h1>}
            </div>
        )
    }
}

export default FormHandler
