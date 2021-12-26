import React, { useState } from 'react'
import './time.css'

export default function Time(){
    const [hours,setHours] = useState(0)
    const [mins,setMins] = useState(0)
    const [secs,setSecs] = useState(0)
    
    const handleTime = e => {
        const {id, value} = e.target
        if (id === 'hours'){
            setHours(value)
            setMins(value*60)
            setSecs(value*3600)
        } else if (id === 'minutes'){
            setMins(value)
            setHours(value/60)
            setSecs(value*60)
        } else {
            setSecs(value)
            setMins(value/60)
            setHours(value/3600)
        }
    }
    return <div>
        <label htmlFor="hours">Hours</label>
        <input value={hours} onChange={(e) => handleTime(e)} id='hours' type="text" />
        <br />
        <label htmlFor="minutes">Minutes</label>
        <input value={mins} onChange={(e) => handleTime(e)} id='minutes' type="text" />
        <br />
        <label htmlFor="seconds">Seconds</label>
        <input value={secs} onChange={(e) => handleTime(e)} id='seconds' type="text" />
    </div>
}