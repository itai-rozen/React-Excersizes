import React from 'react'
import './todoApp.css'
import Todos from './Todos/Todos'
class TodoApp extends React.Component {
    state = { todos: [], isAdd: false, isEdit: false}


    saveToLocalStorage = () => {
        localStorage.setItem('todos-react', JSON.stringify(this.state.todos))
    }

    loadFromLocalStorage = () => {
        const storageTodos = JSON.parse(localStorage.getItem('todos-react'))
        this.setState({todos : storageTodos})
        
    }
    addTodo = todoObj => {
        this.setState({todos : [...this.state.todos, todoObj], isAdd:false})
    }
    editTodo = (id,modifiedTodoObj) => {
        const todosCopy = [...this.state.todos]
        const idx = todosCopy.findIndex(todo => todo.id === id)
        todosCopy.splice(idx,1,modifiedTodoObj)
        this.setState({todos: todosCopy})
    }
    deleteTodo = id => {
        console.log('yo delete')
        const filteredTodos = this.state.todos.filter(todo => todo.id !== id)        
        console.log('filtered todos: ',filteredTodos)
        this.setState({todos: filteredTodos})
    }

    updateTodoObject = (id, stateName,stateValue) => {
        const todosCopy = [...this.state.todos]
        const todoToModify = todosCopy.find(todo => todo.id === id)
        todoToModify[stateName] = stateValue
        this.setState({todos: todosCopy})
    }

    updateState = (name,value) => {
        this.setState({[name] : value})
    }

    componentDidMount = () => {
        this.loadFromLocalStorage()
    }

    componentDidUpdate = () => {
        this.saveToLocalStorage()
    }
    render(){

        return (
            <div className="app-container">
                <Todos 
                todos={this.state.todos} 
                state={this.state} 
                updateState={this.updateState} 
                addTodo={this.addTodo}
                deleteTodo={this.deleteTodo}
                editTodo={this.editTodo}
                updateTodoObject={this.updateTodoObject}
                />
            </div>
        )
    }
}

export default TodoApp