import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'

function VideoPage() {
  let { id } = useParams()
  let history = useHistory()
  let [video, setVideo] = useState({})
  useEffect(() => {
    axios.get(`http://localhost:8080/videos/${id}`)
      .then(result => {
        console.log(result.status)
        if (result.status === 200) {
          setVideo(result.data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <>
      <video controls>
        <source src="http://localhost:8080/vod/christmas.mp4" type="video/mp4"></source>
      </video>
      <Button variant="danger" onClick={() => history.goBack()}>뒤로가기</Button>
      {JSON.stringify(video)}
    </>
  )
}

export default VideoPage