import React from 'react'
import Spinner from './components/Spinner/Spinner'
import './timer.css'

class Timer extends React.Component{
    constructor(){
        super()
        this.state = { count : 5}
    }
    decCount = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    renderContent(){
        if (this.state.count > 0){
            return <Spinner />
        } else return <></>
    }
    componentDidMount() {
        setTimeout(this.decCount, 1000)
    }

    componentDidUpdate(){
        if (this.state.count > 0) setTimeout(this.decCount, 1000)
    }


    render(){
        console.log(this.state.count)
        return (
            <>
            {this.renderContent()}
            </>
        )
    }
}

export default Timer