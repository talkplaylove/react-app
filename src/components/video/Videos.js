
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Videos.scss'

function Videos({ videos }) {
  return (
    <>
      <Container fluid>
        <Row>
          {
            videos.map((video, index) => {
              return (
                <Col key={index} className="video-col" xs={12} sm={6} lg={3}>
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

function VideosElement({ video }) {
  return (
    <div className="video-element">
      <div className="thumbnail">
        <img alt="" src={video.thumbnail} />
      </div>
      <div className="info">
        <h5 className="title">{video.title}</h5>
        <p>좋아요 {video.likes}개 • {video.displayedAt}</p>
      </div>
    </div>
  )
}

export default Videos