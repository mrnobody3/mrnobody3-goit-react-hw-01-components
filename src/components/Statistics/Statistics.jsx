import PropTypes from 'prop-types'

import StatisticItem from './StatisticItem'

import s from './statistics.module.css'


const Statistics = ({ title, stats }) => {
  const newStat = stats.map(({id, ...props}) => {
    return (<StatisticItem key={id} {...props} />)
  })

  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.list}>
          {newStat}
      </ul>
    </section>
  )
}
export default Statistics

Statistics.defaultProps = {
  stats: [],
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
}