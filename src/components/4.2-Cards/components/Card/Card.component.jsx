import React from 'react'
import './card.styles.css'

class Card extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const { imgUrl, title, description} = this.props
        return (
            <div className="card">
            <img src={imgUrl} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
            </div>
        )
    }
}

export default Card