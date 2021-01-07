import React from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import './App.scss'
import SigninPage from './pages/SigninPage'
import HomePage from './pages/HomePage'
import VideoPage from './pages/VideoPage'

axios.defaults.baseURL = 'http://localhost:8080'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/videos/:id" component={VideoPage} />
        <Route path="/user/signin" component={SigninPage} />
      </Switch>
    </div>
  )
}

export default App
