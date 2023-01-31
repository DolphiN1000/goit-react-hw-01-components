import PropTypes from 'prop-types';
import user from './user.json';
import  './profile.module.css';

const Profile = ({ username, tag, location, avatar, stats } = user) => {
  return (
    <div className="profile">
      <div className="description">
        <img
          className="avatar"
          src={user.avatar}
          alt="User avatar"
          height="512"
          width="512"
        />
        <p className="name">{user.username}</p>
        <p className="tag">{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>
      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{user.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{user.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.defualtProps = {
  stats: [],
};

Profile.propTypes = {
  // avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ),
};
