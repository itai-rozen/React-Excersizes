import React from 'react'
import DeleteButton from '../DeleteButton/DeleteButton'
import EditButton from '../EditButton/EditButton'
import EditForm from '../EditForm/EditForm'
import './singleTodo.css'

class SingleTodo extends React.Component {

    setIdToUpdate = id => this.setState({objIdToUpdate : id})
    render(){
        const {content,priority,createdAt,isEdit, id, deleteTodo,editTodo,updateTodoObject } = this.props
        return (
            <div className="todo-container">
                <p className="content">{content}</p>
                <p className="priority">{priority}</p>
                <p className='date'>{createdAt}</p>
               <DeleteButton  id={id} deleteTodo={deleteTodo} />
               <EditButton updateTodoObject={updateTodoObject}  id={id}  />
               {isEdit  && <EditForm id={id} editTodo={editTodo} updateTodoObject={updateTodoObject} content={content} priority={priority} />}
            </div>
        )
    }
}

export default SingleTodo