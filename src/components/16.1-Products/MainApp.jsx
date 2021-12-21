import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import storeProducts from './store'
import Header from './Header/Header'
import Homepage from './Homepage/Homepage'
import Products from './Products/Products'

class MainApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {store : []}
    }
    componentDidMount() {
        this.setState({ store: storeProducts })
    }

    render() {
        return (
            <div>
            <Header store={this.state.store}/>
            </div>
            
        )   
    }
}

export default MainApp