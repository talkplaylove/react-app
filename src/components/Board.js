import React from 'react'
import PropTypes from 'prop-types'

function Board({ id, title, createdBy, createdName }) {
  return <h3>{title}</h3>
}

Board.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  createdBy: PropTypes.number.isRequired,
  createdName: PropTypes.string.isRequired
}

export default Board