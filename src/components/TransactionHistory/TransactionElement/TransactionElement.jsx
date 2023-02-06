import PropTypes from 'prop-types';

// import styles from './transactionHistory.module.css';

const TransactionElement = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionElement;

TransactionElement.defaultProps = {
  transactions: [],
};

TransactionElement.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
