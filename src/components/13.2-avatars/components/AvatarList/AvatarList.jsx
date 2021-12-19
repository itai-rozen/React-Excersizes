import React from 'react'
import './avatarList.css'

class AvatarList extends React.Component {


    render() {
        const filteredAvatars = this.props.avatars.filter(avatar => (avatar.name.first.toLowerCase().includes(this.props.query) || avatar.name.last.toLowerCase().includes(this.props.query.toLowerCase())))
        const avatarsArray = filteredAvatars.map(avatar => {
            return (
                <div key={avatar.email} className='avatar-card' >
                    <h3>{avatar.name.title} {avatar.name.first} {avatar.name.last}</h3>
                    <hr />
                    <img src={avatar.picture.medium} alt="" />
                </div>
            )
        })
        const regex = `/${this.props.query}/`
        return (
            <>
                {avatarsArray}
            </>
        )
    }
}

export default AvatarList