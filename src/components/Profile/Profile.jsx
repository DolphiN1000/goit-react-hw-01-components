import PropTypes from 'prop-types'
import user from './user.json';


const Profile = ({username, tag, location, avatar, stats} = user) => {
<>
{/* <img href={avatar} ></img> */}
<p>{username}</p>
</>
}

export default Profile;

Profile.defualtProps = {
    stats: []
}

// Profile.propTypes = {
//     // avatar: PropTypes.string.isRequired,
//     username: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     stats: PropTypes.arrayOf(PropTypes.shape({
//         followers: PropTypes.number.isRequired,
//         views: PropTypes.number.isRequired,
//         likes: PropTypes.number.isRequired,
//     }))

// }