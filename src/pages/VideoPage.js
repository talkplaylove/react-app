import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './VideoPage.scss'

import VideoPlayer from '../components/video/VideoPlayer'
import { Container, Row, Col } from 'react-bootstrap'
import VideoNav from '../components/video/VideoNav'

function VideoPage() {
  let { id } = useParams()
  let [video, setVideo] = useState({})

  useEffect(() => {
    axios.get(`/videos/${id}`)
      .then(result => {
        if (result.status === 200) {
          setVideo(result.data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [id])

  return (
    <>
      <VideoNav />
      <Container fluid="md">
        <Row>
          <Col lg={9}>
            <VideoPlayer video={video} />
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
    </>
  )
}

export default VideoPage