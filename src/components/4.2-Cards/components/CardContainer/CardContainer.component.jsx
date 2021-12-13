import React from 'react'
import Button from '../Button/Button.component'
import './card-container.style.css'

class CardContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { props } = this
        const { children } = props
        return (
            <div className="card-container">
                <div className="content-container">
                    <div className="content">{children}</div>
                </div>
                <div className="button-container">
                    <Button text="SHARE" />
                    <Button text="EXPLORE" />
                </div>
            </div>
        )
    }
}

export default CardContainer