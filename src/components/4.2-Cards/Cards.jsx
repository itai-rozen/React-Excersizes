import React from 'react'
import CardContainer from './components/CardContainer/CardContainer.component'
import './cards.css'
import Card from './components/Card/Card.component'
class Cards extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <>
            <CardContainer>
                <Card
                    imgUrl="https://picsum.photos/seed/3/300/200"
                    title="Yo"
                    description="im the first card"
                />
            </CardContainer>
            <CardContainer>
                <Card
                    imgUrl="https://picsum.photos/seed/2/300/200"

                    title="Sup"
                    description="second one over here"
                />
            </CardContainer>
            <CardContainer>
                <Card
                    imgUrl="https://picsum.photos/seed/1/300/200"
                    title="Ok"
                    description="you got the point"
                />
            </CardContainer>
        </>

        )
    }
}
export default Cards