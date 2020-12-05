import React, { useState } from 'react'
import './App.css'

function App() {
  let [boards, setBoards] = useState([{
    title: '남자 코트 추천',
    createdAt: '2월 17일 발행',
    likeCount: 0
  }, {
    title: '강남 우동맛집',
    createdAt: '2월 18일 발행',
    likeCount: 0
  }, {
    title: '파이썬독학',
    createdAt: '2월 19일 발행',
    likeCount: 0
  }])
  let [clickedBoard, setClickedBoard] = useState({})
  let [modal, setModal] = useState(false)

  function clickBoard(index) {
    setClickedBoard(boards[index])
    if (!modal)
      setModal(true)
  }

  function likeBoard(index) {
    var newBoards = [...boards]
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
          return <div className="list" key={index} onClick={() => clickBoard(index)}>
            <h4>{board.title} <span onClick={() => likeBoard(index)}>👍</span> {board.likeCount} </h4>
            <p>{board.createdAt}</p>
            <hr />
          </div>
        })
      }
      <Publish boards={boards} setBoards={setBoards} />
      {
        modal === true
          ? <Modal board={clickedBoard} /> // child component
          : null
      }
    </div>
  )
}

function Publish(props) {
  let [title, setTitle] = useState('')
  
  function inputTitle(chars) {
    setTitle(chars)
  }

  function createBoard() {
    if (!title) {
      return;
    }
    var newBoards = [...props.boards]
    newBoards.unshift({
      title: title,
      createdAt: '2월 20일 발행',
      likeCount: 0
    })
    props.setBoards(newBoards)
  }

  return <div className="publish">
    <input onChange={(e) => inputTitle(e.target.value)} />
    <button onClick={() => createBoard()}>저장</button>
  </div>
}

function Modal(props) {
  let board = props.board
  return (
    <div className="modal">
      <h2>{board.title}</h2>
      <p>{board.createdAt}</p>
      <p>{board.likeCount}</p>
    </div>
  )
}

export default App
