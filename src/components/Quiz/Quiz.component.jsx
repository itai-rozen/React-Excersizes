import React from 'react'
import './Quiz.styles.css'
import Q1 from './components/Q1/Q1.component'
import Q1Input from './components/Q1Input/Q1Input.component'
import Q2 from './components/Q2/Q2.component'
import Q2Input from './components/Q2Input/Q2Input.component'
import QuizTitle from './components/QuizTitle/QuizTitle.component'

function Quiz(){
    return (
        <div className="quiz">
        <QuizTitle />    
        <Q1 />  
        <Q1Input />
        <Q2 />
        <Q2Input />
        </div>
    )
}

export default Quiz