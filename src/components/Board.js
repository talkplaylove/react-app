import React from 'react'
import PropTypes from 'prop-types'
import './Board.css'

function Board({ id, title, createdName, createdAt }) {
  return <div className="boards">
    <h3>{title}</h3>
    <div>작성자: {createdName}</div>
    <div>작성일자: {createdAt}</div>
  </div>
}

Board.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  createdBy: PropTypes.number.isRequired,
  createAt: PropTypes.string.isRequired,
  createdName: PropTypes.string.isRequired
}

export default Board