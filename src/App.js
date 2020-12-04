import React, { useState } from 'react'
import './App.css'

function App() {
  let [boards, setBoards] = useState([{
    title: '남자 코트 추천',
    content: '내용1',
    createdAt: '2월 17일 발행',
    likeCount: 0
  }, {
    title: '강남 우동맛집',
    content: '내용2',
    createdAt: '2월 18일 발행',
    likeCount: 0
  }, {
    title: '파이썬독학',
    content: '내용3',
    createdAt: '2월 19일 발행',
    likeCount: 0
  }])
  let [modal, setModal] = useState(false)
  let [clickedBoard, setClickedBoard] = useState({})

  function clickBoard(index) {
    setClickedBoard(boards[index])
    if (!modal)
      setModal(true)
  }

  function likeBoard(index) {
    var newBoards = [...boards] // deep copy
    newBoards[index].likeCount++
    setBoards(newBoards)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>나도 뭐할지 모르겠음</div>
      </div>
      {
        boards.map((board, index) => {
          return <div className="list" onClick={() => { clickBoard(index) }}>
            <h4>{board.title} <span onClick={() => { likeBoard(index) }}>👍</span> {board.likeCount} </h4>
            <p>{board.createdAt}</p>
            <hr />
          </div>
        })
      }
      
      {
        modal === true
          ? <Modal board={clickedBoard} /> // child component
          : null
      }
    </div>
  )
}

function Modal(props) {
  let board = props.board
  return (
    <div className="modal">
      <h2>{board.title}</h2>
      <p>{board.createdAt}</p>
      <p>{board.content}</p>
      <p>{board.likeCount}</p>
    </div>
  )
}

export default App
