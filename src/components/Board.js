import React from 'react'
import PropTypes from 'prop-types'

function Board({ id, title, userId, userName }) {
  return <h3>{title}</h3>
}

Board.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired
}

export default Board