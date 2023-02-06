import PropTypes from 'prop-types';
import styles from './transactionHistory.module.css';
import TransactionElement from './TransactionElement/TransactionElement';

const TransactionHistory = ({ items }) => {
  const elements = items.map(item => {
    return (
      <TransactionElement
        key={item.id}
        type={item.type}
        amount={item.amount}
        currency={item.currency}
      />
    );
  });
  return (
    <>
      <table className={styles.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>{elements}</tbody>
      </table>
      /{' '}
    </>
  );
};

export default TransactionHistory;

TransactionHistory.defaultProps = {
  transactions: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
