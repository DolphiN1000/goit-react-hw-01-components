import PropTypes from 'prop-types';
import styles from './profileList.module.css';

const ProfileList = ({ followers, views, likes }) => {
  return (
    <>
      <li>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{followers}</span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{views}</span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{likes}</span>
      </li>
    </>
  );
};

export default ProfileList;

ProfileList.defualtProps = {
  stats: [],
};

ProfileList.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
