import PropTypes from 'prop-types';

import styles from './listItem.module.css';

const ListItem = ({ label, percentage }) => {
  return (
    <li
      className={styles.item}
      style={{
        backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
          16
        )}`,
      }}
    >
      <span
        className={styles.label}
        style={{
          color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        }}
      >
        {label}
      </span>
      <span className={styles.percentage}>{percentage}</span>
    </li>
  );
};

export default ListItem;

ListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
