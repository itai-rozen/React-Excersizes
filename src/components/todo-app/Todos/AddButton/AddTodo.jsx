import React from 'react'
import './addTodo.css'

class addTodo extends React.Component {
    state = {
        content: '',
        priority: null
    }
    submitForm = e => {
        e.preventDefault()
        if (!this.state.content){
            this.props.updateState('isAdd',false)
            return
        }
        const {todos, addTodo} = this.props
        const lastId = todos[todos.length-1].id
        const newTodo = {
            id: lastId +1,
            priority: this.state.priority || '3',
            content: this.state.content,
            createdAt: new Date().toLocaleDateString(),
            isEdit: false
        }
        addTodo(newTodo)
    }
    render() {
        return (
            <div className="form-container">
                <form className='new-todo-form new-form' onSubmit={(e) => this.submitForm(e)}>
                <button className='close-btn' onClick={() => this.props.updateState('isAdd',false)}>X</button>

                    <label htmlFor="content">What do you need to do?</label>
                    <input onChange={(e) => this.setState({content: e.target.value})} type="text" id="content" />
                    <label htmlFor="priority">How important is it? (1-very 3-not so much)</label>
                    <select onChange={(e) => this.setState({priority: e.target.value })} defaultValue={'3'}  name="priority" id="priority">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <input type="submit" value="Ok" />
                </form>
            </div>
        )}
}

export default addTodo