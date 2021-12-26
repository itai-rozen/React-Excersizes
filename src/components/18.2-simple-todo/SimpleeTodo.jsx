import React, { useState, useEffect } from 'react'
import './simpleTodo.css'

export default function SimpleTodo() {

    const [chosenIndex, setChosenIndex] = useState(-1)
    const [completed,setCompleted] = useState(true)
    const [todos, setTodos] = useState([
        { name: "CSS", completed: true },
        { name: "JavaScript", completed: true },
        { name: "Learn React", completed: false },
        { name: "Learn mongoDB", completed: false },
        { name: "Learn Node JS", completed: false },
    ])

    const toggleTodo = i => {
        const todosCopy = [...todos]
        todosCopy[i].completed  = !todosCopy[i].completed
        setTodos(todosCopy)
    }


    const renderContent = () => {
        return todos.map((todo, index) => {
            return <li onClick={() => toggleTodo(index)} className={`${!todo.completed && 'strike'}`} key={todo.name}>
                <p>{todo.name} &nbsp;&nbsp;
                    <span className='complete-sign'> {todo.completed ? '✔' : '✗'}</span>
                </p></li>
        })
    }

    return <ul>
        {renderContent()}
    </ul>
}