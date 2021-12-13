import React from 'react'
import './buttons.styles.css'
import Button from './components/Button/Button'


class Buttons extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <Button text="important" style={{ fontWeight: "600" }} />
                <Button text="not important" />
            </>
        )
    }

}

export default Buttons

