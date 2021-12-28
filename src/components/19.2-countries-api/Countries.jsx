import axios from 'axios'
import React, { useState, useEffect , useRef} from 'react'

function Countries() {
    const [data, setData] = useState([])
    const [query, setQuery] = useState('')
    const [error, setError] = useState('')
    const abortRef = useRef(new AbortController())

    const fetchApi = () => {
        axios.get('https://restcountries.com/v2/all', {
        signal: abortRef.current.signal
        }).then((dataApi) => {            
            setData(dataApi.data)
        })
            .catch(err => {
            setError(err.message)
        })
    }

    useEffect(() => {
        fetchApi()
        return () => {
            abortRef.current.abort()
        }
    }, [])

    return <div>
        <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" />
        <ul>
            {error && <h1>{error}</h1>}
            {
                data.filter(country => country.name.includes(query))
                    .map(country => <li key={country.name}>{country.name}</li>)
            }
        </ul>
    </div>
}

export default Countries