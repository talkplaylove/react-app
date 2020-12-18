import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './HomePage.scss'

import HomeAd from '../components/home/HomeAd'
import VideosElement from '../components/video/VideosElement'

function HomePage() {
  let [videos, setVideos] = useState([])
  useEffect(nextVideos, [])

  function nextVideos() {
    axios.get(`${process.env.REACT_APP_API_URI}/videos`)
      .then(result => {
        if (result.status === 200) {
          let allVideos = [...videos, ...result.data]
          setVideos(allVideos)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <HomeAd />

      <Container fluid>
        <Row>
          {
            videos.map((video, index) => {
              return (
                <Col key={index} className="home-video" xs={12} sm={6} lg={3}>
                  <Link to={`/videos/${video._id}`}>
                    <VideosElement video={video} />
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