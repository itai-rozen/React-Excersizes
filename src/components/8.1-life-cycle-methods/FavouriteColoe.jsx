import React from 'react'
import './favouriteColor.css'

class FavouriteColor extends React.Component {
    constructor(props) {
        super(props)
        this.state = { favouriteColor: 'blue', text: '' }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(() => { return { favouriteColor: 'black' } })
        }, 1000)
    }

    componentDidUpdate() {
        document.getElementById('thisId').textContent = `the new updated color is ${this.state.favouriteColor}`
    }

    render() {
        return (
            <>
                <h1>My favourite color is {this.state.favouriteColor}</h1>
                <div id="thisId">{this.state.text}</div>
            </>
        )
    }

}
export default FavouriteColor