import axios from 'axios'
import React, { useState, useEffect } from 'react'

function Countries() {
    const [data,setData] = useState([])
    const [query,setQuery] = useState('')
    const [error,setError] = useState('')
    const fetchApi =  async () => {
        try {
            const dataApi = await axios.get('https://restcountries.com/v2/all')
            setData(dataApi.data)
        } catch(err){
            setError(err.message)
        }
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return <div>
        <input value={query} onChange={(e) => setQuery(e.target.value)}  type="text" />
    <ul>
        {
            data.filter(country => country.name.includes(query))
            .map(country => <li key={country.name}>{country.name}</li>)
        }
    </ul>
        </div>
}

export default Countries