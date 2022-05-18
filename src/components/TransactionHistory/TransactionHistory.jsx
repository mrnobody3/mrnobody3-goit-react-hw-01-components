import PropTypes from 'prop-types'

import s from './transactionHistory.module.css'


const TransactionHistory = ({items}) => {
  const elements = items.map(({ id, type, amount, currency }) => {
    return (
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    )
  } )
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {elements}
      </tbody>
    </table>
  )
}

export default TransactionHistory

TransactionHistory.defaultProps = {
  items: [],
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })).isRequired
}