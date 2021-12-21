import React from 'react'
import './editButton.css'

class EditButton extends React.Component {

    render(){
        const {updateTodoObject,id} = this.props
        return <button onClick={() => updateTodoObject(id,'isEdit',true)}>Edit</button>
    }
}

export default EditButton