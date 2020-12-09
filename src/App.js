import HomePage from './pages/HomePage'
import VideoPage from './pages/VideoPage'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/videos/:id">
          <VideoPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App
