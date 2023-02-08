import PropTypes from 'prop-types';
import styles from './statistics.module.css';
import ListItem from './ListItem/ListItem';

const Statistics = ({ title, stats }) => {
  const elements = stats.map(({id, label, percentage}) => (
    <ListItem key={id} label={label} percentage={percentage} />
  ));

  return (
    <>
      <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.list}>{elements}</ul>
      </section>
    </>
  );
};

export default Statistics;

Statistics.defaultProps = {
  data: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
