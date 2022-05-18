import PropTypes from 'prop-types'

import s from './friendListItem.module.css'


const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <li className={s.item}>
      <span className={isOnline ? `${s.status}` : `${s.status} ${s.online}`}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  )
}

export default FriendListItem

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}