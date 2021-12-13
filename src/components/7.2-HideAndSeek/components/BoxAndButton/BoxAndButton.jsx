import React from 'react'
import './boxAndButton.css'

class BoxAndButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isVisible: true }
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
        this.setState({ isVisible: !this.state.isVisible })
    }
    render() {
        return (
            <div>
                <button onClick={this.toggle}>show/hide</button>
                {
                    (this.state.isVisible) && <div className="box"></div> 
                }
            </div>
        )
    }
}

export default BoxAndButton