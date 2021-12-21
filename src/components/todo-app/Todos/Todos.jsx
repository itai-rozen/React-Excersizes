import React from 'react'
import SingleTodo from './SingleTodo/SingleTodo'
import AddTodo from './AddButton/AddTodo'
import './todos.css'
import EditForm from './EditForm/EditForm'

class Todos extends React.Component {
    render(){
        const { addTodo, deleteTodo,editTodo, updateState, updateTodoObject, todos } = this.props
        const { isAdd } = this.props.state
        return (
            <div className="todo-list-container">
                {todos.map((todo,idx) => {
                    const { id, createdAt, priority, content, isEdit } = todo
                    return <SingleTodo key={id} 
                    id={id}
                    index={idx}
                    isEdit={isEdit}
                    editTodo={editTodo}
                    createdAt={createdAt}
                    priority={priority}
                    content={content}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    updateState={updateState}
                    updateTodoObject={updateTodoObject}
                    />
                })}
                <button className='add-btn' onClick={() => updateState('isAdd',true)}>Add+</button>
                {isAdd && <AddTodo updateState={updateState} addTodo={addTodo} todos={this.props.todos}  />}
            </div>
        )
    }
}

export default Todos