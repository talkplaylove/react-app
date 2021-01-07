import { Button } from "react-bootstrap"
import HomeNav from "../components/home/HomeNav"
import { useAuth } from "../context/AuthContext"

function SigninPage() {
  const { setAccessToken } = useAuth()
  
  function signin() {
    setAccessToken('abc')
  }
  function signout() {
    setAccessToken(null)
  }

  return (
    <>
      <HomeNav />
      <Button onClick={signin}>로그인</Button>
      <Button onClick={signout}>로그아웃</Button>
    </>
  )
}

export default SigninPage