import React from 'react'
import Checkbox from './components/Checkbox'
import './Checkboxes.css'

class Checkboxes extends React.Component {
    constructor(){
        super()
        this.state = {}
    }

    render(){
        const checks = [
            {id: 0, status: false, content: 'number 1'},
            {id: 1, status: false, content: 'number 2'},
            {id: 2, status: true, content: 'number 3'},
            {id: 3, status: true, content: 'number 4'},
        ]
        return (
            <div className='checkbox-container'>
            {
                checks.map((check) => {
                    return <Checkbox key={check.id} id={check.id} checkStatus={check.status} content={check.content}  />
                })
            }
            </div>
        )
    }
} 

export default Checkboxes