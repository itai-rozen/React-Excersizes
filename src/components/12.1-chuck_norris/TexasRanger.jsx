import React from 'react'
import axios from 'axios'
import './texasRanger.css'
class TexasRanger extends React.Component {
    state = {
        url: 'https://api.chucknorris.io/jokes/',
        joke: '',
        icon: '',
        categories: []
    }
    fetchJoke = async () => {
        const response = await axios.get(`${this.state.url}random`)
        console.log(response)
        this.setState({ joke: response.data.value, icon: response.data.icon_url })
    }

    fetchCategories = async () => {
        const response = await axios.get(`${this.state.url}categories`)
        this.setState({ categories: response.data })
    }

    componentDidMount() {
        this.fetchCategories()
    }

    fetchJokeFromCategory = async e => {
        const response = await axios.get(`${this.state.url}random?category=${e.target.textContent}`)
        this.setState({joke : response.data.value, icon: response.data.icon_url})
    }


    render() {
        return (
            <div className='chuck-container'>
                <button onClick={() => this.fetchJoke()}>Random joke</button>
                <div className="category-btn-container">
                    {
                        this.state.categories.map((cat,i) => {
                         return  <button key={`chuck-${i}`} onClick={(e) => this.fetchJokeFromCategory(e)}>{cat}</button>
                        })
                    }
                </div>
                <img src="" alt="" />
                <div className="joke-container">
                    <img className='chuck-img' src={this.state.icon} alt="chuck avatar" />
                    <h1 className='joke-header'>{this.state.joke}</h1>
                </div>
            </div>
        )
    }
}

export default TexasRanger