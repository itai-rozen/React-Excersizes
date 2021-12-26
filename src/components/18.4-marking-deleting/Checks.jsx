import React from 'react'
import { useState } from 'react/cjs/react.development';
import './checks.css'

export default function Checks() {
    const arr = ["one", "two", "three", "four", "five"];
    const [checks, setChecks] = useState([false, false, false, false, false])
    const [indicesToDelete, setIndicesToDelete] = useState([false, false, false, false, false])
    const handleCheck = (e, i) => {
        const { checked } = e.target
        const checksCopy = [...indicesToDelete]
        checksCopy[i] = checked
        setIndicesToDelete(checksCopy)
    }

    const deleteChecks = () => setChecks(indicesToDelete)
    const resetChecks = () => {
        setChecks([false, false, false, false, false])
        setIndicesToDelete([false, false, false, false, false])
    }

    return <div>
        <button onClick={() => deleteChecks()}>Delete</button>
        <button onClick={() => resetChecks()}>Reset</button>
        <ul>
            {
                arr.map((num, index) => {
                    return <li className={` ${checks[index] && "hide"}`} 
                    key={num}><label htmlFor={num}>{num}</label> 
                    <input onChange={(e) => handleCheck(e, index)} 
                    type="checkbox" checked={indicesToDelete[index]} name="" id={num} /> </li>
                })
            }
        </ul>
    </div>
}