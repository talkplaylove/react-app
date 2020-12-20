import React, { useState } from 'react'
import HomePage from './pages/HomePage'
import VideoPage from './pages/VideoPage'
import SearchPage from './pages/SearchPage'
import { Route, Switch } from 'react-router-dom'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './App.scss'

function App() {
  return (
    <div className="App">
      <AppMenu />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/videos/:id" component={VideoPage} />
        <Route path="/search" component={SearchPage} />
      </Switch>
    </div>
  )
}

function AppMenu() {
  const [keyword, setKeyword] = useState('')

  function inputKeyword(e) {
    setKeyword(e.target.value)
  }

  return (
    <Navbar fixed='top' sticky='top' bg="light">
      <Navbar.Brand><Link className="logo" to="/">YouTube</Link></Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={inputKeyword}/>
          <Link to={`/search?keyword=${keyword}`}><Button variant="outline-success">검색</Button></Link>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default App
