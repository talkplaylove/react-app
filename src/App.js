import HomePage from './pages/HomePage'
import VideoPage from './pages/VideoPage'
import { Route, Switch } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './App.scss'

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

function AppMenu() {
  return (
    <Navbar fixed='top' sticky='top' bg="light">
      <Navbar.Brand><Link className="logo" to="/">YouTube</Link></Navbar.Brand>
    </Navbar>
  )
}

export default App
