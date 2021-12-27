import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './texasRanger.css'

function TexasRanger() {
    const url =  'https://api.chucknorris.io/jokes/'
    const [joke, setJoke] = useState('')
    const [categories, setCategories] = useState([])
    const [icon, setIcon] = useState('')
    const fetchJoke = async () => {
        const response = await axios.get(`${url}random`)
        console.log(response)
        setJoke(response.data.value)
        setIcon(response.data.icon_url)
    }

    const fetchCategories = async () => {
        const response = await axios.get(`${url}categories`)
        setCategories(response.data)
    }

    useEffect(() => {
        fetchCategories()
    }, [])


    const fetchJokeFromCategory = async e => {
        const response = await axios.get(`${url}random?category=${e.target.textContent}`)
        setJoke(response.data.value)
        setIcon(response.data.icon_url)
    }

    return (
        <div className='chuck-container'>
            <button onClick={() => fetchJoke()}>Random joke</button>
            <div className="category-btn-container">
                {
                    categories.map((cat, i) => {
                        return <button key={`chuck-${i}`} onClick={(e) => fetchJokeFromCategory(e)}>{cat}</button>
                    })
                }
            </div>
            <img src="" alt="" />
            <div className="joke-container">
                <img className='chuck-img' src={icon} alt="chuck avatar" />
                <h1 className='joke-header'>{joke}</h1>
            </div>
        </div>
    )
}


export default TexasRanger