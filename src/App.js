import React from 'react'
import axios from 'axios'
import Board from './components/Board'

class App extends React.Component {
  state = {
    boards: []
  }
  getBoards = async () => {
    const res = await axios.get(`http://localhost:8080/boards`)
    this.setState({ boards: res.data })
  }
  componentDidMount() {
    this.getBoards()
  }
  render() {
    const { boards } = this.state
    return <div>
      {boards.map(board => {
        return <Board key={board.id} id={board.id} title={board.title} createdName={board.createdName} createdAt={board.createdAt} />
      })}
    </div>
  }
}

export default App;
