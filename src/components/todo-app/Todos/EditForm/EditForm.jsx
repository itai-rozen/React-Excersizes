import React from 'react'
import './editForm.css'

class EditForm extends React.Component {
    state = {
        content : this.props.content,
        priority: this.props.priority
    }

    submitForm = e => {
        e.preventDefault()
        if (!this.state.content){
            this.props.updateTodoObject(this.props.id,'isEdit',false)
            return
        }
        const {id,editTodo} = this.props
        const newTodo ={
            priority : this.state.priority,
            content: this.state.content,
            createdAt: new Date().toLocaleDateString(),
            id: id
        }
        editTodo(id, newTodo)
    }


    render() {

        return (
            <div className="form-container">
                <form onSubmit={this.submitForm} className='edit-form new-form'>
                <button className='close-btn' onClick={() => this.props.updateTodoObject(this.props.id,'isEdit',false)}>X</button>
                    <input value={this.state.content} onChange={(e) => this.setState({content: e.target.value})} type="text" />
                    <select onChange={(e) => this.setState({ priority: e.target.value })} defaultValue={this.state.priority} name="priority" id="priority">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <input type="submit" value="Ok" />
                </form>
            </div>
        )
    }
}

export default EditForm