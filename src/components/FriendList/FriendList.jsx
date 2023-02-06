import styles from './friendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  const elements = friends.map(friend => {
    return (
      <li className={styles.item} key={friend.id}>
        <span
          className={friend.isOnline ? styles.status_on : styles.status_off}
        >
          {friend.isOnline}
        </span>
        <img
          className={styles.avatar}
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={styles.name}>{friend.name}</p>
      </li>
    );
  });
  return (
    <>
      <ul className={styles.friend_list}>{elements}</ul>
    </>
  );
};

export default FriendList;

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
