import styles from './friendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({friends}) => {
  const elements = friends.map(friend => {
    return (
      <li className="item" key={friend.id}>
        <span className="status">{friend.isOnline}</span>
        <img
          className="avatar"
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p clasNames={styles.name}>{friend.name}</p>
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
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
