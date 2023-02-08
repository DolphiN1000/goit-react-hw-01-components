import styles from './friendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem'

const FriendList = ({ friends }) => {
  const elements = friends.map(({id, isOnline, avatar,name}) => {return (<FriendListItem key={id} isOnline={isOnline} avatar={avatar} name={name} />) 
  });
  return (<ul className={styles.friend_list}>{elements}</ul>);
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
