import React from 'react'
import './massage.css'
import Data from './data/data'
import Names from './components/Names/Names'
import Cards from './components/Cards/Cards'

class Massage extends React.Component {
    state = { 
        names: [],
        oldies: []
    }

    getNames = () => {
        return Data.map(obj => obj.name)
    }

    getOldies = () => {
        return Data.filter(obj => {
            const birthYear = new Date(obj.birthday).getFullYear()
            console.log(birthYear)
            if (birthYear < 1990) return obj
        })
    }
    componentDidMount(){
        const names = this.getNames()
        const oldies = this.getOldies()
        this.setState({names: names, oldies: oldies})
    }
    render(){
        console.log(Data)
        return (
            <div className="massage-container">
                <Names names={this.state.names} />
                <Cards oldies={this.state.oldies} />
            </div>
        )
    }
}

export default Massage