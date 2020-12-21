
import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Videos.scss'

import VideosElement from './VideosElement'

function Videos({ videos }) {
  return (
    <>
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

export default Videos