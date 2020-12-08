import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'

import './VideoContainer.css'
import data from '../../datas/videos.json'

function VideoContainer() {
  let [videos, setVideos] = useState(data)

  return (
    <Container fluid>
      <Row>
        {
          videos.map((video, index) => {
            return <VideoCard key={index} video={video} />
          })
        }
      </Row>
    </Container>
  )
}

export default VideoContainer