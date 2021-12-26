import React, { useState } from 'react'
import './text.css'

export default function Text() {
    const [readText, setReadText] = useState(false)
    const [maxLength, setMaxLength] = useState(50)
    const longString = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam perspiciatis minus ratione,
    accusamus vel dolores aspernatur voluptatem ab ex sed! Maxime provident culpa, dolor molestiae amet 
    eius! Exercitationem voluptas unde ut minima officiis, natus aut, corporis suscipit quibusdam, 
    modi ea.`

    const handleText = () => setReadText(!readText)
    return <div>
        {
            readText ? longString : (longString.slice(0, maxLength)+'...')
        } <span className='text-toggler' onClick={() => handleText()}>{readText ? 'read less' : 'read more'}</span>
    </div>
}