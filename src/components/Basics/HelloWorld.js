import React from 'react'
import './HelloWorld.styles.css'

function HelloWorld({data, numbers}){
  
    const string = 'I love React!'
    return (
        <div className="hello">
            {data[0]} {data[1]} <br/>
            {numbers[0]} + {numbers[1]} = {numbers[0]+numbers[1]} <br/>
            The string "{string}" is made out of {string.length} characters
        </div>
    );
}
export default HelloWorld