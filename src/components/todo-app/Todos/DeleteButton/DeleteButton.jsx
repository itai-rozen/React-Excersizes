import React from 'react'
import './deleteButton.css'

class DeleteButton extends React.Component {
    render(){
        
        const {id, deleteTodo} = this.props
        return (
            <button onClick={() => deleteTodo(+id)}>X</button>
        )
    }
}

export default DeleteButton