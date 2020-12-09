import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './HomePage.scss'

import HomeMenu from '../components/home/HomeMenu'
import HomeBanner from '../components/home/HomeBanner'
import Video from '../components/video/Video'

import data from '../datas/videos.json'

function HomePage() {
  let [pageable, setPageable] = useState({page: 0, size: 12})
  let [videos, setVideos] = useState(data)
  useEffect(() => {

  }, [])

  return (
    <>
      <HomeMenu />
      <HomeBanner />

      <Container fluid>
        <Row>
          {
            videos.map((video, index) => {
              return (
                <Col key={index} className="video-col" xs={12} sm={6} md={6} lg={4} xl={3}>
                  <Link to={`/videos/${video.id}`}>
                    <Video video={video} />
                  </Link>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </>
  )
}

export default HomePage