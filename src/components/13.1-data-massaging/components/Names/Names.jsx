import React from 'react'
import './names.css'

class Names extends React.Component {
    render(){
        return (
            <ul className='names-list'>
                {
                    this.props.names.map(name => <li class="name-item" key={name}>{name}</li>)
                }
            </ul>
        )
    }
}

export default Names