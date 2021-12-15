import React from 'react'


class CustomButton extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const { color, onChangeColor } = this.props
        return (
            <button onClick={e => onChangeColor(e.target.textContent)}
            style={{background: color, color: 'white'}}>
                {color}
            </button>
        )
    }
}

export default CustomButton