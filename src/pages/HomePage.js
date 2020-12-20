import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './HomePage.scss'

import HomeAd from '../components/home/HomeAd'
import VideosElement from '../components/video/VideosElement'

function HomePage() {
  let [params, setParams] = useState({ page: 0, size: 8 })
  let [videos, setVideos] = useState([])
  useEffect(nextVideos, [])

  window.onscroll = (e) => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      nextVideos()
    }
  }

  function nextVideos() {
    axios.get(`${process.env.REACT_APP_API_URI}/videos`, {
      params: params
    }).then(result => {
      if (result.status === 200) {
        const nextVideos = result.data
        if (nextVideos.length > 0) {
          let allVideos = [...videos, ...nextVideos]
          setVideos(allVideos)
          setParams(...params.page++)
        }
      }
    }).catch(err => {
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