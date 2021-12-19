import React from 'react'

import './searchBar.css'

class SearchBar extends React.Component {

    handleForm = e => {
        e.preventDefault()
        console.log('handle form yo')
    }
    render() {
        return (
            <>
                <form className='avatar-search' onSubmit={(e) => this.handleForm(e)}>
                    <input onChange={(e) => this.props.updateQuery(e.target.value)} type="text" placeholder='e.g "John Glaire"' />
                </form>
            </>
        )
    }
}

export default SearchBar
