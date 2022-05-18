import PropTypes from 'prop-types';

import s from './statisticsItem.module.css'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const StatisticItem = ({ label, percentage}) => {
  return (
    <li className={s.item} style={
  {backgroundColor: `${getRandomHexColor()}`}

    } >
      <span className={s.label}> {label}</span>
      <span className={s.percentage}> {percentage}%</span>
    </li>
  )

};

export default StatisticItem

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}