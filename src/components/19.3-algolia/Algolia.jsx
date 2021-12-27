import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Spinner from './Spinner/Spinner'

function Algolia() {
    const [data, setData] = useState([])
    const [term, setTerm] = useState('hooks')
    const [query, setQuery] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')


    const fetchApi = async (term) => {
        setIsLoading(true)
        try {
            const apiData = await axios.get(`https://hn.algolia.com/api/v1/search?query=${term}`)
            setData(apiData.data.hits)
            setIsLoading(false)
        } catch (err) {
            setError(err.message)
        }
    }

    const searchQuery = e => {
        e.preventDefault()
        setTerm(query)
    }

    const renderInfo = () => {
        if (error) {
            return <h1>{error}</h1>
        } else if (isLoading) {
            return <Spinner />
        } else {

            return data.map(hit => {
                return <div key={hit.objectID}>
                    <p>author: {hit.author} / title: {hit.title}</p>
                </div>
            })
        }
    }

    useEffect(() => {
        fetchApi(term)
    }, [term])

    return <div>
        <form onSubmit={(e) => searchQuery(e)}>
            <label htmlFor="search">search</label>
            <input onChange={(e) => setQuery(e.target.value)} value={query} type="text" id="search" />
            <input type="submit" value="search" />
        </form>
        <div className="hits">
            {
                renderInfo()
            }
        </div>
    </div>

}

export default Algolia