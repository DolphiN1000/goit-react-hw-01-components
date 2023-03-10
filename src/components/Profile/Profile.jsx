import PropTypes from 'prop-types';
import styles from './profile.module.css';
import ProfileList from './ProfileList/ProfileList';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          className={styles.avatar}
          src={avatar}
          alt="User avatar"
          height="250"
          width="250"
        />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <ProfileList followers={followers} views={views} likes={likes} />
      </ul>
    </div>
  );
};

export default Profile;

Profile.defualtProps = {
  stats: [],
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
