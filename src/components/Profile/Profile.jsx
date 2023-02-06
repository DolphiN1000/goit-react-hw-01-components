import PropTypes from 'prop-types';
import styles from './profile.module.css';
import ProfileList from './ProfileList/ProfileList';

const Profile = ({ username, tag, location, avatar, stats }) => {
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
        <ProfileList
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
        />
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
  stats: PropTypes.object.isRequired,
};
