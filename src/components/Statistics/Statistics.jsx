import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({ title, stats }) => {
  const elements = stats.map(stat => {
    return (
      <li
        class={styles.item}
        style={{
          backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
            16
          )}`,
        }}
        key={stat.id}
      >
        <span
          class={styles.label}
          style={{
            color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          }}
        >
          {stat.label}
        </span>
        <span class={styles.percentage}>{stat.percentage}</span>
      </li>
    );
  });

  return (
    <>
      <section class={styles.statistics}>
        {title && <h2 class={styles.title}>{title}</h2>}
        <ul class={styles.list}>{elements}</ul>
      </section>
    </>
  );
};

export default Statistics;

Statistics.defaultProps = {
  data: [],
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
