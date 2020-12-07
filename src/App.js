import React, { useState } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Jumbotron, Card, Container, Row, Col } from 'react-bootstrap'
import './App.css'
import Data from './data.js'

function App() {
  let [boards, setBoards] = useState(Data)

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>

      <Boards boards={boards} />
    </div>
  )
}

function Boards(props) {
  return <Container fluid>
    <Row md={4}>
      {
        props.boards.map((board, index) => {
          return <Board key={index} board={board} />
        })
      }
    </Row>
  </Container>
}

function Board(props) {
  let board = props.board
  return <Col xs={12} className="board">
    <Card>
      <Card.Body>
        <Card.Title>{board.title}</Card.Title>
        <Card.Text>{board.likeCount}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{board.createdAt}</small>
      </Card.Footer>
    </Card>
  </Col>
}

export default App
