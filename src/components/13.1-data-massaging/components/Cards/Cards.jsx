import React from 'react'
import Card from './../Card/Card'
import './cards.css'

class Cards extends React.Component {
    render(){
        return (
            <div className="cards-container">
                {
                    this.props.oldies.map(oldObj => <Card 
                                                     name={oldObj.name}
                                                     birthday={oldObj.birthday}
                                                     meats={oldObj.favoriteFoods.meats}
                                                     fish={oldObj.favoriteFoods.fish}
                                                    />)            
                }
            </div>
        )
    }
}

export default Cards