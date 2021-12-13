import React from 'react'
import Counter from './components/Counter/Counter'
import './increment.css'

class Increment extends React.Component {
    render() {
        return (
            <div className="increment">
            <Counter />
            </div>
        )
    }
}

export default Increment