import { Link, useHistory } from "react-router-dom"
import { Nav, Navbar } from "react-bootstrap"
import { useAuth } from "../../context/AuthContext"

function VideoNav() {
  const history = useHistory()
  const { accessToken } = useAuth()
  
  function goBack() {
    history.goBack()
  }

  return (
    <Navbar className='video-nav' fixed='top' sticky='top' bg="light">
      <Navbar.Brand><span className="back" onClick={goBack}>Back</span></Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className='justify-content-end'>
        <Nav.Link className='user-btn' to='/user/signin' as={Link}>{accessToken == null ? '로그인' : '내정보'}</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default VideoNav