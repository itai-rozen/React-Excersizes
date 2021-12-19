import React from 'react'
import axios from 'axios'
import './avatars.css'
import SearchBar from './components/SearchBar/SearchBar'
import AvatarList from './components/AvatarList/AvatarList'

class Avatars extends React.Component {
    state = {
        avatarsData: [],
        filteredAvatars: [],
        searchQuery: ''
    }


    componentDidMount = async () => {
        const response = await axios.get('https://randomuser.me/api/?results=100')
        this.setState({ avatarsData: response.data.results })
        console.log(response.data.results)
    }

    updateQuery = (query) => {
        this.setState({ searchQuery: query })
    }

    render() {
        return (
            <>
                <SearchBar updateQuery={this.updateQuery} />
                <div className="avatar-list-container">
                    <AvatarList query={this.state.searchQuery} avatars={this.state.avatarsData} />
                </div>
            </>
        )
    }
}

export default Avatars