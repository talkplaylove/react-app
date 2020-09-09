import React from 'react'
import PropTypes from 'prop-types'
import './Board.css'

function Board({ id, title, createdBy, createdName }) {
  return <div className="boards">
    <h3>{title}</h3>
    <h5>작성자: {createdName}</h5>
  </div>
}

Board.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  createdBy: PropTypes.number.isRequired,
  createdName: PropTypes.string.isRequired
}

export default Board