import React from 'react'
import './card.css'

class Card extends React.Component {
    render(){
        const {name,birthday,meats,fish} = this.props
        return (
            <div className="card-container">
                <h2 className='card-name'>{name}</h2>
                <h3>born on {birthday}</h3>
                <h3>Favorite foods:</h3>
                <ul className='meats-list'>
                    Meats:
                    {
                        meats.map((meat,i) => <li key={'meat-'+i}>{meat}</li>)
                    }
                </ul>
                <ul className='fish-list'>
                    Fish:
                    {
                        fish.map((f,i) => <li key={'fish-'+i}>{f}</li>)
                    }
                </ul>
            </div>
        )
    }
}

export default Card