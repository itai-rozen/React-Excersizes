import React from 'react'
import './Boxes.styles.css'
import Box1 from './components/Box1/Box1.component'

function Boxes(){
    // Box1 is the big green box.
    // Box 2 is the blue box.
    // Box 3 is the pink box.
    // Box4 is the smallest purple box – we use it twice.
    // Note that the boxes contain one another.
    // Box 1 contains Box2.
    // Box 2 contains Box3.
    // Box 3 two Box4 components. 
    return (
        <div className="box-container">
            <Box1 />
        </div>
    )
}

export default Boxes