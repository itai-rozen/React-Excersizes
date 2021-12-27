import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './simpleFetch.css'

const SimpleFetch = () => {


    const [data,setData] = useState({})
    const fetchApi = async () => {
        try {
            

            const apiData = await axios.get('https://intense-mesa-62220.herokuapp.com/https://swapi.dev/api/films/1/',{
                mode:'no-cors',
                headers: {
                    'Access-Control-Allow-Origin' : '*' ,
                    'x-permitted-cross-domain-policies': "none",
                    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
                }
            })
            console.log('data:' ,apiData)
            setData(apiData.data)
        } catch(err) {
            console.log('error: ',err)
        }
    }

    useEffect(() => {
        fetchApi()
    }, [])
    
    return <div>
        <div>{data. director}</div>
        <div>{data. title}</div>
    </div>
}

export default SimpleFetch