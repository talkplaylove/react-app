import AppMenu from './components/AppMenu'
import HomePage from './pages/HomePage'
import VideoPage from './pages/VideoPage'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <AppMenu />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/videos/:id" component={VideoPage} />
      </Switch>
    </div>
  )
}

export default App
