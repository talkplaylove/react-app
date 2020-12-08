import { Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'

function VideoPage() {
  let { id } = useParams()
  let history = useHistory()
  return (
    <>
      {id}
      <Button variant="danger" onClick={() => history.goBack()}>뒤로가기</Button>
    </>
  )
}

export default VideoPage