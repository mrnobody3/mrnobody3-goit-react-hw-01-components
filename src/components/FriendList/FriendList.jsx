import PropTypes from 'prop-types'

import FriendListItem from "./FriendListItem";

import s from './friendList.module.css'



const FriendList = ({friends}) => {
  const elements = friends.map(({ id, ...props }) => {
    return <FriendListItem key={id} {...props} />
  })
  return (
    <ul className={s.list}>
      {elements}
    </ul>)
}

export default FriendList 

FriendList.defaultProps = {
  friends: []
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    }))
}